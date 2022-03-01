import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function HabitForm({}: HabitFormProps) {
	const [titleState, setTitleState] = useState('');
	const [habitData, setHabitData] = useState('');
	const [unitData, setUnitData] = useState('');

	function submitFn() {}
	return (
		<StyledWrapper>
			<StyledHeading>Habits form</StyledHeading>
			<form onSubmit={submitFn}>
				<Input
					name="title"
					value={titleState}
					onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
						setTitleState(event.currentTarget.value)
					}
					id="title"
					label="title"
				/>
				<h2>Add data You want to track</h2>
				<Input
					name="habit"
					value={habitData}
					onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
						setHabitData(event.currentTarget.value)
					}
					id="habit"
					label="habit"
				/>
				<p>Do You want to add unit?</p>
				<Input
					name="unit"
					value={unitData}
					onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
						setUnitData(event.currentTarget.value)
					}
					id="unit"
					label="unit"
				/>

				<Button variant="secondary" type="submit" onClick={() => submitFn()}>
					Add habit
				</Button>
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
