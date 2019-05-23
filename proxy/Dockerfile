# Specify source image
FROM nginx

# Remove default configuration
RUN rm /etc/nginx/conf.d/*

# Copy static files to container
COPY proxy.conf /etc/nginx/conf.d/