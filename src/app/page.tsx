// IMPORTANDO COMPONENTS
import { Header } from "./Components/Header/page";
import { Footer } from "./Components/Footer/page";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Footer />
    </div>
  );
}