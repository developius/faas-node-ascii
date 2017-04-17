# faas-node-ascii
A [FaaS](http://get-faas.com) function to generate ascii art from an image url!

You can execute the function like this:

`curl http://localhost:8080/function/func_ascii -d "https://www.docker.com/sites/default/files/social/docker-facebook-share.png"`

(or use the FaaS UI to send the URL)

![](https://pbs.twimg.com/media/C9ljSysVwAAQpxj.jpg)

## Installation

You can either install `faas-node-ascii` via your FaaS compose file or you can add it via the UI.

### Compose file

Add this to `docker-compose.yml` and then redeploy the stack

```Dockerfile
ascii:
    image: developius/faas-node-ascii:latest
    labels:
        function: "true"
    depends_on:
        - gateway
    networks:
        - functions
    environment:
        no_proxy: "gateway"
        https_proxy: $https_proxy
```

`docker stack deploy -c docker-compose.yml func`

### UI

Hit the `CREATE NEW FUNCTION` button and add these details:

- Image: `developius/faas-node-ascii:latest`
- Service name: `ascii`
- fProcess: `node /app/index.js`
- Network: `func_functions`

Hit create!

![](https://pbs.twimg.com/media/C9lj43pU0AA0mqH.jpg)
