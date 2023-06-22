import { Box, Grid, Typography } from '@mui/material';

const About = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				// rowSpacing={2}
				columnGap={6}
				gap={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					height: {
						md: '90vh',
						xs: 'auto',
					},
					// border: '1px solid white',
					width: '100%',
					paddingY: {
						xs: 4,
						md: 0,
					},
					// gridGap: '1px',
				}}
				// spacing={{ xs: 2, md: 3 }}

				// columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid
					item
					order={{
						xs: 2,
						md: 1,
					}}
					xs={12}
					md={5}
					sx={{
						justifyContent: 'space-between',
						height: '100%',
					}}
				>
					<Box
						sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							gap: 3,
							// justifyContent: 'center',
						}}
					>
						<Typography
							variant="h4"
							sx={{
								textAlign: {
									xs: 'center',
									md: 'initial',
								},
							}}
						>
							About Me
						</Typography>

						<Typography
							variant="body1"
							sx={{
								paddingX: {
									xs: 1,
									md: 0,
								},
							}}
						>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
							vero aut porro sit natus voluptate libero. Architecto, nulla
							exercitationem. Rem eligendi consequuntur modi sit corrupti
							repellendus esse ullam quisquam deserunt! Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Repellendus veritatis ipsum
							itaque at in deserunt minima porro nobis maxime est iusto, eius
							possimus officia quae id eveniet molestiae illum neque.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					md={5}
					xs={12}
					order={{
						xs: 1,
						md: 2,
					}}
				>
					<Box
						component={'div'}
						sx={{
							height: '20rem',
							width: '90%',
							marginX: 'auto',
						}}
					>
						<Box
							component={'div'}
							sx={{
								height: '100%',
								width: '100%',
								backgroundColor: '#eeeeee',
								position: 'relative',
								clipPath: 'circle()',
							}}
						>
							<Box
								component={'img'}
								src="/hi.svg"
								height={'70%'}
								width={'80%'}
								sx={{
									position: 'absolute',
									objectFit: 'contain',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
								}}
							></Box>
						</Box>
					</Box>
					{/* <Img src="/hi.svg"></Img> */}
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
