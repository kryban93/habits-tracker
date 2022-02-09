import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainView from './components/views/MainView/MainView';
import { GlobalStyles } from './styles/GlobalStyles';
import { Reset } from './styles/Reset';
import { theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<GlobalStyles />
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainView />} />
					</Routes>
				</BrowserRouter>
			</main>
		</ThemeProvider>
	);
}

export default App;
