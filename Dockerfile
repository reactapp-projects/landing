# Use an official Node.js runtime as the base image
FROM node:20-alpine as builder

# Set the working directory in the container
WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package.json ./

# # Install dependencies
# RUN npm install

# # Copy the entire project to the working directory
# COPY . .

COPY . .
RUN rm package-lock.json
RUN yarn install --frozen-lockfile
RUN yarn build
# Expose port 3000
# EXPOSE 3000

# # Start the React application
# CMD ["npm", "start"]
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]