let plantGrowth = JSON.parse(localStorage.getItem("plantGrowth")) || [0, 0, 0];

window.onload = () => {
  for (let i = 0; i < 3; i++) {
    const plant = document.getElementById(`plant${i}`);
    if (plantGrowth[i] > 0) {
      plant.style.display = 'block';
      plant.style.transform = `scale(${1 + plantGrowth[i] * 0.3})`;
    }
  }
};

function plantSeed(index) {
  const plant = document.getElementById(`plant${index}`);
  if (plantGrowth[index] === 0) {
    plant.style.display = 'block';
    plantGrowth[index] = 1;
    plant.style.transform = 'scale(1.3)';
    saveProgress();
  }
}

function waterPlants() {
  for (let i = 0; i < 3; i++) {
    const plant = document.getElementById(`plant${i}`);
    if (plant.style.display === 'block' && plantGrowth[i] < 3) {
      plantGrowth[i]++;
      plant.style.transform = `scale(${1 + plantGrowth[i] * 0.3})`;
    }
  }
  saveProgress();
}

function saveProgress() {
  localStorage.setItem("plantGrowth", JSON.stringify(plantGrowth));
}
