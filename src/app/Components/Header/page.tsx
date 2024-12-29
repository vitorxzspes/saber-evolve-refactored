import Image from 'next/image';
import Link from 'next/link';

// IMPORTING ARCHIVES
import logo_main from '../../../../public/images/logo_saber-evolve.svg';
import styles from './page.module.css';

export function Header() {
    return (
        <header>
            <div className={styles.divHeaderLeft}> 
                <Image className={styles.imgLogo} src={logo_main} alt="Logo principal" priority/>
            </div>
            <div className={styles.divHeaderRight}>
                <ul className={styles.ulHeader}>
                    <li className={styles.liHeader}>Projetos</li>
                    <li className={styles.liHeader}>Downloads</li>
                    <li className={styles.liHeader}>Privacidade</li>
                    <Link href="sobre"><li className={styles.liHeader}>Sobre</li></Link>
                </ul>
            </div>
        </header>
    );
}