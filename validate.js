function validateForm()
{
    var uname = document.forms["regform"]["uname"];	
    var uemail = document.forms["regform"]["uemail"];
    var upass = document.forms["regform"]["upass"];
    var upassc = document.forms["regform"]["upassc"];
     
    if(uname.value == "")
    {
        alert('Name must be filled');
        return false;
    }

    if(uemail.value == "")
    {
        alert('Email must be filled');
        return false;
    }

    if(uemail.value.insexOf("@",0)<0)
    {
        alert('Email address not valid');
        return false;
    }

    if(upass.value == "")
    {
        alert('Password must be filled');
        return false;
    }

    if(upassc.value == "")
    {
        alert('Conform Password must be filled');
        return false;
    }

    if(upass.value != upassc.value)
    {
        alert('Password does not match');
        return false;
    }
}