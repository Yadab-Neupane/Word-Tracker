import { db } from '../config';
import uuid from 'react-native-uuid';

export const addWord = async (word, defination) => {
    return new Promise((resolve, reject) => {
        const id = uuid.v4();
        db.transaction(tx => {
            tx.executeSql(
                "insert into Words (id, word, defination) values (?, ?, ?)",
                [id, word, defination],
                (tx, results) => {
                    resolve(id);
                },
                () => reject("Error while adding data")
            );

        });
    })
};

export const getAllWords = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "select * from Words w",
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    resolve(temp);
                },
                () => reject("error while fetching")
            );

        });
    })
};

export const getWordById = async (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "select * from Words where id = (?)",
                [id],
                (tx, results) => {
                    resolve(results.rows.item(0));
                },
                () => reject("error fetching")
            );

        });
    })
};

export const updateWord = async (id, word, defination) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "update Words set word = (?), defination = (?) where id = (?)",
                [word, defination, id],
                (tx, results) => {
                    resolve("Updated successfully");
                },
                () => reject("Error while adding data")
            );

        });
    })
};

export const deleteAllWords = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "delete from Words",
                [],
                (tx, results) => {
                    resolve("Successully deleted!");
                },
                () => reject("Failed to delete data!")
            );

        });
    })
};