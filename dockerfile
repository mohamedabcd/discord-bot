FROM node:latest

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm init\
&& npm install discord.js\
&& npm install --development

COPY .dockerignore

COPY . .

CMD ["node", "server.js"]