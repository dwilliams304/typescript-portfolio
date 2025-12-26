import "./styles/reset.css";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/sections.css";
import { aboutData } from "./data/aboutData";
import { DummyProjectData } from "./data/projectData";

import { RenderSimpleMode } from "./simplemode";



import { InitComponents } from "./components/";
import { RenderSections } from "./sections";

let isSimpleMode = true;

const  SwitchDisplayMode = (): void => {
    isSimpleMode = !isSimpleMode;
    console.log(`Is in simple mode? ${isSimpleMode}`);
    if(isSimpleMode) RenderSimpleMode(aboutData, DummyProjectData);
    else RenderSections(aboutData, DummyProjectData);
}

InitComponents(SwitchDisplayMode);
SwitchDisplayMode();


// if(isSimpleMode){
//     RenderSimpleMode(aboutData, DummyProjectData);
// }
// else RenderSections(aboutData, DummyProjectData);