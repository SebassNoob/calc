#on startup, pick operation you want carried out using button A or B 
#button a+b to confirm
#next, pick integer 1
#a+b to confirm
#pick integer 2
#confirm and equation will show
#RESETS AFTER 60 SEC

x = 0
y = 0
result = 0
op = ["+","-","*","/"]
opi = 0
opfinal = ""
opindex = 0
i = 0
stage = 0

def add(x,y):
    global result
    result = x + y
    return result
def sub(x,y):
    global result
    result = x - y
    return result
def mul(x,y):
    global result
    result = x*y
    return result
def div(x,y):
    global result
    result = x/y
    return result
def con():
    global i 
    if i < 0:
        i = 0
    if i > 3:
        i = 3
def setop():
    global opfinal,i,stage
    
    con()
    opfinal = op[i]
    if stage == 0:
        basic.show_string(str(opfinal))
    else:
        basic.clear_screen()
def opa():
    global i,x,y
    if stage ==0:
        i-=1
    if stage ==1:
        x-=1
    if stage ==2:
        y-=1
    else:
        pass
input.on_button_pressed(Button.A, opa)
def opb():
    global i,x,y
    if stage == 0:
        i+=1
    if stage ==1:
        x+=1
    if stage == 2:
        y+=1
    else:
        pass
input.on_button_pressed(Button.B, opb)
def opab():
    global stage
    stage +=1
    basic.show_icon(IconNames.YES)
    pause(200)
    basic.clear_screen()  
def input1():
    global x
    basic.show_string(str(x))  
def input2():
    global y
    basic.show_string(str(y))
def calc():
    global x,y,result
    if opfinal == "+":
        add(x,y)
    if opfinal == "-":
        sub(x,y)
    if opfinal == "*":
        mul(x,y)
    if opfinal == "/":
        div(x,y)  
input.on_button_pressed(Button.AB, opab)
def on_forever():
    if stage == 0:
        setop()
    if stage == 1:
        input1()
    if stage == 2:
        input2()
    if stage == 3:
        
        calc()
        pause(500)
        basic.show_string(x + opfinal + y + "=" + result)
        pause(60000)
        control.reset()

forever(on_forever)

    
