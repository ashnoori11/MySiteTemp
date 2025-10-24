const fs = require('fs');
const path = require('path');

function fixImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix import statements with version numbers
      content = content.replace(/from\s+["']([^"']+?)@\d+\.\d+\.\d+["']/g, 'from "$1"');
      content = content.replace(/import\s+["']([^"']+?)@\d+\.\d+\.\d+["']/g, 'import "$1"');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed imports in: ${filePath}`);
      }
    }
  });
}

// Start fixing from src directory
fixImports('src');
console.log('All imports fixed!');