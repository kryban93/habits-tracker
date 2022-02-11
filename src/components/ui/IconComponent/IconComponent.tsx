import styled from 'styled-components';

export default function IconComponent({
	src,
	size = 30,
	alt = '',
}: IconComponentProps) {
	return <StyledIcon src={src} size={size} alt={alt} />;
}

const StyledIcon = styled.img<Partial<IconComponentProps>>`
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size}px`};
`;

export type IconComponentProps = {
	src: string;
	size: 30 | 40 | 50;
	alt: string;
};
