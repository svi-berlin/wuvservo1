input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0xffff00)
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.setLedColor(0x00ff00)
    pins.servoWritePin(AnalogPin.P1, 90)
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0x0000ff)
    pins.servoWritePin(AnalogPin.P1, 180)
})
basic.setLedColor(0xffffff)
pins.servoWritePin(AnalogPin.P1, 90)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
