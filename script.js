function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

urls = ['https://colorado.edu/fiske', 'https://colorado.edu/sbo', 'https://colorado.edu']

function redirect() {
    window.location.replace(urls[getRandomInt(urls.length)])
}

redirect()