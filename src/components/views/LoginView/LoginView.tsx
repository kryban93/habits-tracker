import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../ui/Input/Input';

export default function LoginView() {
	const [login, setLogin] = useState('');

	function handleSubmit() {}

	return (
		<StyledWrapper>
			<form onSubmit={handleSubmit}>
				<Input
					id="login"
					label="login"
					name="login"
					value={login}
					onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
						setLogin(event.currentTarget.value)
					}
				/>
			</form>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section``;
