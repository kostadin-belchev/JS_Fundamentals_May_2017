function nowPlaying (arr) {
    let artistName = arr[0];
    let trackName = arr[1];
    let duration = arr[2];
    return `Now Playing: ${trackName} - ${artistName} [${duration}]`;
}

console.log(nowPlaying(['Number One', 'Nelly', '4:09']));