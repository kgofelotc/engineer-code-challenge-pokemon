# Specify the parent image from which we build
FROM nginx:1.17.1-alpine
# Copy files from host to current working directory
COPY /dist/Pokemon /usr/share/nginx/html