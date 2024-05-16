import './DashFlow.css';

import LayoutContent from '../layout/body/LayoutContent';
import LayoutFooter from '../layout/footer/LayoutFooter';
import LayoutHeader from '../layout/header/LayoutHeader';
import React from 'react';
import SidebarLayout from '../layout/sidebar/SidebarLayout';

function DashFlow() {
	return (
		<div className='page dash-layout'>
			{/* <LayoutHeader /> */}
			<SidebarLayout />
			<LayoutContent />
			{/* <LayoutFooter /> */}
		</div>
	);
}

export default DashFlow;
