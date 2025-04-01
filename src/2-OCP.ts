// Open/Closed Principle (OCP)
// Entidades de software devem estar abertas para extensão, mas fechadas para modificação

// Exemplo ruim: Precisa modificar a classe para adicionar novos formatos
class CalculadoraAreaRuim {
  calcularArea(figuras: Array<{tipo: string, largura?: number, altura?: number, raio?: number}>): number {
    let areaTotal = 0;
    
    for (const figura of figuras) {
      if (figura.tipo === 'retangulo') {
        areaTotal += figura.largura! * figura.altura!;
      } else if (figura.tipo === 'circulo') {
        areaTotal += Math.PI * figura.raio! * figura.raio!;
      }
      // Se precisarmos adicionar um novo tipo de figura, temos que modificar esta classe
    }
    
    return areaTotal;
  }
}

// Exemplo bom: Usando abstração e polimorfismo
interface Figura {
  calcularArea(): number;
}

class Retangulo implements Figura {
  constructor(private largura: number, private altura: number) {}
  
  calcularArea(): number {
    return this.largura * this.altura;
  }
}

class Circulo implements Figura {
  constructor(private raio: number) {}
  
  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

// Podemos adicionar novas figuras sem modificar a calculadora
class Triangulo implements Figura {
  constructor(private base: number, private altura: number) {}
  
  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

class CalculadoraArea {
  calcularAreaTotal(figuras: Figura[]): number {
    return figuras.reduce((soma, figura) => soma + figura.calcularArea(), 0);
  }
}

// Demonstração
const retangulo = new Retangulo(5, 4);
const circulo = new Circulo(3);
const triangulo = new Triangulo(6, 3);

const calculadora = new CalculadoraArea();
const areaTotal = calculadora.calcularAreaTotal([retangulo, circulo, triangulo]);

console.log(`Área total: ${areaTotal}`);

export {}