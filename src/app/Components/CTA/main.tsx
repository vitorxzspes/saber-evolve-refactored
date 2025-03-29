import imgCTA from '/public/images/general/cta.png';
import Image from 'next/image';

import styles from './main.module.css';

export default function CTA() {
    return (
        <div className={styles.divCTA}>
            <h2>e aí, o que achou? 🧬</h2>
            <Image className={styles.imgCTA} src={imgCTA} alt="foto do call to action" rel="noreferrer"/>
            <p>
                Quer falar comigo sobre um projeto ou só bater um papo? me chama no WhatsApp clicando no botão abaixo!
            </p>
            <button>
                <a className={styles.aCTA} href="https://wa.me/5561994030749?text=Fala%2C%20Vitor%21%20Vim%20do%20saber%20evolve%2C%20tranquilo%3F" target="_blank" rel="noopener noreferrer">
                    Enviar mensagem
                </a>
            </button>
        </div>
    )
}