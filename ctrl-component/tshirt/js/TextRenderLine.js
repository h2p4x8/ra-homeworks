const TextRenderLine = ({value, onChange}) => {
	const onChangeText = (e) => {
		onChange(e.target.value)
	}

	return (
		<div className="type-text">
			<textarea name="text"
								id="font-text"
								cols="30"
								rows="2"
								defaultValue = {value}
								placeholder="Введите текст для футболки"
								onChange={onChangeText}>
			</textarea>
		</div>
	);
};
