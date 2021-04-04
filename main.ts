let score1 = 0
let score2 = 0
let score3 = 0
let sum2 = 0
let avr = 0
let sum_score = 0
basic.forever(function () {
    score1 = randint(0, 20)
    score2 = randint(0, 20)
    score3 = randint(0, 20)
    sum2 = score1 + (score2 + score3)
    avr = sum2 / 3
    sum_score = Math.map(avr, 0, 20, 0, 10)
    serial.writeNumber(score1)
    serial.writeString(",")
    serial.writeNumber(score2)
    serial.writeString(",")
    serial.writeNumber(score3)
    serial.writeString(",")
    serial.writeNumber(sum2)
    serial.writeString(",")
    serial.writeNumber(Math.ceil(avr))
    serial.writeString(",")
    serial.writeNumber(Math.ceil(sum_score))
    if (sum_score >= 5) {
        serial.writeString("pass")
    } else {
        serial.writeString("fail")
    }
    serial.writeLine("")
    basic.pause(1000)
})
