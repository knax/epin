export default function httpInterceptor($httpProvider, ApiConfig) {
  "ngInject";

  $httpProvider.interceptors.push(() => {
    return {
      request: (config) => {
        console.log(config, 'config');
        if(config.url.indexOf('.') >= 0) {
          // not an api request
          return config;
        }

        let url = '';

        if(ApiConfig.protocol) {
          url = url + ApiConfig.protocol + '://';
        }

        if(ApiConfig.host) {
          url = url + ApiConfig.host;
        }

        if(ApiConfig.port) {
          url = url + ':' + ApiConfig.port;
        }

        if(ApiConfig.baseUri) {
          url = url + ApiConfig.baseUri;
        }

        url = url + config.url;

        config.url = url;

        return config;
      }
    };
  })
}