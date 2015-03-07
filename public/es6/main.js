/// <reference path="typings/tsd.d.ts" />
'use strict';
require.config({
    paths: {
        react: 'components/react/react',
        superagent: 'components/superagent/superagent',
    },
    shim: {
        react: {
            exports: 'react'
        },
        superagent: {
            exports: 'superagent'
        }
    }
});
require(['app','api_path']);
