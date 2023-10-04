# Use the official Nginx image as the base image
FROM nginx:alpine

# Remove default nginx configuration and website
RUN rm -rf /etc/nginx/conf.d/* \
    && rm -rf /usr/share/nginx/html/*

# Copy the static build directory to the Nginx container
COPY out/ /usr/share/nginx/html/

# Provide a simple default Nginx configuration
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80 of the container
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

