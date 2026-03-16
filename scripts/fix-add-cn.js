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

function patchZhEnObjects(source) {
  let changed = false;

  const regex = /{\s*\n(\s*)zh:\s*([\s\S]*?),\s*\n\1en:\s*([\s\S]*?)\s*\n(\s*)}/g;

  const result = source.replace(regex, (match, indent, zhValue, enValue, closingIndent) => {
    if (/\n\s*cn:\s*/.test(match)) {
      return match;
    }

    changed = true;

    return `{
${indent}cn: ${zhValue},
${indent}zh: ${zhValue},
${indent}en: ${enValue}
${closingIndent}}`;
  });

  return { result, changed };
}

function main() {
  const files = walk(ROOT_DIR);
  let changedCount = 0;

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');

    if (!original.includes('zh:') || !original.includes('en:')) {
      continue;
    }

    const { result, changed } = patchZhEnObjects(original);

    if (changed && result !== original) {
      fs.writeFileSync(file, result, 'utf8');
      console.log(`Patched: ${path.relative(process.cwd(), file)}`);
      changedCount++;
    }
  }

  console.log(`Done. Changed ${changedCount} file(s).`);
}

main();