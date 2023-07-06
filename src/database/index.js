export { createWordDb, createTagDb, createQuizDb } from '../database/config';
export {
	addWord,
	getAllWords,
	getWordById,
	deleteAllWords,
	deleteWordById,
	updateWord,
	getRandomWords,
	addWords,
	getAllWordsByTitle,
	updateBookmark,
	getAllWordsByTagList,
	getAllWordsByDateRange
} from '../database/Word/index';
export {
	addTag,
	getAllTagsByWordId,
	getTagByTagId,
	deleteTagById,
	updateTag,
	getAllTags
} from '../database/Tag/index';
export {
	addScore,
	getScores,
	getRecords
} from '../database/Quiz/index';
