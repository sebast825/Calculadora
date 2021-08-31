const btn = document.querySelectorAll('.operador');
const suma = document.getElementById('suma');
const input = document.getElementById('input');
const igual = document.querySelector('.igual');
const btnNum = document.querySelectorAll('.num');
const divResultado = document.querySelector('.resultado');
const del = document.querySelector('.del');

const calcuAtr = document.querySelector('.calcuAtr');
var valorAnterior = [];
var digitador = '';

function calculadoraAtr(){
    if (atrValor==true){
        atrValor=false;
    }else{
        atrValor=true;
    };
};

var atrValor = true;
//para los operadores
btn.forEach((btn)=>{
    btn.addEventListener('click',()=>{    
        if (atrValor==true){
            operacion(btn.innerHTML); 
            console.log("seleccion de boton",valorAnterior ,digitador); 
        }else{
            numeroRandomDigitadorAtr();
        }
      
    });
});   

//para los numeros
btnNum.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if (atrValor==true){
            input.value+=btn.innerHTML;  
            console.log(btn.innerHTML);
           
        }else{
            numeroRandomAtr();
        };
          
    });
});



//devuelve el resultado dependiendo el operador
function resultado(){    
    switch(digitador){        
        case '+': 
            x = Number(valorAnterior) + Number(input.value);   
            console.log("desde resultado"+digitador,valorAnterior);         
            devolverResultado(x);
            break;
            
        case '-':
            x = Number(valorAnterior) - Number(input.value);
            devolverResultado(x);
            break;

        case '*':
            x = Number(valorAnterior) * Number(input.value);
            devolverResultado(x);
            break;

        case '/':
            x = Number(valorAnterior) / Number(input.value);
            devolverResultado(x);
            break;          
        default: 
        console.log('es el default')
    };
};



//si es la primer operacion solo guarda el valor, si no lo resuelve y se prepara para la proxima operacion
function operacion(valor){
    
    if (digitador!=''||input.innerHTML!=""){
        console.log("operacion if"+valor,valorAnterior);
        resultado();
        digitador = valor;
    }
    else if (digitador==''){
        
        digitador = valor;                  
        guardarValor();
        console.log('operacion if', digitador , valorAnterior); 
    }else{       
        digitador = valor;
        console.log("operacion else"+valor,valorAnterior);
    };
  
};

//para el numero random
const numeroRandomAtr = ()=>{
    console.log('entro numrandom')
        g=Math.floor(Math.random()*10)+0;      
      
            input.value+=g;
            console.log('numero random', g);
    };


// console.log(nums)

var numRandomDivisor = []
//para el divisor random
const numeroRandomDigitadorAtr = ()=>{
    console.log('entro digitador random');
    h=Math.floor(Math.random()*4)+0;  
        numRandomDivisor[0]=(h);
    if (digitador==''){
        (console.log('no hay digitador'))
        devolverDigitador(h);
        guardarValor();
    } else{
        console.log('hay digitador')
        resultado();
        devolverDigitador(h);

    };
    
    
};




const devolverDigitador =numran=>{
    
    switch (numran){
        case 0:  digitador = '+' ;            
            console.log("devolverDigitador",digitador, numran);
            break;
        case 1:  digitador = '-';       
        console.log("devolverDigitador",digitador, numran);
        break;
        case 2 :  digitador = '*';
        console.log("devolverDigitador",digitador, numran);
        break;
        default:  digitador = '/';
        console.log("devolverDigitador",digitador, numran);   
        break;
        }
    };



// console.log(atr)

//guarda el valor actual al poner un operador
function guardarValor(){    
    if (input.value!=""){
        valorAnterior = input.value;
        divResultado.innerHTML = valorAnterior;
        input.value="";
    }else{
        valorAnterior = valorAnterior;
    };
    
}

//desde la funcion resultado, pasa el valor actual al div, lo guarda en valor anteriory limpia el input

function devolverResultado(x){
    valorAnterior = x;
    divResultado.innerHTML = x;
    input.value = '';
};

function igualFunc(){
    console.log('valor input: ',input.value , 'valor anterior:', valorAnterior[0], 'digiador', digitador);
         
    resultado();
    console.log('valor input: ',input.value , 'valor anterior:', valorAnterior, 'digiador', digitador);
};

function delFunc(){
    input.value='';
}


del.addEventListener('click',()=>delFunc());
igual.addEventListener('click',()=>igualFunc());
calcuAtr.addEventListener('click',()=>calculadoraAtr());

