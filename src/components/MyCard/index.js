import git from "./../svg/git.svg";

import {
	CardContainer,
	ImageContainer,
	ProjectImage,
	CardBody,
	CardTitle,
	Description,
	ButtonsContainer,
	ProjectButton,
	GitIcon,
} from "./style";

function MyCard({ img, name, description, github, vercel, featured = false }) {
	const hasWebsite = vercel && vercel !== "#";
	const hasGithub = github && github !== "#";

	return (
		<CardContainer $featured={featured} data-aos="fade-up">
			<ImageContainer $featured={featured}>
				<ProjectImage
					$featured={featured}
					src={img}
					alt={`Imagem do projeto ${name}`}
				/>
			</ImageContainer>

			<CardBody>
				<CardTitle>{name}</CardTitle>

				<Description>{description}</Description>

				<ButtonsContainer>
					<ProjectButton
						href={hasWebsite ? vercel : undefined}
						target={hasWebsite ? "_blank" : undefined}
						rel={hasWebsite ? "noreferrer" : undefined}
						className={!hasWebsite ? "disabled" : ""}>
						Visualizar
					</ProjectButton>

					<ProjectButton
						variant="github"
						href={hasGithub ? github : undefined}
						target={hasGithub ? "_blank" : undefined}
						rel={hasGithub ? "noreferrer" : undefined}
						className={!hasGithub ? "disabled" : ""}>
						<GitIcon src={git} alt="GitHub" />
						GitHub
					</ProjectButton>
				</ButtonsContainer>
			</CardBody>
		</CardContainer>
	);
}

export default MyCard;
