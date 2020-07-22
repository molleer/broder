FROM node
WORKDIR /usr/scr/app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
CMD sh ./startup.sh
