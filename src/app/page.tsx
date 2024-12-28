// IMPORTANDO COMPONENTS
import { Header } from "./Components/Header/page";
import { Footer } from "./Components/Footer/page";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Footer />
    </div>
  );
}