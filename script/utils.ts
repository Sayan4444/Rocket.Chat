import fs from 'fs/promises';
import path from 'path';

type StepObj = {
	file: string;
	description: string;
	searchString: string;
	title?: string;
};

export async function createStep(stepObj: StepObj) {
	try {
		const { file, description, searchString, title } = stepObj;
		const filePath = path.resolve(__dirname, '..', file);
		const fileContent = await fs.readFile(filePath, 'utf8');
		const lines = fileContent.split('\n');

		for (let i = 0; i < lines.length; i++) {
			if (lines[i].includes(searchString)) {
				return { file, description, line: i + 1, title };
			}
		}
	} catch (error: any) {
		console.log(error.message);
	}
}

// export async function createStepDirectory(obj) {
// 	return obj;
// }

export const fileNames = [
	'1---repository-overview.tour',
	'2---how-a-message-is-sent.tour',
	'3---how-a-message-is-sent.tour',
	'4---how-to-create-an-endpoint.tour',
	'5---how-to-create-a-db-model.tour',
	'6---how-to-use-a-db-model.tour',
	'7---services.tour',
	'8---how-to-add-a-new-service.tour',
	'9---how-to-create-packages.tour',
];
