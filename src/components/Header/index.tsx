import React from 'react';
import './styles.css';
import '../../global.css';
import logoIMG from '../../assets/LogoTeste.svg';
import Button from '../Button/index';

function Header(){
    return(
        <>
            <div className="navbar">
                <a href="#">
                    <div className="logo">
                        <img src={logoIMG} alt="Pet Finder Logo" />
                        Pet Finder
                    </div>
                </a>
                <div className="nav-links">
                    <div className="link">
                        <a href="#">Procurar Pet</a>
                    </div>
                    <div className="link">
                        <a href="#">Procurar Tutor</a>
                    </div>
                    <div className="link">
                        <a href="#">Blog</a>
                    </div>
                    <div className="link">
                        <a href="#">Quem Somos</a>
                    </div>
                </div>
                <div className="entrar">
                    <Button content="Entrar" />
                </div>
            </div>
        </>
    );

}

export default Header;