import prisma from "@/lib/prisma";
import styles from "./page.module.css";
import Posts from "./components/Posts/Posts";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <h1>Your Posts</h1>
      <Link className={styles.add_post} href='/components/add-post'>Add Post</Link>
      
      {posts.map((post) => {
        return(
          <Posts
            key={post.id}
            id = {post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        )
      })}

      <script src="https://kit.fontawesome.com/dd9628a5d9.js" crossOrigin="anonymous"></script>
    </main>
  );
}
