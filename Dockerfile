# Stage 1 - Build Dependencies
FROM node:8.10 as build-dependencies
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - Production Environment
FROM nginx:1.12-alpine
COPY --from=build-dependencies /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
