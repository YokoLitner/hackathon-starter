FROM node:16.14 

WORKDIR /app/

COPY package*.json yarn.lock tsconfig.build.json tsconfig.json /app/

COPY ormconfig.json.example /app/ormconfig.json

RUN yarn

COPY src /app/src

CMD ["yarn", "start"]
