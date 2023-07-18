import React, { useState, useEffect, useReducer } from "react";
import { API_ENDPOINT } from "../../config/constants";
interface Project {
  id: number;
  name: string;
}
interface State {
  projects: Project[];
  isLoading: boolean;
}
interface Action {
  type: string;
  payload?: any;
}
const reducer = (state: State, action: Action): State => {
  if (action.type === "API_CALL_START") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "API_CALL_END") {
    return {
      ...state,
      isLoading: false,
      projects: action.payload,
    };
  }
  if (action.type === "API_CALL_ERROR") {
    return {
      ...state,
      isLoading: false,
    };
  }
  return state;
};
const ProjectList: React.FC = () => {
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, {
    projects: [],
    isLoading: false,
  });
  useEffect(() => {
    // Fetch the list of projects here
    console.log("Fetching projects...");
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    const token = localStorage.getItem("authToken") ?? "";

    try {
      // setIsLoading(true);
      dispatch({ type: "API_CALL_START" });
      const response = await fetch(`${API_ENDPOINT}/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      dispatch({ type: "API_CALL_END", payload: data });
      console.log(data, "data");
    } catch (error) {
      console.log("Error fetching projects:", error);
      dispatch({ type: "API_CALL_ERROR" });
      // setIsLoading(false);
    }
  };
  return (
    <div>
      <h2>Project List</h2>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {state.projects.map((project: any) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ProjectList;
