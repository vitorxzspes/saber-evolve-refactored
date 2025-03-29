import styles from './HairDay.module.css';
import Image from 'next/image';

import Print10 from '../../../../public/images/rocketseat/Screenshot_10.png';
import Print11 from '../../../../public/images/rocketseat/Screenshot_11.png';
import Print12 from '../../../../public/images/rocketseat/Screenshot_12.png';

export function HairDay() {
    return (
        <div className={styles.divRocketseatProject}>
            <h1>Hair Day</h1>
            <p>
                esse trabalhamos bastante o Front-End, com HTML, CSS e JavaScript, onde fizemos um site de um salão de beleza fictício, onde tem informações sobre o salão, fotos e um formulário de contato. Foi bem legal fazer, e aprendi bastante.
            </p>
            <Image className={styles.imgrocketseat} src={Print10} alt="Screenshot 10"/>
            <Image className={styles.imgrocketseat} src={Print11} alt="Screenshot 11"/>
            <Image className={styles.imgrocketseat} src={Print12} alt="Screenshot 12"/><br/>
            <button>
                <a href="https://github.com/vitukjkk/Hair-Day" target="_blank">🐈 Repositório GitHub</a>
            </button>
        </div>
    )
}