//dom element selectors
const dom = {
    nav: document.getElementById("nav"),
    panels: [
        document.getElementById("resource-content"),
        document.getElementById("cdn-content"),
        document.getElementById("images-content"),
        document.getElementById("pagespeed-content")
    ]
}

const fn = {
    hidePanels: (currentPanel) => {
        dom.panels.forEach((panel) => {
            if (panel.id != currentPanel) {
                panel.className = "hidden";
            }
        });
    },
    tabClick: (e) => {
        //remove existing active classes
        let activeTabs = document.querySelectorAll(".active");
        activeTabs.forEach((tab) => {
            tab.className = tab.className.replace("active", "");
        });
        console.log(e.target.innerText);

        //Add active class to element clicked
        e.target.className += "active";

        //remove existing active classes
        var activePanels = document.querySelectorAll(".visible");

        switch (e.target.innerText) {
            case "Resource Prioritisation":
                fn.hidePanels("resource-content");
                dom.panels[0].className = "visible";
                break;
            case "CDN":
                fn.hidePanels("cdn-content");
                dom.panels[1].className = "visible";
                break;
            case "Images":
                fn.hidePanels("images-content");
                dom.panels[2].className = "visible";
                break;
            case "Pagespeed":
                fn.hidePanels("pagespeed-content");
                dom.panels[3].className = "visible";
                break;
        }

    }
}

dom.nav.childNodes.forEach((e) => {
    e.addEventListener("click", fn.tabClick);
})

//Logs
console.log(dom, fn);