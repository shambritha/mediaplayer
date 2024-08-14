import Button from '@enact/sandstone/Button';
import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';
import { IconBase } from '@enact/sandstone/Icon'; 
import IconItem from '@enact/sandstone/IconItem';
import './MainPanel.css';
import BodyText from '@enact/sandstone/BodyText';
import Heading from '@enact/sandstone/Heading';

import Icon from '@enact/sandstone/Icon';
import { Component } from 'react';

const MainPanel = kind({
	name: 'MainPanel',


	render: (props) => (
		<Panel {...props}>
			<div >
				<div className='navbar-container'>
					<div className='heading-container'>
						<Heading
							size="large"
							spacing="small"
						>
							Media Player
						</Heading>
						<BodyText>LG SI</BodyText>

					</div>
					
					<div className='icon-containers'>

						<div>
							<IconItem
								background="#1b1b1b"

								icon="search"
								style={{
									height: 80,
									width: 104
								}}
							/>

						</div>

						<div>
							<IconItem
								background="#1b1b1b"

								icon="list"
								style={{
									height: 80,
									width: 104
								}}
							/>

						</div>

						<div>
							<IconItem
								background="#1b1b1b"

								icon="closex"
								style={{
									height: 80,
									width: 104
								}}
							/>
						</div>


					</div>


				</div>

				<div className='folders-container'>
				<div >
						<IconItem icon="folder" className='player-background' />
					</div>
					<div>
						<IconItem icon="folder" className='player-background' />
					</div>
					<div>
						<IconItem icon="folder" className='player-background' />
					</div>
					

				</div>

			</div>
		</Panel>
	)
});

export default MainPanel;
