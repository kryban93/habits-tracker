import styled from 'styled-components';
import InputWrapper from '../InputWrapper/InputWrapper';

export default function Input({
	name = '',
	value = '',
	id = '',
	onChangeFn = () => {},
	label = '',
}: InputProps) {
	return (
		<InputWrapper label={label} id={id}>
			<StyledInput name={name} value={value} id={id} onChange={onChangeFn} />
		</InputWrapper>
	);
}

export type InputProps = {
	name: string;
	value: string;
	id: string;
	label: string;
	onChangeFn: (event: React.FormEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
	background-color: ${({ theme }) => theme.primary};
	border: none;
`;
