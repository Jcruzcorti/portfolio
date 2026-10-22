import { useState } from "react";
import Image from "next/image";
import PageLayOut from "../components/layout/PageLayOut";
import styles from "../styles/Home.module.css";
import Presentation from "../components/presentation/Presentation";
import Cv from "../components/cv/Cv";
import Link from "next/link";
import Portfolio from "../components/portfolio/Portfolio";
import Sobremi from "../components/sobremi/Sobremi";
import Contacto from "../components/contacto/Contacto";
import ButtonTheme from "../components/buttons/ButtonTheme";
import ButtonLinkHome from "../components/buttons/ButtonLinkHome";
import Footer from "../components/footer/Footer";

export default function Home() {
  const [colorTheme, setColorTheme] = useState(true);

  function changeBackgroundColor() {
    colorTheme ? setColorTheme(false) : setColorTheme(true);
  }

  return (
    <PageLayOut title="Juan Cruz Cortiñas | Full Stack Developer">
      <div className={colorTheme ? styles.container : styles.container2}>
        {/* Button Theme */}
        <div className={styles.divButton}>
          <ButtonTheme onClick={changeBackgroundColor} />
        </div>
        <div className={styles.divH1}></div>

        {/* Main Content */}
        <main className={styles.main}>
          <Presentation />
          <Cv />
          <Portfolio />
          <Sobremi />
          <Contacto />
        </main>

        {/* Button Link Home */}
        <div className={styles.ButtonLinkHome}>
          <Link href="/">
            <ButtonLinkHome />
          </Link>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </PageLayOut>
  );
}
