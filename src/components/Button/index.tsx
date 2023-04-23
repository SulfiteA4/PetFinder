import React from 'react';
import enterImg from '../../assets/purpleEntrar.svg';//não achei uma forma de poder deixar o botão generico(personalizar as imagens do botão)
import './styles.css';
type ButtonProps = {
    content: string;
}
function Button({ content }:ButtonProps){
    return(
        <a href="#" className="button">
            <img src={enterImg} alt="Entrar" />
            {content}
        </a>
    );
}; 
export default Button;
