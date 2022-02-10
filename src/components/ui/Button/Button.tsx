import styled from 'styled-components';

export default function Button({
	children,
	className,
	onClick = () => {},
	disabled = false,
	type = 'button',
	variant = 'primary',
	rounded = false,
	iconOnly = false,
}: ButtonProps) {
	return (
		<StyledButton
			className={className}
			onClick={onClick}
			disabled={disabled}
			type={type}
			variant={variant}
			rounded={rounded}
			iconOnly={iconOnly}
		>
			{children}
		</StyledButton>
	);
}

export type ButtonProps = {
	variant: 'primary' | 'secondary' | 'transparent';
	children: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
	type: 'button' | 'submit' | 'reset';
	className?: 'string';
	rounded?: boolean;
	iconOnly?: boolean;
};

const StyledButton = styled.button<Partial<ButtonProps>>`
	background-color: ${({ theme, variant }) =>
		variant === 'primary' ? theme.primary : theme.tertiary};
	border: none;
	border-radius: ${({ rounded }) => (rounded ? '30px' : '0px')};
	display: flex;
	align-items: center;
	box-sizing: border-box;
	margin: ${({ iconOnly }) => (iconOnly ? '0px' : '5px')};
	padding: ${({ iconOnly }) => (iconOnly ? '3px' : '5px 20px')};
`;
