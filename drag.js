var save_box = document.querySelector('.save_box');
var box = document.querySelectorAll('.add_box');
var item;

function dragStart(){
    console.log('start')
    item = this;
}
function dragEnd(){
    console.log('end')
}
function dragOver(e){
    e.preventDefault()
}
function dragLeave(e){
    e.preventDefault()
}
function dragEnter(){
    e.preventDefault()
}
function drop(){
    console.log('drop')
    this.innerHtml = item
}

box.forEach((element)=>{
    element.addEventListener('dragstart',dragStart)
    element.addEventListener('dragend',dragEnd)
    element.addEventListener('dragover',dragOver)
    element.addEventListener('dragenter',dragEnter)
    element.addEventListener('drop',drop)
    element.addEventListener('dragleave',dragLeave)
})