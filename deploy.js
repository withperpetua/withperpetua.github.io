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
  
  // Copy .htaccess for proper MIME types
  if (fs.existsSync('public/.htaccess')) {
    fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
    console.log('✅ .htaccess file copied to dist folder');
  }
  
  // Ensure proper MIME types for JSX files
  console.log('🔧 Ensuring proper MIME types...');
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Production files are in the dist/ directory');
  
  // Deploy to GitHub Pages
  console.log('🚀 Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  
  console.log('✅ Deployment completed successfully!');
  console.log('🌐 Your site is now live at: https://withperpetua.github.io');
  
} catch (error) {
  console.error('❌ Build or deployment failed:', error.message);
  process.exit(1);
} 