FROM klakegg/hugo:ext

WORKDIR /data
COPY . /data
RUN hugo

FROM nginx:alpine
COPY --from=0 /data/public /usr/share/nginx/html
