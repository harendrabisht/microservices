FROM node:18-slim
WORKDIR /
COPY package.json ./
COPY . .
RUN npm install
RUN  npm install -g nodemon
ENV PORT 80
EXPOSE 80
CMD ["nodemon", "./bin/www"]