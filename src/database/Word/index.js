import { db } from '../config';
import uuid from 'react-native-uuid';

export const addWord = async (title, description) => {
    return new Promise((resolve, reject) => {
        const id = uuid.v4();
        db.transaction(tx => {
            tx.executeSql(
                "insert into Words (id, title, defination) values (?, ?, ?)",
                [id, title, description],
                (tx, results) => {
                    resolve(id);
                },
                (tx, error) => { reject(`Error while adding data: ${error}`) }
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
                (tx, error) => { reject(`Error while fetching data: ${error}`) }
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
                (tx, error) => { reject(`Error while fetching data: ${error}`) }
            );

        });
    })
};

export const updateWord = async (id, title, description) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "update Words set title = (?), defination = (?) where id = (?)",
                [title, description, id],
                (tx, results) => {
                    resolve("Updated successfully");
                },
                (tx, error) => { reject(`Error while updaing data: ${error}`) }
            );

        });
    })
};

export const deleteWordById = async (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "delete from Words where id = (?)",
                [id],
                (tx, results) => {
                    resolve("Deleted Successfully")
                },
                (tx, error) => {
                    reject(`Error deleting ${error}`)
                }
            )
        })
    })
}

export const deleteAllWords = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "delete from Words",
                [],
                (tx, results) => {
                    resolve("Successully deleted!");
                },
                (tx, error) => { reject(`Error while deleting data: ${error}`) }
            );

        });
    })
};