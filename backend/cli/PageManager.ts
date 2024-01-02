import * as tools from "./tools";

export class PageManager {
	private idCode = ``;
	private pageIdCode = ``;
	private pageFileName = ``;
	private pathAndFileName = ``;

	constructor(idCode: string) {
		if (!idCode) {
			throw Error("invalid idCode");
		}

		this.idCode = tools.capitalizeFirstLetter(idCode);
		this.pageIdCode = `Page${this.idCode}`;
		this.pageFileName = `${this.pageIdCode}.tsx`;
		this.pathAndFileName = `src/pages/${this.pageFileName}`;

		// const pageFileName = `Page${pageIdCode}.tsx`;
		// const pathAndFileName = `src/pages/${pageFileName}`;
	}

	public createPage() {
		tools.createFile(
			this.pathAndFileName,
			`
export const Page${this.pageIdCode} = () => {
	return (
		<p>This is the ${this.pageIdCode} page.</p>
	)
}
`
		);
	}

	debug() {
		console.table({
			idcode: this.idCode,
			pageIdCode: this.pageIdCode,
			pageFileName: this.pageFileName,
			pathAndFileName: this.pathAndFileName,
		});
	}
}
