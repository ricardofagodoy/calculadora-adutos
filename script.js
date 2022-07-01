const input = document.getElementById('mass');

input.addEventListener('input', updateValue);

function updateValue(e) {
  console.log(e.target.value);
}