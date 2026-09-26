[🇧🇷 Português](#-princípios-solid-em-typescript) | [🇦🇺 English](#-solid-principles-in-typescript)

---

# 🇧🇷 Princípios SOLID em TypeScript

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

---

[⬆️ Back to top / Voltar ao topo](#-princípios-solid-em-typescript)

---

# 🇦🇺 SOLID Principles in TypeScript

This project demonstrates the five SOLID principles of object-oriented programming through examples in TypeScript.

## What is SOLID?

SOLID is an acronym representing five fundamental principles of object-oriented programming that help create more maintainable, flexible, and scalable software:

- **S**: Single Responsibility Principle
- **O**: Open/Closed Principle
- **L**: Liskov Substitution Principle
- **I**: Interface Segregation Principle
- **D**: Dependency Inversion Principle

## Principles Explained

### 1. Single Responsibility Principle (SRP)

**Definition:** A class should have only one reason to change.

**Example in the Project:**
- File: `src/1-SRP.ts`
- Demonstrates how to break up a bloated class with multiple responsibilities into smaller classes, each with a single, well-defined responsibility.
- Compares `UsuarioRuim` (with multiple responsibilities) with specialized classes: `Usuario`, `UsuarioRepository`, `EmailService`, and `RelatorioService`.

### 2. Open/Closed Principle (OCP)

**Definition:** Software entities should be open for extension but closed for modification.

**Example in the Project:**
- File: `src/2-OCP.ts`
- Demonstrates how to design classes that can be extended without modifying their existing code.
- Compares `CalculadoraAreaRuim` (which needs to be modified for every new shape) with an approach based on a `Figura` interface that allows new shapes to be added without modifying existing code.

### 3. Liskov Substitution Principle (LSP)

**Definition:** Subtypes must be substitutable for their base types without altering the program's expected behavior.

**Example in the Project:**
- File: `src/3-LSP.ts`
- Demonstrates how LSP violations can lead to unexpected behavior.
- Compares the problematic relationship between `RetanguloRuim` and `QuadradoRuim` with a better approach using the `FormaRetangular` interface, which allows `Retangulo` and `Quadrado` to be independent implementations.

### 4. Interface Segregation Principle (ISP)

**Definition:** Clients should not be forced to depend on interfaces they do not use.

**Example in the Project:**
- File: `src/4-ISP.ts`
- Demonstrates how to split large interfaces into smaller, more specific ones.
- Compares `DispositivoMultifuncionalRuim` (a large interface that forces unnecessary implementations) with segregated interfaces such as `Impressora`, `Scanner`, `DispositivoFax`, and `Copiadora`.

### 5. Dependency Inversion Principle (DIP)

**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions.

**Example in the Project:**
- File: `src/5-DIP.ts`
- Demonstrates how to use dependency injection and abstractions to reduce coupling.
- Compares `ServicoNotificacaoRuim` (which depends directly on a concrete implementation) with `ServicoNotificacao` (which depends on the `Notificador` abstraction).

## How to Run

To run the examples:

1. Install the dependencies:
   ```
   npm install
   ```

2. Run a specific example:
   ```
   npx ts-node src/1-SRP.ts
   npx ts-node src/2-OCP.ts
   npx ts-node src/3-LSP.ts
   npx ts-node src/4-ISP.ts
   npx ts-node src/5-DIP.ts
   ```

3. Or compile and run all of them:
   ```
   npm run start
   ```

## Benefits of Applying SOLID

- **Maintainability:** Code that is easier to understand and modify
- **Flexibility:** Makes it easier to adapt to new requirements
- **Testability:** More modular code is easier to test
- **Scalability:** Makes it easier to add new features without breaking existing code
- **Reusability:** Well-defined components can be reused across different parts of the system

---

[⬆️ Back to top / Voltar ao topo](#-princípios-solid-em-typescript)
