import React from 'react';

import './styles.css';
import './../../global.css';
import { CardType } from '../Card';
/* 
Tecnologia avançada de reconhecimento facial de animais: sua plataforma utiliza tecnologia de reconhecimento facial de ponta para ajudar a identificar animais perdidos com precisão e rapidez. Isso significa que os tutores podem ter uma chance maior de encontrar seus animais de estimação rapidamente.

Rede abrangente de abrigos e organizações de resgate de animais: sua plataforma tem parceria com uma ampla rede de abrigos e organizações de resgate de animais em todo o país, o que significa que há uma maior chance de encontrar animais perdidos, mesmo quando eles se movem para fora de sua área imediata.

Interface amigável e fácil de usar: a plataforma é projetada para ser fácil de usar e amigável, com recursos intuitivos que permitem aos usuários inserir informações básicas sobre seus animais de estimação perdidos e pesquisar facilmente por animais encontrados.

Suporte ao cliente e serviços adicionais: sua plataforma oferece suporte ao cliente 24 horas por dia, sete dias por semana, para ajudar os tutores a navegar no processo de encontrar seus animais de estimação perdidos. Além disso, a plataforma pode oferecer serviços adicionais, como a impressão de cartazes personalizados para ajudar na busca.

Comunidade engajada de amantes de animais: a plataforma tem uma comunidade ativa e engajada de amantes de animais que podem fornecer conselhos e apoio durante a busca por animais de estimação perdidos.


Recursos de alerta de animais perdidos: sua plataforma oferece recursos de alerta de animais perdidos, o que significa que os usuários podem receber notificações imediatas quando um animal perdido correspondente à sua descrição é relatado na área. Isso pode ajudar a acelerar o processo de reunião entre tutores e animais perdidos.

Parcerias com veterinários e clínicas de animais: sua plataforma tem parceria com veterinários e clínicas de animais locais para fornecer serviços adicionais aos usuários, como exames gratuitos de microchip e cuidados de saúde para animais encontrados que precisam de tratamento médico antes de serem reunidos com seus tutores. Isso pode ser uma grande vantagem para tutores que estão lutando para pagar as despesas médicas do seu animal de estimação perdido.
*/

export function TopicCard({title, content, image}:CardType){
    return(
        <div className="topic-box">
            <img src={image?.url} alt={image?.alt} />
            <div className="text">
                <h3 className="">{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}