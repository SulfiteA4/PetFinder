import React from 'react';
import './styles.css';
import '../../global.css';

export interface CardType {
        title: string;
        content:string;
        image?:{
            url: string;
            alt:string;
        };
}

interface CardProps{
    card: CardType
}

export default function Card({card}:CardProps){
    const {title, content, image} = card;
    return(
        <div className="container">
            <div className="box">
                <img src={image?.url} alt={image?.alt} />
                <div className="info">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>

            </div>

        </div>
    );
}