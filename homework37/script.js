let url1 = 'en.cppreference.com/w/';
let url2 = 'lms.ithillel.ua/groups/63341eb7f91a564d59df2794/homeworks/6407a9ea873d7a7e0573a120'; 

document.addEventListener('DOMContentLoaded', () => {
	button1.addEventListener('click', () => {
		if (!url1.startsWith('http://') && !url1.startsWith('https://'))	{
  		url1 = 'https://' + url1;
		}
  
 		window.location.href = url1;
	});

	button2.addEventListener('click', () => {
		if (!url2.startsWith('http://') && !url2.startsWith('https://'))	{
  		url2 = 'https://' + url2;
		}
  
 		window.location.href = url2;
	});
});

