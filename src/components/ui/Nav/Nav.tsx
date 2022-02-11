import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconComponent from '../IconComponent/IconComponent';
import logo from '../../../assets/logo.svg';

export default function Nav() {
	return (
		<StyledNav>
			<StyledLogoLink to="/">
				<IconComponent src={logo} alt="Logo of Habit Tracker" size={50} />
			</StyledLogoLink>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.secondary};

	@media screen and (min-width: 768px) {
		left: 0;
		top: 0;
		width: 60px;
		height: 100%;
		padding-top: 20px;
		flex-direction: column;
	}
`;

const StyledLogoLink = styled(Link)``;
