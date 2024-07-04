function InputArea(props) {
	return (
		<div className="form">
			<input type="text" onChange={props.handleChange} value={props.toDoItem} />
			<button onClick={props.handleClick}>
				<span>Add</span>
			</button>
		</div>
	);
}
export default InputArea;
