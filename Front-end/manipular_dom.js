function trocaCor(){
    const div =document.getElementById("trocaCor");
    const n1=Math.floor(Math.random()*10);
    if(n1==1){
        div.style.backgroundColor="red";
    }
    else if(n1==2){
        div.style.backgroundColor="blue";
    }
    else if(n1==3){
        div.style.backgroundColor="green";
    }
    else if(n1==4){
        div.style.backgroundColor="yellow";
    }
    else if(n1==5){
        div.style.backgroundColor="pink";
    }
    else if(n1==6){
        div.style.backgroundColor="purple";
    }
    else if(n1==7){
        div.style.backgroundColor="orange";
    }
    else if(n1==8){
        div.style.backgroundColor="brown";
    }   
    else if(n1==9){
        div.style.backgroundColor="gray";
    }
        else if(n1==0){
        div.style.backgroundColor="black";
    }
}