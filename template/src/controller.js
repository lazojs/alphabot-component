define(['lazoCtl'], function (LazoCtl) {

    'use strict';

    return LazoCtl.extend({

        index: function (options) {
            options.success('index');
        }

    });

});