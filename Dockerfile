FROM klakegg/hugo:ext

RUN git clone https://git.kc1awv.net/kc1awv/m17-web-dev && \
    cd m17-web-dev && \
    hugo

FROM nginx

COPY --from=0 /src/m17-web-dev/public /usr/share/nginx/html
