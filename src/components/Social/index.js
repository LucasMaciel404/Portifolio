import styled from "styled-components";
import { ReactComponent as LinkedinSVG} from './../svg/linkedin.svg';
import { ReactComponent as InstagramSVG} from './../svg/intagram.svg';

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
        .example-2 .icon-content a[data-social="spotify"] .filled,
        .example-2 .icon-content a[data-social="spotify"] ~ .tooltip {
        background-color: #1db954;
        }
        .example-2 .icon-content a[data-social="pinterest"] .filled,
        .example-2 .icon-content a[data-social="pinterest"] ~ .tooltip {
            background-color: #bd081c;
        }
        .example-2 .icon-content a[data-social="Instagram"] .filled,
        .example-2 .icon-content a[data-social="Instagram"] ~ .tooltip {
            background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),
              radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
              radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), 
              radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), 
              radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), 
              radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), 
              radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
              linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
        }
        .example-2 .icon-content a[data-social="Linkedin"] .filled,
        .example-2 .icon-content a[data-social="Linkedin"] ~ .tooltip {
            background-color: #0088cc;
}

    `;
    return (
        <Container>
            <ul class="example-2">

                <li class="icon-content">
                    <a
                        href="https://www.linkedin.com/in/lucasmaciel404/"
                        aria-label="Linkedin"
                        data-social="Linkedin"
                        target="_blank"
                    >
                        <div class="filled"></div>
                        <LinkedinSVG/>
                    </a>
                    <div class="tooltip">Linkedin</div>
                </li>
                <li class="icon-content">
                    <a
                        href="https://www.instagram.com/lucasmaciel404/"
                        aria-label="Instagram"
                        data-social="Instagram"
                        target="_blank"
                    >
                        <div class="filled"></div>
                        <InstagramSVG/>
                    </a>
                    <div class="tooltip">Instagram</div>
                </li>
            </ul>
        </Container>
    )
}

export default Social;