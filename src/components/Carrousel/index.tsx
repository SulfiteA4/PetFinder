import React from 'react';
import { ReactNode } from 'react';
import {Swiper, SwiperProps} from 'swiper/react';
import {Navigation, Pagination, A11y} from 'swiper';
import '../../global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

/* 
    passos basicos carrousel:
        Html:    
        -div pra envolver/controlar todas os itens do carrousel.
        -div pra controlar o aspecto inline dos itens.
        -div pra colocar as imagens.
        -por fim as imagens desejadas.
        -botoes para passar as imagens
        CSS:
        -estilizar da melhor forma possivel
        JS:
        -definir variveis para:
            -os controles
            -index do item ativo
            -array de itens do carrousel
            -tamanho max do carrousel, ou seja, quantidade de itens do carrousel.
            -add eventListeners no botoes de passar imagem
            -
*/

export interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

function Carrousel({settings, children}:SliderProps){
    return(
            <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
                {children}
            </Swiper>
    );
}

export default Carrousel;