class Library {

  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = [];
  }

  addPlaylist(playListName) {
    let playList = {
      name: playListName,
      tracks: []
    }
    this.playlist.push(playList)
  }

  addTrack(name, artist, playList) {
    let track = {
      name: name,
      artist: artist
    }

    this.playlist[playList].tracks.push(track);

  }

}

let Jams = new Library("AwesomeTunes", "Raymond");

Jams.addPlaylist("sweet tunes");

Jams.addTrack("Shape of You", "Ed Sheran", 0);

console.log("My library", Jams);

console.log("My tracks in playlist", Jams.playlist[0].tracks);


