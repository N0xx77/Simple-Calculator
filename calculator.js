const display = document.getElementById("display");

function appendToDisplay(data){
    if(display.value === "Error"){
        display.value = data;
    }
    else{
        display.value += data;
    }
}

function clearText(){
    display.value = "";
}

function remove(){
    display.value = display.value.slice(0, -1);
}

function equate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}