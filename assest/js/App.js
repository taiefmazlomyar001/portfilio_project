const toggle=document.getElementById("toggle")
const navbar=document.getElementById('navbar')
toggle.addEventListener('click' , ()=>{
    navbar.classList.toggle('active')
})


document.getElementById('btnDrowp').addEventListener('click' , ()=>{
    document.getElementById('parentDrowp').classList.toggle('show')
})