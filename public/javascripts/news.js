app.controller('newsCtl', function($scope,appTool){
	appTool.toTop();
	$scope.headerBackground = {
		url:'/images/news/back.jpg'
	}
    $scope.newsList = [
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/1.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/2.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/3.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/4.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/5.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/6.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/7.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/8.jpg'},
    	{title:'最新动态',linkUrl:'#/',photoUrl:'/images/news/9.jpg'},
    ];
});