score1 = 0
score2 = 0
score3 = 0
sum2 = 0
avr = 0
sum_score = 0

def on_forever():
    global score1, score2, score3, sum2, avr, sum_score
    score1 = randint(0, 20)
    score2 = randint(0, 20)
    score3 = randint(0, 20)
    sum2 = score1 + (score2 + score3)
    avr = sum2 / 3
    sum_score = Math.map(avr, 0, 20, 0, 10)
    serial.write_number(score1)
    serial.write_string(",")
    serial.write_number(score2)
    serial.write_string(",")
    serial.write_number(score3)
    serial.write_string(",")
    serial.write_number(sum2)
    serial.write_string(",")
    serial.write_number(Math.ceil(avr))
    serial.write_string(",")
    serial.write_number(Math.ceil(sum_score))
    serial.write_line("")
    basic.pause(1000)
basic.forever(on_forever)
