// Dependency Inversion Principle (DIP)
// Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

// Exemplo ruim: Dependência direta de implementação concreta
class NotificadorEmailRuim {
  enviar(mensagem: string): void {
    console.log(`Enviando email: ${mensagem}`);
  }
}

class ServicoNotificacaoRuim {
  private notificador: NotificadorEmailRuim;
  
  constructor() {
    // Dependência direta da implementação
    this.notificador = new NotificadorEmailRuim();
  }
  
  notificarUsuario(mensagem: string): void {
    this.notificador.enviar(mensagem);
    // Se quisermos mudar para SMS, precisamos modificar esta classe
  }
}

// Exemplo bom: Usando abstração e injeção de dependência
interface Notificador {
  enviar(mensagem: string): void;
}

class NotificadorEmail implements Notificador {
  enviar(mensagem: string): void {
    console.log(`Enviando email: ${mensagem}`);
  }
}

class NotificadorSMS implements Notificador {
  enviar(mensagem: string): void {
    console.log(`Enviando SMS: ${mensagem}`);
  }
}

class ServicoNotificacao {
  constructor(private notificador: Notificador) {}
  
  notificarUsuario(mensagem: string): void {
    this.notificador.enviar(mensagem);
  }
}

// Demonstração
const notificadorEmail = new NotificadorEmail();
const notificadorSMS = new NotificadorSMS();

// Podemos facilmente mudar a implementação do notificador
const servicoComEmail = new ServicoNotificacao(notificadorEmail);
const servicoComSMS = new ServicoNotificacao(notificadorSMS);

servicoComEmail.notificarUsuario("Sua conta foi criada");
servicoComSMS.notificarUsuario("Código de verificação: 12345");