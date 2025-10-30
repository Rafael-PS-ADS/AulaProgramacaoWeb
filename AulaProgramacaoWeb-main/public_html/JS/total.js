var $input_quantidade = document.querySelector('#qtd');
var $output_total = document.querySelector('#total');
$input_quantidade.oninput = function() {
    var preco = document.querySelector("#preco").textContent;
    preco = preco.replace(/R\$|\s|\./g, "").replace(',', '.');
    preco = parseFloat(preco) || 0;
    var quantidade = parseInt($input_quantidade.value, 10) || 0;
    var total = preco * quantidade;
    total = total.toFixed(2);
    total = total.replace('.', ',');
    if ($output_total) {
        $output_total.textContent = 'R$ ' + total;
    }
}