FROM node:18-alpine3.17 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ARG VITE_API_BASE_URL

RUN echo "VITE_API_BASE_URL:${VITE_API_BASE_URL}"

RUN echo "VITE_API_BASE_URL${VITE_API_BASE_URL}" >> .env

RUN yarn run build

FROM nginx:1.21.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
