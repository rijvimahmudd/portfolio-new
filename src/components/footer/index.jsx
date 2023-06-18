import { Box, Typography } from '@mui/material';

const Footer = () => {
	return (
		<Box
			sx={{
				height: '20vh',
				backgroundColor: '#1D293A',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography variant="subtitle2" textAlign={'center'}>
				Design Developed & Engineering by &copy; Rijvi Mahmud.
			</Typography>
		</Box>
	);
};

export default Footer;
