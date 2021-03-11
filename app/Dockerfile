FROM node:14-alpine

RUN apk add xsel=1.2.0_git20190821-r0 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/testing
RUN apk add yarn=1.22.10-r0 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN yarn set version 1.22.10

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install --silent --ignore-optional --ignore-engines
RUN yarn add global serve --ignore-engines
RUN yarn add global react-scripts@3.3.1 --silent --ignore-optional --ignore-engines

CMD ["yarn", "start"]
