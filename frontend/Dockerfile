FROM node:20

WORKDIR /app

COPY package*.json ./

# Clear npm cache and force a clean install
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5174

CMD ["npm","run","dev","--","--host"]