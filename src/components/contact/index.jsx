import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Typography } from '@mui/material';

const CssTextField = styled(TextField)({
	'& label': {
		color: 'white',
		lineHeight: '1em',
	},
	'& label.Mui-focused': {
		color: '#A0AAB4',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#B2BAC2',
	},
	'& .MuiOutlinedInput-root': {
		color: 'white',
		width: '100%',
		'& fieldset': {
			borderColor: '#E0E3E7',
		},
		'&:hover fieldset': {
			borderColor: '#B2BAC2',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#6F7E8C',
		},
		'& .MuiInputBase-input ': {
			padding: '12.5px 14px',
		},
	},
});

// const ValidationTextField = styled(TextField)({
// 	'& input:valid + fieldset': {
// 		borderColor: '#E0E3E7',
// 		borderWidth: 1,
// 	},
// 	'& input:invalid + fieldset': {
// 		borderColor: 'red',
// 		borderWidth: 1,
// 	},
// 	'& input:valid:focus + fieldset': {
// 		borderLeftWidth: 4,
// 		padding: '4px !important', // override inline-style
// 	},
// });

const Contact = () => {
	return (
		<Box
			component="form"
			noValidate
			sx={{
				position: 'relative',
				mt: 5,
				overflowX: 'visible',
				height: '85vh',
			}}
		>
			<Typography variant="h2" fontWeight={'bold'} textAlign={'center'} p={2}>
				Contact With Me
			</Typography>
			<Box
				sx={{
					width: '50%',
					backgroundColor: '#1D293A',
					height: '80%',
					margin: 'auto',
					borderRadius: 2,
				}}
			>
				<FormControl
					sx={{
						width: '100%',
						display: 'flex',
						gap: 3,
						padding: 4,
					}}
				>
					<CssTextField
						label="Name"
						id="custom-css-outlined-input"
						autoComplete="none"
						sx={{ display: 'block' }}
					/>
					<CssTextField
						label="Email"
						id="custom-css-outlined-input"
						sx={{ display: 'block' }}
						autoComplete="none"
					/>
					<CssTextField
						id="outlined-multiline-flexible"
						label="Description here..."
						autoComplete="none"
						multiline
						rows={4}
					/>

					<Button
						sx={{
							color: 'white',
							backgroundColor: '#22c55e',
							width: '70%',
							margin: 'auto',
							padding: 1.3,
							'&:hover': {
								backgroundColor: '#003140',
							},
						}}
					>
						{' '}
						Submit
					</Button>
				</FormControl>
			</Box>
		</Box>
	);
};

export default Contact;
