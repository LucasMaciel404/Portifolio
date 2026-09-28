import styled from "styled-components";

export const CardContainer = styled.div`
	width: 18rem;
	margin: 20px;
	border-radius: 12px;
	overflow: hidden;
	background: #ffffff;

	display: flex;
	flex-direction: column;

	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: ${({ $featured }) => ($featured ? "350px" : "200px")};

	display: flex;
	align-items: center;
	justify-content: center;

	padding: ${({ $featured }) => ($featured ? "0" : "10px")};

	background: #f8f8f8;
`;

export const ProjectImage = styled.img`
	width: 100%;
	height: 100%;

	object-fit: ${({ $featured }) =>
		$featured ? "contain" : "cover"};
`;

export const CardBody = styled.div`
	padding: 20px;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	flex: 1;
`;

export const CardTitle = styled.h2`
	margin: 0 0 12px;

	font-size: 1.2rem;
	font-weight: 600;
	color: #222;
`;

export const Description = styled.p`
	height: 100px;
	margin: 0 0 20px;

	font-size: 0.9rem;
	line-height: 1.5;
	color: #666;

	overflow: hidden;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const ProjectButton = styled.a`
	flex: 1;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;

	padding: 8px 10px;

	border-radius: 6px;
	border: none;

	font-size: 0.85rem;
	text-decoration: none;

	color: #fff;
	background: ${({ variant }) =>
		variant === "github" ? "#24292e" : "#0d6efd"};

	transition: opacity 0.2s ease;

	&:hover {
		color: #fff;
		opacity: 0.85;
	}

	&.disabled {
		background: #999;
		opacity: 0.6;
		cursor: not-allowed;
		pointer-events: none;
	}
`;

export const GitIcon = styled.img`
	width: 18px;
	height: 18px;
`;
