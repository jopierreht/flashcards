import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = { 
                id: id, 
                name: name,
                topicId: topicId,
                cardIds: cardIds,
            }
        },
    },
});



// selector
export const selectQuizzes = (state) => state.quizzes.quizzes;

// actions + reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;