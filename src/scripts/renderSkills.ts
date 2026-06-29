import { skills } from "../data/skills";

export function renderSkills() {
  const container = document.querySelector(".skillContainer") as HTMLElement;
    
  skills.forEach((skill) => {
    container.innerHTML += `
           <div class="skill">
               <img src="${skill.image}" alt="${skill.span}" width="40px" height="40px" loading="lazy">
               <span>${skill.span}</span>
           </div>
        `;
  });
}