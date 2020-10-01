FROM klakegg/hugo:ext

#COPY --from=0 m17-web-dev /src
RUN git clone https://git.kc1awv.net/kc1awv/m17-web-dev && \
    cd m17-web-dev && \
    hugo && \
    pwd && \
    ls -la

FROM caddy:latest

COPY --from=0 /src/m17-wev-dev/Caddyfile /etc/caddy/Caddyfile
COPY --from=0 /src/m17-web-dev/public /srv
