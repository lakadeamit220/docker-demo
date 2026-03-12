FROM node:20

WORKDIR /app

# Remove node_modules and package-lock.json if they exist
RUN rm -rf node_modules package-lock.json

COPY package*.json ./

# Clear npm cache and force a clean install
RUN npm cache clean --force && npm install --legacy-peer-deps

COPY . .

EXPOSE 5174

CMD ["npm","run","dev","--","--host"]