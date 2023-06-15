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
	return (
		<Card
			sx={{
				display: 'flex',
				gap: '55px',
				height: '90vh',
				alignItems: 'center',
				background: 'none',
			}}
		>
			<Box
				// border={'1px solid white'}
				sx={{ display: 'flex', flexDirection: 'column' }}
			>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography variant="h5" fontWeight={'medium'} color={'#fff'}>
						Hello! I am
					</Typography>
					<Typography
						variant="h2"
						ml={'-2px'}
						fontWeight={'bolder'}
						color={'#00b2df'}
					>
						<Typewriter
							options={{
								strings: ['Rijvi Mahmud.'],
								autoStart: true,
								loop: true,
								delay: 90,
							}}
						></Typewriter>
					</Typography>
					<Typography variant="h4" color={'#fff'}>
						Full Stack Developer
					</Typography>
					<Profession profession={profession}></Profession>

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
							target={'_blank'}
							color={'#ffffff'}
							underline="none"
						>
							RESUME
						</Link>
						<DescriptionOutlinedIcon
							sx={{
								fontSize: '1.25rem',
							}}
						></DescriptionOutlinedIcon>
					</BootstrapButton>
				</CardContent>
			</Box>
			<CardMedia
				sx={{ width: 453, borderRadius: '20px', marginTop: -5 }}
				component="img"
				image="/avento.gif"
				alt="Live from space album cover"
			/>
		</Card>
	);
};

export default Hero;
