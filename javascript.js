var conversions_shown = false;
var conv_tables_shown = false;
var combinatorics_shown = false;
var truth_shown = false;
var rndm_shown = false;


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
  if(conv_tables_shown == true)
  {
    conversion_tables();
  }
  if(combinatorics_shown == true)
  {
    combinatorics_toggle();
  }
  if(truth_shown == true)
  {
    truth();
  }
  if(rndm_shown == true)
  {
    rndm();
  }
  conversions_shown = !conversions_shown
  element = document.getElementById("1")
  element.classList.toggle('conversion_hide');
  element.classList.toggle('conversion');
}

function conversion_tables()
{
  if(conversions_shown == true)
  {
    conversions();
  }
  if(combinatorics_shown == true)
  {
    combinatorics_toggle();
  }
  if(truth_shown == true)
  {
    truth();
  }
  if(rndm_shown == true)
  {
    rndm();
  }

  var value = 0;

  var printed = -1;
  var printed_oct = -1;
  var printed_hex = -1;

  document.getElementById("t0").classList.toggle("conversion_table_hide")
  document.getElementById("t1").classList.toggle("conversion_table_hide")
  document.getElementById("t2").classList.toggle("conversion_table_hide")
  document.getElementById("t3").classList.toggle("conversion_table_hide")

  while(value < 51)
  {
    if(printed == -1)
    {
      printed_dec = value
      printed = value.toString(2);
      printed_oct = value.toString(8);
      printed_hex = value.toString(16);
    }
    else{
      printed_dec = printed_dec + "<br>" + value
      printed = printed + "<br>" + value.toString(2);
      printed_oct = printed_oct + "<br>" + value.toString(8);
      printed_hex = printed_hex + "<br>" + value.toString(16);
    }
    value++;
  }
  if(conv_tables_shown == true)
  {
    printed_dec = "";
    printed = "";
    printed_oct = "";
    printed_hex = "";
  }
  document.querySelector(".dec_table").innerHTML = "Dec: <br>" + printed_dec;
  document.querySelector(".bin_table").innerHTML = "Bin: <br>" + printed;
  document.querySelector(".oct_table").innerHTML = "Oct: <br>" + printed_oct;
  document.querySelector(".hex_table").innerHTML = "Hex: <br>" + printed_hex;
  conv_tables_shown = !conv_tables_shown;
}

function combinatorics()
{
  m_element = document.getElementById("m").value;
  n_element = document.getElementById("n").value;
  m_fact = factorial(m_element);
  n_fact = factorial(n_element);
  m_n = m_element - n_element;
  m_n_fact = factorial(m_n);
  replace = false;
  no_replace = false;
  if( document.getElementById("r1").checked == true)
  {
    replace = true;
    no_replace = false;
  }
  else if( document.getElementById("r2").checked == true)
  {
    replace = false;
    no_replace = true;
  }

  if( replace == true)
  {
    result = Math.pow(m_element, n_element);
    document.querySelector(".comb_result").innerHTML = result;
  }

  if( no_replace == true)
  {
    result = m_fact / m_n_fact;
    document.querySelector(".comb_result").innerHTML = result;
  }

  if( document.getElementById("c1").checked == false )
  {
    result = m_fact / (n_fact * m_n_fact)
    document.querySelector(".comb_result").innerHTML = result;
  }
}

function factorial(x)
{
  if (x == 0)
 {
    return 1;
 }
  return x * factorial(x-1);      
}

function active_replacement()
{
  document.getElementById("r1").toggleAttribute("disabled");
  document.getElementById("r1").checked = true;
  document.getElementById("r2").toggleAttribute("disabled");
}

function combinatorics_toggle()
{
  if(conversions_shown == true)
  {
    conversions();
  }
  if(conv_tables_shown == true)
  {
    conversion_tables();
  }
  if(truth_shown == true)
  {
    truth();
  }
  if(rndm_shown == true)
  {
    rndm();
  }

  combinatorics_shown = !combinatorics_shown;
  document.querySelector(".combinatorics").classList.toggle("comb_hide");
}