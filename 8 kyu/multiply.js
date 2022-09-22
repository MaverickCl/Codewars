function multiply(a, b){
    if (undefined == a || undefined == b || isNaN(a) || isNaN(b))
      throw new Error('los parametros deben ser numeros')
    return a * b
  }
  module.exports = multiply;