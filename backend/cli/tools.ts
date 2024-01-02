export const getArgument = (index = 0) => {
	return process.argv[index + 2];
};

/**
 * Creates a file with content
 *
 * qfil.createFile('src/data/infos.json', '[]');
 *
 * (file is created)
 */
