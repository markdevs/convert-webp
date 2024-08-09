# Conversor de Imagens para WebP

Este projeto é um simples conversor de imagens que utiliza o Node.js e a biblioteca `sharp` para converter e comprimir imagens para o formato WebP. O código percorre uma pasta de entrada, converte cada imagem encontrada, e armazena as versões comprimidas na pasta de saída.

## Pré-requisitos

- Node.js instalado em sua máquina.
- Conhecimento básico de como utilizar o terminal/linha de comando.

## Instalação

1. Clone este repositório ou copie os arquivos para o seu projeto.

2. Instale as dependências necessárias executando o comando abaixo na pasta raiz do projeto:

   ```bash
   npm install sharp
   ```
## Estrutura de Pastas

1. input: Pasta onde você deve colocar as imagens que deseja converter.
2. output: Pasta onde as imagens convertidas serão salvas.

## Como Usar

1. Coloque as imagens que deseja converter dentro da pasta input.
2. (Opcional) Se desejar adicionar um prefixo personalizado aos nomes dos arquivos convertidos, edite a variável prefixoPersonalizado no código.
3. Execute o script utilizando o comando:

```bash
node index.js

```
**Nota: Substitua index.js pelo nome do arquivo principal caso tenha alterado.**

4. As imagens convertidas serão salvas na pasta output com a extensão .webp e o prefixo (se configurado).

## Configurações
> Qualidade da Imagem
> A qualidade da imagem comprimida está configurada para 80%. Para alterar, modifique o valor quality na linha onde sharp() é chamado.

```
.webp({ quality: 80 }) // Altere o valor de 80 para qualquer número entre 0 e 100.

```

## Prefixo Personalizado

Para adicionar um prefixo aos nomes dos arquivos convertidos, edite a variável prefixoPersonalizado:

```
const prefixoPersonalizado = 'meuPrefixo_'; // Substitua 'meuPrefixo_' pelo prefixo desejado.

```

## Como Funciona o Código
Aqui está uma explicação detalhada de cada etapa do código:

> 1. Importação dos Módulos:
>
> - fs: Para manipulação de arquivos e diretórios.
> - sharp: Para processamento e conversão de imagens.

> 2. Definição de Pastas e Prefixo:
>
> - inputFolder: Define a pasta onde as imagens de entrada estão localizadas.
> - outputFolder: Define a pasta onde as imagens convertidas serão armazenadas.
> - prefixoPersonalizado: Um prefixo opcional que pode ser adicionado ao nome dos arquivos de saída.

> 3. Criação da Pasta de Saída (se necessário):
>
> - Verifica se a pasta de saída (output) existe; se não, a pasta é criada automaticamente.

> 4. Leitura dos Arquivos na Pasta de Entrada:
>
> - O script lista todos os arquivos na pasta de entrada (input).

> 5. Processamento de Cada Imagem:
>
> - O caminho completo para cada arquivo é criado.
> - O nome do arquivo de saída é gerado, substituindo a extensão original pela .webp e adicionando o prefixo, se configurado.
> - A imagem é então convertida e comprimida para o formato WebP com 80% de qualidade.
> - O arquivo convertido é salvo na pasta de saída (output).

> 6. Tratamento de Erros:
>
> - Se ocorrer um erro ao ler a pasta ou ao converter uma imagem, o script exibe uma mensagem de erro detalhada.

## Erros Comuns
> Erro ao instalar o sharp: Verifique se você tem as ferramentas de desenvolvimento necessárias instaladas no seu sistema (como o Python e um compilador C++).
>
> Erro ao ler a pasta de entrada: Certifique-se de que o caminho da pasta de entrada está correto e que ela contém imagens válidas.

## Contribuições

**Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.**

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
```
Esse arquivo README.md inclui todas as informações necessárias e está formatado para fornecer uma visão clara e detalhada sobre o projeto, a instalação, uso e configuração.
```


