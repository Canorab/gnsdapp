/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import './Stat.css';
import 'boxicons';

type StatProps = {
	data: {
		id: number;
		label: string;
		value: number;
		icon: string;
	};
};

function Stat({data}: StatProps) {
	return (
		<div className='card'>
			<div className='text-block'>
				<h3 className='font-bold text-xl text-gray-50'>{data.label}</h3>
				<h2 className='font-bold text-2xl text-gray-50'> {data.value} </h2>
			</div>
			<div className='icon-block'>
				{
					/* @ts-expect-error */
					<box-icon
						size='lg'
						type={data.icon === 'globe' ? 'regular' : 'solid'}
						name={data.icon}
						color='rgba(206, 206, 208, 0.5)'></box-icon>
				}
			</div>
		</div>
	);
}

export default Stat;
