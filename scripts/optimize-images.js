const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ASSETS_DIR = path.join(__dirname, '../src/assets/img');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/img/optimized');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    quality: 85,
    progressive: true,
    compressionLevel: 9,
  },
  webp: {
    quality: 85,
    effort: 6,
  },
  avif: {
    quality: 85,
    effort: 6,
  },
};

// Responsive breakpoints
const BREAKPOINTS = [
  { width: 400, suffix: '-sm' },
  { width: 768, suffix: '-md' },
  { width: 1200, suffix: '-lg' },
  { width: 1920, suffix: '-xl' },
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize if width is specified
    if (options.width && metadata.width > options.width) {
      image.resize(options.width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }
    
    // Apply format-specific optimization
    if (outputPath.endsWith('.webp')) {
      await image.webp(OPTIMIZATION_SETTINGS.webp).toFile(outputPath);
    } else if (outputPath.endsWith('.avif')) {
      await image.avif(OPTIMIZATION_SETTINGS.avif).toFile(outputPath);
    } else if (outputPath.endsWith('.jpg') || outputPath.endsWith('.jpeg')) {
      await image.jpeg(OPTIMIZATION_SETTINGS.jpeg).toFile(outputPath);
    } else if (outputPath.endsWith('.png')) {
      await image.png(OPTIMIZATION_SETTINGS.png).toFile(outputPath);
    }
    
    console.log(`✅ Optimized: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function createResponsiveImages(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath);
  
  // Create WebP versions
  for (const breakpoint of BREAKPOINTS) {
    const outputPath = path.join(OUTPUT_DIR, `${filename}${breakpoint.suffix}.webp`);
    await optimizeImage(inputPath, outputPath, { width: breakpoint.width });
  }
  
  // Create AVIF versions
  for (const breakpoint of BREAKPOINTS) {
    const outputPath = path.join(OUTPUT_DIR, `${filename}${breakpoint.suffix}.avif`);
    await optimizeImage(inputPath, outputPath, { width: breakpoint.width });
  }
  
  // Create optimized original format
  const optimizedOriginal = path.join(OUTPUT_DIR, `${filename}-optimized${ext}`);
  await optimizeImage(inputPath, optimizedOriginal);
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  // Find all image files
  const imageFiles = glob.sync(path.join(ASSETS_DIR, '*.{jpg,jpeg,png,webp}'));
  
  if (imageFiles.length === 0) {
    console.log('No image files found in assets directory.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize:\n`);
  
  for (const imageFile of imageFiles) {
    console.log(`Processing: ${path.basename(imageFile)}`);
    await createResponsiveImages(imageFile);
    console.log('');
  }
  
  console.log('🎉 Image optimization complete!');
  console.log(`Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('\n📝 Next steps:');
  console.log('1. Review the optimized images in the output directory');
  console.log('2. Replace original images with optimized versions if satisfied');
  console.log('3. Update your StaticImage components to use the new optimized images');
}

main().catch(console.error); 