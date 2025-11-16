function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
  const radius=document.getElementById("radius").value;
  const r = parseFloat(radius); 
  const volume = (4/3) * Math.PI * Math.pow(r, 3);
  document.getElementById("volume").value = volume.toFixed(4)
  
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
