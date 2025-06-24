import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import { getProjectData } from "./projectsData";

const ProjectWrapper: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId) {
    return <Navigate to="/work" replace />;
  }

  const projectData = getProjectData(projectId);

  if (!projectData) {
    return <Navigate to="/work" replace />;
  }

  return <ProjectPage data={projectData} />;
};

export default ProjectWrapper;
