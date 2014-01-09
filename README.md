
# Hello Glass

Simple "Hello World" app built using the [Express](http://expressjs.com/) web
application framework for [Node.js](http://nodejs.org/) with
[MongoDB](http://www.mongodb.org/) session support setup for deployment to
[Heroku](https://www.heroku.com/). Oh, and it's also a Google Glass
application! This project is part 4 of 4 mini projects used for the Codemash
2014 presentation titled "Google Glass on Node.js".

+ [Part 1 - Hello World](https://github.com/tobius/codemash-hello-world.git)
+ [Part 2 - Hello Mongo](https://github.com/tobius/codemash-hello-mongo.git)
+ [Part 3 - Hello Heroku](https://github.com/tobius/codemash-hello-heroku.git)
+ [Part 4 - Hello Glass](https://github.com/tobius/codemash-hello-glass.git) (you are here)

## Install

```
[~] git clone https://github.com/tobius/codemash-hello-glass.git
[~] cd codemash-hello-glass
[~/codemash-hello-glass] npm install
[~/codemash-hello-glass] foreman start
* ^c *
[~/codemash-hello-glass] heroku apps:create
[~/codemash-hello-glass] heroku addons:add mongolab
[~/codemash-hello-glass] git push heroku master
[~/codemash-hello-glass] heroku ps:scale web=1
[~/codemash-hello-glass] heroku open
* create glassware *
[~/codemash-hello-glass] vi lib/config.js
[~/codemash-hello-glass] git commit lib/config.js -m 'my first glassware app'
[~/codemash-hello-glass] git push heroku master
[~/codemash-hello-glass] heroku open
click install
fin!
```

## License

Licensed under the MIT license

