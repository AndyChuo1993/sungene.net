const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(process.cwd(), 'app');
const TARGET_FILES = new Set(['page.tsx', 'layout.tsx', 'template.tsx']);

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (TARGET_FILES.has(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function patchInlineZhEnObjects(source) {
  let changed = false;

  // 專補單行或同一行的 { zh: ..., en: ... }
  // 例如：
  // h1: { zh: '...', en: '...' }
  const regex = /{\s*zh:\s*([^{}]+?)\s*,\s*en:\s*([^{}]+?)\s*}/g;

  const result = source.replace(regex, (match, zhValue, enValue) => {
    if (/cn\s*:/.test(match)) {
      return match;
    }

    changed = true;
    return `{ cn: ${zhValue.trim()}, zh: ${zhValue.trim()}, en: ${enValue.trim()} }`;
  });

  return { result, changed };
}

function main() {
  const files = walk(ROOT_DIR);
  let changedCount = 0;

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    const { result, changed } = patchInlineZhEnObjects(original);

    if (changed && result !== original) {
      fs.writeFileSync(file, result, 'utf8');
      console.log(`Patched: ${path.relative(process.cwd(), file)}`);
      changedCount++;
    }
  }

  console.log(`Done. Changed ${changedCount} file(s).`);
}

main();