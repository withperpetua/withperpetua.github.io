#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path'

console.log('🚀 Building for production...');

try {
  // Build the project
  execSync('npm run build', { stdio: 'inherit' });
  
  // Copy CNAME to dist folder for GitHub Pages
  if (fs.existsSync('CNAME')) {
    fs.copyFileSync('CNAME', 'dist/CNAME');
    console.log('✅ CNAME file copied to dist folder');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Production files are in the dist/ directory');
  console.log('🌐 Ready for deployment to GitHub Pages');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 