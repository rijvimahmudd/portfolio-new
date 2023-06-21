import { GitHub } from '@mui/icons-material';
import {
	Box,
	Container,
	Link,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material';

const socialSites = [
	{
		name: 'LinkedIn',
		icon: `https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=svg`,
		link: `https://www.linkedin.com/in/rijvi-mahmud/`,
	},
	{
		name: 'ShowwCase',
		icon: `/showwcase.svg`,
		link: `https://rijvimahmudd.showwcase.com/`,
	},
	{
		name: 'Slack',
		icon: 'https://img.icons8.com/?size=512&id=19978&format=svg',
		link: `https://slack.com/`,
	},
	{
		name: 'Discord',
		icon: `https://img.icons8.com/?size=512&id=2mIgusGquJFz&format=svg`,
		link: `https://discord.com/`,
	},
	{
		name: 'LeetCode',
		icon: `https://img.icons8.com/?size=512&id=wDGo581Ea5Nf&format=svg`,
		link: `https://leetcode.com/rijvimahmudd/`,
	},
	{
		name: 'GitHub',
		icon: <GitHub />,
		link: `https://github.com/rijvimahmudd`,
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
					Design, Development & Ongoing Engineering by &copy; Rijvi Mahmud.
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
							href={site.link}
							target="_blank"
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
							<Tooltip title={site.name.toUpperCase()}>
								{typeof site.icon === 'string' ? (
									<Box component="img" src={site.icon} alt={site.name} />
								) : (
									site.icon
								)}
							</Tooltip>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
