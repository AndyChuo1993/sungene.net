const http = require("http");
const crypto = require("crypto");
const { execFile } = require("child_process");

const PORT = 9000;
const SECRET = "sungene-deploy-2026";
const DEPLOY_SCRIPT = "/www/wwwroot/sungene.net/deploy.sh";

let deploying = false;

const server = http.createServer((req, res) => {
  // Health check
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", deploying }));
    return;
  }

  // Only accept POST to /webhook
  if (req.method !== "POST" || req.url !== "/webhook") {
    res.writeHead(404);
    res.end("Not Found");
    return;
  }

  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    // Verify GitHub signature
    const sig = req.headers["x-hub-signature-256"];
    if (sig) {
      const hmac = crypto.createHmac("sha256", SECRET).update(body).digest("hex");
      const expected = "sha256=" + hmac;
      if (sig !== expected) {
        console.log("[WEBHOOK] Invalid signature");
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }
    }

    // Check it is a push to main
    let payload;
    try { payload = JSON.parse(body); } catch (e) { payload = {}; }
    
    if (payload.ref && payload.ref !== "refs/heads/main") {
      console.log("[WEBHOOK] Ignoring push to", payload.ref);
      res.writeHead(200);
      res.end("Ignored (not main)");
      return;
    }

    // Prevent concurrent deploys
    if (deploying) {
      console.log("[WEBHOOK] Deploy already in progress, queued");
      res.writeHead(202);
      res.end("Deploy already running");
      return;
    }

    console.log("[WEBHOOK] Triggering deploy at", new Date().toISOString());
    deploying = true;
    res.writeHead(200);
    res.end("Deploy started");

    execFile("/bin/bash", [DEPLOY_SCRIPT], { timeout: 300000 }, (err, stdout, stderr) => {
      deploying = false;
      if (err) {
        console.error("[WEBHOOK] Deploy failed:", err.message);
        console.error(stderr);
      } else {
        console.log("[WEBHOOK] Deploy succeeded at", new Date().toISOString());
      }
    });
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("[WEBHOOK] Listening on 127.0.0.1:" + PORT);
});
