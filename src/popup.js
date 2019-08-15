//Notes
//Next steps
//Merge to master
//Clean up and refactor code
//Notes End

console.log("This is popup.js talking...");

let popupFunction = {
    hidePanels: (currentPanel) => {
        ui.panels.forEach((panel) => {
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
                popupFunction.hidePanels("resource-content");
                ui.panels[0].className = "visible";
                break;
            case "CDN Usage":
                popupFunction.hidePanels("cdn-content");
                ui.panels[1].className = "visible";
                break;
            case "Next-gen Images":
                popupFunction.hidePanels("images-content");
                ui.panels[2].className = "visible";
                break;
            case "Pagespeed Insights":
                popupFunction.hidePanels("pagespeed-content");
                ui.panels[3].className = "visible";
                break;
        }

    },
    sendMessage: () => {
        //Query tabs for the active tab in the current window
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, tabs => {
            //Execute a script on the active tab
            chrome.tabs.executeScript(tabs[0].id, {
                file: 'contentScript.js'
            });
        });
    },
    logLinks: () => {
        //Extract Link info and push into array
        for (let key in pageInfo.links) {
            pageInfo.linksArray.push(pageInfo.links[key]);
        }
        console.log(pageInfo.linksArray);
        //Check links for optimised resources
        pageInfo.linksArray.forEach((link) => {
            if (link.relationship == "preload" || link.relationship == "prerender" || link.relationship == "prefetch" || link.relationship == "preconnect" || link.relationship == "dns-prefetch") {
                pageInfo.optimisedResourcesFound = true;
            }
        });
        if (pageInfo.optimisedResourcesFound == true) {
            console.log("Optimised resources found");
        }
    },
    writeNonOptimised: () => {
        ui.displayNonOptimised.innerHTML = "";

        let list = document.createElement("ul");
        list.setAttribute("id", "nonOptimisedList");

        console.log(pageInfo.linksArray);
        pageInfo.linksArray.forEach((link) => {
            if (link.relationship != "preload" && link.relationship != "prerender" && link.relationship != "prefetch" && link.relationship != "preconnect" && link.relationship != "dns-prefetch") {
                //create and store li
                let li = document.createElement("li");
                //set li innerhtml to relationship + ":" + target
                li.innerHTML = `<span class="label label-rounded">${link.relationship}</span><a href="${link.target}" target="_blank">${link.target}</a>`;
                //append li to rscHintlist
                list.appendChild(li);
            }
        });

        //add list to DOM
        ui.displayNonOptimised.appendChild(list);
    },
    writeOptimised: () => {
        if (pageInfo.optimisedResourcesFound == true) {
            //clear rsc hint div
            ui.resourceHints.innerHTML = "";
            //create and store ul element
            let list = document.createElement("ul");
            //set attribute of ul element to rscHintList
            list.setAttribute("id", "rscHintList");
            //loop through pageInfo.links array
            for (let i = 0; i < pageInfo.linksArray.length; i++) {
                //if iterated item .relationship == preload,prefetch,prerender,preconnect,DNS-Prefetch
                if (pageInfo.linksArray[i].relationship == "preload") {
                    //create and store li
                    let li = document.createElement("li");
                    //set li innerhtml to relationship + ":" + target
                    li.innerHTML = `<span class="label label-rounded">${pageInfo.linksArray[i].relationship}</span>${pageInfo.linksArray[i].target}`;
                    //append li to rscHintlist
                    list.appendChild(li);
                } else if (pageInfo.linksArray[i].relationship == "prerender") {
                    //create and store li
                    let li = document.createElement("li");
                    //set li innerhtml to relationship + ":" + target
                    li.innerHTML = `<span class="label label-rounded">${pageInfo.linksArray[i].relationship}</span>${pageInfo.linksArray[i].target}`;
                    //append li to rscHintlist
                    list.appendChild(li);
                } else if (pageInfo.linksArray[i].relationship == "prefetch") {
                    //create and store li
                    let li = document.createElement("li");
                    //set li innerhtml to relationship + ":" + target
                    li.innerHTML = `<span class="label label-rounded">${pageInfo.linksArray[i].relationship}</span>${pageInfo.linksArray[i].target}`;
                    //append li to rscHintlist
                    list.appendChild(li);
                } else if (pageInfo.linksArray[i].relationship == "preconnect") {
                    //create and store li
                    let li = document.createElement("li");
                    //set li innerhtml to relationship + ":" + target
                    li.innerHTML = `<span class="label label-rounded">${pageInfo.linksArray[i].relationship}</span>${pageInfo.linksArray[i].target}`;
                    //append li to rscHintlist
                    list.appendChild(li);
                } else if (pageInfo.linksArray[i].relationship == "dns-prefetch") {
                    //create and store li
                    let li = document.createElement("li");
                    //set li innerhtml to relationship + ":" + target
                    li.innerHTML = `<span class="label label-rounded">${pageInfo.linksArray[i].relationship}</span>${pageInfo.linksArray[i].target}`;
                    //append li to rscHintlist
                    list.appendChild(li);
                }
            }
            //add list to DOM
            ui.resourceHints.appendChild(list);
        } else if (ui.resourceHints.innerText == "") {
            //add message
            ui.resourceHints.innerHTML += "<ul><li>No optimised resources found</li></ul>";
        }
    },
    displayCurrentURL: () => {
        //clear displayUrl div
        ui.displayUrl.innerHTML = "";
        //If there is a current URL
        if (pageInfo.currentPageURL) {
            //create a h2 element
            let urlText = document.createElement("h2");
            //set the content of the h2 element
            urlText.innerHTML = "Current page: " + pageInfo.currentPageURL;
            //Add h2 element to page
            ui.displayUrl.appendChild(urlText);
        } else {
            console.log("Error - Current page URL not parsed yet")
        }
    },
    writeCDNLoaded: () => {
        try {
            //for each link in array
            pageInfo.linksArray.forEach((link) => {
                //create a link object
                let url = new URL(link.target);
                //and push it into an array
                pageInfo.CDNUrls.push(url);
            });
        } catch (error) {
            //if there is an error log it, dont break the program
            console.log(
                `Links length: ${pageInfo.linksArray.length},
                CDNUrls length: ${pageInfo.CDNUrls.length},
                CDNUrls: ${pageInfo.CDNUrls},
                Error: ${error}`
            );
        }

        //for each CDN
        cdns.forEach((cdn) => {
            //cycle through all resource url
            pageInfo.CDNUrls.forEach((url) => {
                //check if resource url contains cdn url substring
                if (url.origin.includes(cdn[0])) {
                    pageInfo.CDNsFound = true;
                    //console log the resource url and the cdn used
                    console.log(`URL: ${url.href} CDN used: ${cdn[1]} URL substring detected: ${cdn[0]}`);

                    //Write details of cdn loaded resources to DOM
                    let CDNLoadedResource = document.createElement("li");
                    //Build list item
                    CDNLoadedResource.innerHTML = `<span class="label label-rounded">${cdn[1]}</span> ${url.href}`;
                    //Add list item to DOM
                    ui.displayCDN.appendChild(CDNLoadedResource);
                }
            });
        });

        if (pageInfo.CDNsFound === false) {
            ui.displayCDN.innerHTML = `<li>No CDN loaded resources found</li>`;
        }

    },
    getImageTypes: () => {
        //create constructor function for images
        function Image(currentSrc, outerHTML, srcSet, typeInfo) {
            this.currentSrc = currentSrc;
            this.html = outerHTML;
            this.sources = srcSet;
            this.typeInfo = filetypeInfo;
        }
        //Loop through images and extract image type info
        pageInfo.images.forEach((image) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', image.currentSrc);
            xhr.responseType = 'arraybuffer';

            xhr.onload = () => {
                //fileType(new Uint8Array(this.response));
                let imgTypeInfo = fileType(new Uint8Array(xhr.response));
                //=> {ext: 'png', mime: 'image/png'}
            };
            xhr.send();

            //create new image with type info and send it to pageInfo
            pageInfo.processedImages.push(new Image(image.currentSrc, image.outerHTML, image.srcset, imgTypeInfo));

        });
    },
    sortImages: () => {

    }
}

