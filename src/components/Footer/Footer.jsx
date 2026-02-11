import Logo from "../../assets/logo.png"
import Whatsapp from "../../assets/whatsapp.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
<div className={styles.primeiraCaixa}>
      <img src={Logo} alt="" />

      <h2>Connect</h2>
</div>
      <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>

      <nav>

        <img src={Whatsapp} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />

      </nav>


    </footer>
  )
}
export default Footer