import styled from 'styled-components';
import InputWrapper from '../InputWrapper/InputWrapper';

export default function Input({
	name = '',
	value = '',
	id = '',
	onChangeFn = () => {},
	label = '',
	type = 'text',
}: InputProps) {
	return (
		<InputWrapper label={label} id={id}>
			<StyledInput
				name={name}
				value={value}
				id={id}
				onChange={onChangeFn}
				type={type}
			/>
		</InputWrapper>
	);
}

export type InputProps = {
	name: string;
	value: string;
	id: string;
	label: string;
	type?: 'password' | 'text';
	onChangeFn: (event: React.FormEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
	background: none;
	border: none;
	font-size: ${({ theme }) => theme.fontSize.ml};
	color: ${({ theme }) => theme.fontColor.primary};
	border-bottom: 3px solid gray;
	outline: none;
	padding: 3px;
	transition: border 0.2s;

	&:focus {
		border-width: 3px;
		border-image: linear-gradient(
			140deg,
			rgba(244, 62, 0, 1) 0%,
			rgba(0, 226, 216, 1) 100%
		);
		border-image-slice: 1;

		~ label {
			top: -20px;
			font-size: ${({ theme }) => theme.fontSize.s};
		}
	}
`;
