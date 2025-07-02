import sharp from 'sharp';

export const optimizeImage = async (inputPath, outputPath, options = {}) => {
  const {
    width,
    height,
    quality = 80,
    format = 'webp'
  } = options;

  try {
    let pipeline = sharp(inputPath);

    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'cover',
        position: 'center'
      });
    }

    pipeline = pipeline[format]({ quality });

    await pipeline.toFile(outputPath);
    return true;
  } catch (error) {
    console.error('Image optimization failed:', error);
    return false;
  }
};

export const generateResponsiveImages = async (inputPath, outputDir, sizes) => {
  const results = [];
  
  for (const size of sizes) {
    const outputPath = `${outputDir}/image-${size.width}x${size.height}.webp`;
    const success = await optimizeImage(inputPath, outputPath, {
      width: size.width,
      height: size.height,
      quality: 80,
      format: 'webp'
    });
    
    if (success) {
      results.push({
        width: size.width,
        height: size.height,
        path: outputPath
      });
    }
  }
  
  return results;
}; 