const menuList=[
    {
        title:"首页",
        key:"/back/backhome",
        icon:"home"
    },
    {
        title:"帖子",
        key:"/info",
        icon:"appstore",
        children:[
            {
                title:"版块管理",
                key:"/back/backblock",
                icon:"bars"
            },
            {
                title:"帖子管理",
                key:"/back/backframe",
                icon:"tool"
            }
        ]
    },
     {
        title:"用户",
        key:"/user",
        icon:"user",
        children:[
            {
                title:"用户管理",
                key:"/back/backuser",
                icon:"bars"
            },
            {
                title:"添加用户",
                key:"/back/backadd",
                icon:"user-add"
            }             
        ]
    },
     {
        title:"图表",
        key:"/chart",
        icon:"bars",
        children:[
            {
                title:"柱形图",
                key:"/back/bars",
                icon:"bar-chart"
            },
            {
                title:"饼图",
                key:"/back/pie",
                icon:"pie-chart"
            },
             {
                title:"折线图",
                key:"/back/line",
                icon:"stock"
            }
        ]
    }
]
export default menuList;