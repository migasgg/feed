import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1707909820111-59a53de32e0a?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/migasgg.png"/>

        <strong>Miguel Albert</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20} weight="thin" /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
