import "./simplemode.css";
import type { AboutInfo, Project } from "../types";
import { GetSection } from "../utils/GetSection";

export function RenderSimpleMode(aboutData: AboutInfo, projectData: Project[]){
    const section = GetSection("About");

    if(!section) return;

    section.classList.add("simple-mode");

    section.innerHTML = `<h1>WOW!</h1>`;
}