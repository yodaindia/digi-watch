input.onButtonPressed(Button.A, function () {
    basic.showString("" + hours + ":" + minutes + ":" + seconds)
})
let seconds = 0
let minutes = 0
let hours = 0
hours = 0
minutes = 0
seconds = 0
basic.showString("" + hours + ":" + minutes + ":" + seconds)
basic.forever(function () {
    basic.pause(1000)
    seconds += 1
    if (seconds == 59) {
        seconds = 0
        minutes += 1
    }
    if (minutes == 59) {
        minutes = 0
        seconds = 0
        hours += 1
    }
})
