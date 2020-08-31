frmAdd: {
        type: 0, //弹性盒子类型(多行多列：fxrow2,单列：fxcol1)
        pop: 2,  //未来表单容器类型
        url: "", //后台交互接口的路径   /user/login
        selector: ".container", //表单容器选择器
        key: null, //修改和重置缓存域本地sessionStorage中数据的键
        els: [
            {
                type: $.frmElType.MOB,
                title: "手机",
                name: "mobile",
                nullable: false,
                value: null
            },
            {
                type: $.frmElType.PID,
                title: "身份证",
                name: "pid",
                nullable: false,
                value: null
            },
            {
                type: $.frmElType.RAD,
                title: "性别",
                name: "gender",
                nullable: false,
                value: null,
                items: [
                    {
                        text: "男",
                        value: 0
                    },
                    {
                        text: "女",
                        value: 1
                    }
                ]
            },
            {
                type: $.frmElType.SEL,
                title: "颜色",
                name: "color",
                nullable: false,
                value: null,
                text: null,
                items: [
                    {
                        text: "红色",
                        value: 1
                    },
                    {
                        text: "黄色",
                        value: 2
                    },
                    {
                        text: "蓝色",
                        value: 3
                    }
                ]
            },
            {
                type: $.frmElType.BTN,
                items: [
                    {
                        text: "查询",
                        type: $.frmBtnType.SEL
                    },
                    {
                        text: "新增",
                        type: $.frmBtnType.ADD
                    }
                ]
            },
        ]
    },