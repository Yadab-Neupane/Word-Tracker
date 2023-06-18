import { db } from '../config';
import uuid from 'react-native-uuid';

export const addTag = async (wordId, tag) => {
    return new Promise((resolve, reject) => {
        const id = uuid.v4();
        db.transaction(tx => {
            tx.executeSql(
                "insert into Tags (id, wordId, tag) values (?, ?, ?)",
                [id, wordId, tag],
                (tx, results) => {
                    resolve(id);
                },
                (tx, error) => { reject(`Error while adding data: ${error}`)}
            );

        });
    })
};

export const getAllTagsByWordId = async (wordId) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "select * from Tags where wordId = (?)",
                [wordId],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    resolve(temp);
                },
                (tx, error) => { reject(`Error while fetching data: ${error}`)}
            );

        });
    })
};

export const getTagByTagId = async (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "select * from Tags where id = (?)",
                [id],
                (tx, results) => {
                    resolve(results.rows.item(0));
                },
                (tx, error) => { reject(`Error while fetching data: ${error}`)}
            );

        });
    })
};

export const updateTag = async (id, tag) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "update Tags set tag = (?) where id = (?);",
                [tag, id],
                (tx, results) => {
                    resolve("Updated successfully");
                },
                (tx, error) => { reject(`Error while updating data: ${error}`)}
            );

        });
    })
};

export const deleteTagById = async (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "delete from Tags where id = (?)",
                [id],
                (tx, results) => {
                    resolve("Successully deleted!");
                },
                (tx, error) => { reject(`Error while deleting data: ${error}`)}
            );

        });
    })
};