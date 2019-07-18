//Notes
//Next steps
//Write code to display links in popup ui
//maybe do a draft of what each list item should look like
//Notes End

console.log("This is popup.js talking...");

//Popup functions
let  popupFunction = {
    sendMessage: () => {
        //Query tabs for the active tab in the current window
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            //Execute a script on the active tab
            chrome.tabs.executeScript(tabs[0].id, {file: 'contentScript.js'});
          });
    },
    logResourceHints: () => {//Convert links object into array
        //Convert pageInfo.links into an array
        let arr = Object.entries(pageInfo.links);
        //push array values into global object
        for (var i = 0; i < arr.length; i++) {
            pageInfo.resourceHints.push(arr[i][1]);
        } 
    },
    writeResourcehint: (rscHint) => {
            //create a link element
            let displayLink = document.createElement('a');
            //set innerhtml of link to that of preloaded resource
            //set attribute src of link to url of resource element.setAttribute('attribute', value)
            //add link to DOM
    }
}


//Variable to store recieved messages
let pageInfo = {
    currentPageURL: '',
    links: {},
    resourceHints: []
}



//Variable to store popup UI components
let  ui = {
    popup: document.getElementById("main"),
    displayUrlButton: document.getElementById("displayUrlButton"),
    displayUrl: document.getElementById("displayUrl"),
    displayLinksButton: document.getElementById("displayLinks"),
    displayLinks: document.getElementById("displayLink")
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
    //clear displayUrl div
    ui.displayUrl.innerHTML = '';
    //If there is a current URL
    if(pageInfo.currentPageURL) {
        //create a h2 element
        let  urlText = document.createElement("h2");
        //set the content of the h2 element
        urlText.innerHTML = "Current page: " + pageInfo.currentPageURL;
        //Add h2 element to page
        ui.displayUrl.appendChild(urlText);
    } else { console.log("Error") }
})

//Display links on page
ui.displayLinksButton.addEventListener('click', () => {
    //clear #displayLink div
    ui.displayLinks = '';
    //If we have links inside the pageInfo.links object
    if(pageInfo.links) {
    //Convert object to array
    let links = Object.keys(pageInfo.links);
    //Create another array to store complete linkinfo
    let linksArray = []
    //loop through initial array and deposit objects into complete linkinfo array
    for (let i = 0; i < links.length; i++) {
        linksArray.push(pageInfo.links[links[i]]);
    }
    //loop through linksArray and add write links to DOM
    for (let i = 0; i < linksArray.length; i++) {
        //write switch statement to evaluate for resource hints
        //for each resource hint create a link element (writeResourcehint())
    }
    }
})


