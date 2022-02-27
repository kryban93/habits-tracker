import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button/Button';
import IconComponent from '../../ui/IconComponent/IconComponent';
import icons from '../../../assets/icons';
import Modal from '../../ui/Modal/Modal';
import HabitForm from '../../ui/HabitForm/HabitForm';
import DataWrapper from '../../ui/DataWrapper/DataWrapper';

export default function MainView() {
	const [isModalOpen, setModalOpenState] = useState(true);

	const onModalClose = () => {
		setModalOpenState(false);
	};

	return (
		<StyledWrapper>
			<StyledHeader>Main view</StyledHeader>

			<DataWrapper />

			<StyledButton
				type="button"
				onClick={() => setModalOpenState(true)}
				variant="secondary"
				iconOnly
			>
				<IconComponent src={icons.plus} size={40} alt="Add new habit button" />
				<StyledButtonParagraph>Add new habit</StyledButtonParagraph>
			</StyledButton>

			{isModalOpen && (
				<Modal onModalClose={onModalClose}>
					<HabitForm />
				</Modal>
			)}
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		margin-left: 60px;
	}
`;

const StyledHeader = styled.h1`
	margin: 20px 20px 50px;
`;

const StyledButtonParagraph = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.s};
	padding: 0 10px;
`;

const StyledButton = styled(Button)`
	position: absolute;
	top: 20px;
	right: 20px;
	border-radius: 5px;
`;
