import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

export default function HabitForm({}: HabitFormProps) {
	const [titleState, setTitleState] = useState('');

	function submitFn() {}
	return (
		<StyledWrapper>
			<h1>Habits form</h1>
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

const StyledWrapper = styled.div``;
