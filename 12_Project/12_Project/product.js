window.onload = function() {
    document.getElementById('pfile').addEventListener('change', addProductDetails);
}

var addProductDetails = (event)=>
{
    const files = event.target.files;
    const fileName = files[0].name;
    console.log("file name: ", fileName);
}