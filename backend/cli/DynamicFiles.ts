import * as tools from "./tools";

export class DynamicFile {
	private pathAndFileName = "";
	private content = "";
	private lines: string[] = [];

	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
		this.content = tools.readContentOfFile(this.pathAndFileName);
		this.lines = tools.convertStringBlockToLines(this.content);
	}

	public addStringBlockBeforeMarker(marker: string, stringBlock: string) {
		const newLines: string[] = [];
		for (const line of this.lines) {
			if (line.includes(marker)) {
				newLines.push(stringBlock);
			}
		}
		this.lines = newLines;
	}

	public save() {
		const newContent = tools.convertLinestoStringBlock(this.lines);
		tools.createFile(this.pathAndFileName, newContent);
	}

	public debug() {
		console.table({
			pathAndFileName: this.pathAndFileName,
			numberOfLines: this.lines.length,
		});
		console.log(
			`CONTENT OF FILE:
        ---------------------
        ${this.content.trim()}
        --------------------
        LINES OF FILE:
        ----------------------------------------------------
        ${this.lines.map((m, index) => index + ": " + m + "\n").join("")}
        ----------------------------------------------------
        `
		);
	}
}
