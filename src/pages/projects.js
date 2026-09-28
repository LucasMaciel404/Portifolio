import MyCard from "../components/MyCard";

import barberGuide from "../components/img/barber.png";
import modaLandingPage from "../components/img/moda.png";
import guessNumber from "../components/img/acerte_o_numero.png";
import digitalMenu from "../components/img/cardapio02.png";
import digitalStore from "../components/img/store.png";
import souMais from "../components/img/soumais.png";
import leleacai from "../components/img/leleacai.png";
import millaConceitoPage from "../components/img/milla-conceito.png";

import {
	Container,
	Header,
	Title,
	Subtitle,
	Highlight,
	ProjectsGrid,
} from "./styles/projects";

function Projects() {
	return (
		<Container>
			<Header data-aos="fade-up">
				<span>MEU TRABALHO</span>

				<Title>
					Projetos que transformam
					<strong> ideias em aplicações.</strong>
				</Title>

				<Subtitle>
					Alguns dos projetos que desenvolvi, desde aplicações
					web até landing pages para negócios reais.
				</Subtitle>
			</Header>

			<Highlight data-aos="fade-up">
				<MyCard
					name="Cardápio Digital"
					img={digitalMenu}
					github="https://github.com/LucasMaciel404/cardapio-digital"
					vercel="http://cardapio-8ffd9.web.app/"
					description="Aplicação de cardápio digital responsivo com painel administrativo para gerenciamento de produtos, categorias, preços, disponibilidade e imagens. Desenvolvido para facilitar a atualização do cardápio de restaurantes, lanchonetes e cafeterias."
					featured={false}
				/>
			</Highlight>

			<ProjectsGrid>
				<MyCard
					name="Barber Guide"
					img={barberGuide}
					github="#"
					vercel="https://barber-guide.web.app/"
					description="Aplicação voltada para profissionais da barbearia, permitindo divulgar serviços, encontrar barbeiros e realizar agendamentos, além de recursos para gerenciamento de clientes."
				/>

				<MyCard
					name="Milla Conceito"
					img={millaConceitoPage}
					github="https://github.com/LucasMaciel404/Milla-conceito---landingpage"
					vercel="https://milla-conceito-landingpage.vercel.app/"
					description="Landing page comercial desenvolvida para apresentar a marca Milla Conceito, seus produtos e identidade visual em uma experiência responsiva."
				/>

				<MyCard
					name="Lelê Açaí & Gelato"
					img={leleacai}
					github="https://github.com/LucasMaciel404/lele-acai-gelato-landing-page"
					vercel="https://lele-acai-gelato-landing-page.vercel.app/"
					description="Landing page responsiva desenvolvida para uma loja de açaí e gelato, com foco na apresentação da marca, produtos e informações do estabelecimento."
				/>

				<MyCard
					name="Sou Mais"
					img={souMais}
					github="https://github.com/LucasMaciel404/Guia-Sou-Plus.git"
					vercel="https://guia-sou-plus.vercel.app/"
					description="Landing page desenvolvida para a Sou Energy com o objetivo de apresentar uma nova ferramenta de forma clara, organizada e responsiva."
				/>

				<MyCard
					name="Digital Store"
					img={digitalStore}
					github="https://github.com/LucasMaciel404/geracao-tec-store.git"
					vercel="https://geracao-tec-store.vercel.app/"
					description="Frontend de uma loja virtual com catálogo de produtos e navegação por categorias, desenvolvido com foco em responsividade e experiência de navegação."
				/>

				<MyCard
					name="Acerte o Número"
					img={guessNumber}
					github="https://github.com/LucasMaciel404/Acerte-o-numero.git"
					vercel="https://acerte-o-numero-iota.vercel.app/"
					description="Mini game interativo de adivinhação com entrada por áudio, desenvolvido para explorar reconhecimento de voz e interação com o usuário."
				/>

				<MyCard
					name="Moda Landing Page"
					img={modaLandingPage}
					github="https://github.com/LucasMaciel404/ladinpage-Moda.git"
					vercel="https://ladinpage-moda.vercel.app/"
					description="Landing page desenvolvida para explorar CSS, animações, transições e criação de elementos visuais interativos."
				/>
			</ProjectsGrid>
		</Container>
	);
}

export default Projects;
