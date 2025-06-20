let textoInput = document.getElementById("texto-input");
let palabraInput = document.getElementById("palabra-input");
let buscarBtn = document.getElementById("buscar-btn");
let resultPantalla = document.getElementById("result-pantalla");

buscarBtn.addEventListener("click", function(){
    let texto = textoInput.value;
    try{
        let cont=0;
        let resultado = texto.trim()
        resultado = resultado.split(" ")
        for (let i = 0; i < resultado.length; i++) {
            if (resultado[i].includes(palabraInput.value)) {
            resultPantalla.innerHTML += `<u>${resultado[i]}</u> `;
            cont++;
            } else {
            resultPantalla.innerHTML += `${resultado[i]} `;
            }
        }

    resultPantalla.innerHTML += `<br><br>Cantidad de apariciones: ${cont}`;
    } catch (error) {
    resultPantalla.innerHTML = `Error: ${error.message}`;
    }
});