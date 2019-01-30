const sidebar = require('./sidebar');
const nav = require('./nav');

module.exports = {
    title: 'Baofeng\'s Tricks',
    description: 'San Baofeng\'s tricks about html css js and other technology',
    head: [
        ['link', { rel: 'icon', href: 'favicon.png' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ]
    ],
    // plugins: [
    //     '@vuepress/medium-zoom'
    //     // [
    //     //     '@vuepress/google-analytics',
    //     //     {
    //     //         'ga': 'UA-80885450-6',
    //     //     }
    //     // ],
    //     // [
    //     //     '@vuepress/last-updated',
    //     //     {
    //     //         transformer: (timestamp, lang) => {
    //     //             const moment = require('moment');
    //     //             moment.locale(lang)
    //     //             return moment(timestamp).format('YYYY-MM-DD hh:mm:ss');
    //     //         }
    //     //     }
    //     // ],
    //     // ['@vuepress/medium-zoom']
    // ],
    themeConfig: {
        nav,
        sidebar,
        lastUpdated: 'Last Updated',
    }
}
