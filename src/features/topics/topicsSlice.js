import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = { 
                id: id,
                name: name,
                icon: icon, 
                quizIds: [] 
            }
            }
        },

        selectors: (state) => {
            return state.topics;
        },

        extraReducers: (builder) => {
            builder
                .addCase('quizzes/addQuiz', (state, action) => {
                    const { id, topicId } = action.payload;
                    if (state.topics[topicId]) {
                        state.topics[topicId].quizIds.push(id);
                    }
                });
        }

  
    });

    export const { addTopic } = topicsSlice.actions;
    export const selectTopics = (state) => state.topics.topics;
    export default topicsSlice.reducer;
