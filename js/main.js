let navbar = document.querySelector('.navbar')
window.addEventListener('scroll',()=>{
    let scrollValue = window.scrollY
    if(scrollValue>300){
        navbar.setAttribute('class','navbar navbar-expand-lg navbar-dark bg-dark')

    }else{
        navbar.setAttribute('class','navbar navbar-expand-lg navbar-light bg-light')

    }
})
function myTimer(){
    let date = new Date();
    document.querySelector('#demo').innerHTML=date;

}


function myData(){
    alert("123")
}
