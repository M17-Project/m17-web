FROM klakegg/hugo:ext

WORKDIR /data
ADD . /data
RUN hugo && pwd && ls -la && ls -la public

FROM nginx:alpine
COPY --from=0 /data/public /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html
