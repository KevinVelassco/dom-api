export default function menu(panelBtn, panel, menu) {
    document.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`) ||
            e.target.matches(menu)){
            document.querySelector(panel).classList.toggle("is-active");
            document.querySelector(panelBtn).classList.toggle("is-active");
        }
    })
}