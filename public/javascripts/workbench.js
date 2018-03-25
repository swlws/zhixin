let app = angular.module('app',['ngRoute']);

app.service('appTool',function(){
    this.exportXlsx = function(url){
        var url = url || '/zhixin/1.xls';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);        // 也可以使用POST方式，根据接口
        xhr.responseType = "blob";    // 返回类型blob
        // 定义请求完成的处理函数，请求前也可以增加加载框/禁用下载按钮逻辑
        xhr.onload = function () {
            // 请求完成
            if (this.status === 200) {
                // 返回200
                console.log(this.response)
                var blob = this.response;
                var reader = new FileReader();
                reader.readAsDataURL(blob);    // 转换为base64，可以直接放入a表情href
                reader.onload = function (e) {
                    // 转换完成，创建一个a标签用于下载
                    var a = document.createElement('a');
                    a.download = 'data.xlsx';
                    a.href = e.target.result;
                    $("body").append(a);    // 修复firefox中无法触发click
                    a.click();
                    $(a).remove();
                }
            }
        };
        // 发送ajax请求
        xhr.send()
    }

    this.toTop = ()=>{
        $(document).scrollTop(0);
    }

    this.formatToBookData = data => {
        if(data == null && data == undefined)
            return [];
        let list = [];
        let len = data.length;
        data.map(function(ele , index){
            ele['zIndex'] = len - index;
            list.push(ele);
        })
        return list;
    }
})

app.controller('appCtl',($scope,appTool)=>{
    let hei = $('#workbench_header').height();
    $('#content').css('marginTop',hei+'px');
	$scope.appMsg = {
		title:'四川织心青少年发展中心',
		logoUrl:'/zhixin/images/logo.jpg',
		summary:'原名“四川织心志愿者高校联盟”，简称“织心志愿者”，成立于2013年，于2017年初注册成为一家以乡村青少年、乡村中老年人、青年大学生为服务主体的公益机构，总部位于四川省绵阳西南科技大学，品牌项目#四川织心乡村支教夏令营#，自成立以来，服务4000多名山区儿童，服务上万群众，成员500多人，获得9次国家级表彰。宗旨为“促进社会创新、促进社会公平、促进乡村发展、促进青少年成长与发展“，口号为”织结情谊，心合你我。'
	};
	
	$scope.menuList = [			
		{menuName:'首页',noChild:true,url:'#/'},
		{menuName:'机构项目',hasChild:true,url:'javascript:viod(0)',children:[{menuName:'织心*乡村夏令营',url:'#/camp'},{menuName:'织心*乡村医疗',url:'#/doctor'},{menuName:'织心*乡村创客',url:'#/'},{menuName:'织心*暖冬行动',url:'#/'},{menuName:'织心*留住童年',url:'#/'}]},
		{menuName:'最新动态',noChild:true,url:'#/news'},
		{menuName:'合作伙伴',hasChild:true,url:'javascript:viod(0)',children:[{menuName:'公益合伙人',url:'#/'},{menuName:'合作机构',url:'#/'},{menuName:'合作企业',url:'#/'}]},
		{menuName:'联系/加入我们',noChild:true,url:'#/contact'}
	];
	$scope.picList = [
		{name:'乡村夏令营',url:'/zhixin/images/zhixin.png'},
	];
    $scope.exportXlsx = appTool.exportXlsx;
})

//路由
app.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            controller : 'mainCtl',		       
            templateUrl:'/zhixin/main'
        })
        .when('/news', {
            controller : 'newsCtl',		       
            templateUrl:'/zhixin/news'
        })
        .when('/partner', {
            controller : 'partnerCtl',		       
            templateUrl:'/zhixin/main'
        })
        .when('/contact', {
            controller : 'contactCtl',		       
            templateUrl:'/zhixin/contact'
        })
        .when('/camp', {
            controller : 'campCtl',             
            templateUrl:'/zhixin/camp'
        })
        .when('/doctor', {
            controller : 'doctorCtl',             
            templateUrl:'/zhixin/doctor'
        })
        .otherwise({redirectTo:'javascript:void(0)'});
}]);

