console.log("loed")
let display = document.getElementById("display");

function append(a){
    let c=display.value.slice(-1);
    if((c==='+'||c==='/'||c==='*'||c==='-')&&(a==='+'||a==='/'||a==='*'||a==='-') ) remove();
    if(display.value==="Error") clearAll();
    display.value+=a
}
function remove(){
    
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error"
    }
}
function clearAll(){
    display.value=""
}
