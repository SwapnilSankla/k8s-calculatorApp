FROM node

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]