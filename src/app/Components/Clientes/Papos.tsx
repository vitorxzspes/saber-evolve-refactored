import styles from './Papos.module.css';
import Image from 'next/image';
import headerPapos from '../../../../public/images/clientes/header.png';
import feedbackPapos from '../../../../public/images/clientes/feedback.png';

export function Papos() {
    return (
        <div className={styles.divClientesProjects}>
            <h1>🎥 Papos & Retratos</h1>
            <p>
                este é um projeto educacional do IFB, onde aplicamos todas as etapas de um projeto real, desde assinatura de contrato até elaboração de wireframe. Fizemos um site para um fotógrafo fictício, com páginas como portfólio, contato, sobre e blog.
            </p>

            <p>
                Foram divididas tasks para cada integrante do grupo divididas e alocadas em sprint, seguindo a metodologia SCRUM. Vou deixar algumas prints de algumas tasks que eu já fiz:
            </p>

            <Image className={styles.imgClients} src={headerPapos} alt="header papos"/>
            <Image className={styles.imgClients} src={feedbackPapos} alt="feedback papos"/>

            <button className={styles.buttonprojectsclients}>
                <a href="https://papos-e-retratos.vercel.app" target="_blank">
                    Clique aqui para acessar o site 🎥
                </a>
            </button>
        </div>
    )
}