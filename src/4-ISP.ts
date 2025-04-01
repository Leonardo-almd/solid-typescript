// Interface Segregation Principle (ISP)
// Clientes não devem ser forçados a depender de interfaces que não utilizam

// Exemplo ruim: Interface grande e genérica
interface DispositivoMultifuncionalRuim {
  imprimir(documento: string): void;
  escanear(documento: string): void;
  enviarFax(documento: string): void;
  copiar(documento: string): void;
}

// Classes são forçadas a implementar métodos que não usam
class ImpressoraSimples implements DispositivoMultifuncionalRuim {
  imprimir(documento: string): void {
    console.log(`Imprimindo: ${documento}`);
  }
  
  // Métodos que a impressora simples não suporta
  escanear(documento: string): void {
    throw new Error("Impressora simples não pode escanear");
  }
  
  enviarFax(documento: string): void {
    throw new Error("Impressora simples não pode enviar fax");
  }
  
  copiar(documento: string): void {
    throw new Error("Impressora simples não pode copiar");
  }
}

// Exemplo bom: Interfaces segregadas por funcionalidade
interface Impressora {
  imprimir(documento: string): void;
}

interface Scanner {
  escanear(documento: string): void;
}

interface DispositivoFax {
  enviarFax(documento: string): void;
}

interface Copiadora {
  copiar(documento: string): void;
}

// Agora as classes só implementam o que precisam
class ImpressoraBasica implements Impressora {
  imprimir(documento: string): void {
    console.log(`Imprimindo: ${documento}`);
  }
}

class ScannerBasico implements Scanner {
  escanear(documento: string): void {
    console.log(`Escaneando: ${documento}`);
  }
}

// Dispositivos multifuncionais implementam múltiplas interfaces
class DispositivoMultifuncional implements Impressora, Scanner, Copiadora {
  imprimir(documento: string): void {
    console.log(`Imprimindo: ${documento}`);
  }
  
  escanear(documento: string): void {
    console.log(`Escaneando: ${documento}`);
  }
  
  copiar(documento: string): void {
    console.log(`Copiando: ${documento}`);
  }
}

// Demonstração
const impressoraBasica = new ImpressoraBasica();
impressoraBasica.imprimir("Relatório");

const dispositivoMultifuncional = new DispositivoMultifuncional();
dispositivoMultifuncional.imprimir("Contrato");
dispositivoMultifuncional.escanear("Documento");
dispositivoMultifuncional.copiar("Certificado");