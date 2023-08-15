let cs;
let name = [];

function getdata()
{
    cs = prompt("enter student number");
    for(let i=0;i<cs;i++)
    {
        let names = prompt("enter your name");
        name.push(names);
    }
    return name;

}

function show(showcsname){
    for(let j=0;j<cs;j++)
    {
        document.write("<br> name: "+showcsname[j]+"<br>");
    }
}

let valuepass = getdata();
show(valuepass);