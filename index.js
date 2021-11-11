

let result = '';
let operation = '';
let second_ele = '';
const no_but_clicked = (e) => {
    if(operation=='') {
        result+= e.target.value
        display(result)
    } else {
        second_ele+= e.target.value
        display(second_ele)
    }
}

let no_button = document.querySelectorAll('.btn')

no_button.forEach ( single_button => {

    single_button.addEventListener('click', no_but_clicked)
})

let plus_button = document.getElementById('plus')
let substract_button = document.getElementById('substract')
let multiply_button = document.getElementById('multiply')
let divide_button = document.getElementById('divide')
let equal_button = document.getElementById('equal')
let clear_button = document.getElementById('clear')

let plus_clicked = e => {
    operation='+'
    display_operation(operation)
}

let substract_clicked = e => {
    operation='-'
    display_operation(operation)
}

let multiply_clicked = e => {
    operation='*'
    display_operation(operation)
}

let divide_clicked = e => {
    operation='/'
    display_operation(operation)
}

let equal_clicked = e => {
    
    if(operation=='+') {
        result = Number(result) + Number(second_ele)
        display(result)
    } else if(operation=='-') {
        result = Number(result) - Number(second_ele)
        display(result)
    } else if(operation=='*') {
        result = Number(result) * Number(second_ele)
        display(result)
    } else if(operation=='/') {
        result = Number(result) / Number(second_ele)
        display(result)
    }
    display_operation('=')
    operation = '';
    second_ele = '';
    
}

let clear_clicked = e => {
    operation = '';
    result = '';
    second_ele = '';
    display('')
    display_operation('')
}

plus_button.addEventListener('click',plus_clicked);
substract_button.addEventListener('click',substract_clicked);
multiply_button.addEventListener('click',multiply_clicked);
divide_button.addEventListener('click',divide_clicked);
equal_button.addEventListener('click',equal_clicked);
clear_button.addEventListener('click',clear_clicked);



let display = v => {
    document.getElementById('in').value = v;
}

let display_operation = v => {
    document.getElementById('ope').value = v;
}
