// IMPORTANDO COMPONENTS
import { Header } from "../src/app/Components/Header/page";
import { Footer } from "../src/app/Components/Footer/page";

import Head from "next/head";
import styles from './home.module.css';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>saber evolve - Home</title>
        <link rel="icon" href="/icons/favicon.ico"/>
      </Head>      
      <Header />
      <motion.div
          className={styles.divHome}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>

        <div className={styles.divHomeShow}>
          <div className={styles.divHomeMission}>
            <h2>Missão</h2>
            <p>Desenvolver soluções tecnológicas que ajudem as pessoas a evoluirem.</p>
          </div>
          
          <div className={styles.divHomeVision}>
            <h2>Visão</h2>
            <p>Ser referência em inovação e qualidade no mercado de tecnologia.</p>
          </div>
          
          <div className={styles.divHomeValues}>
            <h2>Valores</h2>
            <p>Comprometimento, Ética, Inovação, Qualidade, Respeito.</p>
          </div>
        </div>

        <div className={styles.divHomePhrase}>
          <h2>
            frase que carrego comigo...
          </h2>
          <p className={styles.divHomePhraseIcon}>
            🧬
          </p>
          <span className={styles.divHomePhraseText}>
            "com conhecimento moldamos o presente, com paciência construímos o futuro, e com sabedoria colhemos os frutos de nossos sonhos."
          </span>
          <p className={styles.divHomePhraseAuthor}>
            por <strong>vitor ^^</strong>
          </p>
        </div>

        <hr/>

        <div className={styles.divHomeSkills}>
          <h2 className={styles.divHomeSkillsTitle}>
            minhas habilidades 😇 
          </h2>
          <div className={styles.divHomeWhatIDo}>
            <div className={styles.divHomeWhatIDoLeft}>
              <h2>
                o que eu faço?
              </h2>
              <p>
                sou desenvolvedor de software, apaixonado por tecnologia e inovação. Algumas das coisas que eu faço:
              </p>
            </div>
            <div className={styles.divHomeWhatIDoRight}>
              <ul className={styles.ulHomeWhatIDo}>
                <li>
                  sites
                </li>
                <li>
                  aplicativos mobile
                </li>
                <li>
                  sistemas
                </li>
                <li>
                  consultoria
                </li>
                <li>
                  APIs
                </li>
                <li>
                  automações
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divHomeHowIDo}>
            <div className={styles.divHomeHowIDoLeft}>

            </div>
            <div className={styles.divHomeHowIDoRight}>
              <h2>
                como eu faço?
              </h2>
              <p>
                com muita dedicação, estudo e trabalho duro. Com uma ajudinha dessas ferramentas:
              </p>
            </div>
          </div>
        </div>

      </motion.div>
      <Footer />
    </div>
  );
}