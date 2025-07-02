import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = process.cwd()
const srcImgDir = path.join(projectRoot, 'src/assets/img')
const publicImgDir = path.join(projectRoot, 'public/assets/img')

// Create public/img directory if it doesn't exist
if (!fs.existsSync(publicImgDir)) {
  fs.mkdirSync(publicImgDir, { recursive: true })
}

// Copy all images from src/assets/img to public/assets/img
const files = fs.readdirSync(srcImgDir)
files.forEach(file => {
  const srcPath = path.join(srcImgDir, file)
  const destPath = path.join(publicImgDir, file)
  
  // Check if source is a directory
  if (fs.statSync(srcPath).isDirectory()) {
    fs.cpSync(srcPath, destPath, { recursive: true })
    console.log(`Copied directory ${file} to public/assets/img`)
  } else {
    fs.copyFileSync(srcPath, destPath)
    console.log(`Copied file ${file} to public/assets/img`)
  }
})

console.log('All images copied successfully!') 