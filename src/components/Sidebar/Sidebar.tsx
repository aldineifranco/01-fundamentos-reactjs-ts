import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className={styles.cover}
        />
        <div className={styles.profile}>
          <Avatar
            src=
              "https://avatars.githubusercontent.com/u/93042673?v=4"
          />
          <strong>Aldinei Franco</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar Seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}