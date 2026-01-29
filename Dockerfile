FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .

# Build-time config (Docker should use baseUrl="/")
ARG DOCS_BASEURL=/
ARG DOCS_URL=http://localhost
ENV DOCS_BASEURL=$DOCS_BASEURL
ENV DOCS_URL=$DOCS_URL

RUN npm run build

FROM nginx:1.27-alpine AS runtime
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
