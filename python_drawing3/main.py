from turtle import *
import colorsys

bgcolor('black')
speed(0)
pensize(2)

a = 0

for h in range(100):
    for j in range(9):
        color = colorsys.hsv_to_rgb(a,1,1)
        pencolor(color)
        a += 0.1
        for i in range(20):
            left(5)
            forward(10)
        left(80)
        for i in range(20):
            left(5)
            forward(10)
        forward(10)
    left(0.5)

hideturtle()
done()