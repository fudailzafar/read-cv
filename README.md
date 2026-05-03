# ReadCV Template

A highly minimal, production-ready, and fully customizable personal portfolio template.

![Preview](./public/demo.png)

## Description

This project provides a clean, editorial, digital CV layout inspired by modern design profiles. It serves as a beautiful, calm, and premium digital resume that puts content clarity and typography first. Everything is designed to be easily extensible and fully customizable through a single data file.

## Features

- **Single-file Content System**: Manage all your profile data, work experience, projects, and writing in one centralized configuration file.
- **Built with Next.js & React**: Leverages the Next.js App Router for optimal performance, server-rendering, and seamless routing.
- **Tailwind CSS Styling**: Utility-first CSS framework used exclusively to define layout, typography, and spacing.
- **Framer Motion**: Subtle, premium page transitions and interactive micro-animations.
- **Responsive Design**: Beautiful mobile layout that preserves structural integrity on smaller screens.
- **Clean UI System**: Follows a strict, harmonious design rhythm with a focus on generous vertical spacing.
- **Easy Customization**: Simple structure that developers of any level can easily pick up and modify.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | React Framework (App Router) |
| React | UI Library |
| TypeScript | Static Typing |
| Tailwind CSS | Styling & Utility Classes |
| Framer Motion | Animations & Transitions |

## Getting Started

Follow these steps to run the template locally:

```bash
git clone https://github.com/fudailzafar/read-cv.git
cd read-cv
pnpm install
pnpm dev
```

The server will start on `http://localhost:3000`.

## Project Structure

```text
.
├── app/                  # Next.js App Router layouts, pages, and global CSS
├── components/           # Reusable UI components and page sections
├── data/                 # Centralized content structure (siteContent.ts)
├── public/               # Static assets and images
└── next.config.mjs       # Next.js configuration
```

## Customization

You do not need to hunt through component files to update the site's content. All text, links, and portfolio items are stored centrally in the `/data/siteContent.ts` file. 

To edit your profile:
1. Open `data/siteContent.ts`.
2. Modify the strings, arrays, or objects directly to replace the placeholder data.
3. The UI will instantly reflect your changes.

To customize theme colors, navigate to `app/globals.css` and adjust the CSS variables under the root scope.

## Deployment

The simplest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically detect Next.js and deploy your project instantly without any additional configuration.

For a manual build, simply run `npm run build` followed by `npm start`.

## License

Licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.