function RunExerciseCode(id){
    var code = document.getElementById("textarea"+id).value;
    try {
        eval(code);
    } catch (error) {
        console.error("Erro ao executar o código:", error);
        document.getElementById("result" + id).innerText = "Erro: " + error;
    }
}

function setTextAreas() {
    var ex1 = `
    function divisorsSum(){
        let num = prompt("digite um número");
        num = parseInt(num);
        if(!!!num) {
            document.getElementById("result1").innerText = "Erro: não é um número";
            return;
        }
        document.getElementById("result1").innerText = num;
        let divisors = [];
        let sum = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                divisors.push(i);
                sum += i;
            }
        }
        document.getElementById("result1").innerText = "Divisores de num: " + divisors.join(' + ') + "  =  " + sum;
    }

    divisorsSum();
    `;

    var ex2 = `
    function calculateDistance() {
        let x1 = prompt("Digite a coordenada x do primeiro ponto (x1):");
        let y1 = prompt("Digite a coordenada y do primeiro ponto (y1):");
        let x2 = prompt("Digite a coordenada x do segundo ponto (x2):");
        let y2 = prompt("Digite a coordenada y do segundo ponto (y2):");

        x1 = parseInt(x1);
        y1 = parseInt(y1);
        x2 = parseInt(x2);
        y2 = parseInt(y2);

        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            document.getElementById("result2").innerText = "Erro: insira apenas números";
            return;
        }

        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        document.getElementById("result2").innerText = "a distância entre os dois pontos é: " + distance.toFixed(2);
    }

    calculateDistance();
    `;

    var ex3 = `
    function countWords() {
        var sentence = prompt("Digite sua frase");
        sentence = sentence.toLowerCase();
        var words = sentence.split(" ");
        var wordCount = {};

        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }

        var result = "";
        for (var word in wordCount) {
            result += word + " (" + wordCount[word] + "), ";
        }
        result = result.slice(0, -2);
        document.getElementById("result3").innerText = "A contagem das palavras é: " + result;
    }
    
    countWords();
    `;

    var ex4 = `
    function calculateDimensions() {
        var matrixInput = prompt("digite uma matriz como uma string de elementos, divida as linhas por ';'");

        var rows = matrixInput.split(';');

        var numRows = rows.length;
        var numCols = 0;

        for (var i = 0; i < numRows; i++) {
            var row = rows[i].trim().split(' ');
            if (row.length > numCols) {
                numCols = row.length;
            }
        }

        var result = "Isso é uma matriz de " + numRows + " linhas e " + numCols + " colunas";
        document.getElementById("result4").innerText = result;
    }

    calculateDimensions();
    `;

    var ex5 = `
    function generateFibonacciSequence() {
        var N = parseInt(prompt("Digite um número inteiro positivo:"));

        if (isNaN(N) || N <= 0) {
            document.getElementById("result2").innerText = "Erro: insira apenas números";;
            return;
        }

        var sequence = [0, 1];

        for (var i = 2; i < N; i++) {
            var nextNumber = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextNumber);
        }

        var result = sequence.join(", ");
        document.getElementById("result5").innerText = "Resultado: " + result;
    }

    generateFibonacciSequence();
    `;

    setTextArea('textarea1', ex1);
    setTextArea('textarea2', ex2);
    setTextArea('textarea3', ex3);
    setTextArea('textarea4', ex4);
    setTextArea('textarea5', ex5);
}


function setTextArea(textareaId, value) {
    var textarea = document.getElementById(textareaId);
    textarea.value = value;
}