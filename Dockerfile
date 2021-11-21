FROM node:17.0.1-alpine
# Env
# Create Directory for the Container
WORKDIR  /app
# Only copy the package.json file to work directory
COPY package.json /app
# Install all Packages
RUN npm install
# Copy all other source code to work directory
COPY . /app
# TypeScript
RUN npm run build          
RUN npm run dev-start       
# Start
# CMD [ "npm", "start" ]
# EXPOSE 7001