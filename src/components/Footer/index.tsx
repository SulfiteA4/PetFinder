import React from 'react';
import './styles.css';
import '../../global.css';
import twitterLogo from '../../assets/FooterImg/TwitterLogo.svg';
import faceLogo from '../../assets/FooterImg/faceLogo.svg';
import instaLogo from '../../assets/FooterImg/intaLogo.svg';
import wppLogo from '../../assets/FooterImg/wppLogo.svg';
import phone from '../../assets/FooterImg/phone.svg';
import email from '../../assets/FooterImg/email.svg';
import logoIMG from '../../assets/LogoTeste.svg';

export function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="footer-box">
                    <h3 className="footer-title">Redes Sociais</h3>
                    <div className="linkF">
                        <a href="#">
                            <img src={instaLogo} />
                            Instagram
                        </a>
                    </div>
                    <div className="linkF">
                        <a href="#">
                            <img src={twitterLogo}  />
                            Twitter
                        </a>
                    </div>
                    <div className="linkF">
                        <a href="#">
                            <img src={faceLogo}  />
                            Facebook
                        </a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3 className="footer-title">Sitemap</h3>
                    <div className="linkF">
                        <a href="#">Procurar Pet</a>
                    </div>
                    <div className="linkF">
                        <a href="#">Procurar Tutor</a>
                    </div>
                    <div className="linkF">
                        <a href="#">Blog</a>
                    </div>
                    <div className="linkF">
                        <a href="#">Quem Somos</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3 className="footer-title">Fale Conosco</h3>
                    <div className="linkF">
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5514998574448">
                            <img src={wppLogo} />
                            Whatsapp
                        </a>
                    </div>
                    <div className="linkF">
                        <a href="#">
                            <img src={phone}  />
                            (61) 3441-4494
                        </a>
                    </div>
                    <div className="linkF">
                        <a href="mailto:lhungaro10@gmail.com">
                            <img src={email}  />
                            Email
                        </a>
                    </div>
                </div>
                <div className="footer-box">
                <a href="#">
                    <div className="logo">
                        <img src={logoIMG} alt="Pet Finder Logo" />
                        Pet Finder
                    </div>
                </a>
                </div>
            </div>
            <div className="rights">2023@PetFinder | Todos os direitos reservados  </div>
        </div>
    );
}
