import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
	width: 100%;
    height: 100%;
    margin: 50px;
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px 30px 100px;
	background: #fff;
	color: #222;
`;

export const Header = styled.header`
	max-width: 750px;
	margin-bottom: 40px;

	span {
		display: inline-block;
		margin-bottom: 15px;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 3px;
		color: #666;
	}

	@media (max-width: 768px) {
		margin-bottom: 30px;
	}
`;

export const Title = styled.h1`
	margin: 0;
	font-size: clamp(2.5rem, 6vw, 5rem);
	font-weight: 700;
	line-height: 1.05;
	letter-spacing: -2px;
	color: #222;

	strong {
		display: block;
		font-weight: 700;
		color: #111;
	}

	@media (max-width: 768px) {
		letter-spacing: -1px;
	}
`;

export const Subtitle = styled.p`
	max-width: 600px;
	margin-top: 20px;
	margin-bottom: 0;
	font-size: 1.05rem;
	line-height: 1.7;
	color: #666;
`;

export const Highlight = styled.div`
	width: 100%;
	margin-bottom: 30px;

	> div {
		width: 100%;
		margin: 0;
	}
`;

export const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 25px;

	> div {
		margin: 0;
		width: 100%;
	}

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;