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

//display appropriate text for today
if (day == 25 && month == 12)
{
	holidaydiv.innerHTML = 'Today is Christmas day.';
}
if (day == 1 && month == 1)
{
	holidaydiv.innerHTML = 'Today is New Years day.';
}
if (day == 31 && month == 12)
{
	holidaydiv.innerHTML = 'Today is New Years eve.';
}
if (day == 17 && month == 3)
{
	holidaydiv.innerHTML = 'Today is St. Patricks day.';
}
if (day == 26 && month == 12)
{
	holidaydiv.innerHTML = 'Today is Boxing day.';
}
if (day == 24 && month == 12)
{
	holidaydiv.innerHTML = 'Today is Christmas eve.';
}

