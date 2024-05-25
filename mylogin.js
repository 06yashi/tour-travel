function getDataFromLocalStorage()
{
    email = document.getElementById('email');
    password = document.getElementById('password');
}
function loginUser()
{ 
  var em = email.value;
  var pass = password.value;
  console.log(em+" : "+pass);

   //Get Data From Local Storage
   var udata = localStorage.getItem("userData")
   var uarr = JSON.parse(udata)
   
   for(user of uarr)
   {
    console.log(user)
      if(user.uemail == em && user.upass == pass && user.utype == "admin")
      {
        window.location.href = "admin_home.html";
      }
      if(user.uemail == em && user.upass == pass && user.utype == "user")
        {
            window.location.href = "user_home.html";
        }
   }
}