/**
* 主页
*/
app.controller('mainCtl',  function($scope,$rootScope,appTool){
    appTool.toTop();
    let docHeight = screen.availHeight;
    let hei = $('#workbench_header').height();
    $scope.headerBackground = {
        url:'/zhixin/images/main/2.png',
        height:docHeight - hei - 60
    }
    $scope.title = '四川织心青少年发展中心';
    $scope.projectList = [
        {title:'乡村夏令营',linkUrl:'#/',photoUrl:'/zhixin/images/main/1.png',desc:'乡村夏令营'},
        {title:'乡村医疗',linkUrl:'#/',photoUrl:'/zhixin/images/main/2.png',desc:'乡村医疗'},
        {title:'乡村创客',linkUrl:'#/',photoUrl:'/zhixin/images/main/3.jpg',desc:'乡村创客'},
        {title:'暖冬行动',linkUrl:'#/',photoUrl:'/zhixin/images/main/4.png',desc:'暖冬行动'}
    ];
    $scope.newsList = [
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/1.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/2.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/3.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/4.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/5.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/6.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/7.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/8.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/9.jpg'},
    ];
    $scope.partnerList = [
        {title:'公益合伙人',photoUrl:'/zhixin/images/main/1.png'},
        {title:'合作机构',photoUrl:'/zhixin/images/main/2.png'},
        {title:'合作企业',photoUrl:'/zhixin/images/main/3.jpg'}
    ];
});

/**
* 最新动态
*/
app.controller('newsCtl', function($scope,appTool){
    appTool.toTop();
    $scope.headerBackground = {
        url:'/zhixin/images/news/back.jpg'
    }
    $scope.newsList = [
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/1.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/2.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/3.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/4.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/5.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/6.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/7.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/8.jpg'},
        {title:'最新动态',linkUrl:'#/',photoUrl:'/zhixin/images/news/9.jpg'},
    ];
});

app.controller('partnerCtl', ['$scope', function($scope){
    $scope.title = "partner Page";
}]);

