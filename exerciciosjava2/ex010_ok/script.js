function calcularMetas() {
    const valorVendido = parseFloat(document.getElementById('valorVendido').value);
    const meta = parseFloat(document.getElementById('meta').value);
    const metaMinima = parseFloat(document.getElementById('metaMinima').value);

    const percentualMeta = (valorVendido / meta) * 100;
    const percentualMetaMinima = (valorVendido / metaMinima) * 100;

    let statusMeta;
    if (valorVendido >= meta) {
        statusMeta = 'Você atingiu a meta!';
    } else if (valorVendido >= metaMinima) {
        statusMeta = 'Você atingiu a meta mínima!';
    } else {
        statusMeta = 'Você não atingiu a meta nem a meta mínima.';
    }

    document.getElementById('statusMeta').textContent = statusMeta;
    document.getElementById('percentualMeta').textContent = 
        `Percentual de atingimento da meta: ${percentualMeta.toFixed(2)}%`;
    document.getElementById('percentualMetaMinima').textContent = 
        `Percentual de atingimento da meta mínima: ${percentualMetaMinima.toFixed(2)}%`;

    document.getElementById('resultado').style.display = 'block';
}