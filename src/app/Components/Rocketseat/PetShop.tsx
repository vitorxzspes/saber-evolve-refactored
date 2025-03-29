import styles from './PetShop.module.css';
import Image from 'next/image';
import Print6 from '../../../../public/images/rocketseat/Screenshot_6.png';
import Print7 from '../../../../public/images/rocketseat/Screenshot_7.png';
import Print8 from '../../../../public/images/rocketseat/Screenshot_8.png';
import Print9 from '../../../../public/images/rocketseat/Screenshot_9.png';

export function petShopRocketseatProject() {
    return (
        <div className={styles.divRocketseatProject}>
            <h1>Agendamento de Pet Shop</h1>
            <p>
                esse foi um projeto que fiz para treinar um pouco mais de JavaScript, onde fiz um site que simula um agendamento de um pet shop, onde tem um formulário para o cliente preencher com os dados do pet, e um botão para agendar. Foi bem legal fazer, e aprendi bastante sobre manipulação de elementos no DOM. Também fiz um pouco de CSS para deixar o site mais bonito e responsivo.
            </p>
            <Image className={styles.imgrocketseat} src={Print6} alt="Screenshot 6"/>
            <Image className={styles.imgrocketseat} src={Print7} alt="Screenshot 7"/>
            <Image className={styles.imgrocketseat} src={Print8} alt="Screenshot 8"/>
            <Image className={styles.imgrocketseat} src={Print9} alt="Screenshot 9"/><br/>
            <button>
                <a href="https://github.com/vitukjkk/Agendamento-de-Pet-Shop" target="_blank">🐈 Repositório GitHub</a>
            </button>
        </div>
    )
}