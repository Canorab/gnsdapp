import './StatBlock.css';

import {Language, PeopleAlt} from '@mui/icons-material';

import React from 'react';
import Stat from './Stat';
import {hoursAgo} from '@/utils/helpers';
import useAuth from '@/hooks/useAuth';
import {useGetUserStatsQuery} from '@/features/dashboard/dashboardApiSlice';
import useSelectUserReferrals from '@/hooks/useSelectUserReferrals';
import useSelectUserStats from '@/hooks/useSelectUserStats';
import {useSelector} from 'react-redux';

// Import {type StatProps} from 'types/propTypes';
// import Stat from '../../../../../components/cards/Stat';

/*
1. Template Level components should solely exist for rendering data on the Ui using Components (Atoms, molecules and Organisms)
2. They should simply receive that data to render and pass it on to the components for rendering;
modifying (injecting and removing fields) the data if necessary, performing conditonal checks to determine what data to pass on to what component
or what component to render at a gven time.
2. They should have no idea how the data is being used or processed by the components.

This Template fetches (or Receives) a data prop of type <array of objects> ([{},{}]) with the following structure:
[
{
  id: Number,
  label: String
  value: Number
  timestamp: Date
  icon: String (Icon label name) - you can include this field in the DB
}
]
some of the fields like; icon should be injected into the various data objects from here because it doesn't come with it from the Backend

*/

function StatBlock() {
	/*
	This data will be receved in the props or fetchedd from RTK Global state in production
	*/
	// Get Auth user
	const authUser = useAuth();

	// Prefetch  User Stats
	const {isSuccess} = useGetUserStatsQuery(authUser.username);
	// Get User's Total Referrals Count

	// Instantiate a Selector to get the User stats from state
	const userStatsSelector = useSelectUserStats(authUser.username);

	// Get the user stats from state
	const userStats = useSelector(userStatsSelector.selectAll);

	// Get User's Today's Referrals Count
	/*
	1. Fetch all of the user's referrals from cache
	*/
	// const referralsList = useSelector(referralsCache.selectAll);
	/*
	2. Filter through and return only those with a createdAt value of less than  24  hours ago. Should retrun and array
	3. Get the length of the returned array
	*/

	// const listWithDateAgo = referralsList.map((user) => {
	// 	const createdAgo = hoursAgo(user.createdAt);
	// 	return {createdAgo, ...user};
	// });
	// const todayList = referralsList
	// 	.map((user) => {
	// 		const createdAgo = hoursAgo(user.createdAt);
	// 		return {createdAgo, ...user};
	// 	})
	// 	.filter((user) => user.createdAgo <= 24);

	// // Get the count
	// const todayReferralsCount = todayList.length;

	// Console.log('List with Ago', todayReferralsCount);

	// ReferralsList.filter(() => )
	// Console.log(userReferrals.selectAll);
	let statData: Array<{
		id: number;
		label: string;
		value: number;
		iconType: string;
		icon: string;
	}> = [];

	if (isSuccess) {
		statData = [
			{
				id: 1,
				label: 'Total Signups',
				value: userStats[0].totalusers,
				iconType: 'user',
				icon: 'group',
			},
			{
				id: 2,
				label: 'Total Points',
				value: userStats[0].totalusers,
				iconType: 'user',
				icon: 'award',
			},
			{
				id: 3,
				label: 'Total Domains',
				value: userStats[0].totalDomains,
				iconType: 'domain',
				icon: 'diamond',
			},
			{
				id: 4,
				label: 'Signups Today',
				value: userStats[0].todayUsers,
				iconType: 'user',
				icon: 'group',
			},
			{
				id: 5,
				label: 'Domains Today',
				value: userStats[0].todayDomains,
				iconType: 'domain',
				icon: 'diamond',
			},
		];
	}

	return (
		<div className='stat-block'>
			{/* <h3>Stat Block Widget</h3> */}
			{statData.map((item, index) => (
				<Stat key={item.id} data={item} />
			))}
			{/* <Stat
					key={item.id}
					data={item}
					icon={
						item.iconType === 'user' ? (
							<PeopleAlt className='card-icon' style={{fontSize: 60}} />
						) : (
							<Language className='card-icon' style={{fontSize: 60}} />
						)
					}
				/>
			))} */}

			{/* <Stat />
			<Stat />
			<Stat /> */}
		</div>
	);
}

export default StatBlock;
