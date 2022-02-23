import styled from 'styled-components';

export default function InputWrapper({
	children,
	label = '',
	id = '',
}: InputWrapperProps) {
	return (
		<StyledWrapper>
			{children}
			<StyledLabel htmlFor={id}>{label}</StyledLabel>
		</StyledWrapper>
	);
}

export type InputWrapperProps = {
	label: string;
	children: React.ReactChild;
	id: string;
};

const StyledWrapper = styled.div`
	position: relative;
	margin: 10px;
`;

const StyledLabel = styled.label`
	position: absolute;
	top: 5px;
	left: 5px;
	font-size: ${({ theme }) => theme.fontSize.ml};
	transition: font-size 0.3s, top 0.3s;
	cursor: text;
`;
