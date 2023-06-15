import { Box, Tooltip, Typography, Stack, Fade } from '@mui/material';

const skills = [
	{
		name: 'html',
		icon: 'https://img.icons8.com/?size=48&id=20909&format=svg',
	},
	{
		name: 'css',
		icon: 'https://img.icons8.com/?size=512&id=7gdY5qNXaKC0&format=svg',
	},
	{
		name: 'js',
		icon: 'https://img.icons8.com/?size=512&id=108784&format=svg',
	},
	{
		name: 'bootstrap',
		icon: 'https://img.icons8.com/?size=512&id=84710&format=svg',
	},
	{
		name: 'tailwindcss',
		icon: 'https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=svg',
	},
	{
		name: 'nodejs',
		icon: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=svg',
	},
	{
		name: 'mongoDB',
		icon: 'https://img.icons8.com/?size=512&id=tBBf3P8HL0vR&format=svg',
	},
	{
		name: 'jwtoken',
		icon: 'https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=svg',
	},
	{
		name: 'reactJs',
		icon: 'https://img.icons8.com/?size=512&id=25Sjy8fKExYA&format=svg',
	},
	{
		name: 'nextJs',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
	},
	{
		name: 'redux',
		icon: 'https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=svg',
	},
	{
		name: 'npm',
		icon: 'https://img.icons8.com/?size=512&id=24895&format=svg',
	},
	{
		name: 'expressJs',
		icon: 'https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=svg',
	},
	{
		name: 'c++',
		icon: 'https://img.icons8.com/?size=512&id=TpULddJc4gTh&format=svg',
	},
	{
		name: 'json',
		icon: 'https://img.icons8.com/?size=512&id=122583&format=svg',
	},
	{
		name: 'socket - io',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg',
	},
	{
		name: 'yarn',
		icon: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg',
	},
	{
		name: 'git',
		icon: 'https://img.icons8.com/?size=512&id=20906&format=svg',
	},
	{
		name: 'github',
		icon: 'https://img.icons8.com/?size=512&id=AZOZNnY73haj&format=svg',
	},
	{
		name: 'visual studio code',
		icon: 'https://img.icons8.com/?size=512&id=0OQR1FYCuA9f&format=svg',
	},
	{
		name: 'notion',
		icon: 'https://img.icons8.com/?size=512&id=nvtEH6DpqruC&format=svg',
	},
];
const Skill = () => {
	return (
		// height={'95vh'}
		<Box sx={{ border: '1px solid white', width: '100%', paddingBottom: 6 }}>
			<Typography variant="h4" fontWeight={'bold'} textAlign={'center'} m={3}>
				Skills
			</Typography>

			<Stack
				direction={'row'}
				justifyContent={'center'}
				alignItems={'center'}
				useFlexGap
				spacing={10}
				flexWrap={'wrap'}
				// sx={{
				// 	border: '1px solid tomato',
				// }}
			>
				{skills.map((item, id) => (
					<Tooltip
						key={id}
						title={item.name.toUpperCase()}
						arrow
						TransitionComponent={Fade}
						TransitionProps={{ timeout: 300 }}
						// followCursor
					>
						<Box
							component={'img'}
							src={item.icon}
							sx={{
								width: '60px',
								height: '60px',
							}}
						></Box>
					</Tooltip>
				))}
			</Stack>
		</Box>
	);
};

export default Skill;
