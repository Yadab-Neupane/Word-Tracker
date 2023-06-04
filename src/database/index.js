export { createWordDb, createTagDb } from '../database/config';
export { addWord, getAllWords, getWordById, deleteAllWords, deleteWordById, updateWord } from '../database/Word/index';
export { addTag, getAllTagsByWordId, getTagByTagId, deleteTagById, updateTag } from '../database/Tag/index';