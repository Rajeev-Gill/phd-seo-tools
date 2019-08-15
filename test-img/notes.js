
   
        

        const filereader = new FileReader()

        
        const uint = new Uint8Array(evt.target.result)
        let bytes = []
        uint.forEach((byte) => {
            bytes.push(byte.toString(16))
        })
        const hex = bytes.join('').toUpperCase()

        uploads.push({
            filename: file.name,
            filetype: file.type ? file.type : 'Unknown/Extension missing',
            binaryFileType: getMimetype(hex),
            hex: hex
        })
        render()
    



const blob = file.slice(0, 4);
filereader.readAsArrayBuffer(blob);


const render = () => {
const container = document.getElementById('files')

const uploadedFiles = uploads.map((file) => {
    return `<div>
            <strong>${file.filename}</strong><br>
            Filetype from file object: ${file.filetype}<br>
            Filetype from binary: ${file.binaryFileType}<br>
            Hex: <em>${file.hex}</em>
            </div>`
})

container.innerHTML = uploadedFiles.join('')
}

const getMimetype = (signature) => {
switch (signature) {
    case '89504E47':
        return 'image/png'
    case '47494638':
        return 'image/gif'
    case '25504446':
        return 'application/pdf'
    case 'FFD8FFDB':
    case 'FFD8FFE0':
    case 'FFD8FFE1':
        return 'image/jpeg'
    case '504B0304':
        return 'application/zip'
    default:
        return 'Unknown filetype'
}
}


//Getting file/blob from image via URL

//WEBP URL: 

const pngURL = "http://media.volkswagen.com/vw-122-my2019/iris?COSY-EU-100-1713VV%25lXm0kYNazzSU9mu0fO7ANiyyJ1vTvsd2MzppEKhjTtKSK8CgQ2MM8H2Lvyr0Q%25UOVggAU5ENs8G5ikAjjUnZvkPP7J8Kp8SuGuM2f99CvZ26JJbVeiiC5uwa8RR5S8t0CdwbpN7h88WU3oyHsdRBBKxAnW07Q2kkDrigKzERffg57tn2bcXUUN6W14dBG2rZF0bbm84OLlaLZ89ZBhW2Y9UkhJQb2rMWsbuD3EjIwKK1Wu%25xEu6ZDDuNLCaa05Gc11F1Y788xP5HjjBorvyyT77WmmWV37ppGXQewwJuGL77lAYCCCE8XWRRVqysrrXLkb66tHtANN5KLsqq9M7VAAZ56RSSiloteefFqpoo2o10%25%25n%25eFDDuLldaa0Wcf11FOOT88xZRkjjBwW8yyT%25BDmmWn%25FppGxT%25wwJz2077l8mMCCEJ8uRRVzo5rrX4Kb66tS2xNN5eKEqq9MMlAAZ0bgSSiRTzeefKRwoo2vYQ%25%25nQ3KDDuPEAaa0qIS11FgQh88xplWjjBw1GyyTUjjmmWdZappGMDCwwJaz877l3GMCCEne7RRVeN5rrXm3q66t2FKNN5y6Oqq9qBfAAZC6WSSiRqAeefZxuoo2vgn%25%25nKYbDDuWDiaa0auB11FAaW88xPpWjjBw5cyyT%25z0mmW4NpppGr2QwwJzEV77l4hbCCECXxRRVqb4rrX3VF66tF6QNN5wKGqq9GM4AAZHBdSSiLHteefbnMoo2VPQ%25%25nM1zDDuWwOaa05oY&width=839"

//PNG URL: 

const webpURL = "https://media.volkswagen.com/vw-AW1-my2019/iris?COSY-EU-100-1713VV%25lXm0kYNazzSU9mu0fO7ANiyyJ1vTvsd2MzppEKhjTtKSK8CPk1MM8H2Lvyr0Q%25UOVggAa5hP4KYwqeQeOOnmpyyJ8H3WDZ4HvCJii8%25Ilooo0gZrnZlO4O6bLKKFNMbTggAcEvvFHOu5ZxxHlZkPF%25uAnW07ZZU8pVfRD%25xIIrsJYUP01bCCtBvyrm3xLLyH0kYbAwh88WTU9j%25I4bBMdPAA2Zjeqz5qMZKMI7UbSK8C7g1AbBzrDAOtO4yaurr9UOXs3OTMttOWEC55PH4w99dJp7ZZsoHRiiIVBGffQ0zU22Ucp0nn4h1EuugO4q00z9TAFF3leexxcG3ZBBhfcwTTk2twWWHEuaGGK3ucJJMPT1llvUK8EELRETVVbSTKXXYOWmttOk9c55PUPr99d92mZZsZ5CiiIoH8ffQLXq22Uc6dnn411Xuug39q00zZgiFF3sZUxxc4xZBBhpdRTTkRsMWWHuxsGGKkuGJJMXPUllvtqkEELAAoVVbIoVXXYWgCttOq2v55PS%25I99deIMZZsmRAiiIesRffQ8Kb22UcWNnn4tpvuugRwc00zpA0FF3w0cxxcjO2BBhefGTTknNUWWHrhDGGK0WaJJMJPullvUiJEELitOVVbTN5XXYWzGttOi9J55P41w99dlFaZZsGj4iiIiKrffQX9M22Utifnn4gz9uug8Hq00zj9FFF31eexxcvx4BBhkpKTTkThMWWHnTLGGK4xLJJMNQmllvrtBEEL54aVVbT%25VXXYQQ%25ttOouB55P%25Ac99dnJHZZsaQViiI%25jXffQf4b22UcF%25nn4DQNuuguhq00zjgSFF3YF0xxcj7ZBBh2CQTTkQR1WWH7d0GGKCq5JJMgA%25llvCX8EELxoHVVbcBKXXY6cVttOUuS55PHVd99dD17ZZszsC&width=420"

const googleWEBP = "https://www.gstatic.com/webp/gallery/1.webp";

//New async function so I can use fetch without promises
async function run() {
    //Fetch image from url
    let imgResponse = await fetch(webpURL);

    //turn XMLhttp response into blob (Binary Large Object)
    imgBlob = await imgResponse.blob();

    //Log the body of the response (readableStream)
    console.log("Blob from fetched image:", imgBlob);
    console.log(imgBlob.text());

    //read blob using filereader https://developer.mozilla.org/en-US/docs/Web/API/FileReader

    //create new fileReader
    let reader = new FileReader();


}
run();