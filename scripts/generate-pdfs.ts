import path from 'path';
import fs from 'fs-extra';
import PDFDocument from 'pdfkit';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const PDFS_DIR = path.join(process.cwd(), 'public', 'pdfs');

async function convertImageToPdf(imagePath: string, pdfPath: string) {
  try {
    // 确保输出目录存在
    await fs.ensureDir(path.dirname(pdfPath));

    // 读取图片元数据
    const metadata = await sharp(imagePath).metadata();
    if (!metadata.width || !metadata.height) {
      throw new Error('Could not read image dimensions');
    }

    // 创建PDF文档
    const doc = new PDFDocument({
      size: 'A4',
      margin: 0,
      autoFirstPage: false
    });

    // 创建写入流
    const writeStream = fs.createWriteStream(pdfPath);
    doc.pipe(writeStream);

    // 添加新页面
    doc.addPage();

    // 计算图片在A4页面上的尺寸（保持比例）
    const pageWidth = 595.28;  // A4 宽度（点）
    const pageHeight = 841.89; // A4 高度（点）
    const margin = 40;         // 页边距（点）

    const imageRatio = metadata.width / metadata.height;
    const maxWidth = pageWidth - (margin * 2);
    const maxHeight = pageHeight - (margin * 2);
    const pageRatio = maxWidth / maxHeight;

    let finalWidth, finalHeight;
    if (imageRatio > pageRatio) {
      finalWidth = maxWidth;
      finalHeight = maxWidth / imageRatio;
    } else {
      finalHeight = maxHeight;
      finalWidth = maxHeight * imageRatio;
    }

    // 计算居中位置
    const x = (pageWidth - finalWidth) / 2;
    const y = (pageHeight - finalHeight) / 2;

    // 将图片添加到PDF
    doc.image(imagePath, x, y, {
      width: finalWidth,
      height: finalHeight
    });

    // 结束文档
    doc.end();

    // 等待写入完成
    await new Promise<void>((resolve, reject) => {
      writeStream.on('finish', () => resolve());
      writeStream.on('error', (err) => reject(err));
    });

    console.log(`✅ Generated PDF: ${pdfPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${imagePath}:`, error);
  }
}

async function processCategory(category: string) {
  const categoryImagesDir = path.join(IMAGES_DIR, category);
  const categoryPdfsDir = path.join(PDFS_DIR, category);

  try {
    // 确保目录存在
    await fs.ensureDir(categoryPdfsDir);

    // 读取目录中的所有文件
    const files = await fs.readdir(categoryImagesDir);

    // 过滤出图片文件
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    // 转换每个图片
    for (const file of imageFiles) {
      const imagePath = path.join(categoryImagesDir, file);
      const pdfPath = path.join(
        categoryPdfsDir,
        file.replace(/\.(jpg|jpeg|png)$/i, '.pdf')
      );

      await convertImageToPdf(imagePath, pdfPath);
    }

    console.log(`\n✨ Completed category: ${category}\n`);
  } catch (error) {
    console.error(`❌ Error processing category ${category}:`, error);
  }
}

async function main() {
  try {
    // 获取所有分类目录
    const categories = await fs.readdir(IMAGES_DIR);

    // 过滤掉非目录和隐藏文件
    const validCategories = (await Promise.all(
      categories.map(async category => {
        const stats = await fs.stat(path.join(IMAGES_DIR, category));
        return stats.isDirectory() && !category.startsWith('.') ? category : null;
      })
    )).filter((category): category is string => category !== null);

    console.log('\n🚀 Starting PDF generation...\n');
    console.log('📁 Categories found:', validCategories);
    console.log('------------------------\n');

    // 处理每个分类
    for (const category of validCategories) {
      await processCategory(category);
    }

    console.log('\n✅ PDF generation completed!\n');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

// 运行脚本
main(); 