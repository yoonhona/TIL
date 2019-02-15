const PREFIX = '/TIL/';

module.exports = {
    base: PREFIX,
    title: '나윤호 TIL',
    themeConfig: {
        nav: [
            {
                text: 'CSS',
                items: [
                    { text: 'CSS Layout', link: '/스터디/2019_CSS_Layout/' }
                ]
            },
            {
                text: 'Java',
                items: [
                    { text: '람다 표현식', link: '/스터디/2019_ReactiveJava/lamda' }
                ]
            },
        ],
        sidebar: 'auto',
        search: false,
    }
};
