from turtle import *
import colorsys
bgcolor('black')
speed(0)
tracer(5)
Screen().setup(width=1.0,height=1.0)

c2 = 1
h = 100
for y in range(50):
    c = colorsys.hsv_to_rgb(c2,1,1)
    for i in range(20):
        pencolor(c)
        circle(h,50)
        lt(50)
    h += 10
    c2 -= 0.02

hideturtle
done()