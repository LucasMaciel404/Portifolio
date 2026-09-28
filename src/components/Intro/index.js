import {
	Container,
	Content,
	Eyebrow,
	Title,
	Highlight,
	Subtitle,
	Actions,
	PrimaryButton,
	SecondaryButton,
} from "./style";

function Intro() {
	return (
		<Container>
			<Content>
				<Eyebrow>DESENVOLVEDOR DE SOFTWARE</Eyebrow>

				<Title>
					Olá, meu nome é{" "}
					<Highlight>Lucas Maciel.</Highlight>
				</Title>

				<Subtitle>
					Desenvolvedor Full Stack apaixonado por criar
					aplicações modernas, funcionais e experiências
					digitais.
				</Subtitle>

				<Actions>
					<PrimaryButton href="#projetos">
						Ver projetos
					</PrimaryButton>

					<SecondaryButton href="#sobreMim">
						Sobre mim
					</SecondaryButton>
				</Actions>
			</Content>
		</Container>
	);
}

export default Intro;

