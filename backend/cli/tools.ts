import fs from "fs";

export const getArgument = (index = 0) => {
	return process.argv[index + 2];
};

export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

/**
 * Creates a file with content
 *
 * qfil.createFile('src/data/infos.json', '[]');
 *
 * (file is created)
 */
