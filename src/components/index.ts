import { InitHeader } from "./Header";
import { SectionsList } from "./SectionsList";


export function InitComponents(SwitchDisplayMode: () => void){
    InitHeader();
    SectionsList(SwitchDisplayMode, ["About", "Projects", "Contact"]);
}