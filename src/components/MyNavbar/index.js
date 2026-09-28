import styled from "styled-components";

const NavbarContainer = styled.nav`
	width: 100%;
	padding: 20px 30px;

	background: #ffffff;
	border-bottom: 1px solid #eeeeee;

	position: relative;
	z-index: 10;

	box-sizing: border-box;
`;

const NavbarContent = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Brand = styled.a`
	color: #222;
	font-size: 1.2rem;
	font-weight: 700;
	text-decoration: none;

	transition: color 0.2s ease;

	&:hover {
		color: #666;
	}
`;

const Navigation = styled.div`
	display: flex;
	align-items: center;
	gap: 35px;
`;

const NavLink = styled.a`
	position: relative;

	color: #555;
	font-size: 0.95rem;
	font-weight: 500;
	text-decoration: none;

	transition: color 0.2s ease;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -6px;

		width: 0;
		height: 2px;

		background: #222;

		transition: width 0.2s ease;
	}

	&:hover {
		color: #222;
	}

	&:hover::after {
		width: 100%;
	}

	@media (max-width: 600px) {
		font-size: 0.85rem;
	}
`;

function MyNavbar() {
	return (
		<NavbarContainer>
			<NavbarContent>
				<Brand href="/">
					{"< Lucas Maciel />"}
				</Brand>

				<Navigation>
					<NavLink href="/projects">
						Projetos
					</NavLink>

					<NavLink href="/sobremim">
						Sobre mim
					</NavLink>
				</Navigation>
			</NavbarContent>
		</NavbarContainer>
	);
}

export default MyNavbar;