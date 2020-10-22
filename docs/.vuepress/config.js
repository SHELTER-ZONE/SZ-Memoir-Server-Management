module.exports = {
    title :  'SHELTER ZONE Memoir | Server Management',
    description:  '',
    themes: 'vuepress',
    base: '/SZ-Memoir-Server-Management/',

    themeConfig: {
        //  頁面滾動
        smoothScroll: true,
        // 側邊導航欄設定
        sidebar:[
            '/',
            {
                title:'SZ Memoir',
                path:'/Memoir/memoir',
                collapsable: true,
                children: [
                    '/Memoir/core_value',
                ]
            },
            {
                title: '群主指南',
                path: '/ServerHostor/',
                collapsable: true,
                children: [
                ]
            },
            {
                title: '成員管理',
                path: '/MembersManagement/',
                collapsable: true,
                children: [
                    '/MembersManagement/gist1.md',
                    '/MembersManagement/admin.md'
                ]
            },
            {
                title: '頻道管理',
                path: '/ChannelsManagement/',
                collapsable: true,
                children: [
                    '/ChannelsManagement/channels_category.md',
                    '/ChannelsManagement/channels_content.md',
                ]
            },
            {
                title: '經營模式',
                path: '/BusinessModel/',
                collapsable: true,
                children: [
                    '/BusinessModel/autocratic.md',
                    '/BusinessModel/decentralization.md',
                    '/BusinessModel/organization.md',
                    '/BusinessModel/community.md',
                ]
            },

        ],

        //  頂部導航欄
        nav: [
            { text: '官網', link: 'https://shelterzone627.wixsite.com/shelter-zone' },
            { text: 'Github', link: 'https://github.com/SHELTER-ZONE' },
        ]
    }        
}
