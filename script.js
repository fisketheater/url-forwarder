function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
 // just change these urls and the QR code will randomly select one of the to forward the user to. The current URLs are just placeholders.
urls = ['https://colorado.edu/fiske', 'https://colorado.edu/sbo', 'https://colorado.edu']

function redirect() {
    window.location.replace(urls[getRandomInt(urls.length)])
}

redirect()
