import { projects } from "../data/projects";

export function renderProjects() {
  const container = document.querySelector(".projectContainer") as HTMLElement;

  projects.forEach((project) => {
    container.innerHTML += `
           <div class="projectCard">
               <h3>${project.title}</h3>
               <p>${project.description}</p>
               <div class="buttonRow">
                 <a href="${project.liveLink}" target="_blank" class="btn">Open</a>
                 <a href="${project.repoLink}" target="_blank" class="btn">Github repo</a>
               </div>
           </div>
        `;
  });
}
