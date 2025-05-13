# Use a stable Node LTS image
FROM node:24-slim

# Create app directory
WORKDIR /usr/src/app

# Copy only package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port (you can change if server.js uses a different one)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
