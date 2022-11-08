import React from 'react'
import SideButton from './SideButton'

export default function ButtonsPair({ left = null, right = null }) {
	return (
		<>
			{
				left &&
				<div className="animated-button-container left" >
					<SideButton link={left.link} title={left.title} left />
				</div>
			}

			{
				right &&
				<div className="animated-button-container right" >
					<SideButton link={right.link} title={right.title} right />
				</div>
			}





			<div className='buttons-pair-sm-container'>
				{left && <SideButton link={left.link} title={left.title} left />}
				{right && <SideButton link={right.link} title={right.title} right />}
			</div>




		</>
	)
}
