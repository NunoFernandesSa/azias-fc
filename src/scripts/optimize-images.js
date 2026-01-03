import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Pour __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  try {
    const inputDir = "./public";
    const outputDir = "./public/images/optimized";

    console.log("🔄 Démarrage de l'optimisation des images...");

    // Crée le dossier de sortie
    await fs.mkdir(outputDir, { recursive: true });

    // Liste les fichiers
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    console.log(`📸 ${imageFiles.length} images trouvées`);

    // Traite chaque image
    for (const file of imageFiles) {
      try {
        const inputPath = path.join(inputDir, file);
        const name = path.parse(file).name;

        // Vérifie si le fichier existe
        const stats = await fs.stat(inputPath);
        if (!stats.isFile()) continue;

        console.log(
          `\n🔄 Traitement: ${file} (${Math.round(stats.size / 1024)} KB)`
        );

        // 1. Version WebP (principale)
        const webpPath = path.join(outputDir, `${name}.webp`);
        await sharp(inputPath)
          .webp({
            quality: 85,
            effort: 4,
          })
          .toFile(webpPath);

        const webpStats = await fs.stat(webpPath);
        console.log(
          `✅ ${name}.webp (${Math.round(webpStats.size / 1024)} KB)`
        );

        // 2. Version mobile WebP (seulement si > 500KB)
        if (stats.size > 500 * 1024) {
          const mobileWebpPath = path.join(outputDir, `${name}-mobile.webp`);
          await sharp(inputPath)
            .resize(800, null, {
              fit: "inside",
              withoutEnlargement: true,
            })
            .webp({
              quality: 75,
              effort: 3,
            })
            .toFile(mobileWebpPath);

          const mobileStats = await fs.stat(mobileWebpPath);
          console.log(
            `📱 ${name}-mobile.webp (${Math.round(mobileStats.size / 1024)} KB)`
          );
        }

        // 3. Version JPEG optimisée (fallback)
        const jpegPath = path.join(outputDir, `${name}.jpg`);
        await sharp(inputPath)
          .jpeg({
            quality: 90,
            mozjpeg: true,
          })
          .toFile(jpegPath);

        const jpegStats = await fs.stat(jpegPath);
        const reduction = Math.round((1 - jpegStats.size / stats.size) * 100);
        console.log(
          `🖼️  ${name}.jpg (${Math.round(
            jpegStats.size / 1024
          )} KB) -${reduction}%`
        );
      } catch (error) {
        console.error(`❌ Erreur avec ${file}:`, error.message);
      }
    }

    console.log("\n🎉 Optimisation terminée avec succès!");
    console.log(`📁 Images disponibles dans: ${path.resolve(outputDir)}`);
  } catch (error) {
    console.error("💥 Erreur critique:", error);
    process.exit(1);
  }
}

// Exécute la fonction
optimizeImages();
