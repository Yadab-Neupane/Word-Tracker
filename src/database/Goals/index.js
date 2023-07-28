import { db } from '../config';
import uuid from 'react-native-uuid';

export const addGoals = async (daily, weekly, monthly) => {
    return new Promise((resolve, reject) => {
        const id = uuid.v4();
        var strftime = require('strftime');
        const createdAt = strftime('%F%T');
        db.transaction((tx) => {
            tx.executeSql(
                'insert into Goal (id, daily, weekly, monthly, createdAt) values (?, ?, ?, ?, ?)',
                [id, daily, weekly, monthly, createdAt],
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

export const getGoals = async () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from Goal order by strftime('%Y-%m-%d %H:%M:%S', createdAt) desc LIMIT 1`,
                [],
                (tx, results) => {
                    resolve(results.rows.item(0));
                },
                (tx, error) => {
                    reject(`Error while adding data: ${error}`);
                }
            );
        });
    });
};


export const getCurrentRecords = async () => {
    return new Promise((resolve, reject) => {
        var strftime = require('strftime');
        let date = new Date();
        let query = `SELECT COUNT(createdAt) as count, 'daily' as column 
                            FROM Words 
                            WHERE strftime('%Y-%m-%d', createdAt) == '${strftime('%F', date)}'  
                            group by strftime('%Y-%m-%d', createdAt)
                    UNION
                    SELECT COUNT(id) as count,  'weekly' AS column
                            FROM Words 
                            WHERE strftime('%W', createdAt) == '${strftime('%W', date)}'  
                            group by strftime('%W', createdAt)
                    UNION
                    SELECT COUNT(id) as count, 'monthly' AS column 
                            FROM Words 
                            WHERE strftime('%m', createdAt) == '${strftime('%m', date)}'  
                            group by strftime('%m', createdAt)`;
                            
        db.transaction((tx) => {
            tx.executeSql(
                query,
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