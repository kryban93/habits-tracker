import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../ui/Input/Input';

export default function LoginView() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit() {}

	return (
		<StyledWrapper>
			<StyledFormContainer>
				<StyledHeading>Welcome</StyledHeading>
				<form onSubmit={handleSubmit}>
					<InputWrapper>
						<Input
							id="email"
							label="email"
							name="email"
							value={email}
							onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
								setEmail(event.currentTarget.value)
							}
						/>
					</InputWrapper>
					<InputWrapper>
						<Input
							id="password"
							label="password"
							name="password"
							value={password}
							type="password"
							onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
								setPassword(event.currentTarget.value)
							}
						/>
					</InputWrapper>
				</form>
			</StyledFormContainer>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background-image: url('../../../assets/background.jpg');
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledHeading = styled.h1`
	margin-bottom: 50px;
`;

const InputWrapper = styled.div`
	padding: 17px 20px;
	background-color: rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	margin: 10px;
	display: flex;
`;

const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	padding: 60px;
	border-radius: 5px;
`;