/**
* 联系我们
*/
app.controller('contactCtl', ['$scope','appTool', function($scope,appTool){
    appTool.toTop();
    $scope.partners = [
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
        {name:'耿向顺',pso:'织心创始人',url:'/zhixin/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    ];

    $scope.honor = [
        {time:'2016-12-21',name:'创青春创青春创青春创青春创青春创青春创青',reward:'校赛一等件'},
        {time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
        {time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
        {time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
        {time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
    ];

    $scope.contact = [
        {type:'新浪微博',name:'言小莫是耿向顺',url:'/zhixin/images/zhixin.png'},
        {type:'微信公众号',name:'XXXXXX',url:'/zhixin/images/zhixin.png'},
        {type:'QQ群组',name:'XXXXXX',url:'/zhixin/images/zhixin.png'},
    ]
}]);

/**
* 夏令营
*/
app.controller('campCtl', function($scope,$rootScope,appTool){
    appTool.toTop();
    let docHeight = screen.availHeight;
    let hei = $('#workbench_header').height();
    
    $scope.headerBackground = {
        url:'/zhixin/images/camp/11.jpg',
        height:docHeight - hei - 60
    }
    //标题、描述
    $scope.camp = {
        title:'乡村夏令营',
        desc:'2017年7月8日到8月1日，由四川织心青少年发展中心主办、240多名来自西南科技大学、川北医学院、四川文化艺术学院、绵阳师范学院、成都信息工程大学等二十多所高校在校大学生经过严格培训后参与的“四川织心乡村支教夏令营”项目，在四川省绵阳、泸州、宜宾、凉山、攀枝花等城市的十多个乡村小学和30多个乡村落地执行。据项目发起人、机构秘书长耿向顺介绍：“本项目是我们2013年发起，发起原因是为了帮助更多像我一样的山区孩子获取更多知识，帮助失学儿童走回学校。现在项目已经发展四年，我们进一步完善了项目宗旨和内容，定位为“让青年走进乡村，认识乡村，发展乡村，促进乡村发展；让乡村教育多元、有趣、有益，帮助农村孩子学习，拓宽农村孩子知识面。”'
    }
    //活动
    $scope.actions = [
        {imgUrl:'/zhixin/images/camp/6.jpg',desc:'志愿者们在活动中为孩子提供心理疏导，让孩子阳光、快乐。在一堂名叫“画出我的梦想”的美术课上，让孩子们绘画自己的理想，签字画押，然后保存着留给未来看，并鼓励他们促进孩子对自己未来充满希望。'},
        {imgUrl:'/zhixin/images/camp/10.jpg',desc:'织心志愿者们与百度公司合作，在乡村中普及VR体验教育，让互联网+乡村教育，为乡村教育注入活力，当孩子们带上VR眼镜，观看立体空间的博物馆，兴奋得纷纷大声呼喊尖叫。'},
        {imgUrl:'/zhixin/images/camp/6.jpg',desc:'志愿者们在活动中为孩子提供心理疏导，让孩子阳光、快乐。在一堂名叫“画出我的梦想”的美术课上，让孩子们绘画自己的理想，签字画押，然后保存着留给未来看，并鼓励他们促进孩子对自己未来充满希望。'},
        {imgUrl:'/zhixin/images/camp/10.jpg',desc:'织心志愿者们与百度公司合作，在乡村中普及VR体验教育，让互联网+乡村教育，为乡村教育注入活力，当孩子们带上VR眼镜，观看立体空间的博物馆，兴奋得纷纷大声呼喊尖叫。'},
    ]
    //总结
    $scope.summary = `2017年#四川织心乡村支教夏令营#项目，为项目直接或间接捐赠近10万元物资，共有全省范围内近3000名农村儿童、近20000多名农村居民受益受到影响，总耗资二十万元，受到3000多人出资支持。项目被社会各界高度肯定，受到项目地群众热烈欢迎，百姓自发拉横幅迎接志愿者们。
    自项目发起至今，本项目被上百家媒体报道，被上海国峯慈善基金会、百度公司等数十个资方支持。机构严格安全保障，创造四年无较大安全事故的骄人成绩。微博话题#四川乡村支教夏令营#在一个多月内阅读量一百多万，多次登上新浪微博公益榜单第一名并成为热门微博话题。`;
});

/**
* 乡村医疗
*/
app.controller('doctorCtl', function($scope,$rootScope,$timeout,appTool){
    appTool.toTop();
    let docHeight = screen.availHeight;
    let hei = $('#workbench_header').height();
    
    $scope.headerBackground = {
        url:'/zhixin/images/doctor/back.jpg',
        height:docHeight - hei - 60
    }

    $scope.doctor = {
        title:'乡村医疗',
        desc:'当我坐在川北医学院的医学实验室的时候，我总会想起刚刚过去的半年多里，我感到充实、奔波、忙碌、紧张、感动、有意义，虽有争吵、误解、失望、挑战，却让我此生无悔入织心。这已经是我第三年参加“织心志愿者”的乡村服务项目了，不同于往年，我今年是医疗服务项目的三个总负责人之一。我从一个参与者，变成了医疗项目的设计者、团队管理者，第一次站在一个组织者的角度去思考和运营一个公益项目。现在我就来分享一下我们的运营经验，为其他团队提供参考。'
    }
    
    $scope.design = {
        title:'项目设计',
        imgUrl:'/zhixin/images/doctor/1.jpg',
        descs:[
            '我记得老耿给我们做培训的时候说：“我们要做某个公益项目，就必须看别人是否对我们的服务有需求，再根据需求去做方案。”因此在活动开始规划前，我开始对项目地进行调研。我们的项目地落户在四川多个地方，因此每个地方的情况也不同，我就以泸州项目点为案例。在我们调研的过程中，我们发现我们项目地居民卫生意识较差、儿童卫生习惯较差、基础医疗设施少、项目地甲肝多发和寄生虫病多发区域，另外儿童的身体发育状况也有营养偏低与不均衡特点，但当地的资源无法为其提供长期且频繁的卫生宣传，使上述问题成为固定性社会难题。',
            '于是我们针对我们发现的问题，设计解决方案：以儿童、老人和妇女为重点服务对象，针对儿童与成年居民开展高特色、多板块高质量义诊，从基础义诊和特色板块两方面覆盖血压、血糖、口腔、眼视光等众多项目；成年人群开展急救CPR步骤、包扎知识、夏季传染病知识宣传；儿童高危意外伤害事故防护知识教育、寄生虫传染知识宣传、包扎知识宣传、夏季溺水级其他意外伤害急救知识宣传、CPR急救步骤宣讲；卫生视频公映宣讲。',
            '于是我们针对我们发现的问题，设计解决方案：',
            '以儿童、老人和妇女为重点服务对象，针对儿童与成年居民开展高特色、多板块高质量义诊，从基础义诊和特色板块两方面覆盖血压、血糖、口腔、眼视光等众多项目；成年人群开展急救CPR步骤、包扎知识、夏季传染病知识宣传；儿童高危意外伤害事故防护知识教育、寄生虫传染知识宣传、包扎知识宣传、夏季溺水级其他意外伤害急救知识宣传、CPR急救步骤宣讲；卫生视频公映宣讲。',
        ]
    }

    $scope.train = {
        title:'人员培训',
        descs:[
            '我知道，工欲善其事，必先利其器，必先培养人。在活动开始前，我们进行了一系列物资采购和专业规范的志愿者培训。我们制定了一个详细的规范培养计划并做了详细的培训，力求全面、有效。',
        ],
        plains:[
            {time:'5月5日',add:'川北医学院图书信息大楼406',content:'医学人文素质培训',desc:'义诊操守；禁忌和要求'},
            {time:'5月5日',add:'川北医学院图书信息大楼406',content:'医学人文素质培训',desc:'义诊操守；禁忌和要求'},
            {time:'5月5日',add:'川北医学院图书信息大楼406',content:'医学人文素质培训',desc:'义诊操守；禁忌和要求'},
            {time:'5月5日',add:'川北医学院图书信息大楼406',content:'医学人文素质培训',desc:'义诊操守；禁忌和要求'},
            {time:'5月5日',add:'川北医学院图书信息大楼406',content:'医学人文素质培训',desc:'义诊操守；禁忌和要求'},
            {time:'5月5日',add:'川北医学院图书信息大楼406',content:'医学人文素质培训',desc:'义诊操守；禁忌和要求'},
        ]
    }

    $scope.raise = {
        title:'资金筹集和物资采购',
        descs:[
            '作为“织心志愿者”所有项目中最花钱的医疗板块项目，我们尽可能节省开支，根据项目实际需求进行资金精确预算，采用“能租借就租借、能不买就不买”的原则进行物资采购。',
            '很幸运，我们获得了“走向西部”的支持，总共为我们“织心志愿者”医疗服务专项资助了资金7000元。',
        ],
        plains:[
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
            {thing:'医用口罩',unit:'袋（100）',count:20,price:10,money:200},
        ]
    }

    $scope.action = (()=>{
        let title = '服务项目';
        let data = [
            {name:'记录册',url:'/zhixin/images/doctor/1.jpg',desc:''},
            {name:'基础板块义诊',url:'/zhixin/images/doctor/2.jpg',desc:'血压、血糖升高体重测量和评估，提供日常预防建议。'},
            {name:'特色义诊',url:'/zhixin/images/doctor/3.jpg',desc:'口腔检查，视力检测。'},
            {name:'卫生理论',url:'/zhixin/images/doctor/4.jpg',desc:'宣传夏日中暑、意外灾害急救知识、寄生虫传染知识等10种卫生理论，帮助居民建立良好的卫生习惯。'},
        ];
        let acts = appTool.formatToBookData(data);
        console.log(acts)
        //let lock = true;    //加锁，判断上一次动画是否执行完。false，未完；true，已完成
        let firstClick = true;

        let doPage = function(that){            
            /*if(!lock){
                return;
            }*/
            let eleFlag = '[data-act="'+that+'"]';
            let time = Number.parseInt($(eleFlag).css('transitionDuration'));
            if(firstClick){
                $('.bookBox').animate({'left':0},2000,'linear');
                firstClick = false;
            }
            lock = false;
            /*$timeout(function(){
                lock = true;
            },time * 1000);*/
            
            let selectedEle = $(eleFlag);

            let drt = selectedEle.attr('data-drt');  //true为向左翻页，false向右翻页
            let len = this.data.length;
            let zIndex = selectedEle.css('z-index');
            $timeout(function(){
                selectedEle.css('z-index',len - zIndex); 
                if(drt == 'true' || drt == undefined){
                    selectedEle.children().hide();
                }else if(drt == 'false'){
                    selectedEle.children().show();
                }
            } , time / 4 * 1000);   //ease行为是从0.25到1
            if(drt == 'true' || drt == undefined){              
                selectedEle.css('transform','rotateX(40deg) rotateY(180deg)');
                selectedEle.attr('data-drt','false');
            }else if(drt == 'false'){               
                selectedEle.css('transform','rotateX(40deg) rotateY(0deg)');
                selectedEle.attr('data-drt','true');
            }
            
        }
        return {
            title,data,acts,doPage
        }
    })();

    $scope.endData = {
        title:'项目总结',
        desc:'三年的“织心志愿者”公益服务经验，早已经让我不再是当初那个参加公益活动就能感动得痛哭流涕的小女生了，现在的我习惯于去冷静的总结和思考：我们做的事情究竟是否有用？投入产出是否达到预期目标？我们这个项目究竟有没有达到我们预期的效果，于是在老耿的帮助下，我做了一个项目评估分析。耿向顺提出的项目评估法，大板块分为两块：数据量化分析和主观评价分析，量化指标为可具体数据化的成果、人数等数据，主观评价则分为参与者成长与感知、被参与者成长与认知、旁观者评价、参与者评价、组织者评价等几个维度。'
    }
})