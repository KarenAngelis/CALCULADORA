function divisao (a, b) {
  if (a === 0 && b === 0) {
    return "Não pode ser dividido por zero";
  }
  if (b === 0) {
    return "Divisão por zero não é permitida";
  }
  return a / b;
}

export default divisao;