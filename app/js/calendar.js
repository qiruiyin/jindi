(function(){
	
	function calendar(){
		var dt = new Date(),
				dt_year = dt.getFullYear(),
				dt_month = dt.getMonth(),
				dt_first = new Date(dt_year, dt_month, 1);
				dt_week = dt_first.getDay(), // 本月一号星期几
				dt_arr = [], // 日期数组
				count = 0;

		var cur_month = getMonthDays(dt_year, dt_month);
				prev_month = getMonthDays(dt_year, dt_month - 1);
		console.log(dt_week);
		// for(i = 0; i < 35; i++){
		if (dt_week > 0) {
			for (var i = dt_week - 1; i >= 0; i--) {
				dt_arr.push(prev_month - i);
			};
		};
		for (var i = 0; i <= cur_month; i++) {
			dt_arr.push(i);
		};

		if (dt_arr.length < 35) {
			for (var i = 1; i <= 36 - dt_arr.length; i++) {
				dt_arr.push(i);
			};
		};

		$(".calendar table tbody").empty();
			var html = "<tr>";
		for (var i = 0; i < 35; i++) {
			// if (dt_week == ) {};
			if (i%7 == 0) {
				html += "<td><span>" + i + "</span></td></tr>";
			} else if(i%7 == 1){
				html += "<tr><td><span>" + i + "</span></td>";
			} else {
				html += "<td><span>" + i + "</span></td>";
			};

			html += "</tr>";
			console.log(html);
			$(".calendar table tbody").html(html);
		};

		// console.log(dt_arr, dt_arr.length);
	}

	calendar();

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