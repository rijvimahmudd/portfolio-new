import {
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Stack,
	Link,
	Box,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/LaunchTwoTone';

const data = [
	{ id: 1, title: 'Card 1' },
	{ id: 2, title: 'Card 2' },
	{ id: 3, title: 'Card 3' },
	// Add more cards to the data array if needed
];

const Project = () => {
	return (
		<Box sx={{ border: '1px solid cyan' }}>
			<Typography variant="h4" fontWeight={'bold'} textAlign={'center'} m={3}>
				Projects
			</Typography>
			<Grid
				container
				// spacing={2}
				gap={0}
				display={'flex'}
				justifyContent={'space-between'}
				boxSizing={'border-box'}
			>
				{data.map(card => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={card.id}
						sx={{
							// border: '1px solid pink',
							// width: '300px',
							display: 'flex',
						}}
						justifyContent={'space-around'}
					>
						<Card
							sx={{
								width: '95%',
								height: '100%',
								margin: '0 4px',
								backgroundColor: '#1D293A',
								borderRadius: '8px',
								color: 'white',
							}}
						>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									gap: 3,
								}}
							>
								<CardMedia
									component={'img'}
									src="https://images.unsplash.com/photo-1611928482141-15f3896e635b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									sx={{
										borderRadius: '6px',
									}}
								></CardMedia>
								<Stack>
									<Typography variant="h4">Practice Project</Typography>
									<Typography variant="subtitle2" fontWeight={'light'}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Deleniti at soluta commodi sit perspiciatis autem esse
										dolor.
									</Typography>
								</Stack>
								<Stack gap={1}>
									<Link
										variant="subtitle2"
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											color: 'white',
											cursor: 'pointer',
										}}
									>
										Live Link <LaunchIcon fontSize="10px"></LaunchIcon>
									</Link>
									<Link
										variant="subtitle2"
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											color: 'white',
											cursor: 'pointer',
										}}
									>
										Client Side Code Link{' '}
										<LaunchIcon fontSize="10px"></LaunchIcon>
									</Link>
									<Link
										variant="subtitle2"
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											color: 'white',
											cursor: 'pointer',
										}}
									>
										Server Side Code Link
										<LaunchIcon fontSize="10px"></LaunchIcon>
									</Link>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Project;