//Variable to store recieved messages
let pageInfo = {
    currentPageURL: "",
    links: {},
    linksArray: [],
    optimisedResourcesFound: false,
    CDNUrls: [],
    CDNListString: cdns.toString(),
    CDNsFound: false,
    processedImages: [],
    optimisedImages: [],
    nonOptimisedImages: []
}

//Variable to store popup UI components
let ui = {
    popup: document.getElementById("main"),
    displayOptimisedButton: document.getElementById("displayOptimisedButton"),
    displayOptimised: document.getElementById("displayOptimised"),
    displayNonOptimisedButton: document.getElementById("displayNonOptimisedButton"),
    displayNonOptimised: document.getElementById("displayNonOptimised"),
    resourceHints: document.getElementById("resourceHints"),
    nav: document.getElementById("nav"),
    displayCDNButton: document.getElementById("displayCDNButton"),
    displayCDN: document.getElementById("displayCDN"),
    displayOptimisedImagesButton: document.getElementById("displayOptimisedImagesButton"),
    displayOptimisedImages: document.getElementById("displayOptimisedImages"),
    displayNonOptimisedImagesButton: document.getElementById("displayNonOptimisedImagesButton"),
    displayNonOptimisedImages: document.getElementById("displayNonOptimisedImages"),
    panels: [
        document.getElementById("resource-content"),
        document.getElementById("cdn-content"),
        document.getElementById("images-content"),
        document.getElementById("pagespeed-content")
    ]
}

//Execute content script after main popup script
popupFunction.sendMessage();

//Listen for replies from contentScript using the following notation:
//request.url
//request.links
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(request)
        pageInfo.currentPageURL = request.url;
        pageInfo.links = request.links;
        pageInfo.images = request.images;

        //Convert links from obj to arr
        popupFunction.logLinks();

        //Sort images into two arrays
        popupFunction.getImageTypes();
        sendResponse({
            message: "info recieved by popup"
        });
    }
);

//Display current page URL
// ui.displayUrlButton.addEventListener("click", () => {
//     popupFunction.displayCurrentURL();
// })

//Display links on page
ui.displayOptimisedButton.addEventListener("click", () => {
    popupFunction.writeOptimised();
    console.log(pageInfo.linksArray)
});

//Display non optimised links on page
ui.displayNonOptimisedButton.addEventListener("click", () => {
    popupFunction.writeNonOptimised();
});

ui.nav.childNodes.forEach((e) => {
    e.addEventListener("click", popupFunction.tabClick);
});

ui.displayCDNButton.addEventListener("click", () => {
    popupFunction.writeCDNLoaded();
});