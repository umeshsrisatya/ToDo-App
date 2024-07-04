import React from "react";
import { useState } from "react";
function App() {
	const [toDoItem, setToDoItem] = useState("");
	const [listOfToDoS, setListOfToDoS] = useState([]);
	function handleChange(event) {
		const note = event.target.value;
		setToDoItem(note);
	}
	function handleClick() {
		setListOfToDoS((prev) => {
			return [...prev, toDoItem];
		});
		setToDoItem("");
	}
	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input type="text" onChange={handleChange} value={toDoItem} />
				<button onClick={handleClick}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{listOfToDoS.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
