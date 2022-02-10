import styled from 'styled-components';
import Button from '../../ui/Button/Button';
import IconComponent from '../../ui/IconComponent/IconComponent';
import icons from '../../../assets/icons';

export default function MainView() {
	return (
		<StyledWrapper>
			<StyledHeader>Main view</StyledHeader>
			<Button
				type="button"
				onClick={() => console.log('click')}
				variant="secondary"
			>
				lol
			</Button>
			<StyledButton
				type="button"
				onClick={() => console.log('click')}
				variant="secondary"
				rounded
				iconOnly
			>
				<IconComponent src={icons.plus} size={40} />
			</StyledButton>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section``;

const StyledHeader = styled.h1`
	margin: 20px 5px;
`;

const StyledButton = styled(Button)`
	position: absolute;
	bottom: 50px;
	right: 50px;
`;
