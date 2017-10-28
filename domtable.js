/****************** GETTING TABLE AND ROW ELEMENTS FROM HTML ******************/
var domTable = document.getElementById('domtable');
var rowList = document.getElementsByTagName('tr');
/****************** GETTING TABLE AND ROW ELEMENTS FROM HTML ******************/

/****************** DOM OBJECT LOGIC BEGIN ******************/

//create an object that acts as a map
domObjectNames = {
	1: 'Intro',
	2: 'Methods',
	3: 'Document',
	4: 'Elemenets',
	5: 'HTML',
	6: 'CSS',
	7: 'Animations',
	8: 'Events',
	9: 'Event Listener',
	10: 'Navigation',
	11: 'Nodes',
	12:'Collections',
	13:'Node Lists'

}

//link corresponding to the object topics
var domObjectLinks = {
1: 'https://www.w3schools.com/js/js_htmldom.asp',
2 : 'https://www.w3schools.com/js/js_htmldom_methods.asp',
3 : 'https://www.w3schools.com/js/js_htmldom_document.asp',
4 : 'https://www.w3schools.com/js/js_htmldom_document.asp',
5 : 'https://www.w3schools.com/js/js_htmldom_html.asp',
6 : 'https://www.w3schools.com/js/js_htmldom_css.asp',
7 : 'https://www.w3schools.com/js/js_htmldom_animate.asp',
8 : 'https://www.w3schools.com/js/js_htmldom_events.asp',
9 : 'https://www.w3schools.com/js/js_htmldom_eventlistener.asp',
10 : 'https://www.w3schools.com/js/js_htmldom_navigation.asp',
11 : 'https://www.w3schools.com/js/js_htmldom_nodes.asp',
12 : 'https://www.w3schools.com/js/js_htmldom_collections.asp',
13 : 'https://www.w3schools.com/js/js_htmldom_nodelist.asp',
}

//stick it all together and make it work! 
rowList[0].innerHTML = "<th colspan='2'> DOM </th>"; //setting title
for(var i=1; i<rowList.length; i++){
	for (name in domObjectNames){
		rowList[i].innerHTML = "<td>DOM " + domObjectNames[i] + "</td>";
		for (link in domObjectLinks){
			var anchorData = document.createElement('td');
			anchorData.innerHTML = "<a style= 'text-decoration: none;' href= ' " + domObjectLinks[i] + " ' target = '_blank'> More Info </a>";
			rowList[i].appendChild(anchorData);
			break;
		}
	}
	}

/****************** DOM OBJECT LOGIC END ******************/

/****************** BOM OBJECT LOGIC BEGIN ******************/
var bomObjectNames = {
	15: 'Window',
	16: 'Screen',
	17: 'Location',
	18: 'History',
	19: 'Navigator',
	20: 'Popup Alert',
	21: 'Timing',
	22: 'Cookies'
}

var bomObjectLinks = {
	15: 'https://www.w3schools.com/js/js_window.asp',
	16: 'https://www.w3schools.com/js/js_window_screen.asp',
	17: 'https://www.w3schools.com/js/js_window_location.asp',
	18: 'https://www.w3schools.com/js/js_window_history.asp',
	19: 'https://www.w3schools.com/js/js_window_navigator.asp',
	20: 'https://www.w3schools.com/js/js_popup.asp',
	21: 'https://www.w3schools.com/js/js_timing.asp',
	22: 'https://www.w3schools.com/js/js_cookies.asp',
}

rowList[14].innerHTML = "<th colspan='2'> BOM </th>";
for(var i=15; i<rowList.length; i++){
	for (name in bomObjectNames){
		rowList[i].innerHTML = "<td>BOM " + bomObjectNames[i] + "</td>";
		for (link in bomObjectLinks){
			var anchorData = document.createElement('td');
			anchorData.innerHTML = "<a style= 'text-decoration: none;' href= ' " + bomObjectLinks[i] + " ' target = '_blank'> More Info </a>";
			rowList[i].appendChild(anchorData);
			break;
		}
	}
	}
/****************** BOM OBJECT LOGIC END ******************/

