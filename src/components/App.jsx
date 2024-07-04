import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

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
	function deleteItem(id) {
		setListOfToDoS((prev) => {
			return prev.filter((item, index) => {
				return index != id;
			});
		});
	}
	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<InputArea handleChange={handleChange} toDoItem={toDoItem} handleClick={handleClick} />
			<div>
				<ul>
					{listOfToDoS.map((item, index, arr) => {
						return <ToDoItem key={index} id={index} isChecked={deleteItem} item={item} />;
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
