FROM node:alpine
RUN mkdir -p /code
WORKDIR /code
COPY package*.json ./
RUN npm i -d
COPY . .
CMD ["npm", "test"]
