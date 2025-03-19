# Use a imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Compila o código TypeScript
RUN npm run build

# Define o ambiente como desenvolvimento
ENV NODE_ENV=development

# Expõe a porta que o NestJS usará
EXPOSE 3000

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]
