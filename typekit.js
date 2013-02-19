var webpage = require('webpage'),
    system = require('system');

if (system.args.length < 2 || system.args.length > 3) {
  console.log('Usage: typekit.js URL filename');
  phantom.exit(1);
} else {
  var page = webpage.create(),
      url = system.args[1],
      filename = system.args[2];

  page.viewportSize = {
    width: 1280,
    height: 1024
  };

  page.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.57 Safari/537.17';

  page.customHeaders = {
    Referer: url
  };

  page.open(url, function (status) {
    if (status !== 'success') {
      console.log('Unable to open URL.');
      phantom.exit(1);
    } else {
      window.setTimeout(function () {
        page.render(filename);
        phantom.exit(0);
      }, 200);
    }
  });
}
