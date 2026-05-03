import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export interface BlogPostMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags?: string[];
  cover?: string;
}

export interface BlogPost {
  metadata: BlogPostMetadata;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

export function getSortedPosts(): BlogPostMetadata[] {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      const metadata = matterResult.data as BlogPostMetadata;
      
      // Set slug based on filename
      metadata.slug = fileName.replace(/\.md$/, '');

      return metadata;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const metadata = matterResult.data as BlogPostMetadata;
    metadata.slug = slug;

    // Use remark to convert markdown into HTML string
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
