let items=[];

function Add(e){
    var itemName=document.getElementById("itemList").value;
    if(itemName != ""){
        items.push(itemName);
        console.log(items);
        document.getElementById("List").innerHTML=items;
    }
    else{
        alert("Please Add Some Value");
        document.getElementById("itemList").style.border='1px solid red';
    }
    document.getElementById("itemList").value=" ";
}
function Stop(){
    itemList.disabled=true;
    document.getElementById("value").style.display="";
}
function Release(){
    itemList.disabled=false;
}
function change(){
    var l=items.length;
    console.log(items.length);
    d=document.getElementById("dValue").value;
    p=document.getElementById("pValue").value;
    if(d==0){
        console.log(items);
        var element = items.splice(0, p); 
        console.log(items);
        items.splice(l,0, ...element);
        console.log(items);
    }
    else if(d==1){
        console.log(items);
        var elementR = items.splice(0, p);
        console.log(items);
        items.splice(0,0, ...elementR); 
        console.log(items); 
    }
    else{
        alert("Enter Value of d 1 or 0");
        document.getElementById("dValue").style.border='1px solid red';
    }
    if(p>l){
        alert("Value of p is not valid");
        document.getElementById("pValue").style.border='1px solid red';
    }
}