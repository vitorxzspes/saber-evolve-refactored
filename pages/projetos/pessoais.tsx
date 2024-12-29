import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import { motion } from "framer-motion";
import styles from './pessoais.module.css';

export default function Pessoais() {
    return (
        <div>
            <Header/>
            <motion.div
                className={styles.divPessoais}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Clientes</h1>
            </motion.div>
            <Footer/>
        </div>
    );
}