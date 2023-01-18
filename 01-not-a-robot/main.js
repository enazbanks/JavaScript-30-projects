const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector(".btn");

// disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

console.log(submitBtn);

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor")

// Assign color to elements
elements.forEach(function(element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.innerHTML = color;
  SelectColor.innerHTML = color;
});

// generate random color Func
function getRandomColor () {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++){
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

//check if right color
elements.forEach(function(element) {
  element.addEventListener('click', function() {
    element.style.border = "2px solid #141619";
    if(element.innerHTML === selectColor.innerHTML){
      checkbox.checked = true;
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      alert("Please verify that you are a human.");
      location.reload(true);
    }
  });
});
