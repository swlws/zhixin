let app = angular.module('app',['ngRoute']);

app.service('exportFile',function(){
    this.exportXlsx = function(url){
        var url = url || '/1.xls';
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
})

app.controller('appCtl',($scope,exportFile)=>{
	$scope.appMsg = {
		title:'四川织心青少年发展中心',
		logoUrl:'/images/logo.jpg',
		summary:'原名“四川织心志愿者高校联盟”，简称“织心志愿者”，成立于2013年，于2017年初注册成为一家以乡村青少年、乡村中老年人、青年大学生为服务主体的公益机构，总部位于四川省绵阳西南科技大学，品牌项目#四川织心乡村支教夏令营#，自成立以来，服务4000多名山区儿童，服务上万群众，成员500多人，获得9次国家级表彰。宗旨为“促进社会创新、促进社会公平、促进乡村发展、促进青少年成长与发展“，口号为”织结情谊，心合你我。'
	};
	
	$scope.menuList = [			
		{menuName:'首页',noChild:true,url:'#/'},
		{menuName:'机构项目',hasChild:true,url:'#',children:[{menuName:'织心*乡村夏令营',url:'#/'},{menuName:'织心*乡村医疗',url:'#/'},{menuName:'织心*乡村创客',url:'#/'},{menuName:'织心*暖冬行动',url:'#/'},{menuName:'织心*留住童年',url:'#/'}]},
		{menuName:'最新动态',noChild:true,url:'#/news'},
		{menuName:'合作伙伴',hasChild:true,url:'#/partner',children:[{menuName:'公益合伙人',url:'#/'},{menuName:'合作机构',url:'#/'},{menuName:'合作企业',url:'#/'}]},
		{menuName:'联系/加入我们',noChild:true,url:'#/contact'}
	];
	$scope.picList = [
		{name:'乡村夏令营',url:'/images/zhixin.png'},
	];
    $scope.exportXlsx = exportFile.exportXlsx;
})

app.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            controller : 'mainCtl',		       
            templateUrl:'/html/main.html'
        })
        .when('/news', {
            controller : 'newsCtl',		       
            templateUrl:'/html/a.html'
        })
        .when('/partner', {
            controller : 'partnerCtl',		       
            templateUrl:'/html/a.html'
        })
        .when('/contact', {
            controller : 'contactCtl',		       
            templateUrl:'/html/a.html'
        })
        .otherwise({redirectTo:'/'});
}]);


app.controller('newsCtl', ['$scope', function($scope){
    $scope.title = "news Page";
}]);
app.controller('partnerCtl', ['$scope', function($scope){
    $scope.title = "partner Page";
}]);
app.controller('contactCtl', ['$scope', function($scope){
    $scope.title = "contact Page";
}]);
