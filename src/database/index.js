export { createWordDb, createTagDb, createQuizDb, createGoalDb, deleteAllTables } from '../database/config';
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
	getAllWordsByDateRange,
	getRandomWordsForNotification
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
	getRecords,
	getWordCountByDay,
	getQuizResults
} from '../database/Quiz/index';

export {
	addGoals,
	getGoals,
	getCurrentRecords
} from '../database/Goals/index';
