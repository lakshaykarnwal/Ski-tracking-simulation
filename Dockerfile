# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Vue application
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Expose port 8081
EXPOSE 8081

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "8081"]
