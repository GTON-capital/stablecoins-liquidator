FROM node:18.12-alpine3.16 as build_stage
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./
COPY .npmrc ./
RUN yarn install --frozen-lockfile
COPY src ./src
RUN npx tsc


FROM node:18.12-alpine3.16
WORKDIR /app
COPY --from=build_stage /app/dist dist/
COPY config.yaml ./
COPY .npmrc ./

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production

RUN npm install pm2 -g
EXPOSE 80
CMD ["pm2-runtime", "start", "dist/app"]