//Getting file/blob from image via URL

//New async function so I can use fetch without promises
async function run() {

    //Fetch image from url
    var imgResponse = await fetch("https://media.volkswagen.com/vw-AW1-my2019/iris?COSY-EU-100-1713VV%25lXm0kYNazzSU9mu0fO7ANiyyJ1vTvsd2MzppEKhjTtKSK8CPk1MM8H2Lvyr0Q%25UOVggAa5hP4KYwqeQeOOnmpyyJ8H3WDZ4HvCJii8%25Ilooo0gZrnZlO4O6bLKKFNMbTggAcEvvFHOu5ZxxHlZkPF%25uAnW07ZZU8pVfRD%25xIIrsJYUP01bCCtBvyrm3xLLyH0kYbAwh88WTU9j%25I4bBMdPAA2Zjeqz5qMZKMI7UbSK8C7g1AbBzrDAOtO4yaurr9UOXs3OTMttOWEC55PH4w99dJp7ZZsoHRiiIVBGffQ0zU22Ucp0nn4h1EuugO4q00z9TAFF3leexxcG3ZBBhfcwTTk2twWWHEuaGGK3ucJJMPT1llvUK8EELRETVVbSTKXXYOWmttOk9c55PUPr99d92mZZsZ5CiiIoH8ffQLXq22Uc6dnn411Xuug39q00zZgiFF3sZUxxc4xZBBhpdRTTkRsMWWHuxsGGKkuGJJMXPUllvtqkEELAAoVVbIoVXXYWgCttOq2v55PS%25I99deIMZZsmRAiiIesRffQ8Kb22UcWNnn4tpvuugRwc00zpA0FF3w0cxxcjO2BBhefGTTknNUWWHrhDGGK0WaJJMJPullvUiJEELitOVVbTN5XXYWzGttOi9J55P41w99dlFaZZsGj4iiIiKrffQX9M22Utifnn4gz9uug8Hq00zj9FFF31eexxcvx4BBhkpKTTkThMWWHnTLGGK4xLJJMNQmllvrtBEEL54aVVbT%25VXXYQQ%25ttOouB55P%25Ac99dnJHZZsaQViiI%25jXffQf4b22UcF%25nn4DQNuuguhq00zjgSFF3YF0xxcj7ZBBh2CQTTkQR1WWH7d0GGKCq5JJMgA%25llvCX8EELxoHVVbcBKXXY6cVttOUuS55PHVd99dD17ZZszsC&width=839");

    //turn XMLhttp response into blob
    imgBlob = await imgResponse.blob();

    //Log the body of the response (readableStream)
    console.log(imgResponse.body);

    //read blob https://developer.mozilla.org/en-US/docs/Web/API/FileReader
}

run();

