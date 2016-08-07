(function(){
	$(".mui-bar .mui-tab-item").on("touchend", function(){
		window.location.href = $(this).attr("href");
	});

	$(".booking-room").on("touchend", function(){
		var html = "<div class='jindi-dialog'><div class='title'>预约看房</div>"
								+ "<p>您可以选择电话咨询置业顾问预约，也可以通过APP意一键预约，谢谢。</p>"
								+ "<button>电话咨询</button>"
			    			+ "<a href=''>一键预约</a>"
			    			+ "<button>关闭</button>"
		    			+ "</div>";
		layer.open({
	    content: html,
	    shadeClose: false
		});
	});

	$(document.body).on("touchend", "button",function(){
		layer.closeAll();
	})
})();