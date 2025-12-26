import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";
import { aboutData } from "./data/aboutData";
import { DummyProjectData } from "./data/projectData";

import { RenderSimpleMode } from "./simple/SimpleMode";



import { InitComponents } from "./components/";
import { RenderSections } from "./sections";
import { RerenderSections } from "./utils/ReRender";

let isSimpleMode = true;

const  SwitchDisplayMode = (): void => {
    isSimpleMode = !isSimpleMode;
    console.log(`Is in simple mode? ${isSimpleMode}`);
    RerenderSections();
    if(isSimpleMode) RenderSimpleMode(aboutData, DummyProjectData);
    else RenderSections(aboutData, DummyProjectData);
}

InitComponents(SwitchDisplayMode);
SwitchDisplayMode();