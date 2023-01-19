const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');
const equalEl = document.querySelector('.equal');

let dis1 = '';
let dis2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;


numbersEl.forEach( number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2 += e.target.innerText;
        display2El.innerText = dis2;
    })
});

operationEl.forEach( operation => {
    operation.addEventListener('click', (e)=>{
        if(!dis2){
            return;
        }
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1 && dis2 && lastOperation){
            mathOperation();
        }
        else{
            result = parseFloat(dis2);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = ''){
    dis1 += dis2+ ' ' + name + ' ';
    display1El.innerText = dis1;
    display2El.innerText = '';
    dis2 = '';
    display1El.innerText = result+' '+name+ ' ';
}

function mathOperation(){
    switch (lastOperation) {
        case '+' :
            result = parseFloat(result) + parseFloat(dis2);
            break;

        case '-' :
            result = parseFloat(result) - parseFloat(dis2);
            break;

        case 'x' :
            result = parseFloat(result) * parseFloat(dis2);
            break;

        case '/' :
            result = parseFloat(result) / parseFloat(dis2);
            break;        

        case '%' :
            result = parseFloat(result) % parseFloat(dis2);
            break;
        
        default:
            return;
    }
}

equalEl.addEventListener('click', (e)=>{
    if(!dis1 || !dis2){
        return;
    }
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    dis2 = result;
    dis1 = '';
    display1El.innerText = '';
});

clearAllEl.addEventListener('click', (e)=>{
        display1El.innerText = '0';
        display2El.innerText = '0';
        dis1 = '';
        dis2 = '';
        result = '';
});

clearLastEl.addEventListener('click', (e)=>{
    display2El.innerText = '';
    dis2 = '';
})