const sidebar = require('./sidebar');
const nav = require('./nav');

module.exports = {
    title: 'Baofeng\'s Tricks',
    description: 'San Baofeng\'s tricks about html css js and other technology',
    head: [
        ['link', { rel: 'icon', href: 'https://imgs.sanbaofengs.com/favicon.ico' }]
    ],
    themeConfig: {
        nav,
        sidebar,
        lastUpdated: '上次更新',
    }
}
