import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Inicio from "../Inicio/Inicio"
import AcoesDaConnect from "../AcoesDaConnect/AcoesDaConnect"
import QuemSomos from "../QuemSomos/QuemSomos"
import Perfil from "../Perfil/Perfil"

import Logo from "../../assets/logo.png"
import FotoPerfil from "../../assets/FotoPerfil.jpeg"

import styles from "./NavBar.module.scss"

function NavBar() {
    return (
        <BrowserRouter>

            <nav className={styles.navBar}>
                <Link to ="/">
                <img className={styles.imgLogo} src={Logo} alt="Logo" />
                </Link>

                <ul>
                    
                    <li> <Link to="/"> Início </Link></li>

                    <li> <Link to="/AcoesDaConnect">Ações da Connect </Link></li>

                    <li> <Link to="/QuemSomos"> Quem Somos </Link></li>

                </ul>
                <Link to="Perfil">

                <img className={styles.imgPerfil} src={FotoPerfil} alt="Foto do Perfil" />
                </Link>

            </nav>

            <Routes>

                <Route path="/" element={ <Inicio/>} />

                <Route path= "/AcoesDaConnect" element={ <AcoesDaConnect/>}/>

                <Route path="/QuemSomos"element={ <QuemSomos/>}/>

                <Route path="/Perfil"element={ <Perfil/>}/>

            </Routes>

        </BrowserRouter>
    )
}
export default NavBar