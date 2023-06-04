import { openDatabase } from "expo-sqlite";
export const db = openDatabase("dbtest66");


export const createDb = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists Words (id text primary key not null, title text, description text);",
                [],
                (tx, results) => resolve(results),
                () => reject("Db connection failed!")
            );

            // tx.executeSql(
            //     "create table if not exists Tags (id text primary key not null, wordId text not null, tag text not null);",
            //     []
            // );
        })
    });
};

export const deleteDb = () => {
    db.transaction(tx => {
        tx.executeSql(
            "delete table Words;",
            []
        );

        // tx.executeSql(
        //     "delete table Tags;",
        //     []
        // );
    });
};
