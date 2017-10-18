app.controller('campCtl', function($scope,$rootScope,appTool){
    appTool.toTop();
    let docHeight = screen.availHeight;
	let hei = $('#workbench_header').height();
	
	$scope.headerBackground = {
		url:'/images/camp/11.jpg',
		height:docHeight - hei - 60
	}

	$scope.camp = {
		title:'乡村夏令营',
		desc:'2017年7月8日到8月1日，由四川织心青少年发展中心主办、240多名来自西南科技大学、川北医学院、四川文化艺术学院、绵阳师范学院、成都信息工程大学等二十多所高校在校大学生经过严格培训后参与的“四川织心乡村支教夏令营”项目，在四川省绵阳、泸州、宜宾、凉山、攀枝花等城市的十多个乡村小学和30多个乡村落地执行。据项目发起人、机构秘书长耿向顺介绍：“本项目是我们2013年发起，发起原因是为了帮助更多像我一样的山区孩子获取更多知识，帮助失学儿童走回学校。现在项目已经发展四年，我们进一步完善了项目宗旨和内容，定位为“让青年走进乡村，认识乡村，发展乡村，促进乡村发展；让乡村教育多元、有趣、有益，帮助农村孩子学习，拓宽农村孩子知识面。”'
	}
});