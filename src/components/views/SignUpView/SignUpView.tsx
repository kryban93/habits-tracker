import { useState } from 'react';
import styled from 'styled-components';
import background from '../../../assets/background.jpg';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

export default function SignUpView() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<StyledWrapper>
			<StyledFormContainer>
				<StyledHeading> Hello, Sign Up!</StyledHeading>
				<form>
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
					<InputWrapper>
						<Input
							id="confirmPassword"
							label="confirm password"
							name="confirmPassword"
							value={confirmPassword}
							type="password"
							onChangeFn={(event: React.FormEvent<HTMLInputElement>) =>
								setConfirmPassword(event.currentTarget.value)
							}
						/>
					</InputWrapper>
					<Button variant="primary" onClick={() => {}} type="submit">
						Sign Up
					</Button>
				</form>
			</StyledFormContainer>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	height: 100vh;
	width: 100vw;
	background: url(${background}) center no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledHeading = styled.h1`
	margin-bottom: 50px;
`;

const InputWrapper = styled.div`
	padding: 17px 20px;
	background-color: rgba(0, 0, 0, 0.6);
	box-sizing: border-box;
	margin: 10px;
	display: flex;
`;

const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 60px;
	border-radius: 5px;
`;
