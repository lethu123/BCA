# Name the node stage "builder"
FROM node:14.16-alpine3.12 AS builder
# Set working directory
WORKDIR /usr/src/bcavietnam.com
ENV PATH /usr/src/bcavietnam.com/node_modules/.bin:$PATH
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm ci && npm run build && rm -rf node_modules

# nginx state for serving content
FROM nginx:1.19.3-alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /usr/src/sasamviet.vn/build .
# Remove default config nginx
RUN rm /etc/nginx/conf.d/default.conf
# Relace it with custom config
COPY nginx/nginx.conf /etc/nginx/conf.d
# expose for link service
EXPOSE 80 443
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
