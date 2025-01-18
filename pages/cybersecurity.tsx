import styles from "./cybersecurity.module.css";

import Header from "@/app/Components/Header/page"
import Footer from "@/app/Components/Footer/page"

export default function Cybersecurity() {
    return (
        <div className={styles.divCybersecurity}>
            <Header/>
            <h1>Cybersecurity</h1>
            <p>
                sim, eu também sou cybersecurity, fiz o curso na HackerX e foi muito enriquecedor. Pretendo revisar mais e praticar esses conceitos para aplicar no meu cotidiano e em projetos futuros. Também é bom para proteger meus dados e os de terceiros. Em tempos futuros irei estudar para conseguir certificações profissionais reconhecidas, mas isso será mais tarde.
            </p>
            <Footer/>
        </div>
    )
}