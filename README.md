## Demo of using Typekit with PhantomJS

Make sure you have phantomjs installed, then run:

    $ phantomjs typekit.js <url> <target>

Where `<url>` is the URL you want to load and `<target>` is the location of the image you want to write. So for example:

    $ phantomjs typekit.js http://www.typekit.com/ typekit.png

This will load the [Typekit](http://www.typekit.com/) website and render it to `typekit.png`.
