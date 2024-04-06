import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import {Sidebar} from "./components/Sidebar"
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/migasgg.png',
      name: 'Miguel Albert',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'github.com/migasgg'}
    ],
    publishAt: new Date('2024-03-22 22:07:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/kamranahmedse.png',
      name: 'Kamran Ahmed',
      role: 'I love building things 🧑‍💻'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'github.com/migasgg'}
    ],
    publishAt: new Date('2024-03-10 17:17:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/mdo.png',
      name: 'Mark Otto',
      role: 'Designer, developer, and advisor.'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'github.com/migasgg'}
    ],
    publishAt: new Date('2024-03-10 17:17:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>  
  );
}
