import * as loggin from './features/loggin.feature';
import * as register from './features/register.feature';
import * as category from './features/categories.feature';
import * as flashcard from './features/flashcards.feature';

const reducers = {
    loggin: loggin.default.logginReducer,
    register: register.default.registerReducer,
    category: category.default.categoryReducer,
    flashcard: flashcard.default.flashcardReducer,
}
export default reducers;
