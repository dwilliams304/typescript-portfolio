import { GetSection } from "./GetSection";

export function RerenderAll(){
    RerenderComponents();
    RerenderSections();
}

export function RerenderComponents(){
    const header = document.getElementById("site-header");
    ClearInnerHtml(header);
    const sectionsList = document.getElementById("sections-list");
    ClearInnerHtml(sectionsList);
}   

export function RerenderSections(){
    const about = GetSection("about");
    ClearInnerHtml(about);
    const projects = GetSection("projects");
    ClearInnerHtml(projects);
    const Contact = GetSection("contact");
    ClearInnerHtml(Contact);
}

export function RerenderSection(sectionId: string){
    const section = GetSection(sectionId);
    ClearInnerHtml(section);
}

function ClearInnerHtml(element: HTMLElement | null){
    if(element) element.innerHTML = "";
}