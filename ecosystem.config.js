// PM2 cluster mode for true zero-downtime rolling reload.
// 2 instances share port 3002 via Node's cluster module socket sharing.
// `pm2 reload` cycles them one at a time → no deploy-window 5xx.
module.exports = {
  apps: [
    {
      name: 'sungene',
      script: '.next/standalone/server.js',
      args: '--port 3002',
      cwd: '/www/wwwroot/sungene.net',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      // Wait for new instance to listen on its port before killing old one.
      // standalone server.js calls .listen() and Next emits ready via stdout,
      // so we use listen_timeout (port-bind detection by PM2) instead of wait_ready.
      listen_timeout: 10000,
      kill_timeout: 5000,
      max_memory_restart: '900M',
      env: {
        NODE_ENV: 'production',
        PORT: '3002',
      },
      out_file: '/root/.pm2/logs/sungene-out.log',
      error_file: '/root/.pm2/logs/sungene-error.log',
      merge_logs: true,
      time: true,
    },
  ],
}
