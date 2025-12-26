import { GetSection } from "../utils/GetSection";

import type { Project } from "../types";

export function RenderProjects(projectsList: Project[]){
    const section = GetSection("projects");

    if(projectsList.length === 0){
        const error = document.createElement("div");
        error.innerHTML = 
        `
            <h2>There was an error loading the project data. Please bother me somewhere if you see this!</h2>
        `;

        section.appendChild(error);
        return;
    }

    projectsList.map((project, i) => section.appendChild(CreateCard(project, i)));
}

function CreateCard(data: Project, key: number | string): HTMLElement{
    const element = document.createElement("div");
    element.classList.add("project-card")
    element.id = String(key);

    

    element.innerHTML =
    `
        <div class="project-card-left">
            <h3 class="fancy-hover-underline">${data.projectName}</h3>
            <p>${data.projectDescription}</p>
            <div class="tags">
            </div>
        </div>
        <div class="project-card-right">
            <img src=${data.projectImg}
            />
            <div class="project-card-buttons">
                <button class="primary-btn">Demo</button>
                <button class="primary-btn">GitHub</button>
            </div>
        </div>
    `;

    const tags = element.getElementsByClassName("tags")[0];
    if(tags){
        data.techUsed.map((tech) => {
            const tag = document.createElement("span");
            tag.classList.add("tech");
            tag.textContent = " " + tech;
            tags.appendChild(tag);
        })
    }

    return element;
}


export function InitProjects(projectsList: Project[]){
    RenderProjects(projectsList);
}