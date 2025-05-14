# Use a stable Node LTS image
FROM node:20-slim
FROM node:22-alpine

# Create app directory
# Set working directory
WORKDIR /usr/src/app

# Copy only package files first (for layer caching)
# Install optional build tools if needed (e.g. for native modules)
# RUN apk add --no-cache make gcc g++ python3
# Copy only the package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
# Copy the rest of your app
COPY . .

# Expose port (you can change if server.js uses a different one)
# Expose your port
EXPOSE 3000

# Start the app
# Run your server
CMD ["node", "server.js"]
