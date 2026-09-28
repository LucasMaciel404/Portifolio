import styled from "styled-components";
import { ReactComponent as LinkedinSVG } from "./../svg/linkedin.svg";
import { ReactComponent as GithubSVG } from "./../svg/git.svg";
import { ReactComponent as WhatsappSVG } from "./../svg/whatsapp.svg";

function Social() {
	const Container = styled.div`
		ul {
			list-style: none;
		}

		.example-2 {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.example-2 .icon-content {
			margin: 0 10px;
			position: relative;
		}
		.example-2 .icon-content .tooltip {
			position: absolute;
			top: -30px;
			left: 50%;
			transform: translateX(-50%);
			color: #fff;
			padding: 6px 10px;
			border-radius: 15px;
			opacity: 0;
			visibility: hidden;
			font-size: 14px;
			transition: all 0.3s ease;
		}
		.example-2 .icon-content:hover .tooltip {
			opacity: 1;
			visibility: visible;
			top: -50px;
		}
		.example-2 .icon-content a {
			position: relative;
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50px;
			height: 50px;
			border-radius: 20%;
			color: #4d4d4d;
			background-color: #ffff;
			transition: all 0.3s ease-in-out;
		}
		.example-2 .icon-content a:hover {
			box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
		}
		.example-2 .icon-content a svg {
			position: relative;
			z-index: 1;
			width: 30px;
			height: 30px;
		}
		.example-2 .icon-content a:hover {
			color: white;
		}
		.example-2 .icon-content a .filled {
			position: absolute;
			top: auto;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 0;
			background-color: #000;
			transition: all 0.3s ease-in-out;
		}
		.example-2 .icon-content a:hover .filled {
			height: 100%;
		}
		.example-2 .icon-content a[data-social="Linkedin"] .filled,
		.example-2 .icon-content a[data-social="Linkedin"] ~ .tooltip {
			background-color: #0088cc;
		}
		.example-2 .icon-content a[data-social="Whatsapp"] .filled,
		.example-2 .icon-content a[data-social="Whatsapp"] ~ .tooltip {
			background-color: #07cc28;
		}
        .example-2 .icon-content a[data-social="GitHub"] .filled,
		.example-2 .icon-content a[data-social="GitHub"] ~ .tooltip {
			background-color: #ff7300 ;
		}
	`;
	return (
		<Container>
			<ul className="example-2">
				<li className="icon-content">
					<a
						href="https://github.com/LucasMaciel404"
						aria-label="GitHub"
						data-social="GitHub"
						target="_blank"
						rel="noreferrer">
						<div className="filled"></div>
						<GithubSVG />
					</a>
					<div className="tooltip">GitHub</div>
				</li>

				<li className="icon-content">
					<a
						href="https://www.linkedin.com/in/lucasmaciel404/"
						aria-label="LinkedIn"
						data-social="Linkedin"
						target="_blank"
						rel="noreferrer">
						<div className="filled"></div>
						<LinkedinSVG />
					</a>
					<div className="tooltip">LinkedIn</div>
				</li>

				<li className="icon-content">
					<a
						href="https://wa.me/5585981041834"
						aria-label="WhatsApp"
						data-social="Whatsapp"
						target="_blank"
						rel="noreferrer">
						<div className="filled"></div>
						<WhatsappSVG />
					</a>
					<div className="tooltip">WhatsApp</div>
				</li>
			</ul>
		</Container>
	);
}

export default Social;
