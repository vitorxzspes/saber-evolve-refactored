import Image from 'next/image';
import logo_main from '../../../../public/images/logo_saber-evolve.svg';
import styles from './page.module.css';

export function Header() {
    return (
        <header>
            <Image className={styles.imgLogo} src={logo_main} alt="Logo principal"/>
            <ul>
                <li>Projetos</li>
            </ul>
        </header>
    );
}