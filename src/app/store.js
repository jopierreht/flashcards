import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsSlice from "../features/topics/topicsSlice";
import quizzesSlice from "../features/quizzes/quizzesSlice";
import cardsSlice from "../features/cards/cardsSlice";


export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzesSlice,
    cards: cardsSlice,
  },
});
