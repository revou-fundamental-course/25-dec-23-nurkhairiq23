function luas_segitiga() {
    // Get the input values
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    // Check if the inputs are valid numbers
    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Silahkan masukkan nilai yang valid untuk alas dan tinggi.');
        return;
    }

    // Calculate the area using the formula: 1/2 * base * height
    var luas = 0.5 * alas * tinggi;

    // Display the result
    document.getElementById('result-luas-segitiga').textContent = 'Luas Segitiga adalah: ' + luas.toFixed(2);
}

function reset_luas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result-luas-segiiga').innerHTML = '';
}

function keliling_segitiga() {
    // Get the input values
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    // Check if the inputs are valid numbers
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
      alert('Silahkan masukkan nilai yang valid untuk semua sisi.');
      return;
    }

    // Check if the given sides form a valid triangle
    if (sisiA + sisiB > sisiC && sisiB + sisiC > sisiA && sisiC + sisiA > sisiB) {
      // Calculate the result
      var area = sisiA + sisiB + sisiC;
      // Display the result
      document.getElementById('result-keliling-segitiga').textContent = 'Keliling Segitiga adalah: ' + area.toFixed();
    } else {
        document.getElementById('result-keliling-segitiga').textContent = 'Nilai sisi yang dimasukkan INVALID! Silahkan masukkan nilai yang valid untuk semua sisi';
    }
  }
  
  function reset_keliling() {
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('result-keliling-segitiga').innerHTML = '';
  }
