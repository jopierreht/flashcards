import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
// Import selectors for accessing state slices
import { selectTopics } from "./topicsSlice";
import { selectQuizzes } from "../quizzes/quizzesSlice";

export default function Topic() {
  // Get the topics and quizzes data from the Redux store
  const topics = useSelector(selectTopics);  
  const quizzes = useSelector(selectQuizzes); 

  // Get the topicId from the URL parameters
  const { topicId } = useParams();

  // Find the topic corresponding to the topicId
  const topic = topics[topicId];

  // If the topic does not exist, redirect to the topics route
  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />;
  }

  // Get the quizzes associated with the topic using the quizIds
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      {/* Display the topic's icon and name */}
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>

      {/* Render a list of quizzes for the topic */}
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            {/* Link to the quiz page */}
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>

      {/* Link to create a new quiz */}
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
