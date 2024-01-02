import { DynamicFile } from "./DynamicFiles";
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
		this.createPageFile();
		this.addBlockToNavFile();
		this.addBlocksToMainFile();
	}

	private createPageFile() {
		tools.createFile(
			this.pathAndFileName,
			`
	export const ${this.pageIdCode} = () => {
		return (
			<p>This is the ${this.pageIdCode} page.</p>
		)
	}
`
		);
	}

	private addBlocksToMainFile() {
		const dynamicFile = new DynamicFile("src/main.tsx");

		dynamicFile.addStringBlockBeforeMarker(
			"MARKER::END_IMPORT_BLOCK",
			`import { Page${this.idCode} } from './pages/Page${this.idCode}.tsx';`
		);

		dynamicFile.addStringBlockBeforeMarker(
			"MARKER::END_PAGE_ROUTES",
			`
			{
				path: "${this.idCode.toLowerCase()}",
				element: <Page${this.idCode} />,
			},
		`
		);

		dynamicFile.save();
	}

	private addBlockToNavFile() {
		const dynamicFile = new DynamicFile("src/components/Nav.tsx");
		dynamicFile.addStringBlockBeforeMarker(
			`</ul>`,
			`\t\t\t\t<li>\n\t\t\t\t\t<NavLink to="/${this.idCode}">${this.idCode}</NavLink>\n\t\t\t\t</li>`
		);
		dynamicFile.save();
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
