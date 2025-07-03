import turtle
from turtle import *
import colorsys

tracer(5)
h = 0.5
speed(1)
bgcolor("black")
setup(1200,800)

r = 190

for y in range(7):
    c = colorsys.hsv_to_rgb(h,1,1)
    for i in range(17):
        fillcolor(c)
        begin_fill()
        circle(r,90)
        lt(75)
        lt(20)
        circle(r,90)
        lt(1)
        end_fill()
    r -= 30
    h -= 0.05

done()