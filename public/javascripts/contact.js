app.controller('contactCtl', ['$scope','appTool', function($scope,appTool){
	appTool.toTop();
    $scope.partners = [
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    	{name:'耿向顺',pso:'织心创始人',url:'/images/contact/user.jpg',desc:'让青年走近乡村，认识乡村，发展乡村，改变乡村。'},
    ];

    $scope.honor = [
    	{time:'2016-12-21',name:'创青春创青春创青春创青春创青春创青春创青',reward:'校赛一等件'},
    	{time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
    	{time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
    	{time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
    	{time:'2016-12-21',name:'创青春',reward:'校赛一等件'},
    ];

    $scope.contact = [
    	{type:'新浪微博',name:'言小莫是耿向顺',url:'/images/zhixin.png'},
    	{type:'微信公众号',name:'XXXXXX',url:'/images/zhixin.png'},
    	{type:'QQ群组',name:'XXXXXX',url:'/images/zhixin.png'},
    ]
}]);

