const btn = document.querySelectorAll('.operador');
const suma = document.getElementById('suma');
const input = document.getElementById('input');
const igual = document.querySelector('.igual');
const btnNum = document.querySelectorAll('.num');
const divResultado = document.querySelector('.resultado');
const del = document.querySelector('.del');

var valorAnterior = 0;
var digitador = '';


//para los operadores
btn.forEach((btn)=>{
    btn.addEventListener('click',()=>{        
       operacion(btn.innerHTML); 
    });
});   

//para los numeros
btnNum.forEach(btn=>{
    btn.addEventListener('click',()=>{
        input.value+=btn.innerHTML;  
        console.log(valorAnterior ,digitador)      
    });
});



//devuelve el resultado dependiendo el operador
function resultado(){
    
    switch(digitador){
        
        case '+': 
            x = Number(valorAnterior) + Number(input.value);   
            console.log("desde resultado"+digitador,valorAnterior)         
            devolverResultado()
            break
            
        case '-':
            x = Number(valorAnterior) - Number(input.value);
            devolverResultado()
            break

        case '*':
            x = Number(valorAnterior) * Number(input.value);
            devolverResultado()
            break

        case '/':
            x = Number(valorAnterior) / Number(input.value);
            devolverResultado()
            break           
        default: 
            break
    };
};


//guarda el valor actual al poner un operador
function guardarValor(){
    valorAnterior = input.value;
    divResultado.innerHTML = valorAnterior;
    input.value="";
    
}
//si es la primer operacion solo guarda el valor, si no lo resuelve y se prepara para la proxima operacion
function operacion(valor){
    
    if (digitador==''){
        digitador = valor;                  
        guardarValor()
        console.log('operacion if', digitador , valorAnterior)     
    }else{        
        resultado()
        digitador = valor
        console.log("operacion else"+valor,valorAnterior)
    };
  
};
//desde la funcion resultado, pasa el valor actual al div, lo guarda en valor anteriory limpia el input
function devolverResultado(){
    valorAnterior = x;
    divResultado.innerHTML = (x);
    input.value = '';
};

function igualFunc(){
    resultado();
    valorAnterior="";
};

function delFunc(){
    input.value=''
   
}

del.addEventListener('click',()=>delFunc())
igual.addEventListener('click',()=>igualFunc());

