FROM node:18-slim
WORKDIR /product-service
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN ls -a
RUN npm install
RUN npm run build
## this is stage two , where the app actually runs
FROM node:18-slim
WORKDIR /product-service
COPY package.json ./
RUN npm install --only=production
RUN npm install -g nodemon
COPY --from=0 /product-service/dist .
ENV PORT 80
EXPOSE 80
CMD ["nodemon","server.js"]