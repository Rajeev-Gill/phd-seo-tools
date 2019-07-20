 //How to get URL of current window: https:stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension/14251218
 chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) { 
     var url = tabs[0].url;
    
 });

//Add click listener to button
reveal.addEventListener("click", () => {
   // On click find the current active tab
     chrome.tabs.query({active: true, currentWindow: true}, tabs => {
         //Show me tab info for the active currentWindow tab
         console.log(tabs[0]);
     })
})

//When reveal button is clicked
reveal.addEventListener('click', () => {
    //create a h2 element
    let displayURL = document.createElement("h2");
    //set the content of the h2 element
    displayURL.innerHTML = "Current page: " + pageInfo.currentPageURL;
    popup.appendChild(displayURL);
});

//Listen for messages
chrome.runtime.onMessage.addListener(
    //What to do with recieved messages?
    (request, sender, sendResponse) => {
        //Store recieved message in background variable
        pageInfo = request;
        //Send a response to content script
        sendResponse({message: "response from background.js"});
    }
)


let pageInfo = '';

//If there is info in the pageInfo variable
if(pageInfo){
    //Send the info in the pageInfo variable
    chrome.runtime.sendMessage({pageInfo}, response => {console.log(response)});
}

//Programmatically inject a content script into the current tab, must have activeTab permission
// changeColor.onclick = () => { //Use popup button as trigger to insert script
//   //Log the button as it is clicked
//   console.log('Button clicked: ', event.target);
//   //Find the current tab
//   chrome.tabs.query({active: true, currentWindow: true}, tabs => {
//     //Log the tab that we find
//     console.log(tabs);
//     //Execute a script on the active tab
//     chrome.tabs.executeScript(tabs[0].id, {code: "console.log('A content script from popup.js has been programmatically injected into the page');"})
//   });
// }

"content_scripts": [
    {
        "matches": ["http://*/*", "https://*/*"],
        "js": ["contentScript.js"]
    }
];

//Square bracket syntax is also necessary when the property name is variable; for example, if it is passed as an argument to a function, is accessed in a for/in loop, or is an expression to be evaluated, such as the following:

for (var i=0; i<=4; i++) {
    myObject['prop' + i] = i;
}
alert( myObject.prop3 ); // 3

//Consider the following example object literal:

var myObject = {
    sProp: 'some string value',
    numProp: 2,
    bProp: false
};

//You can use dot syntax to add a new property to it as follows:

myObject.prop2 = 'data here';

 //create an object with the url and relationship info of the link as properties
    pageInfo.links["link" + i].target = links[i].baseURI;
    pageInfo.links["link" + i].relationship = links[i].rel;


// Example
// Convert an array to a string:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();


// //Grab all links on the page
// let links = document.getElementsByTagName("link");
// console.log("links: " + links)
// //For each link
// for (i = 0; i < links.length; i++) {
//     //Push link to pageInfo object
//     //pageInfo.links.push(links[i]);

//     //Create a new property in the pageInfo.links object
//     //pageInfo.links.link[i] = links[i];

//     pageInfo.links["link" + i] = links[i];

// }

for(let i = 0; i < links.length; i++) {
    //Add new obj to pageInfo.links
    pageInfo.links["link" + i] = ''; //Thats a fucking string not an object ;)

    //Add properties to new object and store data
    pageInfo.links["link" + i].target = links[i].baseURI;
    pageInfo.links["link" + i].relationship = links[i].rel;
}

let pageInfo = {
    currentPageURL: window.location.href,
    links: {}
}

let linksHTML = document.getElementsByTagName("link");

for(let i = 0; i < linksHTML.length; i++) {
    //Add new obj to pageInfo.links
    pageInfo.links["link" + i] = {};
    //Add properties to newly created object
    pageInfo.links["link" + i].target = linksHTML[i].baseURI;
    pageInfo.links["link" + i].relationship = linksHTML[i].rel;
}

for(let i = 0; i < links.length; i++) {
    //Add properties to newly created object
    pageInfo.links["link" + i].target = links[i].baseURI;
}

//Push obj into array


//Store page information in an object
let pageInfo = {
    currentPageURL: window.location.href,
    links: [] //Pass objects into here
}

//Grab all links from html
let links = document.getElementsByTagName("link");

//For each link
for(let i = 0; i < links.length; i++) {
    //create link object
    let linkObj = {}
    //create
    linkObj.link["links" + i] = {}
}

//Send a message containing the pageInfo properties 
chrome.runtime.sendMessage({
    //To add data to the message payload add another property below
    url: pageInfo.currentPageURL, 
    links: pageInfo.links
}, response => {
    console.log(response);
})

console.log(pageInfo.links);

var links = Object.keys(obj);
var linksArray = []

//Get all vals from an object
for (var i = 0; i < links.length; i++) {
    linksArray.push(pageInfo.links[links[i]]);
}

// <!-- Accordion Item #2 -->
//         <div class="accordion">
//             <input type="checkbox" id="accordion-2" name="accordion-checkbox" hidden>
//             <label class="accordion-header" for="accordion-2" id="displayLinks">
//               <i class="icon icon-arrow-right mr-1"></i>
//                   Current Links
//             </label>
//             <div class="accordion-body" id="displayLink">
//             </div>
//         </div>


//Inject content script which initialises popup
// function sendMessage() {
// //Query tabs for the active tab in the current window
// chrome.tabs.query({active: true, currentWindow: true}, tabs => {
//     //Execute a script on the active tab
//     chrome.tabs.executeScript(tabs[0].id, {file: 'contentScript.js'});
//   });
// }



for (var i = 0; i < pageInfo.resourceHints.length; i++) {
    
}

"https://adservice.google.com/adsid/integrator.js?domain=stackoverflow.com"

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

//create a link element
let displayLink = document.createElement('a');
//set innerhtml of link to that of preloaded resource
//set attribute src of link to url of resource element.setAttribute('attribute', value)
//add link to DOM

switch (pageInfo.linksArray[i].relationship) {
    case "preload":
        //create and store li
        let li = document.createElement("li");
        //set li innerhtml to relationship + ":" + target
        li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
        //append li to rscHintlist
        list.appendChild(li);
        break;
    case "prefetch":
         //create and store li
         let li = document.createElement("li");
         //set li innerhtml to relationship + ":" + target
         li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
         //append li to rscHintlist
         list.appendChild(li);
         break;
    case "prerender":
        //create and store li
        let li = document.createElement("li");
        //set li innerhtml to relationship + ":" + target
        li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
        //append li to rscHintlist
        list.appendChild(li);
        break;
    case "preconnect":
        //create and store li
        let li = document.createElement("li");
        //set li innerhtml to relationship + ":" + target
        li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
        //append li to rscHintlist
        list.appendChild(li);
        break;
    case "dns-prefetch":
        //create and store li
        let li = document.createElement("li");
        //set li innerhtml to relationship + ":" + target
        li.innerHTML = pageInfo.linksArray[i].relationship + ":" + pageInfo.linksArray[i].target;
        //append li to rscHintlist
        list.appendChild(li);
        break;
    default:
        break;
}