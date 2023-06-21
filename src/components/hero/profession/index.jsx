import { Typography } from '@mui/material';
import { string, array } from 'prop-types';
import React from 'react';

const Profession = ({ profession = [], color = '' }) => {
	const result = profession.map((element, index) => {
		const modifiedElem = element
			.split(' ')
			.map(elem => elem[0]?.toUpperCase() + elem.slice(1))
			.join(' ');
		return (
			<React.Fragment key={index}>
				{modifiedElem}{' '}
				{index < profession.length - 1 && (
					<Typography color={color} component={'span'} variant="h6">
						-{' '}
					</Typography>
				)}
			</React.Fragment>
		);
	});

	return (
		<Typography
			variant="h6"
			color="#ffffff"
			fontWeight={'regular'}
			sx={{
				display: {
					xs: 'none',
					md: 'block',
				},
			}}
		>
			{result}
		</Typography>
	);
};

Profession.propTypes = {
	profession: array,
	color: string,
};

export default Profession;
