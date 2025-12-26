export function SectionsList(SwitchDisplayMode: () => void, sections: string[]){
    const aside = document.getElementById("sections-list");
    
    if(!aside) return;
    const list = document.createElement("ul");
    aside?.appendChild(list);

    if(sections.length > 0){
        sections.map((section, i) => {
            const sectionItem = document.createElement("li");
            sectionItem.textContent = section;
            sectionItem.classList.add("txt-underline-effect", i.toString());
            list.appendChild(sectionItem);
        })
    }

    const funButton = document.createElement("button");
    funButton.textContent = "Switch Modes";
    funButton.addEventListener("click", SwitchDisplayMode);
    list.appendChild(funButton);
}