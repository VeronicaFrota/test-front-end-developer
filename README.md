## Test Trestto

- Este projeto foi criado com o Angular CLI versão 7.3.5<br/>
O projeto consiste em desenvolver uma Dashboard de uma aplicação web, utilizando dados da api pública (https://dadosabertos.camara.leg.br/swagger/api.html), contendo as seguintes funcionalidades:

- Interface de cadrastro,login e recuperação de senha.
- Barra lateral com navegação.
- Barra superior com navegação.
- Apresentar dados relavantes sobre despesas dos parlamentares.

## Estrutura do Projeto
O projeto esta dividido em um unico arquivo:
 - Front-End, no qual foi utilizado angular para o desenvolvimento da aplicação.
 
 ## Tecnologias
- Angular CLI  7.3.5
- Angular Material 8.2.3
- Flex Layout 7.0.0
- Chart.js

## Como instalar
Para que o projeto seja compilado é necessário seguir os seguintes passos:
- Entrar no diretório contendo os arquivos do front-end e executar o comando `npm install`</br>


## Como Executar
Para que o projeto seja executado é necessário seguir os seguintes passos:
- Entrar no diretório contendo os arquivos do front-end e executar o comando `ng serve`.</br>
Depois acesse `http://localhost:4200/`. 


# Resultado final - Layout Responsivo
- <h3> Página de Login </h3>  
![1login](https://user-images.githubusercontent.com/14812860/71223517-fc431800-22b2-11ea-8090-43ce7fadb1fe.png)
  Nesta página encontra-se localizado ao lado esquerdo o logo da empresa, ao lado direito encontram-se os campos necessários para que o usuário realize seu login, tais como email e senha, seguido do botão "Entrar". <br>
    Caso o usuário esqueça sua senha é possível recupera-lá clicando no link "Recuperar Senha", sendo desta forma redirecionado para a página de recuperação de senha.
    
 - <h3> Página Recuperação de Senha </h3>  
  ![2recupera-senha](https://user-images.githubusercontent.com/14812860/71223774-b6d31a80-22b3-11ea-8ed5-8079c54b2aad.png)
  Nesta página, assim como na página de login, encontra-se localizado ao lado esquerdo o logo da empresa, ao lado direito encontram-se os campos necessários para que o usuário possa recuperar sua senha, sendo este o campo de email, seguido do botão "Recuperar Senha".<br>
    Caso o usuário não queira recuperar a senha é possível clicar no botão de "Voltar" que redireciona o usuário para a página de login.
    
- <h3> Dashborad </h3>  
 ![3 0dashboard](https://user-images.githubusercontent.com/14812860/71225026-061a4a80-22b6-11ea-836e-153d5991e31c.png)
  Nesta página encontra-se a dashboard, contendo informações referentes as despesas do parlamentar.<br>
  Estas informações podem ser visualizadas através de cards na parte superior do site, contendo informações como ano e mês (que a pesquisa referente a despesa do parlamentar foi pesquisada).<br>
  Abaixo dos card encontram-se dois gráficos, contendo o nome do parlamentar, partido e sigla do estado do parlamentar em questão, seguido dos gráficos de "Valores Gastos com Fornecedores no Mês de Setembro" e "Valores Gastos com Documentosno Mês de Setembro".
  
  
- <h3> Dashborad (Continuação)</h3>  
 ![3 1dashboard](https://user-images.githubusercontent.com/14812860/71225413-5b0a9080-22b7-11ea-8531-83c44256fdf5.png)
  Por fim, encontra-se uma tabela para maiores detalhes das despesas do parlamentar em quentão, contendo informações como, data do documento, tipo da despesa, tipo de documento, valor do documento e nome do fornecedor, sendo possível realizar a paginação desta tabela.


- <h3>Cadastro de Parlamentar</h3>  
![4cadastro-parlamentar](https://user-images.githubusercontent.com/14812860/71225512-a1f88600-22b7-11ea-8c45-ec1b37df2fcf.png)
  Nesta página encontra-se o formulário de Cadastro do Parlamentar, contendo campos que deverão ser preenchidos, tais como, Nome, Nome Civil, Email, Sexo, Data de Nascimento, Sigla do Partido, Sigla do UF e escolaridade, seguido do botão de "Salvar" e "Cancelar".


- <h3>Alterar Senha</h3>  
![5altera-senha](https://user-images.githubusercontent.com/14812860/71225691-1b907400-22b8-11ea-8359-e9d18ad8a8c3.png)
  Nesta página encontra-se o formulário para realizar a alteração de senha, contendo os campos de senha antiga, nova senha e confirmação de nova senha, seguido do botão de "Salvar" e "Cancelar".

    
    
    
    
    
    
    
    
