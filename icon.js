function circle(i) {
  document.getElementById("inp_0").setAttribute("icon", i);
}

document.getElementById("inp_0").addEventListener('click',()=>{
  document.getElementById("inp_0").parentElement.remove()
})

document.getElementById('sort_down').addEventListener('click',()=>{
    document.getElementById('sort_down').style.display = 'none';
    document.getElementById('sort_up').style.display = 'block';
})
document.getElementById('sort_up').addEventListener('click',()=>{
    document.getElementById('sort_up').style.display = 'none';
    document.getElementById('sort_down').style.display = 'block';
})

