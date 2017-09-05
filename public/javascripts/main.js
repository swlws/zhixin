app.controller('mainCtl',  function($scope,$rootScope){
    $scope.title = "main Page";	
    $scope.projectList = [
    	{title:'乡村夏令营',linkUrl:'#',photoUrl:'/images/main/1.png',desc:'乡村夏令营'},
    	{title:'乡村医疗',linkUrl:'#',photoUrl:'/images/main/2.png',desc:'乡村医疗'},
    	{title:'乡村创客',linkUrl:'#',photoUrl:'/images/main/3.jpg',desc:'乡村创客'},
    	{title:'暖冬行动',linkUrl:'#',photoUrl:'/images/main/4.png',desc:'暖冬行动'},
    ];
});