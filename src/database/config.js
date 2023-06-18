import { openDatabase } from "expo-sqlite";
export const db = openDatabase("dbtest68");


export const createWordDb = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists Words (id text primary key not null, title text, defination text, isBookmarked int);",
                [],
                (tx, results) => {
                    resolve(true);
                },
                (tx, error) => {
                    console.log(`Error creating words db ${error}`);
                    reject(false)
                }
            );
        })
    });
};

export const createTagDb = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists Tags (id text primary key not null, wordId text not null, tag text not null);",
                [],
                (tx, results) => {
                    resolve(true);
                },
                (tx, error) => {
                    console.log(`Error creating tags db ${error}`);
                    reject(false)
                }
            );
        })
    });
};

// export const deleteDb = async () => {
//     return new Promise((resolve, reject) => {
//         db.transaction(tx => {
//             tx.executeSql(
//                 "delete table Words;",
//                 []
//             );

//             // tx.executeSql(
//             //     "delete table Tags;",
//             //     []
//             // );
//         });
//     });
// };
