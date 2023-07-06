import { db } from '../config';
import uuid from 'react-native-uuid';

export const addScore = async (correct, incorrect) => {
	return new Promise((resolve, reject) => {
		const id = uuid.v4();
		var strftime = require('strftime');
		const createdAt = strftime('%F%T');
		db.transaction((tx) => {
			tx.executeSql(
				'insert into Quiz (id, correct, incorrect, createdAt) values (?, ?, ?, ?)',
				[id, correct, incorrect, createdAt],
				(tx, results) => {
					resolve(id);
				},
				(tx, error) => {
					reject(`Error while adding data: ${error}`);
				}
			);
		});
	});
};

export const getScores = async () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'select * from Quiz',
				[],
				(tx, results) => {
					var temp = [];
					for (let i = 0; i < results.rows.length; ++i) temp.push(results.rows.item(i));
					resolve(temp);
				},
				(tx, error) => {
					reject(`Error while adding data: ${error}`);
				}
			);
		});
	});
};

export const getRecords = async () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT COUNT(*) AS Count, 'Words' AS Description FROM Words UNION ALL SELECT COUNT(*) AS Count, 'Quiz' AS Description FROM Quiz UNION ALL SELECT COUNT(*) AS Count, 'Bookmark' AS Description FROM Words Where isBookmarked = 1",
				[],
				(tx, results) => {
					var temp = [];
					for (let i = 0; i < results.rows.length; ++i) temp.push(results.rows.item(i));
					resolve(temp);
				},
				(tx, error) => {
					reject(`Error while adding data: ${error}`);
				}
			);
		});
	});
};
