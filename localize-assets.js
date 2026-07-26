const fs = require('fs');
const path = require('path');
const https = require('https');

const dirsToScan = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'app')
];
const assetsDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const urlRegex = /https:\/\/cdn\.prod\.website-files\.com\/[^"'\s]+/g;

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      return resolve(); // Already downloaded
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => {}); // Delete temp file
        console.error(`Failed to download ${url}: ${response.statusCode}`);
        resolve(); // Continue anyway
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${url}: ${err.message}`);
      resolve();
    });
  });
}

async function processFiles() {
  const allFiles = [];

  for (const dir of dirsToScan) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
      files.forEach(f => allFiles.push(path.join(dir, f)));
    }
  }

  for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf8');
    const matches = content.match(urlRegex);
    
    if (matches) {
      let modified = false;
      for (const url of [...new Set(matches)]) {
        // Handle URL encoded filenames
        let cleanUrl = url;
        // Sometimes Webflow CDN URLs end with a backslash if escaped incorrectly, though not likely here
        
        let filename = path.basename(new URL(cleanUrl).pathname);
        filename = decodeURIComponent(filename); // decode %20 etc for local filesystem
        
        const localPath = path.join(assetsDir, filename);
        
        console.log(`Downloading ${filename}...`);
        await downloadFile(cleanUrl, localPath);
        
        // Replace in content
        // Need to escape regex special chars in url for global replace
        const escapeRegex = (str) => str.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&');
        content = content.replace(new RegExp(escapeRegex(url), 'g'), `/assets/${encodeURIComponent(filename)}`);
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${path.basename(file)}`);
      }
    }
  }
  console.log('All assets localized successfully!');
}

processFiles().catch(console.error);
