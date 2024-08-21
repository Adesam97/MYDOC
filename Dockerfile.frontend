# Use the official Nginx image as the base image
FROM nginx

WORKDIR .

# Copy the contents of your web page into the default Nginx document root directory
COPY . /usr/share/nginx/html

# Expose port 80 for incoming HTTP traffic
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]