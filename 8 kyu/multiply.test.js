const multiply = require ("./multiply")


describe("Multiply",() => { 
  test("deberia retornar 1",() => {
        const esperado= 1
        const resultado= multiply(1,1)
        expect(esperado).toBe(resultado)
    });
    test("deberia retornar -1",() => {
        const esperado= -1
        const resultado= multiply(-1,1)
        expect(esperado).toBe(resultado)
    });
    test("deberia retornar 0",() => {
        const esperado= 0
        const resultado= multiply(0,0)
        expect(esperado).toBe(resultado)
    });
    test("numero random",() => {
        for(let i=0; i<100; i++) {
            let [a,b] = [Math.random()*100|0, Math.random()*100|0];
        expect(multiply(a,b)).toBe(a*b)}
    });
});