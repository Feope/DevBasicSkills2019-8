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

  document.getElementById("conversion_side").classList.toggle("active");
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
  document.getElementById("conversion_table_side").classList.toggle("active");
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

  document.getElementById("combinatorics_side").classList.toggle("active");
  combinatorics_shown = !combinatorics_shown;
  document.querySelector(".combinatorics").classList.toggle("comb_hide");
}

function truth()
{
  if(conversions_shown == true)
  {
    conversions();
  }
  if(conv_tables_shown == true)
  {
    conversion_tables();
  }
  if(combinatorics_shown == true)
  {
    combinatorics_toggle();
  }
  if(rndm_shown == true)
  {
    rndm();
  }

  document.getElementById("truth_side").classList.toggle("active");
  truth_shown = !truth_shown;
  document.querySelector(".ttables").classList.toggle("thide");
}

function tables(){
  or = false;
  and =false;
  xor = false;
  not = false;
  if( document.getElementById("or").checked == true)
  {
    or = true;
  }
  else{
    or = false;
  }

  if( document.getElementById("and").checked == true)
  {
    and = true;
  }
  else{
    and = false;
  }

  if( document.getElementById("xor").checked == true)
  {
    xor = true;
  }
  else{
    xor = false;
  }

  if( document.getElementById("not").checked == true)
  {
    not = true;
  }
  else{
    not = false;
  }

  if( or == true )
  {
    document.querySelector(".theader").innerHTML = "OR";
    document.querySelector(".ta2").innerHTML = "A";
    document.querySelector(".ta").innerHTML = 0;
    document.querySelector(".ta1").innerHTML = 0;
    document.querySelector(".ta3").innerHTML = 1;
    document.querySelector(".ta4").innerHTML = 1;
    document.querySelector(".tb3").innerHTML = 0;
    document.querySelector(".tb4").innerHTML = 1;
    document.querySelector(".toutput1").innerHTML = 0 || 0;
    document.querySelector(".toutput2").innerHTML = 0 || 1;
    document.querySelector(".toutput3").innerHTML = 1 || 0;
    document.querySelector(".toutput4").innerHTML = 1 || 1;
  }
  if( and == true )
  {
    document.querySelector(".theader").innerHTML = "AND";
    document.querySelector(".ta2").innerHTML = "A";
    document.querySelector(".ta").innerHTML = 0;
    document.querySelector(".ta1").innerHTML = 0;
    document.querySelector(".ta3").innerHTML = 1;
    document.querySelector(".ta4").innerHTML = 1;
    document.querySelector(".tb3").innerHTML = 0;
    document.querySelector(".tb4").innerHTML = 1;
    document.querySelector(".toutput1").innerHTML = 0 && 0;
    document.querySelector(".toutput2").innerHTML = 0 && 1;
    document.querySelector(".toutput3").innerHTML = 1 && 0;
    document.querySelector(".toutput4").innerHTML = 1 && 1;
  }
  if( not == true )
  {
    document.querySelector(".theader").innerHTML = "NOT";
    document.querySelector(".ta2").innerHTML = "";
    document.querySelector(".ta").innerHTML = "";
    document.querySelector(".ta1").innerHTML = "";
    document.querySelector(".ta3").innerHTML = "";
    document.querySelector(".ta4").innerHTML = "";
    document.querySelector(".tb3").innerHTML = "";
    document.querySelector(".tb4").innerHTML = "";
    document.querySelector(".toutput1").innerHTML = !0;
    document.querySelector(".toutput2").innerHTML = !1;
    document.querySelector(".toutput3").innerHTML = "";
    document.querySelector(".toutput4").innerHTML = "";
  }
  if( xor == true )
  {
    document.querySelector(".theader").innerHTML = "XOR";
    document.querySelector(".ta2").innerHTML = "A";
    document.querySelector(".ta").innerHTML = 0;
    document.querySelector(".ta1").innerHTML = 0;
    document.querySelector(".ta3").innerHTML = 1;
    document.querySelector(".ta4").innerHTML = 1;
    document.querySelector(".tb3").innerHTML = 0;
    document.querySelector(".tb4").innerHTML = 1;
    document.querySelector(".toutput1").innerHTML = 0;
    document.querySelector(".toutput2").innerHTML = 1;
    document.querySelector(".toutput3").innerHTML = 1;
    document.querySelector(".toutput4").innerHTML = 0;
  }

}

function rndm()
{
  if(conversions_shown == true)
  {
    conversions();
  }
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

  document.getElementById("random_side").classList.toggle("active");
  rndm_shown = !rndm_shown;
  document.querySelector(".distribution").classList.toggle("distribution_hide");
}

function random_value()
{
  from = document.getElementById("from").value;
  to  = document.getElementById("to").value;
  to++;
  amount = document.getElementById("amount").value;
  result = [];
  index = 0;

  while( index < amount)
  {
  random = Math.floor( Math.random() * Math.floor( parseFloat(to) - parseFloat(from) ) );
  random = parseFloat(random) + parseFloat(from);
  result.push( " " + random);
  result.sort(sortNumbers);
  index++;
  }


  document.querySelector(".distr_result").innerHTML = result;
}

function sortNumbers(a, b)
{
  return a - b;
}