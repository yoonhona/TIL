vue js 초기 설정시 webpack template를 사용 하였고 그 설정을 바꿔가는 내용에 대한 기록.

* contentbase ( 정적 파일 사용을 위한 )  
빌드를 할 경우에는 정적파일 복사를 아주 잘 해준다. 하지만 webpack-dev-server로 개발중 정적 파일을 불러오지 못하는 이슈가 있어서 찾아보게 되었다.
이런 저런 방법을 찾아보았지만 결국 webpack에서 기본적으로 지원을 하지만 vue template의 주석 한줄이 나를 방황하게 하였다.
```javascrit
//build/webpack.dev.conf.js
devServer: {
    .....
    contentBase: false, // since we use CopyWebpackPlugin.
``` 
구글 번역에 따르면 우리는 CopyWebpackPlugin을 써서 false를 준다는 것이다. 하지만 해당 플러그인 사이트에 가면 dev-server에서는 동작을 안한다. 왜냐 dev-server는 hot load를 해야하기 때문이다.
정적 파일을 사용하기 위해서는 해당 옵션에 디렉토리를 지정해주면 된다.  
[공식 document](https://webpack.js.org/configuration/dev-server/#devserver-contentbase)
* css 플러그인 사용 후 css split  
퍼블리싱에 익숙하지 않아 부트스트랩을 사용하였고 빌드후에 부트스트랩과 그 외 라이브러리들을 vendor.js로 직접 작성한 코드는 app.js로 나눠주었다.
하지만 css를 하나의 파일로 합치는 것이다.  
문제는 css의 우선순위가 바뀌면서 개발중일 때는 정상적인 화면이 빌드후에는 깨지는 것이다.
이미 이런 이슈가 [깃헙에 이슈로 등록되었고 답변](https://github.com/vuejs-templates/webpack/issues/598#issuecomment-286680721)이 달렸다. 
라이브러리 압축시 현재는 js만 하는데 거기에 css추가 하면 된다는 답변이다.