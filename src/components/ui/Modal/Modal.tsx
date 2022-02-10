import styled from 'styled-components';

export default function Modal({ children }: ModalProps) {
	return (
		<StyledOverlay>
			<ModalContent>{children}</ModalContent>
		</StyledOverlay>
	);
}

export type ModalProps = {
	children: React.ReactNode;
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
	display: flex;
	flex-direction: column;
	width: 90%;
	background-color: ${({ theme }) => theme.secondary};
`;
