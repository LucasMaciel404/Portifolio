import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: calc(100vh - 73px);

	display: flex;
	align-items: center;

	box-sizing: border-box;
	overflow: hidden;

	color: #fff;

	background: linear-gradient(
		-45deg,
		#000,
		#201658,
		#1d24ca,
		#23d5ab,
		#201658,
		#000
	);

	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1200px;

	margin: 0 auto;
	padding: 80px 30px;

	box-sizing: border-box;
`;

export const Eyebrow = styled.span`
	display: block;
	margin-bottom: 20px;

	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 4px;

	color: rgba(255, 255, 255, 0.7);
`;

export const Title = styled.h1`
	max-width: 900px;

	margin: 0;

	font-size: clamp(3rem, 7vw, 6rem);
	font-weight: 700;
	line-height: 1;
	letter-spacing: -3px;

	color: #fff;

	@media (max-width: 600px) {
		letter-spacing: -1.5px;
	}
`;

export const Highlight = styled.span`
	display: block;

	background: linear-gradient(
		90deg,
		#fff,
		#23d5ab
	);

	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
	max-width: 650px;

	margin: 30px 0 0;

	font-size: clamp(1rem, 2vw, 1.25rem);
	line-height: 1.7;

	color: rgba(255, 255, 255, 0.75);
`;

export const Actions = styled.div`
	display: flex;
	gap: 15px;

	margin-top: 40px;

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const PrimaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	padding: 12px 24px;

	border-radius: 8px;

	background: #fff;
	color: #111;

	font-size: 0.95rem;
	font-weight: 600;
	text-decoration: none;

	transition:
		transform 0.2s ease,
		background 0.2s ease;

	&:hover {
		transform: translateY(-3px);
		background: #f0f0f0;
		color: #111;
	}
`;

export const SecondaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	padding: 12px 24px;

	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 8px;

	background: transparent;
	color: #fff;

	font-size: 0.95rem;
	font-weight: 600;
	text-decoration: none;

	transition:
		background 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.7);
		color: #fff;
	}
`;