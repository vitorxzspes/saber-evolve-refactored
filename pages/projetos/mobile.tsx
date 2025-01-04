import { Header } from '@/app/Components/Header/page';
import { Footer } from '@/app/Components/Footer/page';

import Image from 'next/image';

import TaskPilotMobile_01 from '../../public/images/mobile/first_project_taskpilot_01.jpg';
import TaskPilotMobile_02 from '../../public/images/mobile/first_project_taskpilot_02.jpg';
import TaskPilotMobile_03 from '../../public/images/mobile/first_project_taskpilot_03.jpg';

import { motion } from 'framer-motion';
import styles from './mobile.module.css';

export default function Mobile() {
    return (
        <div>
            <Header />
            <motion.div
                className={styles.divMobile}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1>Mobile</h1>
                <p>
                    esses são os projetos mobile que eu desenvolvi, estou aprendendo React Native e colocando em prática meus conhecimentos aqui. Outros projetos postarei em outras abas também, mas os mobile focarei aqui.
                </p>
                <div className={styles.divMobileProjects}>
                    <h2>TaskPilot - primeiro projeto mobile</h2>
                    <p>
                        é a versão do meu projeto pessoal TaskPilot porém pra mobile, na trilha de React Native da Rocketseat.
                    </p>
                    <div className={styles.divMobileProjectsImages}>
                        <Image src={TaskPilotMobile_01} alt="TaskPilot Mobile 01" className={styles.imgMobileProjectsImages}/>
                        <Image src={TaskPilotMobile_02} alt="TaskPilot Mobile 02" className={styles.imgMobileProjectsImages}/>
                        <Image src={TaskPilotMobile_03} alt="TaskPilot Mobile 03" className={styles.imgMobileProjectsImages}/>
                    </div>
                </div>
            </motion.div>
            <Footer />  
        </div>
    );
}