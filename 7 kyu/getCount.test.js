const getCount = require ("./getCount")


describe("Vowels Count Tests",() => { 
  test("should return 5 for 'abracadabra'",() => {
        const esperado= 5
        const resultado= getCount("abracadabra")
        expect(esperado).toBe(resultado)
    });
    test("deberia retornar 0 'fly'",() => {
      const esperado= 0
      const resultado= getCount("fly")
      expect(esperado).toBe(resultado)
  });
  test("Validar para palabras random",() => {
    const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
    const elements = xs => xs[rnd(xs.length)] ;
    const CHARS = "abcdefghijklmnopqrstuvwxyz    ";
    const rndString = size => Array.from( { length: rnd(size) }, () => elements(CHARS) ).join("") ;
    const refGetCount = s => s.replace(/[^aeiou]/g,"").length ;
    for ( let i=1; i<=100; i++ ) {
      const s = rndString(i);
      const resultado = getCount(s);
      const esperado = refGetCount(s);
      expect(esperado).toBe(resultado)
      
    }
});
});