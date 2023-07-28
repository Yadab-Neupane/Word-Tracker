import { openDatabase } from 'expo-sqlite';
export const db = openDatabase('dbtest80');

export const createWordDb = async () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'create table if not exists Words (id text primary key not null, title text, defination text, createdAt text, isBookmarked int);',
				[],
				(tx, results) => {
					resolve(true);
				},
				(tx, error) => {
					console.log(`Error creating words db ${error}`);
					reject(false);
				}
			);
		});
	});
};

export const createTagDb = async () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'create table if not exists Tags (id text primary key not null, wordId text not null, tag text not null);',
				[],
				(tx, results) => {
					resolve(true);
				},
				(tx, error) => {
					console.log(`Error creating tags db ${error}`);
					reject(false);
				}
			);
		});
	});
};

export const createQuizDb = async () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'create table if not exists Quiz (id text primary key not null, correct integer not null, incorrect integer not null, createdAt text not null);',
				[],
				(tx, results) => {
					resolve(true);
				},
				(tx, error) => {
					console.log(`Error creating tags db ${error}`);
					reject(false);
				}
			);
		});
	});
};

export const createGoalDb = async () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'create table if not exists Goal (id text primary key not null, daily integer not null, weekly integer not null, monthly integer not null, createdAt text not null);',
				[],
				(tx, results) => {
					resolve(true);
				},
				(tx, error) => {
					console.log(`Error creating goal db ${error}`);
					reject(false);
				}
			);
		});
	});
};

export const deleteAllTables = async () => {
	return new Promise((resolve, reject) => {
		db.exec(
			[
				{ sql: 'Delete from Quiz;', args: [] },
				{ sql: 'Delete from Words;', args: [] },
				{ sql: 'Delete from Tags;', args: [] },
				{ sql: 'Delete from Goal;', args: [] },
			],
			false,
			(err, res) => {
                if(err) {
                    reject(false)
                }
                resolve(true)
            }
		);
	});
};
