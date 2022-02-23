import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Nav from './components/ui/Nav/Nav';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginView from './components/views/LoginView/LoginView';
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
					<Nav />
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<LoginView />} />
						<Route path="/dashboard" element={<MainView />} />
					</Routes>
				</BrowserRouter>
			</main>
		</ThemeProvider>
	);
}

export default App;
