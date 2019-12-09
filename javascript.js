function convert_dec()
{
    decimal = + document.getElementById("dec").value;

    bin.value = decimal.toString(2);
    oct.value = decimal.toString(8);
    hex.value = decimal.toString(16);

}

function convert_bin()
{
  regex = /[2-9a-zA-ZäöüÄÖÜ]/ ;
  console.log("it worksssss");

  binary = document.getElementById("bin").value;
  test = binary.search(regex);

  if(test >= 0)
  {
      alert("Binary only accepts digits 0 and 1")
  }
  else{
    binary = parseInt(binary, 2);

    dec.value = binary.toString(10);
    oct.value = binary.toString(8);
    hex.value = binary.toString(16);
  
  }
}

function convert_oct()
{
  regex = /[a-zA-ZäöüÄÖÜ89]/ ;
  console.log("it worksssss");

  octa = document.getElementById("oct").value;
  test = octa.search(regex);

  if(test >= 0)
  {
      alert("Octadecimal only accepts digits from 0-7");
  }
  else{
    octa = parseInt(octa, 8);

    bin.value = octa.toString(2);
    dec.value = octa.toString(10);
    hex.value = octa.toString(16);
  
  }
}

function convert_hex()
{
  console.log("it worksssss");
  regex = /[g-zG-ZäöüÄÖÜ]/ ;

  hexa = document.getElementById("hex").value;
  test = hexa.search(regex);

  if(test >= 0)
  {
      alert("Hexadecimal only accepts digits 0-9 and letters a-f");
  }
  else{
    hexa = parseInt(hexa, 16)

    bin.value = hexa.toString(2);
    oct.value = hexa.toString(8);
    dec.value = hexa.toString(10);
  
  }
}

function conversions()
{
  element = document.getElementById("1")
  element.classList.toggle('conversion_hide');
  element.classList.toggle('conversion');
}