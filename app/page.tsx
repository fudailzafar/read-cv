import { getSortedPosts } from "@/lib/blog";
import ProfileView from "@/components/sections/ProfileView";

export default function Home() {
  const posts = getSortedPosts();

  return <ProfileView posts={posts} />;
}
