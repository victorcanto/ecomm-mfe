## Implementando o Module Federation

#### 1. Definir um app como Host e outro como Remote.

O Host é o app que utiliza o código de outro projeto. (CONTAINER)

O Remote é o app que compartilha código para outros projetos. (PRODUCTS)

#### 2. No Remote, decidimos quais módulos ou arquivos vamos disponibilizar para outros projetos.

#### 3. Setar o plugin do Module Federation para expôr os arquivos desejados.

#### 4. No Host, decidimos quais módulos ou arquivos queremos obter do controle remoto.

#### 5. No Host, refatoramos o ponto de entrada para carregar de forma assíncrona.

#### 6. No Host, vamos importar os arquivos que realmente precisamos do remote.
