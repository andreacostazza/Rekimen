var http=getHTTPObject();
var json;
var table, row , coloum;
var aux;
var icon="30px";
	
//Menu About
function about(){
	document.getElementById("about_menu").style.backgroundColor="#272a80";
	document.getElementById("restaurant_menu").style.backgroundColor="";
	document.getElementById("dishes_menu").style.backgroundColor="";	
	document.getElementById("query_menu").style.backgroundColor="";
	document.getElementById("contact_menu").style.backgroundColor="";
	document.getElementById("table").innerHTML = "";
	document.getElementById("loading").style.visibility = "hidden";
	document.getElementById("table").innerHTML=
	"<p class=\"text\">The website Rekimen tests the knowledge base located into the website <u><b>www.linkedfood.org</b></u>. "+
	"LinkedFood is a website where you can find an open dataset for food products and dishes that are modeled following the semantic web.</p>"+
	"<p class=\"text\"> The knowledge base used by the website LinkedFood is <u><b>http://www.linkedfood.org/resource/</b></u> with the prefix \"<b>lf</b>\","+
	" while the ontology is located on the address <u><b>http://www.linkedfood.org/ontology/</b></u> with the prefix  \"<b>lf-owl</b>\".<p>"+
	"<p class=\"text\">Into Rekimen there are two lists, one is for the restaurants, the other is for the dishes and is also possible"+
	" to execute one specific research to find the names of the restaurants and of the dishes."+
	" It's also possible to do researches of the dishes with the navigation bar named \"Query\"."+
	" If you select a specific dish, a nationality or both, you will see a dishes list with the selected characteristics.</p>"+
	"<p class=\"text\">Special thanks to the followings websites for icons:</p>"+
	"<ul>"+
		"<li>http://www.dailyoverview.com/ for icon chicken,sandwich,vegetable</li>"+
		"<li>http://www.desktop-icon.com/ for icon fastfood,dessert, pizza</li>"+
		"<li>http://www.freeiconsdownload.com for icon burger</li>"+
		"<li>http://all-free-download.com/ for icon meat,icecream,steak</li>"+
		"<li>http://graphicriver.net/free/web-icon-set/ for icon fish</li>"+
		"<li>http://openclipart.org/ for icon appetizer,fish,pasta,potato,roast,salad,steak,gratin,soup</li>"+
		"</ul>";
}
//Menu Query
function query_menu(){
	document.getElementById("about_menu").style.backgroundColor="";
	document.getElementById("restaurant_menu").style.backgroundColor="";	
	document.getElementById("dishes_menu").style.backgroundColor="";	
	document.getElementById("query_menu").style.backgroundColor="#272a80";
	document.getElementById("contact_menu").style.backgroundColor="";
	document.getElementById("loading").style.visibility = "hidden";
	document.getElementById("table").innerHTML=					
	"<form name=\"query\"action=\"javascript:query_typecuisine()\" method=\"POST\">"+
		"<table id=\"type_list\">"+
			"<td><p><b>Type</b></p></td>"+
			"<tr>"+							
			"<td><input type=\"radio\" name=\"type\" value=\"Gratin\">Gratin</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Burger\">Burger</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Fish\">Fish</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Dessert\">Dessert</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Meat\">Meat</td>"+							
			"</tr>"+
			"<tr>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Soup\">Soup</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Steak\">Steak</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Salad\">Salad</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Vegetable\">Vegetable</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Appetizer\">Appetizer </td>"+
			"</tr>"+
			"<tr>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Stew\">Stew</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Chicken\">Chicken</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Pasta\">Pasta</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Pizza\">Pizza</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Roast\">Roast</td>"+
			"</tr>"+
			"<tr>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Potato\">Potato</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"IceCream\">IceCream</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"DeepFried\">DeepFried</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"Sandwich\">Sandwich</td>"+
			"<td><input type=\"radio\" name=\"type\" value=\"FastFood\">FastFood </td>"+
			"</tr>"+
		"</table>"+						
		"<table id=\"cuisine_list\">"+
			"<tr>"+
			"<td><p><b>Cuisine</b></p></td>"+
			"</tr>"+
			"<tr>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Thai\">Thai</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"German\">German</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Italian\">Italian</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"American\">American</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Chinese\">Chinese</td>"+
			"</tr>"+
			"<tr>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Argentinian\">Argentinian</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Austrian\">Austrian</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"French\">French</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Indian\">Indian</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Mexican\">Mexican</td>"+
			"</tr>"+
			"<tr>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Russian\">Russian</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"British\">British</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Spanish\">Spanish</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Jamaican\">Jamaican</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Hungarian\">Hungarian</td>"+
			"</tr>"+
			"<tr>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Croatian\">Croatian</td>"+
			"<td><input type=\"radio\" name=\"cuisine\" value=\"Greek\">Greek</td>"+							
			"</tr>"+
			"<tr>"+
			"<td><input type=\"submit\" value=\"Search\" tabindex=\"3\"></td>"+
			"</tr>"+
		"</table>"+			
		"</form>";					
}
//Research type or cuisine
function query_typecuisine(){	
	var x = document.forms["query"].elements["type"];
	var y = document.forms["query"].elements["cuisine"];
	var form_type;
	var form_cuisine;
	
	for (var i=0; i<x.length; i++){
		if(x[i].checked){
			form_type=x[i].value;
		}
	}
	for (var i=0; i<y.length; i++){
		if(y[i].checked){
			form_cuisine=y[i].value;
		}
	}
	createTable("list_dish.php",form_type,form_cuisine);
}
//Menu Contact
function contact_menu(){
	document.getElementById("about_menu").style.backgroundColor="";
	document.getElementById("restaurant_menu").style.backgroundColor="";
	document.getElementById("dishes_menu").style.backgroundColor="";	
	document.getElementById("query_menu").style.backgroundColor="";
	document.getElementById("contact_menu").style.backgroundColor="#272a80";
	document.getElementById("loading").style.visibility = "hidden";
	document.getElementById("table").innerHTML=	
	"<form method=\"POST\" action=\"mailto:andreacostazza@gmail.com\" enctype=\"text/plain\">"+	
	"<table class=\"colonna_dx\">"+		
		"<tr>"+
		"<td><p><b>Name*:</b></p></td>"+
		"</tr>"+
		"<tr>"+
		"<td><input type=\"text\" size=58 name=\"name\" tabindex=\"1\" placeholder=\"Insert Name\"><br></td>"+
		"</tr>"+
		"<tr>"+
		"<td><p><b>E-mail*:</b></p></td>"+
		"</tr>"+
		"<tr>"+
		"<td><input type=\"email\" size=58 name=\"email\" placeholder=\"Insert E-mail\"></td>"+
		"</tr>"+
		"<tr>"+
		"<td><p><b>Message:</b></p></td>"+
		"</tr>"+
		"<tr>"+
		"<td><textarea placeholder=\"Insert Message\" cols=\"45\" rows=\"20\" name=\"text_message\"></textarea></td>"+
		"</tr>"+
		"<tr>"+
		"<td><input type=\"submit\" value=\"Send\"> &nbsp"+
		"<input type=\"reset\" value=\"Cancel\"></td>"+
		"</tr>"+
		"<tr>"+
		"<td><p class=fields>*required fields</p><td>"+
		"</tr>"+
	"</table>"+		
	"<table class=\"colonna_sx\">"+
		"<tr>"+
		"<td><p class=\"contact_us\">Contact Us</p></td>"+
		"</tr>"+
		"</tr>"+
		"<td><p class=\"name_user\">Andrea Costazza</p></td>"+
		"</tr>"+
		"<tr>"+
		"<td><p><b>Cellular phone:</b> +39 3477869446</p></td>"+
		"</tr>"+
		"<tr>"+
		"<td><p><b>Skype:</b> andrea.costazza</p></td>"+
		"</tr>"+
	"</table>"+
	"</form>";
		
}
//Research restaurant or dish
function query_rest(){
	var form_restaurant= document.forms["query_rest"]["text_restaurant"].value;
	aux="form_restaurant="+form_restaurant;
	research();	
}
function query_dish(){
	var form_dish = document.forms["query_dish"]["text_dish"].value;
	aux="form_dish="+form_dish;	
	research();
}
//Research  
function research(){
	document.getElementById("table").innerHTML = "";
	document.getElementById("loading").style.visibility = "visible";	
	http.open('GET',"page/research.php?"+aux,true);
	http.onreadystatechange=function(){
		if(http.readyState==4 && http.status==200){	
			
			if(http.responseText==-1){
				document.forms["query_rest"]["text_restaurant"].value="";
				document.forms["query_dish"]["text_dish"].value="";
				document.getElementById("table").innerHTML="<p class=\"not_found\">The research has produced no results</p>";
				document.getElementById("loading").style.visibility = "hidden";
				}
			else{	
				json=eval(JSON.parse(http.responseText));
				table=document.createElement('table');
				
				//Research dish
				try{
					if(json.dish[0].restaurant){						
						table=createIcon(json.dish,table,icon);
						table.setAttribute('id','name_table2');
					}
				}catch(err){
					try{
						//Research restaurant
						if(json.restaurants[0].restaurant){							
							for(var i in json.restaurants){
								table.setAttribute('id','name_table');
								row=table.insertRow(i);	
								coloum=row.insertCell(0);
								coloum.innerHTML="<p>"+json.restaurants[i].restaurant.link("javascript:createLabelRestaurant(\""+json.restaurants[i].restaurant+"\")")+"</p>";
							}	
						}
					}catch(err2){					
					//Empty
					}					
				}				
				document.forms["query_rest"]["text_restaurant"].value="";
				document.forms["query_dish"]["text_dish"].value="";
				document.getElementById("table").appendChild(table);
				document.getElementById("loading").style.visibility = "hidden";
			}
		}
	};
	http.send(null);
}
//Create Table Restaurant e Dish
function createTable(open,x,y){
	document.getElementById("table").innerHTML = "";
	document.getElementById("loading").style.visibility = "visible";	
	http.open('GET',"page/"+open,true);
	http.onreadystatechange= function(){
		if(http.readyState==4 && http.status==200){			
			if(open=='list_restaurant.php'){
				document.getElementById("about_menu").style.backgroundColor="";
				document.getElementById("dishes_menu").style.backgroundColor="";
				document.getElementById("query_menu").style.backgroundColor="";
				document.getElementById("restaurant_menu").style.backgroundColor="#272a80";
				document.getElementById("contact_menu").style.backgroundColor="";
				}
			if(open=='list_dish.php' && (x=="undefined" && y=="undefined")){
				document.getElementById("about_menu").style.backgroundColor="";
				document.getElementById("restaurant_menu").style.backgroundColor="";
				document.getElementById("query_menu").style.backgroundColor="";
				document.getElementById("dishes_menu").style.backgroundColor="#272a80";
				document.getElementById("contact_menu").style.backgroundColor="";
				}
			json=eval(JSON.parse(http.responseText));		
			table=document.createElement('table');			
			//Table restaurant
			if(json.results[0].restaurant){	
				for(var i in json.results){	
					row=table.insertRow(i);	
					coloum=row.insertCell(0);
					coloum.innerHTML="<p>"+json.results[i].restaurant.link("javascript:createLabelRestaurant(\""+json.results[i].restaurant+"\")")+"</p>";
				}
			}
			//Table dish
			else{
				table=createIcon(json.results,table,icon,x,y);							
			}		
			
		table.setAttribute('id','name_table');
		document.getElementById("table").appendChild(table);			
		document.getElementById("loading").style.visibility = "hidden";
		if(document.getElementById("name_table").rows.length==0)
			document.getElementById("table").innerHTML="<p class=\"not_found\">The research has produced no results</p>";
		}
	};	
	http.send(null);
	
}
//Create Icon 
function createIcon(array,table_aux,size,x,y){	
	var cuisine=new Array("Thai","German","Italian","American","Chinese","Argentinian","Austrian","French",
							"Indian","Mexican","Russian","British","Spanish","Jamaican","Hungarian","Croatian","Greek");
	var dish=new Array("Gratin","Burger","Fish","Dessert","Meat","Soup","Steak","Salad","Vegetable","Appetizer","Stew",
							"Chicken","Pasta","Pizza","Roast","Potato","IceCream","DeepFried","Sandwich","FastFood");
	var j=0;
	var stringa;
	var stringa2;
	var arr;
	var associative_array = [];

	table_aux=document.createElement('table');	
	for(var p in array){		
		temp=array[p].dish;
		try{
			while(temp==array[j].dish){
				for(var k in cuisine){						
					if(String(array[j].classes).search(cuisine[k])!=-1){							
						stringa="<img title=\""+cuisine[k]+"\" width=\""+size+"\" height=\""+size+"\" src=\"icon/flags/"+cuisine[k]+".png\" id=\""+cuisine[k]+"\">";
					}
				}
				for(var l in dish){
					if(String(array[j].classes).search(dish[l])!=-1){							
						stringa2="<img title=\""+dish[l]+"\" width=\""+size+"\" height=\""+size+"\" src=\"icon/type/"+dish[l]+".png\" id=\""+dish[l]+"\">";
					}
				}					
				j++;
			}
		}
		catch(err){
		//Empty
		}
		if(stringa && stringa2){		
			if((stringa2.search(x)!=-1 && stringa.search(y)!=-1) || (x=='undefined' && y=='undefined')){
				arr=[
							{"names":"<p>"+array[p].name_Dish.link("javascript:createLabelDish(\""+array[p].dish+"\",\""+array[p].name_Dish+"\")")+"</p>",
									"icons":stringa+" "+stringa2},
									];
				associative_array.push(arr);
			}
		}
		stringa="";
		stringa2="";
	}
	for(var q in associative_array){
		row=table_aux.insertRow(q);
		coloum=row.insertCell(0);
		coloum.innerHTML=associative_array[q][0].names;
		coloum=row.insertCell(1);
		coloum.innerHTML=associative_array[q][0].icons;
	}		
	return table_aux;
}
//Create Label Restaurant
function createLabelRestaurant(label){	
	document.getElementById("table").innerHTML = "";
	document.getElementById("loading").style.visibility = "visible";
	http.open('GET',"page/info_restaurant.php",true);
	http.onreadystatechange=function(){
		if(http.readyState==4 && http.status==200){
				json=eval(JSON.parse(http.responseText));								
				table=document.createElement('table');	
				table.setAttribute('id','table_rest');
				
				var table2=document.createElement('table');							
				
				var list_dish=new Array();				
				for (var i in json.results){
					if(json.results[i].restaurant==label){						
						list_dish.push({"dish":json.results[i].dish,"name_Dish":json.results[i].name_Dish,"classes":json.results[i].classes})
					}	
				}
				table2=createIcon(list_dish,table,icon,'undefined','undefined');				
				//Name Restaurant
				row=table.insertRow(0);
				coloum=row.insertCell(0);
				coloum.innerHTML="<p class=\"name\">"+label+"</p>";
				//Menu' Restaurant
				row=table.insertRow(1);
				coloum=row.insertCell(0);
				coloum.innerHTML="<p class=\"menu\">Men&ugrave;</p>";			
				document.getElementById("table").appendChild(table);
				document.getElementById("table_rest").appendChild(table2);
				table2.setAttribute('id','name_table2');
				document.getElementById("loading").style.visibility = "hidden";
		}
	}
	http.send(null);
}
//Create Label Dish
function createLabelDish(label,label2){
	document.getElementById("table").innerHTML = "";
	document.getElementById("loading").style.visibility = "visible";
	http.open('GET',"page/info_dish.php",true);
	http.onreadystatechange=function(){
	if(http.readyState==4 && http.status==200){
			json=eval(JSON.parse(http.responseText));
			table=document.createElement('table');	
			table.setAttribute('id','table_rest');
			var rest
			for(var i in json.results){
				if(json.results[i].dish==label){
					rest="<p class=\"rest_tag\">"+json.results[i].restaurant.link("javascript:createLabelRestaurant(\""+json.results[i].restaurant+"\")")+"</p>";									
				}
			}
			row=table.insertRow(0);
			coloum=row.insertCell(0);
			coloum.innerHTML="<p class=\"name\">"+label2+"</p>";
			row=table.insertRow(1);
			coloum=row.insertCell(0);
			coloum.innerHTML="<p class=\"menu\">Restaurant</p>";			
			row=table.insertRow(2);
			coloum=row.insertCell(0);
			coloum.innerHTML=rest;
			document.getElementById("table").appendChild(table);
			document.getElementById("loading").style.visibility = "hidden";
		}
	}
	http.send(null);
}

//Request
function getHTTPObject(){
	var xmlhttp;
	if(!xmlhttp && typeof XMLHttpRequest != 'undefined'){
		try{
			xmlhttp=new ActiveXObject('Msxml2.XMLHTTP');
			}
		catch(err){
			try{
				// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(err2){
				try{
					// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp=new XMLHttpRequest();
				}
				catch(err3){
					xmlhttp=false
				}
			}			
		}
	}
	return xmlhttp;
}			