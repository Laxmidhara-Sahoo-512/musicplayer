# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Copy the HTML, CSS, and audio files to the Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 80


