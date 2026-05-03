import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogArticle from './pages/BlogArticle';
import WorkIndex from './pages/WorkIndex';
import ProjectCaseStudy from './pages/ProjectCaseStudy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'writing', Component: BlogIndex },
      { path: 'writing/:slug', Component: BlogArticle },
      { path: 'work', Component: WorkIndex },
      { path: 'work/:slug', Component: ProjectCaseStudy },
    ],
  },
]);
