토이 프로젝트를 AWS S3에 배포하면서 API의 url이 배포환경에 따라 변경되어야 하는 
이슈가 생겨서 찾아보게 되었다.   
일반 적으로 webpack을 사용하는 프로젝트에서는 [해당 글](http://developmentnow.com/2016/07/13/webpack-injecting-server-urls/)처럼 DefinePlugin을 사용하는 듯 하다.    
그러나 vue init을 한 프로젝트에서는 사용이 안되어서 찾아본 결과 vue init시 생성된 config 폴더 안에 있는 환경파일에 설정을 해주어야 한다고 한다.   
[포럼 질문/답 글](https://forum.vuejs.org/t/vue-webpack-environment-config-webpack-defineplugin/4452/6)   
[Vue webpack 환경 설정관련 문서](http://vuejs-templates.github.io/webpack/env.html)