import React from 'react';
import Header from './components/Header/index';
import '../src/global.css';
import { Footer } from './components/Footer';
import { CardSlider } from './components/Card/cardSlider';
import { TopicCard } from './components/TopicCard';
// import techImg from './assets/TopicCardImg/tech.svg';
// import communityImg from './assets/TopicCardImg/community.svg';
// import wideImg from './assets/TopicCardImg/wideImg.svg';
// import phoneImg from './assets/TopicCardImg/phone.svg';
// import alertImg from './assets/TopicCardImg/alert.svg';
// import nurseImg from './assets/TopicCardImg/nurse.svg';

import Icone from './arquivoIcone';



import EnterImg from './assets/purpleEntrar.svg';
import CreateImg from './assets/create.svg';
import { CardType } from './components/Card';
import Button from './components/Button';


function App() {
	const pets = [

		{
			title: "Fred",
			content: "Achado no Parque proximo a casa da Gabi",
			image: {
				url: "https://s2.glbimg.com/oFAn5sd05nt39ZLCGNM_Ev5mbGY=/0x0:1920x1080/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/T/q/yUKVwnQoGbgdF97XGgqQ/bordercollie.png",
				alt: "Bordercollie branco e preto"
			}
		},
		{
			title: "Coxinha",
			content: "Coxinha aparece de repente na casa de Gabi",
			image: {
				url: "https://img.freepik.com/fotos-premium/grande-gato-de-rua-cinza-descansando-no-steet-ao-ar-livre-no-verao_127089-22157.jpg",
				alt: "Gato cinza"
			}
		},
		{
			title: "Mel",
			content: "Mel e encontrada debaixo da ponte ",
			image: {
				url: "https://www.chapeco.org/noticias/wp-content/uploads/2021/09/Aprovado-Projeto-de-Lei-que-preve-penalidades-para-agressores-de-animais-em-Chapeco-org-teddy.jpg",
				alt: "Shitzu Cachorro"
			}
		},
		{
			title: "Thor",
			content: "Thor é salvo por Gabi e retorna ao seu tutor",
			image: {
				url: "https://www.caesonline.com/wp-content/uploads/2020/07/Pastor-alemao.jpg",
				alt: "Pastor Alemão"
			}
		},
		{
			title: "Peterson Roberto",
			content: "Peterson é salvo por Samantha ao ser encontrado perto da janela da mesma",
			image: {
				url: "https://cdn.discordapp.com/attachments/635279203356377109/1098324543266902076/7B1F7443-0876-48FF-B8BC-A9131586732F.jpg",
				alt: "Gato Preto"
			}
		},
	]
	// const image1 = {
	// 	url: techImg,
	// 	alt: "icone de tecnologia"
	// }
	// const image2 = {
	// 	url: communityImg,
	// 	alt: "icone de Comunidade"
	// }
	// const image3 = {
	// 	url: wideImg,
	// 	alt: "icone de Rede"
	// }
	// const image4 = {
	// 	url: phoneImg,
	// 	alt: "icone de Telefone"
	// }
	// const image5 = {
	// 	url: alertImg,
	// 	alt: "icone de alerta"
	// }
	// const image6 = {
	// 	url: nurseImg,
	// 	alt: "icone de médico"
	// }


	return (
		<div className='teste'>

			<Header />
			<div className="main-content">

				<div className="box-title">
					<div className="separator">	<h1 className='title'>Encontre seu pet perdido</h1></div>
				</div>

				<div className='box-text'>
					<p>Bem-vindo ao Pet Finder! Sabemos o quanto é angustiante perder um animal de estimação, por isso estamos aqui para ajudá-lo a reunir-se com seu amado amigo o mais rápido possível.</p>
					<p> Nosso site usa uma tecnologia avançada para ajudar a identificar animais perdidos e combiná-los com seus tutores. Se você perdeu seu animal de estimação, basta preencher algumas informações básicas sobre ele e sua última localização conhecida. Nós iremos então trabalhar para identificar animais que foram encontrados na mesma área e que correspondem à sua descrição.</p>
				</div>
				<a href="#" className="create-button">
					<img src={CreateImg} alt="Crie seu anúncio" />
					Crie seu anúncio
				</a>
				<div className="box-title">
					<div className="separator"><h2 className='title'>Últimos pets encontrados</h2></div>
				</div>
				<CardSlider cards={pets} />
				<div className="box-title">
					<div className="separator"><h2 className='title'>Porque somos os melhores no que fazemos</h2></div>
				</div>
				<div className="topicCard-box">
					<TopicCard title='Tecnologia avançada de busca' content='A Plataforma utiliza tecnologia de reconhecimento facial de ponta para ajudar a identificar animais perdidos com precisão e rapidez.' image={Icone.image1} />
					<TopicCard title='Rede abrangente de abrigos e organizações de resgate de animais' content='A plataforma tem parceria com uma ampla rede de abrigos e organizações de resgate de animais em todo o país' image={Icone.image3} />
					<TopicCard title='Suporte ao cliente e serviços adicionais' content='Oferecemos suporte ao cliente 24 horas por dia, sete dias por semana, para ajudar os tutores a navegar no processo de encontrar seus animais de estimação perdidos' image={Icone.image4} />
					<TopicCard title='Comunidade engajada de amantes de animais' content=' O Pet Finder tem uma comunidade ativa e engajada de amantes de animais que podem fornecer conselhos e apoio durante a busca dos animais' image={Icone.image2} />
					<TopicCard title='Recursos de alerta de animais perdidos' content=' Oferecemos recursos de alerta de animais perdidos, o que significa que os usuários podem receber notificações imediatas quando um animal perdido correspondente à sua descrição é relatado na área' image={Icone.image5} />
					<TopicCard title='Parcerias com veterinários e clínicas de animais' content='O Pet Finder conta com parcerias com veterinários e clínicas de animais locais para fornecer serviços adicionais aos usuários' image={Icone.image6} />
				</div>
			</div>
			<Footer />

		</div>
	);
}

export default App;
