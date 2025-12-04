class ButtonProps {
	text = "Ok";
	className = "action";
	action = () => {};
}

export class Modal {
	ButtonProps = ButtonProps;

	static createModal(id, buttonData = [new ButtonProps()]) {
		// Create modal
		let modal = document.createElement("dialog");
		modal.id = id;
		modal.classList.add("hy card modal");
		// Create modal's content div
		let content = document.createElement("div");
		content.classList.add("hy subcard center-text");
		// Create buttons div
		let buttons = document.createElement("div");
		buttons.classList.add("hy flex horizontal center");
		// Create modal buttons
		buttonData.forEach(btn => {
			let button = document.createElement("input");
			button.type		= "button";
			button.value	= btn.text;
			button.classList.add("hy button mini");
			button.classList.add(btn.className);
			button.onclick	= () => {btn.action(); modal.close()};
			buttons.appendChild(button);
		});
		// Set operation
		modal.onclose = () => {modal.remove()};
		// Append divs
		modal.appendChild(content);
		modal.appendChild(buttons);
		// Return modal & content div
		return [modal, content];
	}

	static custom(id, buttons = [new ButtonProps()]) {
		let [modal, content] = this.createModal(id, buttons);
		document.body.appendChild(modal);
		modal.showModal();
		return [modal, content];
	}
}