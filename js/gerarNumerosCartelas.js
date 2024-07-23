function sorteio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function gerarNumerosUnicos(qtd, min, max){
    const NumerosUnicos = new Set();

    while(NumerosUnicos.size < qtd ){
        const numeroSorteado = sorteio(min, max);
        NumerosUnicos.add(numeroSorteado);
    }

    return Array.from(NumerosUnicos);
}

const quantidadeDeNumeros = 5;

for (i = 0; i < 5; i++){
    switch (i) {
        case 0:

        numeroSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 1, 15);

        for(let j = 0; j < numeroSorteado.length; j++){
           num = j + 1;
            $('#letraB').append(
             `
               <button onclick="marcarBloco(${num})" class="quadrado letraB">
               <label>${numeroSorteado[j]}</label>
               <span id="bloco${num}" class="marcador">X</span>
               </button>
             `
           )

        }

        break;
          case 1:

        numeroSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 16, 30);

        num = 5;
        for(let j = 0; j < numeroSorteado.length; j++){
           num = num + 1;
            $('#letraI').append(
            `
               <button onclick="marcarBloco(${num})" class="quadrado letraI">
               <label>${numeroSorteado[j]}</label>
               <span id="bloco${num}" class="marcador">X</span>
               </button>
           `
           )

        }

        break;
        case 2:

        numeroSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 31, 45);

        num = 10;
        for(let j = 0; j < numeroSorteado.length; j++){
           num = num + 1;
           if(num != 13){
            $('#letraN').append(
            `
               <button onclick="marcarBloco(${num})" class="quadrado letraN">
               <label>${numeroSorteado[j]}</label>
               <span id="bloco${num}" class="marcador">X</span>
               </button>
            `
           )
        }else{

            $('#letraN').append(
             `
                 <button onclick="marcarBloco(${num})" class="quadrado letraN">
                 </button>
            `
               )
            }
        }
        break;
        case3:

        numeroSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 46, 60);

        num = 15;
        for(let j = 0; j < numeroSorteado.length; j++){
           num = num + 1;
             $('#letraG').append(
            `
              <button onclick="marcarBloco(${num})" class="quadrado letraG">
               <label>${numeroSorteado[j]}</label>
               <span id="bloco${num}" class="marcador">X</span>
               </button>
            `
           )

        }

        break;
        case4:

        numeroSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 60, 75);

        num = 20;
        for(let j = 0; j < numeroSorteado.length; j++){
           num = num + 1;
             $('#letraO').append(
            `
               <button onclick="marcarBloco(${num})" class="quadrado letraO">
               <label>${numeroSorteado[j]}</label>
               <span id="bloco${num}" class="marcador">X</span>
               </button>
            `
           )

        }

        break;
    }
}