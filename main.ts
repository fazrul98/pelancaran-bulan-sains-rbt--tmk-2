input.onButtonPressed(Button.A, function () {
    basic.showString("Pelancaran Bulan Sains, RBT & TMK")
})
function shakdo () {
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.B, function () {
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    shakdo()
    for (let index = 0; index < 2; index++) {
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        shakdo()
    }
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Happy)
music.setTempo(115)
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
strip.setBrightness(80)
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(30)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.TurnLeft(30)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.TurnRight(30)
    } else {
        reromicro.Brake()
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(80)
            strip.clear()
            strip.show()
            basic.pause(40)
        }
        for (let index = 0; index < 5; index++) {
            strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
            strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
            strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(80)
            strip.clear()
            strip.show()
            basic.pause(40)
        }
    }
})
