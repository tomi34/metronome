function tempokiirasa () {
    basic.showNumber(tempo)
    basic.pause(100)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    tempo += 1
    tempokiirasa()
})
input.onButtonPressed(Button.B, function () {
    if (tempo > 1) {
        tempo += -1
        tempokiirasa()
    }
})
let tempo = 0
tempo = 1
tempokiirasa()
basic.forever(function () {
    basic.pause(1000 / tempo)
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
})
