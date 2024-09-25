# Usando a imagem base do Node.js
FROM node:20.12.2

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Configurar npm e instalar dependências
RUN npm config set registry http://registry.npmjs.org/
RUN npm config set strict-ssl false
RUN npm config set fetch-retries 5
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm install

# Copiar o restante do código do aplicativo
COPY . .

# Copiar o arquivo de ambiente de produção
COPY prod.env .env

# Expor a porta
EXPOSE 8080

# Iniciar o aplicativo
CMD ["npm", "run", "start"]

