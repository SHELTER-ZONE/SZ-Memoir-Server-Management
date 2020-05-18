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
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/Memoir/core_value',
                ]
            },
            {
                title:'Server Management',
                path:'/ServerManagement/server_management',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/ServerManagement/server_types',
                    '/ServerManagement/core_value',
                    '/ServerManagement/members_management',
                    '/ServerManagement/role_management',
                    '/ServerManagement/channels_management',
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
