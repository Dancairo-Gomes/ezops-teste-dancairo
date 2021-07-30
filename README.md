# Simple Chat Aplication

Essa documentação mostra como levantar uma infraestrutura de um de uma aplicação em nodejs


<br/>



## Criando nova stack com terraform



> 1. Inicializando o terraform



```sh

terraform init

```



Para esse comando de inicialização funcionar, você precisa ter configurado as credencias aws `~/.aws/credentials`. Ex:



```sh

[default]

aws_access_key_id=AKIAIOSFODNN7EXAMPLE

aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

```



> 2. Configurando variáveis do terraform



Você precisa informar para o terraform qual é o nome da sua aplicação. Esse nome deve ser o mesmo nome do repositório git.



Você precisa alterar o nome default `chat-app` para o nome da sua apliação, fazendo isso nesse arquivo [variables.tf](/variables.tf).




> 3. Criando os recursos AWS com o terraform



```sh

terraform apply

```



> 4. Esse script vai criar:

- 1 AWS AMI da aplicação;

- 1 AWS SecurityGroup da aplicação;




<br/>



## Removendo stack com terraform



> 1. Removendo os recursos AWS com o terraform



```

terraform destroy

```



> 2. Esse script vai remover:

- 1 AWS AMI da aplicação;

- 1 AWS SecurityGroup da aplicação;

## Subindo a aplicação

> 1. Acessar a maquina via ssh

- 1 sudo ssh -i chave_acesso.pem ubuntu@ip_instancia

- 2 acessar o diretorio da aplicação

- 3 executar comando docker run

```sh

sudo docker run -d --name=chat-app --restart=always -p 3000:3000 dancairo/chat-app:latest

```

