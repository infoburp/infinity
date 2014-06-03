//get user language
var lang = window.navigator.language;
//get holiday div
var holidaydiv = document.getElementById("holiday");
//get todays day and month
var d = new Date();
var day = d.getDate();
var month = d.getMonth();
//1-12 instead of 0-11 months
month += 1;

holidaydiv.innerHTML = lang;
//display appropriate text for today
holidaydiv.innerHTML = 'Today is ';
if (day == 25 && month == 12)
{
	holidaydiv.innerHTML += 'Christmas day.';
}
if (day == 1 && month == 1)
{
	holidaydiv.innerHTML += 'New Years day.';
}
if (day == 31 && month == 12)
{
	holidaydiv.innerHTML += 'New Years eve.';
}
if (day == 17 && month == 3)
{
	holidaydiv.innerHTML += 'St. Patricks day.';
}
if (day == 26 && month == 12)
{
	holidaydiv.innerHTML += 'Boxing day.';
}
if (day == 24 && month == 12)
{
	holidaydiv.innerHTML += 'Christmas eve.';
}

if (holidaydiv.innerHTML = 'Today is ') 
{
	holidaydiv.innerHTML += 'not a holiday, back to work!'
}