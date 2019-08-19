console.log("Programmatically injected contentScript");

if (typeof pageInfo != "object") {
    //Store page information in an object
    let pageInfo = {
        currentPageURL: window.location.href,
        links: {}, //Pass objects into here
        images: []
    }

    //Grab all links from html
    let links = document.getElementsByTagName("link");

    //For each link
    for (let i = 0; i < links.length; i++) {
        //Add new a obj to pageInfo.links
        pageInfo.links["link" + i] = {};

        //Add properties to new object and store data
        pageInfo.links["link" + i].target = links[i].href;
        pageInfo.links["link" + i].relationship = links[i].rel;
        pageInfo.links["link" + i].html = links[i].outerHTML;
    }

    //Initialise image constructor (Add file types after image has been constructed)
    function Image(currentSrc, outerHTML, srcSet) {
        this.currentSrc = currentSrc;
        this.html = outerHTML;
        this.sources = srcSet;
    }

    //Create new Image like: new Image(image.currentSrc, image.outerHTMl, image.srcset)

    //Get all images from html and conver to array
    let images = Array.from(document.getElementsByTagName("img"));

    //For each image
    images.forEach((image) => {
        //Create a new image object and push it into array
        pageInfo.images.push(new Image(image.currentSrc, image.outerHTML, image.srcset ? image.srcset : "No srcset found"));
    });



    //Send a message containing the pageInfo properties 
    chrome.runtime.sendMessage({
        //To add data to the message payload add another property below
        url: pageInfo.currentPageURL,
        links: pageInfo.links,
        images: pageInfo.images
    }, response => {
        console.log("Response", response);
    })

    console.log(`pageInfo.links: ${pageInfo.links}`);
}