const tinggiInput = document.getElementById("tinggi-input");
const alasInput = document.getElementById("alas-input");
const luasButton = document.getElementById("luas-button");
const kelilingButton = document.getElementById("keliling-button");
const resetButton = document.getElementById("reset-button");
const hasilLuas = document.getElementById("hasil-luas");
const hasilKeliling = document.getElementById("hasil-keliling");

function hitungLuas() {
    const tinggi = parseFloat(tinggiInput.value);
    const alas = parseFloat(alasInput.value);

    if (tinggi <= 0 || alas <= 0 || isNaN(tinggi) || isNaN(alas)) {
        hasilLuas.textContent = "Luas: Tidak bisa mengisi dengan angka 0";
        return;
    }

    const luas = 0.5 * alas * tinggi;
    hasilLuas.textContent = `Luas: ${luas}`;
}

function hitungKeliling() {
    const tinggi = parseFloat(tinggiInput.value);
    const alas = parseFloat(alasInput.value);

    if (tinggi <= 0 || alas <= 0 || isNaN(tinggi) || isNaN(alas)) {
        hasilKeliling.textContent = "Keliling: Tidak bisa mengisi dengan angka 0";
        return;
    }

    const sisiMiring = Math.sqrt(Math.pow(alas / 2, 2) + Math.pow(tinggi, 2));
    const keliling = 2 * sisiMiring + alas;
    hasilKeliling.textContent = `Keliling: ${keliling}`;
}

function resetForm() {
    tinggiInput.value = "";
    alasInput.value = "";
    hasilLuas.textContent = "Luas: ";
    hasilKeliling.textContent = "Keliling: ";
}

luasButton.addEventListener("click", hitungLuas);
kelilingButton.addEventListener("click", hitungKeliling);
resetButton.addEventListener("click", resetForm);
