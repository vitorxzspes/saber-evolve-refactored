import styles from "./dados.module.css";

import Head from "next/head";
import Image from "next/image";

// COMPONENTS
import Header from "@/app/Components/Header/page"
import Footer from "@/app/Components/Footer/page"

import Sales from "@/app/Components/Dados/Sales";
import Weather from "@/app/Components/Dados/Weather";

import DataCampLogo from '../public/images/datacamp.png';

export default function Dados() {
    return (
        <div className={styles.divDados}>
            <Head>
                <title>saber evolve - Dados</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <Header/>
            <h1>Dados</h1>
            <div className={styles.divDadosHeader}>
                
                <div className={styles.divDadosHeaderLeft}>
                    <p>
                        Eu estudo pela <span style={{color: 'green', fontWeight: 'bold'}}>DataCamp</span> e aqui está alguns dos cursos que eu fiz:
                    </p>

                    <ul className={styles.ulDados}>
                        <li className={styles.liDados}>Engenheiro de dados em Python</li>
                        <li className={styles.liDados}>Analista de dados associado em SQL</li>
                        <li className={styles.liDados}>Analista de dados no Power BI</li>
                        <li className={styles.liDados}>Cientista de dados em R</li>
                    </ul>
                    <p>
                        foi muito enriquecedor o tempo que estudei lá, aprendi bastante sobre dados, análise, manipulação e etc. Eu também desenvolvi projetos práticos, que deixarei aqui em baixo:
                    </p>
                </div>
                <div className={styles.divDadosHeaderRight}>
                    <Image src={DataCampLogo} alt="Imagem da datacamp"/>
                </div>
            </div>

            <br/>
            <h1>Projetos</h1>
            <p>
                aqui são alguns projetos práticos que eu fiz durante minha classe
            </p>
            <Sales/>
            <Weather/>
            <Footer/>
        </div>
    )
}