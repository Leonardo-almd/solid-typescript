# Princípios SOLID em TypeScript

Este projeto demonstra os cinco princípios SOLID da programação orientada a objetos através de exemplos em TypeScript.

## O que é SOLID?

SOLID é um acrônimo que representa cinco princípios fundamentais da programação orientada a objetos que ajudam a criar software mais manutenível, flexível e escalável:

- **S**: Single Responsibility Principle (Princípio da Responsabilidade Única)
- **O**: Open/Closed Principle (Princípio Aberto/Fechado)
- **L**: Liskov Substitution Principle (Princípio da Substituição de Liskov)
- **I**: Interface Segregation Principle (Princípio da Segregação de Interface)
- **D**: Dependency Inversion Principle (Princípio da Inversão de Dependência)

## Princípios Explicados

### 1. Princípio da Responsabilidade Única (SRP)

**Definição:** Uma classe deve ter apenas uma razão para mudar.

**Exemplo no Projeto:**
- Arquivo: `src/1-SRP.ts`
- Demonstra como separar uma classe inchada com múltiplas responsabilidades em classes menores, cada uma com uma única responsabilidade bem definida.
- Compara `UsuarioRuim` (com múltiplas responsabilidades) com classes especializadas: `Usuario`, `UsuarioRepository`, `EmailService` e `RelatorioService`.

### 2. Princípio Aberto/Fechado (OCP)

**Definição:** Entidades de software devem estar abertas para extensão, mas fechadas para modificação.

**Exemplo no Projeto:**
- Arquivo: `src/2-OCP.ts`
- Demonstra como projetar classes que podem ser estendidas sem modificar seu código existente.
- Compara `CalculadoraAreaRuim` (que precisa ser modificada para cada nova figura) com uma abordagem baseada em interface `Figura` que permite adicionar novas formas sem modificar o código existente.

### 3. Princípio da Substituição de Liskov (LSP)

**Definição:** Subtipos devem ser substituíveis por seus tipos base sem alterar o comportamento esperado do programa.

**Exemplo no Projeto:**
- Arquivo: `src/3-LSP.ts`
- Demonstra como violações do LSP podem levar a comportamentos inesperados.
- Compara a relação problemática entre `RetanguloRuim` e `QuadradoRuim` com uma abordagem melhor usando a interface `FormaRetangular` que permite que `Retangulo` e `Quadrado` sejam implementações independentes.

### 4. Princípio da Segregação de Interface (ISP)

**Definição:** Clientes não devem ser forçados a depender de interfaces que não utilizam.

**Exemplo no Projeto:**
- Arquivo: `src/4-ISP.ts`
- Demonstra como dividir interfaces grandes em interfaces menores e mais específicas.
- Compara `DispositivoMultifuncionalRuim` (uma interface grande que força implementações desnecessárias) com interfaces segregadas como `Impressora`, `Scanner`, `DispositivoFax` e `Copiadora`.

### 5. Princípio da Inversão de Dependência (DIP)

**Definição:** Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

**Exemplo no Projeto:**
- Arquivo: `src/5-DIP.ts`
- Demonstra como usar injeção de dependência e abstrações para reduzir o acoplamento.
- Compara `ServicoNotificacaoRuim` (que depende diretamente de uma implementação concreta) com `ServicoNotificacao` (que depende da abstração `Notificador`).

## Como Executar

Para executar os exemplos:

1. Instale as dependências:
   ```
   npm install
   ```

2. Execute um exemplo específico:
   ```
   npx ts-node src/1-SRP.ts
   npx ts-node src/2-OCP.ts
   npx ts-node src/3-LSP.ts
   npx ts-node src/4-ISP.ts
   npx ts-node src/5-DIP.ts
   ```

3. Ou compile e execute todos:
   ```
   npm run start
   ```

## Benefícios da Aplicação SOLID

- **Manutenibilidade:** Código mais fácil de entender e modificar
- **Flexibilidade:** Facilita a adaptação a novos requisitos
- **Testabilidade:** Código mais modular é mais fácil de testar
- **Escalabilidade:** Facilita a adição de novas funcionalidades sem quebrar o código existente
- **Reutilização:** Componentes bem definidos podem ser reutilizados em diferentes partes do sistema