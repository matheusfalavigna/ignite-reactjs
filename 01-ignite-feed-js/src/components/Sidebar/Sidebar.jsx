import { PencilLine } from "phosphor-react";
import Avatar from "../Avatar/Avatar";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=50&w=500"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/60001410?v=4" />
        <strong>Matheus Falavigna</strong>
        <span>Desenvolvedor Full Stack</span>
      </div>

      <footer>
        <a>
          <PencilLine style={{ marginRight: "0.5rem" }} size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
