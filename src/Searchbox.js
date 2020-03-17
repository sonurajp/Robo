import React from 'react';

const Serachbox=({searchChange})=>
{
	return(
	<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue' 
		type="text"
		placeholder='search robots'
		onChange={searchChange} //onChange is a html event
		/>
	</div>
		)
}
export default Serachbox;