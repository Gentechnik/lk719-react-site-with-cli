import * as tools from "./tools";

export class PageManager {
	private idCode = ``;

	constructor(idCode: string) {
		this.idCode = tools.capitalizeFirstLetter(idCode);
	}

	public getIdCode() {
		return this.idCode;
	}
}
