import styled from "styled-components";

import lucas from "../img/Lucas_maciel.jpg";
import Social from "./../Social";

const Container = styled.section`
	width: 100%;
	min-height: 85vh;
	padding: 80px 30px;

	display: flex;
	align-items: center;
	justify-content: center;

	box-sizing: border-box;

	color: #222;

	.content {
		width: 100%;
		max-width: 1200px;
	}

	.heading {
		margin-bottom: 60px;
		text-align: center;
	}

	.heading span {
		display: block;
		margin-bottom: 15px;

		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 3px;

		color: #666;
	}

	.heading h2 {
		margin: 0;

		font-size: clamp(2rem, 4vw, 3.5rem);
		line-height: 1.1;
		font-weight: 700;
		color: #222;
	}

	.info {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		align-items: center;
		gap: 80px;
	}

	.text {
		max-width: 650px;
	}

	.text p {
		margin: 0;

		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
	}

	.social {
		margin-top: 30px;
	}

	.photo {
		display: flex;
		justify-content: center;
	}

	.photo img {
		width: min(100%, 380px);
		aspect-ratio: 1;
		object-fit: cover;

		border-radius: 50%;

		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
	}

	@media (max-width: 900px) {
		.info {
			grid-template-columns: 1fr;
			gap: 50px;
		}

		.text {
			max-width: 100%;
			order: 2;
		}

		.photo {
			order: 1;
		}

		.photo img {
			width: 280px;
		}
	}

	@media (max-width: 600px) {
		padding: 60px 20px;

		.heading {
			margin-bottom: 40px;
		}

		.heading h2 {
			font-size: 2rem;
		}

		.text p {
			font-size: 1rem;
			line-height: 1.7;
		}

		.photo img {
			width: 220px;
		}
	}
`;

function Sobre() {
	return (
		<Container id="sobreMim">
			<div className="content">
				<div className="heading" data-aos="fade-down">
					<span>SOBRE MIM</span>

					<h2>Ok, mas quem é o Lucas?</h2>
				</div>

				<div className="info">
					<div className="text" data-aos="fade-right">
						<p>
							Olá, sou Lucas Maciel, desenvolvedor de software com experiência
							no desenvolvimento de aplicações web, APIs REST e integração entre
							sistemas.
							<br />
							<br />
							Tenho experiência com Java, Spring Boot, React, React Native e
							TypeScript, além de conhecimentos em PostgreSQL, MongoDB,
							autenticação, desenvolvimento de APIs e integração de serviços.
							<br />
							<br />
							Além da experiência profissional, também desenvolvo projetos
							próprios e soluções para negócios, aplicando essas tecnologias na
							construção de aplicações funcionais, responsivas e pensadas para
							resolver problemas reais. Gosto de transformar ideias em produtos
							digitais e estou sempre buscando aprimorar meus conhecimentos e
							explorar novas tecnologias.
						</p>

						<div className="social">
							<Social />
						</div>
					</div>

					<div className="photo" data-aos="fade-left">
						<img src={lucas} alt="Lucas Maciel" />
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Sobre;
