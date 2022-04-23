document.addEventListener( 'DOMContentLoaded',function(){
 var searchpara=document.getElementById("search_para").innerHTML;
 searchpara=searchpara.toString();
 document.getElementById("search").onclick =function ()
 {highlight_word(searchpara)};	
},false);

function highlight_word(searchpara)
{
 var text=document.getElementById("search_text").value;
 if(text)
 {
  var pattern=new RegExp("("+text+")", "gi");
  var new_text=searchpara.replace(pattern, "<span class='highlight'>"+text+"</span>");
  document.getElementById("search_para").innerHTML=new_text;
 }
}
function highlight(text) {
    var inputText = document.getElementById("inputText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  }function highlight1(text) {
    var inputText1 = document.getElementById("inputText1");
    var innerHTML = inputText1.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText1.innerHTML = innerHTML;
    }
  }function highlight2(text) {
    var inputText2 = document.getElementById("inputText2");
    var innerHTML = inputText2.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText2.innerHTML = innerHTML;
    }
  }function highlight3(text) {
    var inputText3 = document.getElementById("inputText3");
    var innerHTML = inputText3.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText3.innerHTML = innerHTML;
    }
  }function highlight4(text) {
    var inputText4 = document.getElementById("inputText4");
    var innerHTML = inputText4.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText4.innerHTML = innerHTML;
    }
  }