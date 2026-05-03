import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export interface WorkMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
  client?: string;
  role?: string;
  tags?: string[];
  cover?: string;
}

export interface WorkProject {
  metadata: WorkMetadata;
  content: string;
}

const workDirectory = path.join(process.cwd(), 'content/work');

export function getAllWorkSlugs() {
  if (!fs.existsSync(workDirectory)) return [];
  const fileNames = fs.readdirSync(workDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

export function getSortedWork(): WorkMetadata[] {
  if (!fs.existsSync(workDirectory)) return [];
  
  const fileNames = fs.readdirSync(workDirectory);
  const allWorkData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(workDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);
      const metadata = matterResult.data as WorkMetadata;
      
      // Set slug based on filename
      metadata.slug = fileName.replace(/\.md$/, '');

      return metadata;
    });

  // Sort by date
  return allWorkData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getWorkBySlug(slug: string): Promise<WorkProject | null> {
  try {
    const fullPath = path.join(workDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const metadata = matterResult.data as WorkMetadata;
    metadata.slug = slug;

    const processedContent = await remark()
      .use(html, { sanitize: false })
      .use(gfm)
      .process(matterResult.content);
      
    const contentHtml = processedContent.toString();

    return {
      metadata,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}
