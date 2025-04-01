// Liskov Substitution Principle (LSP)
// Subtipos devem ser substituíveis por seus tipos base

// Exemplo ruim: Violação do princípio
class RetanguloRuim {
  constructor(protected largura: number, protected altura: number) {}

  setLargura(largura: number): void {
    this.largura = largura;
  }

  setAltura(altura: number): void {
    this.altura = altura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

// Problema: Quadrado herda de Retângulo mas viola suas invariantes
class QuadradoRuim extends RetanguloRuim {
  constructor(lado: number) {
    super(lado, lado);
  }

  // O quadrado sobrescreve métodos, forçando largura = altura
  setLargura(largura: number): void {
    this.largura = largura;
    this.altura = largura; // Isso viola a expectativa de quem usa RetanguloRuim
  }

  setAltura(altura: number): void {
    this.altura = altura;
    this.largura = altura; // Isso viola a expectativa de quem usa RetanguloRuim
  }
}

// Teste que falha devido à violação de LSP
function testarRetangulo(retangulo: RetanguloRuim): boolean {
  retangulo.setLargura(5);
  retangulo.setAltura(4);
  return retangulo.calcularArea() === 20; // Deveria ser 5 * 4 = 20
}

// Exemplo bom: Respeitando LSP com hierarquia adequada
interface FormaRetangular {
  calcularArea(): number;
}

class Retangulo implements FormaRetangular {
  constructor(private largura: number, private altura: number) {}

  getLargura(): number {
    return this.largura;
  }

  getAltura(): number {
    return this.altura;
  }

  setLargura(largura: number): void {
    this.largura = largura;
  }

  setAltura(altura: number): void {
    this.altura = altura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

class Quadrado implements FormaRetangular {
  constructor(private lado: number) {}

  getLado(): number {
    return this.lado;
  }

  setLado(lado: number): void {
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}

// Demonstração
const quadradoRuim = new QuadradoRuim(4);
console.log(testarRetangulo(quadradoRuim)); // Retorna false, violando LSP

const retangulo = new Retangulo(5, 4);
const quadrado = new Quadrado(4);

console.log(`Área do retângulo: ${retangulo.calcularArea()}`);
console.log(`Área do quadrado: ${quadrado.calcularArea()}`);