import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice";

/**
 * Component for creating a new topic.
 *
 * This component renders a form that allows users to input a topic name and select an icon
 * from a dropdown menu. Upon submission, the new topic is dispatched to the Redux store
 * and the user is navigated to the topics page.
 *
 * @component
 * @returns {JSX.Element} The rendered NewTopicForm component.
 *
 * @example
 * <NewTopicForm />
 *
 * @requires useDispatch - A hook from 'react-redux' to dispatch actions to the Redux store.
 * @requires useState - A React hook to manage local component state.
 * @requires useNavigate - A hook from 'react-router-dom' to navigate programmatically.
 * @requires uuidv4 - A utility function to generate unique IDs for new topics.
 * @requires addTopic - A Redux action creator to add a new topic to the store.
 * @requires ROUTES - An object containing route definitions for navigation.
 * @requires ALL_ICONS - An array of objects representing available icons, each with a `name` and `url`.
 */
export default function NewTopicForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    // Dispatch new topic
    const newTopic = {
      id: uuidv4(),
      name: name,
      icon: icon,
    };
    dispatch(addTopic(newTopic));

    // Navigate to topics page
    navigate(ROUTES.topicsRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center" type="submit">Add Topic</button>
      </form>
    </section>
  );
}
