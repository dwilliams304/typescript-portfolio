import "./simplemode.css";
import type { AboutInfo, Project } from "../types";
import { GetSection } from "../utils/GetSection";

export function RenderSimpleMode(aboutData: AboutInfo, projectData: Project[]){
    const section = GetSection("about");

    if(!section) return;

    section.classList.add("simple-mode");

    const projectsList = document.createElement("div");
    projectsList.classList.add("projects-simple");
    
    if(projectData.length > 0){
        projectData.map(project => {
            projectsList.appendChild(CreateSimpleProjectCard(project));
        })
    }

    section.appendChild(projectsList);
}


function CreateSimpleProjectCard(project: Project): HTMLElement{
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-card-simple");

    projectItem.innerHTML = `
        <h3>${project.projectName}</h3>
        <p>${project.projectDescription}</p>
        <p><span class="txt-highlight-p-co">Tech Used: </span>${project.techUsed.map(tech => tech)}</p>
        <div>
            <a>Github</a>
            <a>Demo</a>
        </div>
    `;

    return projectItem;
}