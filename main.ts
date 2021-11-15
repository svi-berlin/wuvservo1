input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0xffff00)
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.setLedColor(0xff0000)
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0x0000ff)
})
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.playMp3Track(1, 1)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
