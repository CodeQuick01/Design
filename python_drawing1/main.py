import turtle
from turtle import *

turtle.setup(width=800,height=800)

def show_coords(x, y):
    print(f"x = {x}, y = {y}")
    penup()
    goto(x, y)
    dot(5, "red")

turtle.speed(0)

left(140)
forward(180)
circle(-90, 200)
left(120)
circle(-90, 200)
forward(180)

penup()
goto(166,181)
pendown()
left(40)
forward(50)
for i in range(10):
    left(5)
    forward(10)
forward(90)
for i in range(26):
    right(5)
    forward(10)
forward(100)
penup()
goto(-169,181)
pendown()
left(70)
forward(40)
for i in range(12):
    left(5)
    forward(5)
for i in range(15):
    right(5)
    forward(5)
forward(70)
for i in range(26):
    left(5)
    forward(10)
right(5)
forward(150)

penup()
goto(-128,-215)
pendown()
for i in range(20):
    forward(6.5)
    left(2)
for i in range(20):
    forward(10)
    left(5)

penup()
goto(-2,229)
pendown()
left(39)
for i in range(20):
    forward(5)
    left(3)
for i in range(25):
    forward(5)
    left(5)
right(5)
forward(70)
for i in range(15):
    forward(5)
    left(5)
left(20)
for i in range(12):
    forward(5)
    left(5)
for i in range(15):
    forward(7)
    left(5)
for i in range(15):
    forward(5)
    left(10)
right(20)
forward(50)

penup()
goto(-33,-215)
pendown()
right(140)
for i in range(20):
    forward(5)
    left(5)
left(71)
for i in range(20):
    forward(5)
    left(5)
penup()
goto(-37,-303)
pendown()
right(47)
forward(90)

penup()
goto(41,-216)
pendown()
right(200)
for i in range(20):
    forward(5)
    left(5)
left(71)
for i in range(20):
    forward(5)
    left(5)    
penup()
goto(73,-297)
pendown()
right(47)
forward(90)

penup()
goto(-12,-275)
pendown()
left(163)
forward(400)

penup()
goto(39,-269)
pendown()
forward(400)

onscreenclick(show_coords)

turtle.hideturtle()
turtle.done()