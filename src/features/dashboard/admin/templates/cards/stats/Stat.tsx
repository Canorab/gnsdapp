/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import './Stat.css';
import 'boxicons';

import {Icon, SvgIcon} from '@mui/material';
import React, {type ReactElement, type ReactSVGElement} from 'react';

import {PeopleAlt} from '@mui/icons-material';

/*
Get these from props:
{
  id: Number,
  label: String
  value: Number
  icon: String (Icon label name) - you can include this field in the DB
}
*/

type StatProps = {
	data: {
		id: number;
		label: string;
		value: number;
		icon: string;
	};
	// Icon: ReactSVGElement;
	// icon: ReactElement<any, any>;
};

function Stat({data}: StatProps) {
	return (
		<div className='card'>
			<div className='text-block'>
				<h3 className='font-bold text-xl'>{data.label}</h3>
				<h2 className='font-bold text-2xl'> {data.value} </h2>
			</div>
			<div className='icon-block'>
				{/* <PeopleAlt className='card-icon' style={{fontSize: 60}} /> */}
				{
					<box-icon
						size='lg'
						type={data.icon === 'globe' ? 'regular' : 'solid'}
						name={data.icon}
						color='rgba(44, 41, 65, 0.5)'></box-icon>
				}
				{/* {<i className={`bx ${data.icon}`}></i>} */}
			</div>
			{/* <SvgIcon name='PeopleAlt' /> */}
			{/* <Icon>PeopleAlt</Icon> */}
		</div>
	);
}

export default Stat;
