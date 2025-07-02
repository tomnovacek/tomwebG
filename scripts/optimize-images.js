import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const projectRoot = process.cwd();
const sourceDirs = [
  path.join(projectRoot, 'src/assets/img'),
  path.join(projectRoot, 'public/images'),
];
const outputDir = path.join(projectRoot, 'public/optimized-images');
const manifestPath = path.join(projectRoot, 'public/image-manifest.json');

const sizes = [
  { name: 'xs', width: 150 },
  { name: 'sm', width: 300 },
  { name: 'md', width: 400 },
  { name: 'lg', width: 800 },
  { name: 'xl', width: 1200 },
  { name: '2xl', width: 1600 }
];

async function optimizeImage(filePath, manifest) {
  const relativePath = path.relative(projectRoot, filePath);
  console.log(`\nProcessing image: ${relativePath}`);
  console.log('----------------------------------------');

  try {
    // Initialize manifest entry if it doesn't exist
    if (!manifest.images) {
      manifest.images = {};
    }
    
    if (!manifest.images[relativePath]) {
      manifest.images[relativePath] = {
        responsive: []
      };
    }

    for (const size of sizes) {
      console.log(`\nProcessing size ${size.name}:`);
      console.log(`- Target width: ${size.width}`);
      
      const fileName = path.basename(filePath, path.extname(filePath));
      const outputFileName = `${fileName}-${size.name}.webp`;
      const outputPath = path.join(outputDir, outputFileName);
      console.log(`- Output path: ${outputPath}`);

      try {
        console.log('- Processing image...');
        
        // Process the image using the working pattern
        let pipeline = sharp(filePath);
        pipeline = pipeline.resize(size.width, null, {
          fit: 'cover',
          position: 'center'
        });
        pipeline = pipeline.webp({ quality: 80 });
        await pipeline.toFile(outputPath);

        // Add to responsive array if not already present
        const existingSize = manifest.images[relativePath].responsive.find(
          r => r.width === size.width
        );
        
        if (!existingSize) {
          manifest.images[relativePath].responsive.push({
            width: size.width,
            path: `/optimized-images/${outputFileName}`
          });
        }

        console.log(`✓ Successfully processed size ${size.name}`);
      } catch (error) {
        console.error(`✗ Error processing size ${size.name} for ${relativePath}:`, {
          error: error.message,
          code: error.code,
          stack: error.stack
        });
      }
    }

    // Save manifest after each image is processed
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`\n✓ Successfully optimized ${relativePath}`);
    console.log('----------------------------------------');

  } catch (error) {
    console.error(`✗ Error processing ${relativePath}:`, {
      error: error.message,
      code: error.code,
      stack: error.stack
    });
  }
}

async function processImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Load existing manifest
    let manifest;
    try {
      const manifestContent = await fs.readFile(manifestPath, 'utf8');
      manifest = JSON.parse(manifestContent);
      console.log('Loaded existing manifest');
    } catch (error) {
      if (error.code === 'ENOENT') {
        // Create empty manifest if it doesn't exist
        manifest = { images: {} };
        await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
        console.log('Created new empty manifest');
      } else {
        console.error('Error loading manifest:', error);
        process.exit(1);
      }
    }

    // Find all images in all source directories
    let allFiles = [];
    for (const sourceDir of sourceDirs) {
      const files = await glob(path.join(sourceDir, '*.{jpg,jpeg,png,webp}'));
      allFiles = allFiles.concat(files);
    }
    console.log(`Found ${allFiles.length} images to optimize`);

    // Process each image
    for (const file of allFiles) {
      await optimizeImage(file, manifest);
    }

    console.log('\n✓ Image optimization complete!');
    console.log('========================================');

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

processImages(); 