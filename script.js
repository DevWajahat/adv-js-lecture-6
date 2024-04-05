let name_list=['Pakisatn','Srilanka','Bangladesh','India','Bhutan','Afghanistan','China',]
displayList();

function searchResult(){

let search = document.getElementById( "search" ).value.toLowerCase();
let target =document.getElementById('list');
let list= target.getElementsByTagName("li"); 
for (var i = 0; i < list.length; i++) 
{   
   let text = list[i].innerHTML;
   if (text.toLowerCase().indexOf(search)> -1)
   {

list[i].style.display= "";
   }
   else{
    list[i].style.display="none";
   }

}

}//function end

function displayList(){
	name_list.sort(function(a,b){
		if(a < b){
			return -1;
		}
 
		if(a > b){
			return 1;
		}
 
		return 0;
	});
	
	data = "";
	
	for(var i=0; i < name_list.length; i++){
		data += "<li class='list-group-item'><a href='https://www.google.com/search?q="+name_list[i]+"'>"+name_list[i]+"</a></li>";
	}
	
	document.getElementById('list').innerHTML = data;
}