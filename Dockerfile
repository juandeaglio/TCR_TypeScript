FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json jest.config.js tsconfig.json webpack.common.config.js webpack.dev.config.js webpack.prod.config.js playwright.config.js playwright-ct.config.ts ./
RUN npm install
COPY src ./src
COPY test ./test

CMD ["npm", "test"]