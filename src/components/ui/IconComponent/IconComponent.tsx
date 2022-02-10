import styled from 'styled-components';

export default function IconComponent({ src, size = 30 }: IconComponentProps) {
	return <StyledIcon src={src} size={size} />;
}

const StyledIcon = styled.img<Partial<IconComponentProps>>`
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size}px`};
`;

export type IconComponentProps = {
	src: string;
	size: 30 | 40 | 50;
};
