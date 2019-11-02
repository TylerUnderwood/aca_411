import React from 'react';

const List = props => (

	<ul className="frame-top">
	{
		props.items.map((item, index) => (
			<li key={index} className="m-t">
				{ isEditing ? <>
					<input value={item}></input><button className="btn m-l">SUBMIT</button>
				</>:<>
					<span>{item}</span><button className="btn m-l" onClick="">EDIT</button>
				</> }
			</li>
		))
	}
	</ul>
);

export default List;