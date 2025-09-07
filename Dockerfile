# # Use the official Node.js image as the base image
# FROM node:20-alpine
#
# # Set the working directory inside the container
# RUN mkdir -p /usr/src/pokedex
# WORKDIR /usr/src/pokedex
#
# # Copy the application files
# COPY . ./usr/src/pokedex
#
# # Copy package.json and package-lock.json to the working directory
# COPY package*.json yarn.lock ./
#
# # Install the application dependencies
# RUN yarn install --prod
#
# # Build the NestJS application
# RUN yarn build
#
# # Create a new user
# RUN adduser --disabled-password pokeuser
# RUN chown -R pokeuser:pokeuser /usr/src/pokedex
#
# # Switch to the new user
# USER pokeuser
#
# # Clean cache
# RUN yarn cache clean --force
#
# # Expose the application port
# EXPOSE 3000
#
# # Command to run the application
# CMD ["node", "dist/main"]

FROM node:20-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:20-alpine AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/.env.prod ./.env.prod

RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser /usr/src/app
USER pokeuser

EXPOSE 3000
CMD ["node", "dist/main"]
