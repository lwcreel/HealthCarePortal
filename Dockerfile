FROM node:latest
WORKDIR /health-care-portal
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]