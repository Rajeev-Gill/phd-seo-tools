console.log("Programmatically injected contentScript");

if (typeof pageInfo != "object") {
    //Store page information in an object
    let pageInfo = {
        currentPageURL: window.location.href,
        links: {} //Pass objects into here
    }

    //Grab all links from html
    let links = document.getElementsByTagName("link");
    console.log(links);

    //For each link
    for (let i = 0; i < links.length; i++) {
        //Add new a obj to pageInfo.links
        pageInfo.links["link" + i] = {};

        //Add properties to new object and store data
        pageInfo.links["link" + i].target = links[i].href;
        pageInfo.links["link" + i].relationship = links[i].rel;
        pageInfo.links["link" + i].html = links[i].outerHTML;
    }

    //Send a message containing the pageInfo properties 
    chrome.runtime.sendMessage({
        //To add data to the message payload add another property below
        url: pageInfo.currentPageURL,
        links: pageInfo.links
    }, response => {
        console.log("Response", response);
    })

    console.log(pageInfo.links);
}