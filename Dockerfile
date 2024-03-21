FROM node:14

WORKDIR /src

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy your code into the Docker image
COPY . .

# Expose the port 3000
EXPOSE 3000

# Set the default command to run when a container starts
CMD ["npm", "start"]
