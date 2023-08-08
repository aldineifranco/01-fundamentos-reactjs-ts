import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";
import { PostType } from "./components/Post/Post";

import styles from "./App.module.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://avatars.githubusercontent.com/u/93042673?v=4",
      name: "Aldinei Franco",
      role: "Analista de Sistemas",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "content",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento é Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://avatars.githubusercontent.com/u/93042673?v=4",
      name: "Aldinei Franco 2",
      role: "Analista de Sistemas Jr.",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "content",
        content:
          "2 - Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento é Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
              key={post.id}
              post={post}
            />);
          })}
        </main>
      </div>
    </>
  );
}

export default App;
