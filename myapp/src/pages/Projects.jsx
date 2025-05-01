const projects = [
      { id: 1, name: 'Todo App', description: 'A task management app' },
      { id: 2, name: 'Weather App', description: 'Shows current weather info' },
      { id: 3, name: 'Portfolio Site', description: 'My personal portfolio' }
];

export function Projects() {
      return (
            <div>
                  {projects.map((project) => (
                        <div key={project.id}>
                              <h3>{project.name}</h3>
                              <p>{project.description}</p>
                        </div>
                  ))}
            </div>
      );
}