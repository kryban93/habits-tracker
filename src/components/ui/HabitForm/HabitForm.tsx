import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

export default function HabitForm({}: HabitFormProps) {
	const [titleState, setTitleState] = useState('');

	function submitFn() {}
	return (
		<StyledWrapper>
			<StyledHeading>Habits form</StyledHeading>
			<form onSubmit={submitFn}>
				<Input
					name="Title"
					value={titleState}
					onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
						setTitleState(event.currentTarget.value)
					}
					id="title"
					label="Title"
				/>
			</form>
		</StyledWrapper>
	);
}

export type HabitFormProps = {};

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const StyledHeading = styled.h1`
	margin: 20px;
`;
