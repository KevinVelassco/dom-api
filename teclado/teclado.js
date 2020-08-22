const d = document;

export function shortcuts(e, menu){
    /*console.log(e.type);
    console.log(e.key);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    console.log(e.altKey);*/

    if(e.key.toLowerCase() === "z" && e.ctrlKey){
        d.querySelector(menu).click();
    }
}