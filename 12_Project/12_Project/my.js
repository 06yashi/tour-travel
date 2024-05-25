function initRegister()
{
   uname = document.getElementById('name');
   email = document.getElementById('email');
   username = document.getElementById('username');
   pass = document.getElementById('password'); 
   mobile = document.getElementById('mobile');
   gender = document.getElementById('gender');
   type = document.getElementById('type');   

   user = [];
}
function saveUserDetails()
{
  var unm = uname.value;
  var uemail = email.value;
  var u_username = username.value;
  var upass = pass.value;
  var umob = mobile.value;
  var ugen = gender.value;
  var utype = type.value;  
	
  console.log(unm+" : "+uemail+" : "+u_username+" : "+upass+" : "+umob+" : "+ugen+" : "+utype);
  
  //Create Object : With Key value pair: Same Name
  //var obj = {unm:unm,uemail:uemail,u_username:u_username,upass:upass,umob:umob,ugen:ugen,utype:utype};
  
  var obj = {unm,uemail,u_username,upass,umob,ugen,utype};
  user.push(obj);

  var userData = JSON.stringify(user);
  console.log(typeof userData);  //String
  
  localStorage.setItem("userData",userData);
}