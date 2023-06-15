import './App.css';
import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import useDocumentTitle from './hooks/useDocumentTitle';
import Skill from './components/skills';
import Project from './components/projects';

const App = () => {
	useDocumentTitle('Rijvi Mahmud - Web Developer | Problem Solver');

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
					<Skill></Skill>
					<Project></Project>
				</Box>
			</Container>
		</>
	);
};

export default App;
