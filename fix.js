const fs = require('fs');
const files = [
  'src/lib/data/gifts.ts',
  'src/app/page.tsx',
  'src/app/occasions/page.tsx',
  'src/app/gift-guides/page.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let count = 0;
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?[^"'\`\s]+)?/g, (match) => {
    // Keep hero bg in page.tsx intact
    if (match.includes('1513201099705-a9746e1e201f')) return match;
    count++;
    return `https://picsum.photos/seed/gift${Math.floor(Math.random() * 1000)}/600/600`;
  });
  if (count > 0) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${count} images in ${file}`);
  }
});
