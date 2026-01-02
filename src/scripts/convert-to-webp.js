import sharp from "sharp";

const fs = require("fs");
const path = require("path");

const inputDir = "./public/images";
const outputDir = "./public/images/webp";

// create outputDir if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// convert all images in inputDir to webp
async function convertImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputName = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
      const outputPath = path.join(outputDir, outputName);

      try {
        await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

        console.log(`✅ Converti: ${file} -> ${outputName}`);

        // create mobile version of image
        const mobileOutputName = file.replace(
          /\.(jpg|jpeg|png)$/i,
          "-mobile.webp"
        );
        const mobileOutputPath = path.join(outputDir, mobileOutputName);

        await sharp(inputPath)
          .resize(800, 600, { fit: "inside" })
          .webp({ quality: 70 })
          .toFile(mobileOutputPath);

        console.log(`📱 Version mobile créée: ${mobileOutputName}`);
      } catch (error) {
        console.error(`❌ Erreur avec ${file}:`, error);
      }
    }
  }
}

convertImages();
