import { Modal } from "./hyacinth/js/modal.js";

export class Hyacinth {
	static Buttons = {
		OK: [
			{text: "Ok",		className: "info",	action: () => {}}
		],
		YesNo: [
			{text: "No",		className: "warn",	action: () => {}},
			{text: "Yes",		className: "ok",	action: () => {}}
		],
		YesNoCancel: [
			{text: "No",		className: "warn",	action: () => {}},
			{text: "Cancel",	className: "info",	action: () => {}},
			{text: "Yes",		className: "ok",	action: () => {}}
		],
	}

	static alert(
		title,
		message,
		buttons = this.Buttons.OK
	) {
		let [modal, content] = Modal.custom("hy-alert", buttons);
		const titleDisplay = document.createElement("h1");
		titleDisplay.classList.add("hy");
		titleDisplay.innerText = title;
		content.addChild(titleDisplay);
		const messageDisplay = document.createElement("p");
		messageDisplay.classList.add("hy");
		messageDisplay.innerText = message;
		content.addChild(messageDisplay);
		return [modal, content];
	}

	Modal = Modal;
};

export const hy = Hyacinth;