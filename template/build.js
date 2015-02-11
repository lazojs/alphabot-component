var fs = require('fs-extra');
var module = fs.readFileSync('package.json');

try {
    module = JSON.parse(module);
} catch (e) {
    throw e;
}

fs.copy('src', 'dist', function (err) {
    if (err) {
        console.log(err);
    }
});