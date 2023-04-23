import React from 'react';
import { CardType } from '.';

import { SwiperSlide, SwiperProps } from 'swiper/react';

import Card from '.';
import Carrousel  from '../Carrousel';
import 'swiper/css';

// import { CardProps } from '.';

interface CardSliderProps {
    cards: CardType[];
}

export function CardSlider({cards}:CardSliderProps){
    if (cards.length <= 1) {
        return(
            <Card card={cards[0]} />

        );
    }
    const settings: SwiperProps ={
        spaceBetween: 50,
        slidesPerView: cards.length < 3? cards.length: 3,
        navigation: cards.length >=3,
        draggable: cards.length >=3,
        loop: cards.length >=3,
        pagination: {
            clickable: true,
            dynamicBullets: true,
        }

    }

    return( 
        <Carrousel settings={settings}>
            {cards.map((card)=>(
                <SwiperSlide key={card.title}>
                    <Card card={card}/>
                </SwiperSlide>
            ))}
        </Carrousel>
    );
}