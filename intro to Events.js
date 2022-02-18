var btnelement= document.getElementById('btn')  
var maindiv= document.querySelector('header div') 


function onbtnclick() {
  
    
   // btnelement.style.backgroundColor= 'green'  // changing background color of butto
  maindiv.style.backgroundColor= 'rgb(' + Math.floor(Math.random() *255 ) + ',' + Math.floor(Math.random() *255 ) + ',' + Math.floor(Math.random() *255)  +')'  // changing background color of div
}
// btnelement.onclick= onbtnclick another way of printing it
btnelement.addEventListener('click', onbtnclick) 