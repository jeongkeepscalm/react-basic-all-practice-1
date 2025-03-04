import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectedSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        projectId: prev.selectedProjectId,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter(task => task.id !== taskId)
      }
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((prev) => {
      // selectedProjectId: null 은 프로젝트 추가 상태를 의미한다.
      return { ...prev, selectedProjectId: null };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prev,
        selectedProjectId: undefined, // 프로젝트를 선택하지 않은 상태로 돌린다.
        projects: [...prev.projects, newProject],
      };
    });
  };

  console.log(projectsState);

  const handleCancelAddProject = () => {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          projects={projectsState.projects}
          onStartAddProject={handleStartAddProject}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
