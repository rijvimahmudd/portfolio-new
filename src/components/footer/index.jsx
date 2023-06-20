import { GitHub } from '@mui/icons-material';
import { Box, Container, Link, Stack, Typography } from '@mui/material';

const socialSites = [
	{
		name: 'LinkedIn',
		icon: `https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=svg`,
	},
	{
		name: 'ShowwCase',
		icon: `/showwcase.svg`,
	},
	{
		name: 'Slack',
		icon: 'https://img.icons8.com/?size=512&id=19978&format=svg',
	},
	{
		name: 'Discord',
		icon: `https://img.icons8.com/?size=512&id=2mIgusGquJFz&format=svg`,
	},
	{
		name: 'LeetCode',
		icon: `https://img.icons8.com/?size=512&id=wDGo581Ea5Nf&format=svg`,
	},
	{
		name: 'GitHub',
		icon: <GitHub />,
	},
];

const Footer = () => {
	return (
		<Box
			sx={{
				height: '20vh',
				backgroundColor: '#1D293A',
			}}
		>
			<Container
				sx={{
					height: 'inherit',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant="subtitle2" textAlign="center">
					Design, Development & Ongoing Engineering by &copy;
					<Link> Rijvi Mahmud.</Link>
				</Typography>
				<Stack
					direction="row"
					spacing={5}
					sx={{
						height: 'inherit',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					{socialSites.map((site, index) => (
						<Link
							key={index}
							href={site.name.toLowerCase()}
							color="inherit"
							underline="none"
							sx={{
								aspectRatio: '1/1',
								width: '24px',
								height: '24px',
								// backgroundColor: 'orange',
								'& img': {
									width: '100%',
									height: '100%',
									objectFit: 'contain',
								},
							}}
						>
							{typeof site.icon === 'string' ? (
								<Box component="img" src={site.icon} alt={site.name} />
							) : (
								site.icon
							)}
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
