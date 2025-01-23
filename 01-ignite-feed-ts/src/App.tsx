import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Post, { PostType } from "./components/Post/Post";
import Sidebar from "./components/Sidebar/Sidebar";
import "./global.css";
import "./services/mirage";

export function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.posts);
        setLoadingPosts(false);
      });
  }, []);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {loadingPosts ? (
            <p className={styles.loading}>Carregando...</p>
          ) : (
            <>
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </>
          )}
        </main>
      </div>
    </>
  );
}
