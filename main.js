/*document.getElementById("inp").oninput = ()=>{
    document.getElementById("top").innerHTML=document.getElementById("inp").value
}*/



document.getElementById("inp1").oninput=()=>{
    document.getElementById("p").innerHTML = document.getElementById("inp1").value;
    document.getElementById("no-con").innerHTML = document.getElementById("inp1").value
}
document.getElementById("inp2").oninput=()=>{
    document.getElementById("p3").innerHTML = document.getElementById("inp2").value
}
document.getElementById("cvv").oninput=()=>{
    document.getElementById("p6").innerHTML = document.getElementById("cvv").value;
    document.getElementById("cvv2").innerHTML = document.getElementById("cvv").value;

}


const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    if(document.getElementById("inp1").value == ""){
        alert("COMPLETE THE FORM")
    }else{
        console.log("save");
    alert("YOUR INFO IS COMPLETLY SAVED")
    }
})
document.getElementById("cvv").onmouseenter=()=>{
    document.getElementById("card-in").style.transform = " perspective(1000px) rotateY(-180deg)"
    document.getElementById("card-in2").style.visibility = "visible"
    
    document.getElementById("card-in2").style.transform = "perspective(1000px) rotateY(180deg)"
    

}
document.getElementById("cvv").onmouseleave=()=>{
    document.getElementById("card-in").style.transform = " perspective(1000px) rotateY(0deg)"
    document.getElementById("card-in2").style.visibility = "hidden"
    
    document.getElementById("card-in2").style.transform = "perspective(1000px) rotateY(180deg)"
    

}

