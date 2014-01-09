
# Hello Glass

Hello World for Google Glass built using the [Express](http://expressjs.com/)
web application framework for [Node.js](http://nodejs.org/) with
[MongoDB](http://www.mongodb.org/) session support setup for deployment to
[Heroku](https://www.heroku.com/).

## Install

```
[~] git clone https://github.com/tobius/codemash-hello-glass.git
[~] cd codemash-hello-glass
[~/codemash-hello-glass] npm install
[~/codemash-hello-glass] foreman start

^c

[~/codemash-hello-glass] heroku apps:create
[~/codemash-hello-glass] heroku addons:add mongolab
[~/codemash-hello-glass] git push heroku master
[~/codemash-hello-glass] heroku ps:scale web=1
[~/codemash-hello-glass] heroku open

create a google application with mirror api access and an oauth token
(note: google glass quickstart projects outline these steps for you)

[~/codemash-hello-glass] vi lib/config.js
[~/codemash-hello-glass] git commit lib/config.js -m 'my first glassware app'
[~/codemash-hello-glass] git push heroku master
[~/codemash-hello-glass] heroku open

(note: do this with a Google Glass account)
```

## License

Licensed under the MIT license

