import React from "react";
function ToDoItem(props) {
	return (
		<div
			onClick={() => {
				props.isChecked(props.id);
			}}>
			<li>{props.item}</li>
		</div>
	);
}
export default ToDoItem;
