import "./simplemode.css";
import type { AboutInfo, Project } from "../types";
import { GetSection } from "../utils/GetSection";

export function RenderSimpleMode(aboutData: AboutInfo, projectData: Project[]){
    const section = GetSection("about");

    if(!section) return;

    section.classList.add("simple-mode");

    section.innerHTML = `<h1>WOW!</h1>`;

    const projectsList = document.createElement("div");
    projectsList.classList.add("projects-simple");
    
    if(projectData.length > 0){
        projectData.map(project => {
            projectsList.appendChild(CreateProjectItem(project));
        })
    }
}


function CreateProjectItem(project: Project): HTMLElement{
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-card-simple");

    projectItem.innerHTML = `
    
    `;

    return projectItem;
}