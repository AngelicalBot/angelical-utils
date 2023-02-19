function formatarNumero(numero, casasDecimais = 2, separadorMilhar = '.', separadorDecimal = ',') {
  const partes = Number(numero).toFixed(casasDecimais).split('.');
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, separadorMilhar);
  return partes.join(separadorDecimal);
}

module.exports = formatarNumero;
