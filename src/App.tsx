import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Nav from './components/ui/Nav/Nav';
import MainView from './components/views/MainView/MainView';
import { GlobalStyles } from './styles/GlobalStyles';
import { Reset } from './styles/Reset';
import { theme } from './styles/theme';
import checkDatabase from './utils/firebase/firebasecheck';

function App() {
	useEffect(() => {
		console.log(checkDatabase());
	});
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<GlobalStyles />
			<main>
				<BrowserRouter>
					<Nav />
					<Routes>
						<Route path="/" element={<MainView />} />
					</Routes>
				</BrowserRouter>
			</main>
		</ThemeProvider>
	);
}

export default App;
