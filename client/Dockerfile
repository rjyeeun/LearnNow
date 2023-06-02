# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory within the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm ci

# Copy the entire project directory into the container
COPY . .

# Build the React app for production
# RUN npm run build

# Expose the port on which the React app will run (if necessary)
EXPOSE 4000

# Set the command to start the React app
CMD ["npm", "start"]
