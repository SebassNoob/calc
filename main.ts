// on startup, pick operation you want carried out using button A or B 
// button a+b to confirm
// next, pick integer 1
// a+b to confirm
// pick integer 2
// confirm and equation will show
// RESETS AFTER 60 SEC
let x = 0
let y = 0
let result = 0
let op = ["+", "-", "*", "/"]
let opi = 0
let opfinal = ""
let opindex = 0
let i = 0
let stage = 0
function add(x: number, y: number) {
    
    result = x + y
    return result
}

function sub(x: number, y: number): number {
    
    result = x - y
    return result
}

function mul(x: number, y: number): number {
    
    result = x * y
    return result
}

function div(x: number, y: number): number {
    
    result = x / y
    return result
}

function con() {
    
    if (i < 0) {
        i = 0
    }
    
    if (i > 3) {
        i = 3
    }
    
}

function setop() {
    
    con()
    opfinal = op[i]
    if (stage == 0) {
        basic.showString("" + opfinal)
    } else {
        basic.clearScreen()
    }
    
}

input.onButtonPressed(Button.A, function opa() {
    
    if (stage == 0) {
        i -= 1
    }
    
    if (stage == 1) {
        x -= 1
    }
    
    if (stage == 2) {
        y -= 1
    } else {
        
    }
    
})
input.onButtonPressed(Button.B, function opb() {
    
    if (stage == 0) {
        i += 1
    }
    
    if (stage == 1) {
        x += 1
    }
    
    if (stage == 2) {
        y += 1
    } else {
        
    }
    
})
function input1() {
    
    basic.showString("" + x)
}

function input2() {
    
    basic.showString("" + y)
}

function calc() {
    
    if (opfinal == "+") {
        add(x, y)
    }
    
    if (opfinal == "-") {
        sub(x, y)
    }
    
    if (opfinal == "*") {
        mul(x, y)
    }
    
    if (opfinal == "/") {
        div(x, y)
    }
    
}

input.onButtonPressed(Button.AB, function opab() {
    
    stage += 1
    basic.showIcon(IconNames.Yes)
    pause(200)
    basic.clearScreen()
})
forever(function on_forever() {
    if (stage == 0) {
        setop()
    }
    
    if (stage == 1) {
        input1()
    }
    
    if (stage == 2) {
        input2()
    }
    
    if (stage == 3) {
        calc()
        pause(500)
        basic.showString(x + opfinal + y + "=" + result)
        pause(60000)
        control.reset()
    }
    
})
