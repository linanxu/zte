frmAdd: {
        type: 0, //���Ժ�������(���ж��У�fxrow2,���У�fxcol1)
        pop: 2,  //δ������������
        url: "", //��̨�����ӿڵ�·��   /user/login
        selector: ".container", //������ѡ����
        key: null, //�޸ĺ����û����򱾵�sessionStorage�����ݵļ�
        els: [
            {
                type: $.frmElType.MOB,
                title: "�ֻ�",
                name: "mobile",
                nullable: false,
                value: null
            },
            {
                type: $.frmElType.PID,
                title: "���֤",
                name: "pid",
                nullable: false,
                value: null
            },
            {
                type: $.frmElType.RAD,
                title: "�Ա�",
                name: "gender",
                nullable: false,
                value: null,
                items: [
                    {
                        text: "��",
                        value: 0
                    },
                    {
                        text: "Ů",
                        value: 1
                    }
                ]
            },
            {
                type: $.frmElType.SEL,
                title: "��ɫ",
                name: "color",
                nullable: false,
                value: null,
                text: null,
                items: [
                    {
                        text: "��ɫ",
                        value: 1
                    },
                    {
                        text: "��ɫ",
                        value: 2
                    },
                    {
                        text: "��ɫ",
                        value: 3
                    }
                ]
            },
            {
                type: $.frmElType.BTN,
                items: [
                    {
                        text: "��ѯ",
                        type: $.frmBtnType.SEL
                    },
                    {
                        text: "����",
                        type: $.frmBtnType.ADD
                    }
                ]
            },
        ]
    },