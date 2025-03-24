FROM node:22-alpine
COPY . /app
WORKDIR /app
RUN npm install
USER node
CMD ["node", "server.js"]