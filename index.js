const fs = require('fs');
const sharp = require('sharp');

const inputFolder = './input';
const outputFolder = './output';
const prefixoPersonalizado = '';

// Ensure the output folder exists
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
  
  // List all images in the input folder
  fs.readdir(inputFolder, (err, files) => {
    if (err) {
      console.error('Error reading input folder:', err);
      return;
    }
  
    // Iterate over each file in the input folder
    files.forEach((file) => {
      const inputPath = `${inputFolder}/${file}`;
      const outputFileName = `${prefixoPersonalizado}${file.replace(/\..+$/, '.webp')}`; // Nome do arquivo de saída com prefixo personalizado
        const outputPath = `${outputFolder}/${outputFileName}`;

  
      // Convert and compress the image to WebP with 80% quality (adjust as needed)
      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath, (err) => {
          if (err) {
            console.error(`Error converting ${file}:`, err);
          } else {
            console.log(`${file} successfully converted and compressed to WebP.`);
          }
        });
    });
  });

