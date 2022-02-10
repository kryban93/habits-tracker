import styled from 'styled-components';

export default function InputWrapper({
	children,
	label = '',
	id = '',
}: InputWrapperProps) {
	return (
		<StyledWrapper>
			<StyledLabel>{label}</StyledLabel>
			{children}
		</StyledWrapper>
	);
}

export type InputWrapperProps = {
	label: string;
	children: React.ReactChild;
	id: string;
};

const StyledWrapper = styled.div``;

const StyledLabel = styled.label``;
