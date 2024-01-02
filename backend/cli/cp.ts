import * as tools from "./tools";

const pageIdCode = tools.getArgument();
const option = tools.getArgument(1);

const pageFileName = `Page${pageIdCode}.tsx`;

console.log(`Creating ${pageFileName} with option ${option}...`);
