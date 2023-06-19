import { db } from '../config';
import uuid from 'react-native-uuid';

export const addWord = async (title, description) => {
    return new Promise((resolve, reject) => {
        const id = uuid.v4();
        var strftime = require('strftime')
        const createdAt = strftime('%H:%M:%S')
        db.transaction(tx => {
            tx.executeSql(
                "insert into Words (id, title, defination, createdAt, isBookmarked) values (?, ?, ?, ?, 0)",
                [id, title, description, createdAt],
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

export const getAllWordsByTagList = async (tagList) => {
    let query = "select w.* from Tags t inner join Words w on t.wordId = w.id where t.tag in (";
    for (let i = 1; i <= tagList.length; i++) {
        if (i == tagList.length) query += "?)";
        else query += "?,";
    }

    console.log("query is :", query, tagList);
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                query,
                tagList,
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

export const getAllWordsByTitle = async (title) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "select * from Words w where w.title LIKE (?)",
                [`%${title}%`],
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

export const updateBookmark = async (id, bookmark) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "update Words set isBookmarked = (?) where id = (?)",
                [bookmark, id],
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

export const getRandomWords = async (limit) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "select * from Words order by RANDOM() LIMIT (?)",
                [limit],
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

export const addWords = async (words) => {
    return new Promise((resolve, reject) => {
        let arry = [];
        let sql = 'insert into Words (id, title, defination) values '
        words.forEach((element, index) => {
            const id = uuid.v4();
            sql += '(?, ?, ?)'
            if (index < words.length - 1) {
                sql += ','
            }
            arry.push(id)
            arry.push(element.title)
            arry.push(element.definition)
        });
        console.log(sql)
        console.log(arry)
        db.transaction(tx => {
            tx.executeSql(
                sql,
                arry,
                (tx, results) => {
                    resolve();
                },
                (tx, error) => { reject(`Error while adding data: ${error}`) }
            );

        });
    })
};