import styled from 'styled-components';
import icons from '../../../assets/icons';
import Button from '../Button/Button';
import IconComponent from '../IconComponent/IconComponent';

export default function Modal({
	children,
	onModalClose = () => {},
}: ModalProps) {
	return (
		<StyledOverlay>
			<ModalContent>
				<StyledButton
					onClick={onModalClose}
					variant="primary"
					type="button"
					iconOnly
				>
					<IconComponent src={icons.close} size={30} alt="close modal button" />
				</StyledButton>
				{children}
			</ModalContent>
		</StyledOverlay>
	);
}

export type ModalProps = {
	children: React.ReactNode;
	onModalClose: () => void;
};

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-top: 50px;
	background-color: rgb(0, 0, 0, 0.8);
	overflow-x: hidden;
	overflow-y: auto;
`;

const ModalContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 90%;
	background-color: ${({ theme }) => theme.secondary};
	border-radius: 5px;
`;

const StyledButton = styled(Button)`
	position: absolute;
	right: 20px;
	top: 20px;
`;
