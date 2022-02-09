export const theme: ThemeProps = {
	primary: '#222831',
	secondary: '#2C3440',
	fontColor: {
		primary: '#fff',
		secondary: '#2a7779',
	},
	fontSize: {
		s: '0.875rem',
		m: '1rem',
		ml: '1.25rem',
		l: '1.5rem',
		xl: '2rem',
		xxl: '2.5rem',
	},
	fontWeight: {
		bold: 700,
		medium: 500,
		regular: 400,
	},
};

export type ThemeProps = {
	primary: string;
	secondary: string;
	fontColor: { primary: string; secondary: string };
	fontSize: {
		s: string;
		m: string;
		ml: string;
		l: string;
		xl: string;
		xxl: string;
	};
	fontWeight: { bold: number; medium: number; regular: number };
};
