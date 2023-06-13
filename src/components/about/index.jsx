import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
	marginLeft: 'auto',
	display: 'block',
	maxWidth: '100%',
	// borderBottom: '10px solid green',
	// maxHeight: '500px',
	height: '30rem',
	// filter: `drop-shadow(5px 5px 5px rgba(6.7, 14.9, 15.7, 1))
	// drop-shadow(-5px -5px 5px rgba(6.7, 14.9, 15.7, 1))`,
});

const About = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				// rowSpacing={2}
				columnGap={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '95vh',
					// border: '1px solid white',
					width: '100%',
					// gridGap: '1px',
				}}
				// spacing={{ xs: 2, md: 3 }}

				// columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid
					item
					xs={5}
					sx={
						{
							// border: '1px solid white',
						}
					}
				>
					<Typography variant="h4">About Me</Typography>

					<Typography variant="body1">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod vero
						aut porro sit natus voluptate libero. Architecto, nulla
						exercitationem. Rem eligendi consequuntur modi sit corrupti
						repellendus esse ullam quisquam deserunt!
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<Img src="/hi.svg"></Img>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
