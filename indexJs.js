let contador = document.getElementById("contador");    
let buscador = document.getElementById("buscador");  
let acronimo = document.getElementById("acronimo");  

let contBtn = document.getElementById("contBtn");
let findBtn = document.getElementById("findBtn");
let acroBtn = document.getElementById("acroBtn");


contBtn.addEventListener("click",()=>{
    contador.style.display = "block"; 

    buscador.style.display = "none";

    acronimo.style.display = "none";

    contBtn.style.background = "linear-gradient(135deg, #9240c2, #7321aa)"

    findBtn.style.background = "linear-gradient(135deg, #3498db, #2980b9)"
    acroBtn.style.background = "linear-gradient(135deg, #3498db, #2980b9)"
});

findBtn.addEventListener("click",()=>{
    contador.style.display = "none"; 

    buscador.style.display = "block";

    acronimo.style.display = "none";

    findBtn.style.background = "linear-gradient(135deg, #9240c2, #7321aa)"

    contBtn.style.background = "linear-gradient(135deg, #3498db, #2980b9)"
    acroBtn.style.background = "linear-gradient(135deg, #3498db, #2980b9)"
});

acroBtn.addEventListener("click",()=>{
    contador.style.display = "none"; 

    buscador.style.display = "none";

    acronimo.style.display = "block";

    acroBtn.style.background = "linear-gradient(135deg, #9240c2, #7321aa)"

    contBtn.style.background = "linear-gradient(135deg, #3498db, #2980b9)"
    findBtn.style.background = "linear-gradient(135deg, #3498db, #2980b9)"

});

//FUNCION CONTADOR
let exeBtn = document.getElementById("ejecutar-btn");
let result = document.getElementById("result-pantalla");
let textoI = document.getElementById("texto-input");

exeBtn.addEventListener("click", ()=>{
    try{
        if(textoI==" "){}
        
        let text = textoI.value;

        result.innerHTML = `> "${text}" <br>`;
        let charSpace = 0, charWSpace = 0,words=0,longW,cont=0;  
        let opResult = text.trim()
        charWSpace = text.length
        opResult = opResult.split(" ");
        words = opResult.length;
        for(i=0;i < opResult.length;i++){
            charSpace += opResult[i].length
            if(cont < opResult[i].length){
                cont = opResult[i].length
                longW = opResult[i] 
            }
        }
        result.innerHTML += `Contador con espacios: ${charSpace} <br> Contador sin espacios ${charWSpace} <br> Contador de palabras: ${words} <br> Palabra más grande: ${longW}`
    }
    catch(error){
    result.innerHTML += `ERROR: ${error.message}`;
    }
});


//FUNCION BUSCADOR
    let textoB = document.getElementById("textoB");
    let palabraInput = document.getElementById("palabra-input");
    let buscarBtn = document.getElementById("buscar-btn");
    let resultB = document.getElementById("resultB");

buscarBtn.addEventListener("click", function(){
    let texto = textoB.value;

    resultB.innerHTML = `Resultados: <br>`
    try{
        let cont=0;
        let resultado = texto.trim()
        resultado = resultado.split(" ")
        for(let i = 0; i < resultado.length;i++){
            if(resultado[i].includes(palabraInput.value)){
                resultB.innerHTML += `<u>${resultado[i]}</u> `;  
                cont++;
            }
            else{
                resultB.innerHTML += `${resultado[i]}`;
            }
        } 
        resultB.innerHTML += `<br>Cantidad de apariciones: ${cont}`;
    } 
    catch (error) {
        resultB.innerHTML += `Error: ${error.message}`;
    }
});

///FUNCION ACRONIMOS
let textoInput = document.getElementById('textoA');
let ejecutarBtn = document.getElementById('ejecutarBtn');
let resultPantalla = document.getElementById('resultA');

ejecutarBtn.addEventListener('click', function (){
    let texto = textoInput.value;

    try{
        let palabras = texto.split(" ");
        console.log(palabras);

        let resulta = new Array(palabras.length);

        for (let i=0; i<palabras.length; i++){
            console.log("Estoy entrando al ciclo");
            let letra = palabras[i].slice(0,1);
            resulta[i]=letra;
        }
        let acronimo="";
        for (let i=0; i<resulta.length; i++){
            acronimo += resulta[i];
        }
        console.log(acronimo);
        resultPantalla.innerHTML += `El acrónimo es: ${acronimo}`;
    }catch (error) {
        resultPantalla.innerHTML += `Error: ${error.message}`;
    }
});
