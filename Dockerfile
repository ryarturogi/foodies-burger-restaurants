
FROM node:14.5 AS BASE

# Create app directory
RUN mkdir -p /usr/src/app/.nuxt
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

# BUILD STAGE
FROM BASE AS BUILD

# Install all dependencies
RUN yarn

# Set environment variables
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
ARG ELANIIN_API_PATH=https://api.elaniin.dev/api
ENV ELANIIN_API_PATH ${ELANIIN_API_PATH}
ARG MAPBOXAPI=pk.eyJ1IjoicnlhcnR1cm9naSIsImEiOiJja2p3emkwcTMwZXR6MnJueHRsNXllazhmIn0.QCfaGJPD6s45FlFF9e4prQ
ENV MAPBOXAPI ${MAPBOXAPI}

# Bundle app source
COPY . /usr/src/app

# Build command
RUN yarn build

# PRODUCTION STAGE
FROM BASE AS PROD
COPY --from=BUILD /usr/src/app/.nuxt/ /usr/src/app/.nuxt/

# Set environment variables again to ensure
ENV NODE_ENV production
RUN NODE_ENV=build yarn
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
ARG ELANIIN_API_PATH=https://api.elaniin.dev/api
ENV ELANIIN_API_PATH ${ELANIIN_API_PATH}
ARG MAPBOXAPI=pk.eyJ1IjoicnlhcnR1cm9naSIsImEiOiJja2p3emkwcTMwZXR6MnJueHRsNXllazhmIn0.QCfaGJPD6s45FlFF9e4prQ
ENV MAPBOXAPI ${MAPBOXAPI}

# Bundle app source
COPY . /usr/src/app

# Installing needed packages only and clearing cache
RUN yarn --only=production && yarn cache clean --force

EXPOSE 3000
CMD [ "yarn", "start" ]
