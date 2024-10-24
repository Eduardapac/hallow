import styles from './Sidebar.module.css';

import { PencilLine } from '@phosphor-icons/react/dist/ssr';

export function Sidebar(){
    return (
<aside className={styles.Sidebar}>
<img className={styles.cover} src="/src/assets/fundo.jpeg" alt="" />
<div className={styles.profile}>
<img className={styles.avatar} src="/src/assets/perfil.png" alt="" />





   
    <strong>Eduarda Pacola</strong>
   
    <span>
        @edupac
    </span>

    </div>
    <footer>
        <a href="#"> 
        <PencilLine size={20}/>
        Editar seu perfil
        </a>
    </footer>

</aside>
    );
}