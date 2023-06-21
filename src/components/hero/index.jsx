import {
	Box,
	Card,
	Typography,
	CardContent,
	CardMedia,
	Link,
	Button,
} from '@mui/material';
import Profession from './profession';
import Typewriter from 'typewriter-effect';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const profession = [
	'web developer',
	'programmer',
	'problem solver',
	'software engineer',
];

const BootstrapButton = styled(Button)({
	'&:hover': {
		backgroundColor: '#003140',
	},
});

const Hero = () => {
	const [availWidth, setAvailWidth] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1224) {
				setAvailWidth(true);
			} else {
				setAvailWidth(false);
			}
		};

		// Initial check on component mount
		handleResize();

		// Add event listener for window resize
		window.addEventListener('resize', handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Card
			sx={{
				display: 'flex',
				gap: {
					xs: '0px',
					md: '55px',
				},

				flexDirection: {
					xs: 'column',
					md: 'row',
				},
				height: '90vh',
				justifyContent: {
					// xs: 'center',
					// md: 'center',
				},
				alignItems: {
					md: 'center',
				},
				background: 'none',
				paddingX: {
					md: '0px',
					xs: '10px',
				},
				// '@media (max-width: 767px)': {
				// 	flexDirection: 'column',
				// 	height: 'auto',
				// 	// justifyContent: 'center',
				// },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography variant="h5" fontWeight="medium" color="#fff">
						Hello! I am
					</Typography>
					<Typography
						variant="h3"
						ml="-2px"
						fontWeight="bolder"
						color="#00b2df"
					>
						{availWidth ? (
							<Typography variant="h3">Rijvi Mahmud</Typography>
						) : (
							<Typewriter
								options={{
									strings: ['Rijvi Mahmud.'],
									autoStart: true,
									loop: true,
									delay: 90,
								}}
							/>
						)}
					</Typography>
					<Typography variant="h5" color="#fff">
						Full Stack Developer
					</Typography>
					<Profession profession={profession} />
					<Typography
						variant="h5"
						sx={{
							display: {
								md: 'none',
							},
						}}
						color={'#00b2df'}
					>
						<Typewriter
							options={{
								strings: profession,
								autoStart: true,
								loop: true,
								delay: 90,
							}}
						/>
					</Typography>

					<BootstrapButton
						sx={{
							backgroundColor: '#00b2df',
							padding: '10px 20px',
							color: '#ffffff',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 0.6,
							mt: 1.3,
						}}
					>
						<Link
							href="/Rijvi_Mahmud.pdf"
							target="_blank"
							color="#ffffff"
							underline="none"
						>
							RESUME
						</Link>
						<DescriptionOutlinedIcon
							sx={{
								fontSize: '1.25rem',
							}}
						/>
					</BootstrapButton>
				</CardContent>
			</Box>
			<CardMedia
				sx={{
					width: '100%',
					maxWidth: {
						xs: '100%',
						md: 460,
					},
					borderRadius: '30px',
					marginTop: {
						md: -5,
					},
					padding: 2,
				}}
				component="img"
				image="/avento.gif"
				alt="Live from space album cover"
			/>
		</Card>
	);
};

export default Hero;
