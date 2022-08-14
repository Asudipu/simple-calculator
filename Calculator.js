let string="";
let buttons=document.querySelectorAll('.button');
let input=document.getElementById("input")

Array.from(buttons).forEach((button)=>{
    
    button.addEventListener("click",function(e){
        if(e.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }else if(e.target.innerHTML=="C"){
            string="";
            input.value=string;
        } 
        else{
            string=string+e.target.innerHTML
            input.value=string;
        }
    })
})