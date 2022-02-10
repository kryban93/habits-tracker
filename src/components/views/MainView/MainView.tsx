import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button/Button';
import IconComponent from '../../ui/IconComponent/IconComponent';
import icons from '../../../assets/icons';
import Modal from '../../ui/Modal/Modal';
import HabitForm from '../../ui/HabitForm/HabitForm';

export default function MainView() {
	const [isModalOpen, setModalOpenState] = useState(true);

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
				onClick={() => setModalOpenState(true)}
				variant="secondary"
				rounded
				iconOnly
			>
				<IconComponent src={icons.plus} size={40} />
			</StyledButton>

			{isModalOpen && (
				<Modal>
					<HabitForm />
				</Modal>
			)}
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
