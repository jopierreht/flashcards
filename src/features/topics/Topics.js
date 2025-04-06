import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selector
import { selectTopics } from "./topicsSlice";
import { useSelector } from "react-redux";

/**
 * Topics component renders a list of topics and provides a link to create a new topic.
 * 
 * This component uses the `useSelector` hook to retrieve the list of topics from the Redux store.
 * Each topic is displayed as a clickable link that navigates to the topic's detail page.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered Topics component.
 * 
 * @example
 * // Example usage:
 * <Topics />
 * 
 * Notes:
 * - The `topics` object is expected to be an object where each key is a topic ID and the value is the topic data.
 * - Each topic contains the following properties:
 *   - `id` (string): The unique identifier for the topic.
 *   - `icon` (string): The URL of the topic's icon image.
 *   - `name` (string): The name of the topic.
 *   - `quizIds` (array): An array of quiz IDs associated with the topic.
 * - The `ROUTES` object is expected to provide route-generating functions:
 *   - `ROUTES.topicRoute(topicId)` generates the route for a specific topic.
 *   - `ROUTES.newTopicRoute()` generates the route for creating a new topic.
 */
export default function Topics() {
  const topics = useSelector(selectTopics); // replace this with a call to your selector to select all the topics in state

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
            <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
              <div className="topic-container">
                <img src={topic.icon} alt="" />
                <div className="text-content">
                  <h2>{topic.name}</h2>
                  <p>{topic.quizIds.length} Quizzes</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
