(function(){
	function calendar(year, month){
		var dt = new Date(),
			dt_date = dt.getDate(),
			dt_year = year || dt.getFullYear(),
			dt_month = month || dt.getMonth() + 1,
			dt_first = new Date(dt_year, dt_month - 1, 1);
			dt_week = dt_first.getDay(), // 本月一号星期几
			dt_arr = [], // 日期数组
			cur = 0,
			dt_prev = 0, //上一月的天数在dt_arr截止位置
			dt_next = 0; //下一月的天数在dt_arr开始位置
		$(".month-btn > span").attr({"data-month": dt_month, "data-year": dt_year});
		$(".month-btn > span").html(dt_month);

		var cur_month = getMonthDays(dt_year, dt_month);
			prev_month = getMonthDays(dt_year, dt_month);
		// 显示信息
		if (dt_week > 0) {
			for (var i = dt_week - 1; i >= 0; i--) {
				dt_arr.push(prev_month - i);
			};
			dt_prev = dt_arr.length;
		};
		for (var i = 1; i <= cur_month; i++) {
			dt_arr.push(i);
			if(dt_date == i){
				cur = dt_arr.length;
			}
			dt_next = dt_arr.length;
		};
		for (var i = 1; dt_arr.length < 35; i++) {
			dt_arr.push(i);
		};

		$(".calendar table tbody").empty();
		var html = "";
		if (dt_week != 0) {
			html = "<tr>";
		}
		for (var i = 0; i < 35; i++) {
			if (i%7 == 0) {
				if (cur == i) {
					html += "<tr><td class='cur'><span>" + dt_arr[i] + "</span></td>";
				} else if (i < dt_prev || i >= dt_next) {
					html += "<tr><td class='disable'><span>" + dt_arr[i] + "</span></td>";
				} else {
					html += "<tr><td><span>" + dt_arr[i] + "</span></td>";
				}
			} else if(i%7 == 6){
				if (cur == i) {
					html += "<td class='cur'><span>" + dt_arr[i] + "</span></td></tr>";
				} else if (i < dt_prev || i >= dt_next) {
					html += "<td class='disable'><span>" + dt_arr[i] + "</span></td>";
				} else {
					html += "<td><span>" + dt_arr[i] + "</span></td></tr>";
				}
				
			} else {
				if (cur == i) {
					html += "<td class='cur'><span>" + dt_arr[i] + "</span></td>";
				} else if (i < dt_prev || i >= dt_next) {
					html += "<td class='disable'><span>" + dt_arr[i] + "</span></td>";
				} else {
					html += "<td><span>" + dt_arr[i] + "</span></td>";
				}
			};
		};
		if (dt_arr[34]%7 != 6) {
			html += "</tr>";
		}
		$(".calendar table tbody").html(html);
	}

	calendar();

	$(".month-prev").on("click", function(){
		var year = $(".month-btn > span").attr("data-year"),
			month = $(".month-btn > span").attr("data-month");
		if (month == 1) {
			month = 13;
			year--;
		}
		calendar(year, parseInt(month)-1);
	});
	$(".month-next").on("click", function(){
		var year = $(".month-btn > span").attr("data-year"),
			month = $(".month-btn > span").attr("data-month");
		if(month == 12){
			year++;
			month = 1;	
		}
		calendar(year, parseInt(month)+1);
	});

	$(".sign-btn").on("tap", function(){
		$(".cur").addClass("active");
	});

	function getMonthDays(year, month){
		if (month == 0 ) {
			month = 12;
			year--;
		};
		var _bigMonth = [1,3,5,7,8,10,12];
		if(month==2){
			_days = 28;
		    if(year%4==0) _days = 29;
		}else if(_bigMonth.indexOf(month)==-1){
			_days = 30;
		}else{
			_days = 31;
		}
		return _days;
	}
})();