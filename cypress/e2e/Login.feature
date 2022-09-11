# language: pt
Funcionalidade: Login

  Cenario: Abrir página de Login
    Dado que estou na página Home
    Quando clicar no botão de Login
    Entao será exibida página com título Login

  Cenario: Invalidar campos vazios
    Dado que desejo invalidar campos vazios
    Quando clicar no botão Entrar
    Entao será exibido "Erro: E-mail inválido!"
    E será exibido "Erro: Senha inválida!"

  Cenario: Limpar campos
    Dado que entrei com email errado
    E que entrei com a senha errada
    Quando clicar no botão Limpar
    Entao o campo e-mail deve estar vazio
    E o campo senha deve estar vazio

  Cenario: Login Correto
    Dado que entrei com email certo
    E que entrei com a senha certa
    Quando clicar no botão Entrar
    Entao será exibida página com título Dashboard
