import { useState } from "react";
import Main from "./main";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <div className="div-header">
                <nav>
                    <img
                        className="logo-header"
                        src="images/Logo-Version-completa-sin-fondo-2-1.png"
                        alt="Logo Espacio Marcial"
                    />
                    <button className="btn-burguer" id="btn-burguer" onClick={toggleMenu}>
                        {menuOpen ? (
                            <img width="20" height="20" src="images/icons8-eliminar.svg" alt="cerrar menú" />
                        ) : (
                            <img width="20" height="20" src="images/verde_menu.svg" alt="abrir menú" />
                        )}
                    </button>
                    <ul className={`nav-list ${menuOpen ? 'active' : ''}`} id="nav-list">
                    <li><a href="inicio">
                            Inicio</a></li>
                        
                            <li><a href="#paraTodos">
                            Sobre Nosotros</a></li>
                        
                            <li><a href="#actividades">
                            Disciplinas</a></li>
                        
                            <li><a href="#lugar">
                            Instalaciones</a></li>
                        
                            <li><a href="#contacto">
                            Ubicación</a></li>
                        
                            <li><a href="#contacto">
                            Contacto</a></li>
                        
                    </ul>
                </nav>
                <div className="header-div-main">
                    <img
                        className="marker-img"
                        src="images/map-pin-svgrepo-com.svg"
                        alt="marker location"
                    />
                    <span className="city clash-light">Montevideo</span>
                    <h1 className="title-bold h1-header">Despierta el guerrero en tu interior</h1>
                    <h3 className="clash-light h3-header">Entrena con nosotros y alcanza tu máximo potencial</h3>
                    <button
                        onClick={() => window.open("https://wa.me/59899008018", "_blank")}
                        className="btn-header"
                    >
                        Quiero empezar ya!
                    </button>
                    <button
                        onClick={() => window.open("https://maps.app.goo.gl/WjweJLGvZcTXGQDp7", "_blank")}
                        className="btn-header-map"
                    >
                        Mostrar ubicación
                    </button>
                    <div className="img-contact-header">
                        <a href="https://www.instagram.com/espaciomarcial_uy/" target="_blank">
                            <img src="images/instagram-icon.png" alt="Logo Instagram" />
                        </a>
                        <a href="https://wa.me/59899008018">
                            <img src="images/whatsapp-icon-1.png" alt="Logo whatsapp" />
                        </a>
                        <a href="mailto:adgaribaldi@gmail.com">
                            <img src="images/email-icon.png" alt="Logo email" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
