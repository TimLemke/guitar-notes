var strings = ['E', 'A', 'D', 'G', 'B', 'e'];
var naturalNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
var sharpNotes = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'];
var flatNotes = ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'];

function getNote() {
  var notes = []
  var naturals = document.getElementById('naturals').checked
  var flats = document.getElementById('flats').checked
  var sharps = document.getElementById('sharps').checked

  if (!naturals && !flats && !sharps) {
    document.getElementById('note').innerHTML = '<p>Check at least one, please!</p>'
  } else {
    var notes = []

    if (naturals) {
      notes = notes.concat(naturalNotes)
    }
    if (flats) {
      notes = notes.concat(flatNotes)
    }
    if (sharps) {
      notes = notes.concat(sharpNotes)
    }

    var randString = strings[Math.floor(Math.random() * strings.length)];
    var randNote = notes[Math.floor(Math.random() * notes.length)]

    document.getElementById('note').innerHTML = '<p>Play ' + randNote + ' on the ' + randString + ' string</p>'
  }
}
