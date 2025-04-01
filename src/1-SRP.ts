// Single Responsibility Principle (SRP)
// Uma classe deve ter apenas uma razão para mudar

// Exemplo ruim: Classe com múltiplas responsabilidades
class UsuarioRuim {
  constructor(private nome: string, private email: string) {}

  salvarNoBanco(): void {
    console.log(`Salvando ${this.nome} no banco de dados`);
  }

  enviarEmail(): void {
    console.log(`Enviando email para ${this.email}`);
  }

  gerarRelatorio(): void {
    console.log(`Gerando relatório para ${this.nome}`);
  }
}

// Exemplo bom: Cada classe tem uma única responsabilidade
class Usuario {
  constructor(private nome: string, private email: string) {}

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }
}

class UsuarioRepository {
  salvar(usuario: Usuario): void {
    console.log(`Salvando ${usuario.getNome()} no banco de dados`);
  }
}

class EmailService {
  enviar(usuario: Usuario): void {
    console.log(`Enviando email para ${usuario.getEmail()}`);
  }
}

class RelatorioService {
  gerar(usuario: Usuario): void {
    console.log(`Gerando relatório para ${usuario.getNome()}`);
  }
}

// Demonstração
const usuario = new Usuario("Maria", "maria@exemplo.com");
const repository = new UsuarioRepository();
const emailService = new EmailService();
const relatorioService = new RelatorioService();

repository.salvar(usuario);
emailService.enviar(usuario);
relatorioService.gerar(usuario);