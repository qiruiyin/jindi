$(function(){
	var curr_date = new Date();
	//console.log(curr_date.getMonth())
	//var year = 2011, month = 6, date = 23;// month=6表示7月
// var dt = new Date(year, month, date), dt2 = new Date();
// var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
// alert(weekDay[dt.getDay()]+"\r\n"+weekDay[dt2.getDay()]);
	getCalendarData(2016,7)
	//getDayArr(2016,7,0,3);
});

//42天 7*6
function getCalendarData(year,month)
{

	var _prev = 0;//差距前天数
	var _next = 0;//差距后天数
	var _daysArr = [];
	var _days = getDays(year,month);
	var dt = new Date(year, month, 1);
		_prev = dt.getDay();
		_next = 42 - _prev - _days;
		console.log(_prev);
  // var c = _daysArr.concat(getDayArr(year,month-1,1,_prev));
   //_daysArr = _daysArr.concat(getDayArr(year,month,0,_days));
   //_daysArr = _daysArr.concat(getDayArr(year,month+1,0,_next));
   //getDayArr(year,month-1,0,_prev);
   var c = getDayArr(year,month-1,1,_prev);
  // console.log(c.length);
   // for(var i = 0;i<_daysArr.length;i++){
   //  	console.log(_daysArr[i]);
   //  //document.write(_daysArr[i]['data-string']+'___');
   // }

}
function writeObj(obj){ 
 var description = ""; 
 for(var i in obj){ 
  var property=obj[i]; 
  description+=i+" = "+property+"\n"; 
 } 
 alert(description); 
} 
function getDays(year,month)
{
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
/**
 * type 0 前 1后
 */
function getDayArr(year,month,type,days)
{
	var _days = getDays(year,month);
	var _days_obj = new Object();
	var _start = 1;
	var _end = _days;
	if(type==1){
		_start = _days-days+1; 
	}else{
		_end = _start+days-1;
	}
	console.log(_start);
	for(var i=_start;i<=_end;i++){
		console.log(i);
		var _obj = new Object();
		_obj.date_string = getFormatStr(year,month,i);
		_obj.date_day = i;
		_days_obj.push(_obj);
		//_days_arr[i][0] = getFormatStr(year,month,i);
		//_days_arr[i][1] = i;
		//console.log(_days_arr[i]);
	}
	console.log(_days_obj);
  	return _days_obj;
}

function getFormatStr(year,month,day){
  if(month<10){
  	month = '0'+month;
  }
  if(day<10){
  	day = '0'+day;
  }

  return year+'-'+month+'-'+day;
}