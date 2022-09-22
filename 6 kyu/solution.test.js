const solution = require ("./solution")

function test(n, esperado) {
    it(`n=${n}`, () => {  
      let resultado = solution(n);
      expect(esperado).toBe(resultado)
    });
  }
  describe("Numeros Basicos", () =>{
    test(10,23)
    test(20,78)
    test(200,9168)
  })
  describe("Casos de numeros pequeños", function() {
    test(-10,10)
    test(0,0)
    test(1,0)
    test(2,0)
    test(3,0)
    test(4,3)
    test(5,3)
    test(6,8)
  })
  describe("Numeros random", function() {
  
    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function _solution(numero){
      let suma = 0;
      
      for(let i = 1; i< numero; i++){
        if(i % 3 == 0 || i % 5 == 0){
          suma += i
        }
      }
      return suma;
    }
    
    for(let i = 0; i < 100; i++) {
      let random = randint(0, 10**randint(1, 5)) - 100
      test(random, _solution(random));
    }
  })