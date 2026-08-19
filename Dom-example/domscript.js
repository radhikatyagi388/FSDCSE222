function addParagraph() {
    const para = document.createElement("p");
    para.innerText = "This is a new Paragraph";
    para.style.color = "red";
    const el = document.getElementById("para");// finding where is para id
    el.appendChild(para);//
}
function removePara() {
  
    const el = document.querySelector("p");
    const parent = document.getElementById("para");

 parent.removeChild(el);
}
function removeAll() {
    const el = document.querySelector("p");
    const parent = document.getElementById("para");
    parent.remove(el);
}
