const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21',
    filename: 'therapy-room.webp',
    description: 'Professional therapy room setting'
  },
  {
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    filename: 'therapy-session.webp',
    description: 'One-on-one therapy session'
  },
  {
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
    filename: 'healing-space.webp',
    description: 'Healing and recovery space'
  },
  {
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21',
    filename: 'safe-space.webp',
    description: 'Safe and comfortable environment'
  },
  {
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21',
    filename: 'video-therapy.webp',
    description: 'Professional video therapy setup'
  },
  {
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21',
    filename: 'home-office.webp',
    description: 'Comfortable home office for online therapy'
  }
];

const outputDir = path.join(__dirname, '../src/assets/img');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Download each image
images.forEach(image => {
  const outputPath = path.join(outputDir, image.filename);
  
  https.get(image.url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(outputPath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${image.filename}`);
      });
    } else {
      console.error(`Failed to download ${image.filename}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${image.filename}:`, err.message);
  });
}); 