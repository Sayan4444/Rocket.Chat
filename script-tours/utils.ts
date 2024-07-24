import fs from 'fs/promises';
import path from 'path';

type StepObj = {
	file: string;
	description: string;
	searchString: string;
	title?: string;
	offset?: number;
};

export async function createStep(stepObj: StepObj) {
	try {
		const { file, description, searchString, title, offset = 0 } = stepObj;
		const filePath = path.resolve(__dirname, '..', file);
		const fileContent = await fs.readFile(filePath, 'utf8');
		const lines = fileContent.split('\n');

		for (let i = 0; i < lines.length; i++) {
			if (lines[i].includes(searchString)) {
				return { file, description, line: i + 1 + offset, title };
			}
		}
	} catch (error: any) {
		console.log(error.message);
	}
}

export const slugify = (str:string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

