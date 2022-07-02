# Anotações do curso

## Estrutura dos testes
Given (arrange), When (act) e Then (Assert)

## Code smells

1 - Nomes estranhos

Em src/calc.ts
  - calc
  - movArray
  - mov
  - dist
  - ds
  - result

1.1 - Técnicas de Refactoring
  - renomear variáveis
  - renomear funções (métodos)
  - renomear arquivos
  - renomear pastas

2 - Números mágicos

Em src/calc.ts
  - taxas
  - horários
  - retornos de erro

2.1 - Técnicas de Refactoring
  - extrair para constantes
  - extrair para variáveis explicativas
  - extrair para enums

3 - Comentários úteis

Em src/calc.ts
  - objetivo da função
  - condições

3.1 - Código comentado e morto

Em src/calc.ts
  - códigos de debug

3.2 - Técnicas de Refactoring
  - apagar (caso a refatoração já deixe explícito o código)
  - extrair para variáveis explicativas
  - extrair para funções

4 - Condições complexas ou extensas

Em src/calc.js
  - condições de data

4.1 - Técnicas de Refactoring
  - extrair para variáveis explicativas
  - extrair para funções

5 - Linhas em branco

Em src/calc.js
  - em vários lugares, sem um padrão definido

5.1 - Técnicas de Refactoring
  - apagar
    - manter somente em caso de style guide que pede linhas em branco em situações

6 - Retornos estranhos (códigos númericos) [Depende da linguagem]

Em src/calc.js
  - -1
  - -2
  - 10

6.1 - Técnicas de Refactoring
  - Utilizar algum tipo de tratamento de erro/exceção ou outro tipo de result pattern

7 - Condições confusas

Em src/calc.js
  - validação dos parâmetros

7.1 - Técnicas de Refactoring
  - extrair para variáveis explicativas
  - extrair para funções
  - introduzir cláusulas guarda
  - consolidar condições

8 - Falta de tratamento de erros ou execeções

Idem item 6

9 - Métodos longos

Quebra do SRP (Single Responsibility Principle): Devemos separar coisas que mudam por motivos diferentes
Quebra do OCP (Open/Closed Principle): Devemos estar abertos para extensão e fechados para modificação