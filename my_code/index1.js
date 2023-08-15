const user = {
    fname: "sagar",
    lname: "ghimire",
    email: "wwwghimiresagar88@gmail.com",
    password: "sagar",
    userdata: ()=>{
        return user.fname+user.lname+user.email+user.password;

    },
    check : () =>{
        if(user.password==="sagar")
        {
            alert("login");
        }else{
            alert("invalid password. please try again");
            window.location="index.html";
        }
    }
};
function login() {
    const enterpw = prompt("enter your password");
    user.password = enterpw;
    user.check();
}



login();