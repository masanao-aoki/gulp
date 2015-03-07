/// <reference path="typings/tsd.d.ts" />
'use strict';
require.config({
    paths: {
        react: 'components/react/react',
    },
    shim: {
        react: {
            exports: 'react'
        }
    }
});
require(['react']);
