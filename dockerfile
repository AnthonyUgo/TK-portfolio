# Use a stable Node LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Install optional build tools if needed (e.g. for native modules)
# RUN apk add --no-cache make gcc g++ python3

# Copy only the package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Expose your port
EXPOSE 3000

# Run your server
CMD ["node", "server.js"]
