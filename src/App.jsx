import './App.css';
import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';

function App() {
	return (
		<>
			<CssBaseline></CssBaseline>
			<Navbar></Navbar>
			<Container fixed>
				<Box
					sx={{
						marginTop: '70px',
						border: '1px solid orange',
					}}
				>
					<Hero></Hero>
					<About></About>
				</Box>
			</Container>
		</>
	);
}

export default App;
