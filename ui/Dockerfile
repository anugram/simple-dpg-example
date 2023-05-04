FROM node:alpine
WORKDIR /app
COPY ./ ./
RUN npm i
RUN rm -rf node_modules/.cache
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
RUN chmod -v +x entrypoint.sh
ENTRYPOINT ["sh", "/app/entrypoint.sh"]