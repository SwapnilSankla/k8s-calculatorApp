FROM node

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5000

ENTRYPOINT ["node", "index.js"]