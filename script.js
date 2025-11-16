function volume_sphere() {
    //Write your code here
  const radius=document.getElementById("radius").value;
	const r = parseFloat(radius);
    if (isNaN(r) || r < 0) {
        alert("Please enter a valid positive number!");
        return;
    }
  const volume = (4/3) * Math.PI * Math.pow(r, 3);
  let calculate=document.getElementById("submit");

	document.getElementById("volume").value = volume.toFixed(2);
  
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
