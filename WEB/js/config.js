﻿var config = {
    version: '0.0.1',
    mode: 'production', //development or production
    serverApiUrl: 'http://localhost:13239/Api/',
    baseUrl: 'http://localhost:13239/',
    openId: 'abcdefg'
};

angular.module("appConfig", [])
    .value('config', config);

