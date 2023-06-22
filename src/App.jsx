import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import useDocumentTitle from './hooks/useDocumentTitle';
import Skill from './components/skills';
import Project from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
	useDocumentTitle('Rijvi Mahmud - Web Developer | Problem Solver');
	return (
		<>
			<CssBaseline></CssBaseline>
			<Navbar></Navbar>
			<Container>
				<Box
					sx={{
						// display: 'flex',
						// flexDirection: 'column',
						// position: 'inherit',
						display: 'block',
						marginTop: '70px',
						border: '1px solid orange',
						// gap: 4,
						height: '100%',
					}}
				>
					<Hero></Hero>
					<About></About>
					<Skill></Skill>
					<Project></Project>
					<Contact></Contact>
				</Box>
			</Container>
			{/* <Footer></Footer> */}
		</>
	);
};

export default App;
