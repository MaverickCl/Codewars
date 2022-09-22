const pigIt = require ("./pigIt")

test("Palabra simple",() => {
    expect('olaHay').toBe(pigIt('Hola'))
    
});
test("Test simbolos",() => {
    expect('@').toBe(pigIt('@'))
    
});
describe("Tests con palabras largas", () => {

    it("test", () => {
      
            let pBase = [     
            ['Acta est fabula', 'ctaAay steay abulafay'],
            ['Barba non facit philosophum', 'arbaBay onnay acitfay hilosophumpay'],
            ['Cucullus non facit monachum', 'ucullusCay onnay acitfay onachummay'],
            ['empresas yuta', 'mpresaseay utayay'],
            ['Errare humanum est', 'rrareEay umanumhay steay'],
            ['Fluctuat nec mergitur', 'luctuatFay ecnay ergiturmay'],
            ['viva la vida', 'ivavay alay idavay'],
            ['Hic et nunc', 'icHay teay uncnay'],
            ['In vino veritas', 'nIay inovay eritasvay'],
            ['Lux in tenebris lucet', 'uxLay niay enebristay ucetlay'],
            ['Morituri nolumus mori', 'orituriMay olumusnay orimay'],
            ['Nunc est bibendum', 'uncNay steay ibendumbay'],
            ['Veni vidi vici', 'eniVay idivay icivay']];
     
       
  
  
 
  for (let [ingresado,esperado] of pBase)
   expect(pigIt(ingresado)).toBe(esperado)
    });
  });