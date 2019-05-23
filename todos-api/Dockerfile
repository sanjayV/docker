# specify the node base image with your desired version node:<version>
FROM node:9

# Create app directory
WORKDIR /home/node/app

# Copy source to container
COPY package.json .
RUN npm install

# Copy source to container
COPY . .

# use nodemon for development
# RUN npm install --global nodemon knex pg apidoc





# Generate documentation
# RUN apidoc - e node_modules/ -i components/ -o documentation

# Set permissions for public
# RUN chown -R node node_modules
# RUN sudo chmod -R 777 /home/node/app/node_modules