import { v4 as uuidv4 } from 'uuid';

// Import images
import sfuimage from '../public/images/brands/sfu.webp';
import ubcimage from '../public/images/brands/ubc.png';
import bclcimage from '../public/images/brands/bclc2.png';
import westvancouverschoolsimage from '../public/images/brands/wvs.png';

export const clientsHeading = 'Organizations I Have Worked With';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'SFU Athletics',
		img: sfuimage,
	},
	{
		id: uuidv4(),
		title: 'UBC Varsity',
		img: ubcimage,
	},
	{
		id: uuidv4(),
		title: 'West Vancouver Schools',
		img: westvancouverschoolsimage,
	},
	{
		id: uuidv4(),
		title: 'BCLC',
		img: bclcimage,
	},
];
