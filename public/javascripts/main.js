app.controller('mainCtl',  function($scope,$rootScope,appTool){
    appTool.toTop();
    let docHeight = screen.availHeight;
	let hei = $('#workbench_header').height();
	$scope.headerBackground = {
		url:'/images/main/2.png',
		height:docHeight - hei - 60
	}
    $scope.title = '四川织心青少年发展中心';
    $scope.projectList = [
    	{title:'乡村夏令营',linkUrl:'#/',photoUrl:'/images/main/1.png',desc:'乡村夏令营'},
    	{title:'乡村医疗',linkUrl:'#/',photoUrl:'/images/main/2.png',desc:'乡村医疗'},
    	{title:'乡村创客',linkUrl:'#/',photoUrl:'/images/main/3.jpg',desc:'乡村创客'},
    	{title:'暖冬行动',linkUrl:'#/',photoUrl:'/images/main/4.png',desc:'暖冬行动'}
    ];
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
    $scope.partnerList = [
    	{title:'公益合伙人',photoUrl:'/images/main/1.png'},
    	{title:'合作机构',photoUrl:'/images/main/2.png'},
    	{title:'合作企业',photoUrl:'/images/main/3.jpg'}
    ];
});