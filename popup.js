//Notes
//Next steps
//Merge to master
//Clean up and refactor code
//Notes End

console.log("This is popup.js talking...");

//Popup functions
//sendMessage
//logResourceHints
//writeResourceHint
//displayCurrentURL
let  popupFunction = {
    sendMessage: () => {
        //Query tabs for the active tab in the current window
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            //Execute a script on the active tab
            chrome.tabs.executeScript(tabs[0].id, {file: 'contentScript.js'});
          });
    },
    logLinks: () => {//Convert links object into array
        //Convert pageInfo.links into an array
        let arr = Object.entries(pageInfo.links);
        //push array values into global object
        for (var i = 0; i < arr.length; i++) {
            pageInfo.linksArray.push(arr[i][1]);
        } 
    },
    writeListItem: () => {

    },
    writeResourcehints: () => {
        //clear rsc hint div
        ui.resourceHints.innerHTML = '';
        //create and store ul element
        let list = document.createElement("ul");
        //set attribute of ul element to rscHintList
        list.setAttribute("id", "rscHintList");
        //loop through pageInfo.links array
        for (let i = 0; i < pageInfo.linksArray.length; i++) {
            //if iterated item .relationship == preload,prefetch,prerender,preconnect,DNS-Prefetch
            if(pageInfo.linksArray[i].relationship == "preload"){
                //create and store li
               let li = document.createElement("li");
                //set li innerhtml to relationship + ":" + target
                li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
                //append li to rscHintlist
                list.appendChild(li);
            } else if (pageInfo.linksArray[i].relationship == "prerender") {
                //create and store li
                let li = document.createElement("li");
                //set li innerhtml to relationship + ":" + target
                li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
                //append li to rscHintlist
                list.appendChild(li);
            } else if (pageInfo.linksArray[i].relationship == "prefetch") {
                //create and store li
                let li = document.createElement("li");
                //set li innerhtml to relationship + ":" + target
                li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
                //append li to rscHintlist
                list.appendChild(li);
            } else if (pageInfo.linksArray[i].relationship == "preconnect") {
                //create and store li
                let li = document.createElement("li");
                //set li innerhtml to relationship + ":" + target
                li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
                //append li to rscHintlist
                list.appendChild(li);
            } else if (pageInfo.linksArray[i].relationship == "dns-prefetch") {
                //create and store li
                let li = document.createElement("li");
                //set li innerhtml to relationship + ":" + target
                li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
                //append li to rscHintlist
                list.appendChild(li);
            }
        }
        //add list to DOM
        ui.resourceHints.appendChild(list);
    },
    displayCurrentURL: () => {
        //clear displayUrl div
        ui.displayUrl.innerHTML = '';
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
    }
}


//Variable to store recieved messages
let pageInfo = {
    currentPageURL: '',
    links: {},
    linksArray: []
}



//Variable to store popup UI components
let  ui = {
    popup: document.getElementById("main"),
    displayUrlButton: document.getElementById("displayUrlButton"),
    displayUrl: document.getElementById("displayUrl"),
    displayLinksButton: document.getElementById("displayLinks"),
    displayLinks: document.getElementById("displayLink"),
    resourceHints: document.getElementById("resourceHints")
}

//Listen for messages from contentScript using the following notation:
//request.url
//request.links
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(request)
        pageInfo.currentPageURL = request.url;
        pageInfo.links = request.links;
        sendResponse({message: "info recieved by popup"});
    }
);

//Display current page URL
ui.displayUrlButton.addEventListener('click', () => {
 popupFunction.displayCurrentURL();
})

//Display links on page
ui.displayLinksButton.addEventListener('click', () => {
    popupFunction.writeResourcehints();
})


