function validation(){
    
    var username=document.forms[0].name.Value;
    var password=document.forms[0].name.Value;
    var password=document.getElementById('error1');
    var error1=document.getElementById('error2');
    var success=document.getElementById("success");
    var fail=document.getElementById('fail');
}
if(username==""){
    error1.style.color='red';
   error1.innerHTML="Enter Username";
}
else if(password==""){
    error1.innerHTML=""
    error2.style.color='red';
   error2.innerHTML="Enter password";
}
   else if(username=="ABHISHEK" && password=="9440939793"){
    error1.innerHTML="";
    error2.innerHTML="";
    success.innerHTML="Successfully Login"
   error2.innerHTML="Enter password";
}
else{
    fail.style.color='red';
    fail.innerHTML="Invalid";
}