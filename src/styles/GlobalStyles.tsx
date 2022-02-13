import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
html {
	font-family: 'Nunito', sans-serif;
	font-size: 16px;	
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.fontColor.primary};	
}

h1 {
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.fontColor.primary};	
}

h2 {
	font-size: ${({ theme }) => theme.fontSize.l}
}

p {
	color: ${({ theme }) => theme.fontColor.primary};	
	
}
`;
