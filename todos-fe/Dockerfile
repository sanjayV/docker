# Specify node version
FROM node:9

# Create app directory
WORKDIR /home/node/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
COPY . .

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]

# # start app
# CMD ["npm", "start"]