module.exports = {
    base: '/study/',
    title: '나윤호 TIL',
    themeConfig: {
        nav: [
            {
                text: 'Ract',
                items: [
                    { text: '실전 리액트 프로그래밍 CH.2', link: '/frontend/React.js/실전_리액트/ch2' },
                ]
            },
            {
                text: 'TestCode',
                items: [
                    { text: 'Ract & Jest', link: '/frontend/Test/jest_react' },
                ]
            },
            {
                text: 'CSS',
                items: [
                    { text: 'CSS Layout', link: '/offlineStudy/2019_CSS_Layout/' },
                    { text: 'Box Model', link: '/offlineStudy/2019_CSS_Layout/box' }
                ]
            },
            {
                text: 'Java',
                items: [
                    { text: '람다 표현식', link: '/offlineStudy/2019_ReactiveJava/lamda' },
                    { text: 'RxJava', link: '/offlineStudy/2019_ReactiveJava/RxJava' },
                    { text: 'Reactor', link: '/offlineStudy/2019_ReactiveJava/Reactor' },
                ]
            },
            {
                text: '협업',
                items: [
                    { text: 'Gitflow(with Gitlab)', link: '/cooperation/git_flow' },
                ]
            },
        ],
        sidebar: 'auto',
        search: false,
    },
    markdown: {
        lineNumbers: true
    }
};
