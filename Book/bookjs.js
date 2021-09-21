window.onload = function(){
    var d = new Date();
    var month_name=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth(); //0-11 value return
    var year = d.getFullYear(); //2021
    var first_date = month_name[month] + " " + 1 + " " + year;
    //month date year
    var temp = new Date(first_date).toDateString(); 
    var first_date = temp.substring(0, 3); // day name
    var day_name = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var day_no = day_name.indexOf(first_date); //1
    var days = new Date(year, month+1, 0).getDate();//last value in cal
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);

}
function get_calendar(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    //row for day
    for(var c=0; c<7; c++){
        var td= document.createElement('td');
        td.innerHTML = "MTWTFSS"[c];
        tr.appendChild(td);
    
    }
    table.appendChild(tr);
    //2nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
    var td = document.createElement('td');
    td.innerHTML = "";
    tr.appendChild(td);  
    }
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    //rest
    for(var r=3; r<=6; r++){
        tr = document.createElement('tr'); 
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
       }
}//unfortunetly I didn't know how to make the callendar interactive ,or clickable ,it was very difficult
function FunctionButton1(){
    alert("Thank you for contacting us, We hope to meet you soon!");
    window.location="../home.html"
}//popup for button