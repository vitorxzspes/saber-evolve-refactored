import { Header } from "@/app/Components/Header/page";
import { Footer } from "@/app/Components/Footer/page";

import { motion } from "framer-motion";
import styles from './downloads.module.css';

export default function Downloads() {
    return (
        <div>
            <Header />
            <motion.div
                className={styles.divDownloads}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}>
                <h1>Downloads</h1>
                <p>Em breve...</p>
            </motion.div>
            <Footer />
        </div>
    );
};