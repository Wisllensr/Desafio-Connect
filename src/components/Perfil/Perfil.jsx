import styles from "./Perfil.module.scss"
import ImgPerfil from "../../assets/FotoPerfil.jpeg"

function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>

      <article>

        <img src={ImgPerfil} alt="Foto de perfil" />

        <div className={styles.cardInfo}>
          <h2>Wisllen Ramos</h2>
          <h3>Voluntário Ativo</h3>
          <p className={styles.paragrafoSobreMim}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>

          <address>
            <p>Rio de Janeiro, RJ</p>
            <p>wisllensr@gamil.com</p>
            <p>membro desde 2025</p>
          </address>

          <ul className={styles.listaInteresses}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>


        </div>



      </article>

    </section>
  )
}
export default Perfil