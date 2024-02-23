import fs from 'fs/promises';
import path from 'path';
import repositoryOverview from './repositoryOverview';
import messageSentClient from './messageSentClient';
import { fileNames } from './utils';

async function main() {
	try {
		const baseDir = path.resolve(__dirname, '..');
		const newDir = path.join(baseDir, '.tours');
		await fs.mkdir(newDir, { recursive: true });
		const toursObjArray = await Promise.all([repositoryOverview(), messageSentClient()]);
		console.log(toursObjArray);

		fileNames.forEach(async (fileName, index) => {
			const newFile = path.join(newDir, fileName);
			await fs.writeFile(newFile, JSON.stringify(toursObjArray[index], null, 2));
		});
	} catch (error: any) {
		console.log(error.message);
	}
}

main();
