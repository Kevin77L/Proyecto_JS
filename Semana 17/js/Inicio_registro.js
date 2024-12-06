//
const signUpButton=document.getElementById("signUp");//form registro
const signInButton=document.getElementById("signIn");//form ingreso
const container=document.getElementById("container");
const boost=document.getElementById("boost");
//Evento click de mostrar form registro
signUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
});
//Evento click de ocultar form registro
signInButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
});
//Mostrar contraseña
function mostrarSeña()
{
    var tipo=document.getElementById("seña");
    if(tipo.type=="password"){
        tipo.type="text";//Muesta contraseña
    }else{
        tipo.type="password";//ocultar contraseña
    }
}