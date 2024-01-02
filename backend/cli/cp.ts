import { PageManager } from "./PageManager";
import * as tools from "./tools";

const pageIdCode = tools.getArgument(0);

try {
	const pageManager = new PageManager(pageIdCode);
	// pageManager.debug();
	pageManager.createPage();
} catch (error) {
	console.log(
		`
	COMMAND: cp (create page)
	Syntax: npm run cp <pageIdCode>
	Example: npm run cp Reports`.trim()
	);
}
