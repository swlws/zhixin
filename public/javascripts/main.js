app.controller('mainCtl',  function($scope,$rootScope){
	let docHeight = $(window).height();
	let workbench_header = $('#workbench_header').outerHeight(true);
	$scope.headerBackground = {
		url:'/images/main/2.png',
		height:docHeight
	}
    $scope.title = "main Page";	
    $scope.projectList = [
    	{title:'乡村夏令营',linkUrl:'#/',photoUrl:'/images/main/1.png',desc:'乡村夏令营'},
    	{title:'乡村医疗',linkUrl:'#/',photoUrl:'/images/main/2.png',desc:'乡村医疗'},
    	{title:'乡村创客',linkUrl:'#/',photoUrl:'/images/main/3.jpg',desc:'乡村创客'},
    	{title:'暖冬行动',linkUrl:'#/',photoUrl:'/images/main/4.png',desc:'暖冬行动'}
    ];
    $scope.partnerList = [
    	{title:'公益合伙人',photoUrl:'/images/main/1.png'},
    	{title:'合作机构',photoUrl:'/images/main/2.png'},
    	{title:'合作企业',photoUrl:'/images/main/3.jpg'}
    ];
});