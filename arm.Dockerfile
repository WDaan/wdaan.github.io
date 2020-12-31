FROM nginx
RUN mkdir /app
ADD dist /app
COPY nginx.conf /etc/nginx/nginx.conf