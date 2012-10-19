// Age calculator
var todaysdate = new Date();
function countdown(birth_month,birth_day,unit) {
    // birth_month = integer: 0 (January) through 11 (December)
    // birth_day = integer
    // unit = "days", "hours", or "minutes"
    // WRITE YOUR CODE HERE
    var todaysdate = new Date();
    var cur_day = todaysdate.getDate();
    var cur_month = todaysdate.getMonth();
    var cur_year = todaysdate.getFullYear();
    var cur_date = new Date(cur_year, cur_month, cur_day);
    if(birth_month <= cur_month && birth_day < cur_day)
        cur_year = todaysdate.getFullYear() +1;
    else 
        cur_year = todaysdate.getFullYear();
    var birth_date = new Date(cur_year, birth_month, birth_day);
    var time_Diff = Math.abs(birth_date.getTime() - cur_date.getTime());
    var diff_Days =Math.ceil(time_Diff / (1000 * 60 * 60 * 24)); 
    if(unit == 'days'){
        ans = Math.ceil(time_Diff / (1000 * 60 * 60 * 24));
        if(ans==0){
            return "HAPPY BIRTHDAY!"
        }
        return ans
    }
    if(unit == 'hours'){
        ans = Math.ceil(time_Diff / (1000 * 60 * 60 ));
        if(ans==0){
            return "HAPPY BIRTHDAY!"
        }
        return ans
    }
    if(unit == 'minutes'){
        ans = Math.ceil(time_Diff / (1000 * 60));
        if(ans==0){
            return "HAPPY BIRTHDAY!"
        }
        return ans
    }
}

function timehere(birth_month,birth_day,birth_year,unit) {
    // birth_month = integer: 0 (January) through 11 (December)
    // birth_day = integer
    // birth_year = integer
    // unit = "days", "hours", or "minutes"
    // WRITE YOUR CODE HERE
     var todaysdate = new Date();
    todaysdate = new Date(todaysdate.getFullYear(), todaysdate.getMonth(), todaysdate.getDate())
    var birthdate = new Date(birth_year,birth_month,birth_day);
    var time_Diff = (todaysdate.getTime() - birthdate.getTime());
    if(unit == 'days'){
        ans = parseInt(time_Diff / (1000 * 60 * 60 * 24));
        if(ans<0){
            return "Not yet born!"
        }
        return ans
    }
    if(unit == 'hours'){
        ans = parseInt(time_Diff / (1000 * 60 * 60));
        if(ans<0){
            return "Not yet born!"
        }
        return ans
    }
    if(unit == 'minutes'){
        ans = parseInt(time_Diff / (1000 * 60 ));
        if(ans<0){
            return "Not yet born!"
        }
        return ans
    }
}