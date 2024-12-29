import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import { motion } from "framer-motion";
import styles from './rocketseat.module.css';

export default function Rocketseat() {
    return (
        <div>
            <Header/>
            <motion.div
                className={styles.divRocketseat}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>

                <h1>Rocketseat</h1>
            </motion.div>
            <Footer/>
        </div>
    );
}