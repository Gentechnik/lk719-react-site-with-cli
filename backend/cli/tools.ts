import fs from "fs";

export const getArgument = (index = 0) => {
	return process.argv[index + 2];
};

export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

export const capitalizeFirstLetter = (text: string) => {
	return text[0].toUpperCase() + text.slice(1);
};

export const readContentOfFile = (pathAndFileName: string) => {
	return fs.readFileSync(pathAndFileName, { encoding: "utf8", flag: "r" });
};

export const convertStringBlockToLines = (content: string) => {
	return content.split("\n");
};
export const convertLinestoStringBlock = (lines: string[]) => {
	return lines.join("\n");
};
