FROM node:10.13-alpine

LABEL maintainer "Jason Yeh <jason@yehs.us>"

# Install prerequisites
RUN apk update && apk add --no-cache bash yarn

# Set the working directory
ADD . /code
WORKDIR /code

# Install Node.js dependencies (only production)
RUN ["yarn"]

# Init Docker command
EXPOSE 8080
CMD ["yarn", "start"]
