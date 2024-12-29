import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import { motion } from "framer-motion";
import styles from './privacidade.module.css';

export default function Privacidade() {
    return (
        <div>
            <Header />
            <motion.div
                className={styles.divPrivacidade}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Privacidade</h1>
                <p>Em breve...</p>
            </motion.div>
            <Footer />
        </div>
    );
};