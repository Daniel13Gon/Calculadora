var boton = document.getElementById('primoCifras');                                                     //se declara una variable de nombre botón que trarerá el <input type ="button"> del HTML
boton.addEventListener('click', numero);                                                                //addEventListener le añade un metodo a la variable botón y dice que cuando detecte el evento 'click' se ejecutará la función número
function numero()
{
    var z1,primo;
    z1 = parseInt(document.getElementById('NumeroPrimo').value);
    divisor = 2
    primo = true
     while (z1 >divisor)
      {
        if (z1%divisor===0)
        {
          primo=false
        }
        divisor++;
      }
      if (primo === true)
        {
            document.getElementById('respuestaPrimo').innerHTML="El número "+z1+" es primo.";                   //el método .innerHTML es el responsable de que se escriban las respuestas en pantalla.
        }
      else
        {
            document.getElementById('respuestaPrimo').innerHTML="El número "+z1+" no es primo.";
        }
}


function draw() {
try {
  functionPlot({
    target: '#plot',
    data: [{
      fn: document.getElementById('eq').value,
      sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js                                 //Esta función fue la única que no desarrolamos nosotros debido a que venía con la herramienta para graficar las funciones.
      graphType: 'polyline'
    }]
  });
}
catch (err) {
  console.log(err);
  alert(err);
}
}

document.getElementById('form').onsubmit = function (event) {
event.preventDefault();
draw();
};

draw();


var boton1 = document.getElementById('cuadraticaCifras');                                                   //document hace referencia a la página en general
boton1.addEventListener("click", cuadraticaEjemplo);                                                        //El método .getElementById permite traer elementos del HTML mediante un ID generado por el propio programador.
function cuadratica(a, b, c)
  {
    {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
      discriminante = (b**2)-(4*a*c);
      resultado1 = (-b - Math.sqrt(discriminante))/(2*a);
    }
    {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
      discriminante = (b**2)-(4*a*c);
      resultado2 = (-b + Math.sqrt(discriminante))/(2*a); // Math.sqrt halla la  raíz cuadrada de (<variable>).
    }
  document.getElementById('respuestacuadratica').innerHTML = "Las raices del polinomio son " + resultado1 + " y " + resultado2;
  }

var cambio_select = document.getElementById("opciones").addEventListener("change", function(e)
  {
    console.log("La operacion que seleccionaste es " + e.target.value);
  });
function cuadraticaEjemplo()
  {
    var primerCoeficiente = document.getElementById("coeficiente_numero1").value;
    var segundoCoeficiente = document.getElementById("coeficiente_numero2").value;
    var tercerCoeficiente = document.getElementById("coeficiente_numero3").value;
    var respuesta1 = cuadratica(primerCoeficiente, segundoCoeficiente, tercerCoeficiente);
  }


var boton2 = document.getElementById('sumatoriacifras');
boton2.addEventListener("click", sumarcifras);
function sumarcifras()
  {
    var primer_cifra = document.getElementById("numerito1");
    var segunda_cifra = document.getElementById("numerito2");
    var suma_cifras = parseInt(primer_cifra.value) + parseInt(segunda_cifra.value);
    document.getElementById("respuestaSuma").innerHTML = "La respuesta a la suma es " + suma_cifras;
  }



var boton3 = document.getElementById("productoCifras");
boton3.addEventListener('click', multiplicarcifras);
function multiplicarcifras()
  {
    var primer_cifra_por = document.getElementById("numerito1por");
    var segunda_cifra_por = document.getElementById("numerito2por");
    var tercer_cifra_por = document.getElementById("numerito3por");
    var cuarta_cifra_por = document.getElementById("numerito4por");
    var multiplicacion_cifras = parseFloat(primer_cifra_por.value) * parseFloat(segunda_cifra_por.value) * parseFloat(tercer_cifra_por.value) * parseFloat(cuarta_cifra_por.value);
    document.getElementById('respuestaMultiplicacion').innerHTML = "El producto de los numeros que escribiste es de " + multiplicacion_cifras;
  }


var boton4 = document.getElementById('cocienteCifras');
boton4.addEventListener('click', dividircifras);
function dividircifras()
  {
    var primer_cifra_dividir = document.getElementById("dividendo");
    var segunda_cifra_dividir = document.getElementById("divisor");
    var division_cifras = parseFloat(parseInt(primer_cifra_dividir.value) / parseInt(segunda_cifra_dividir.value));
    if (division_cifras === Infinity)
    {
      document.getElementById('respuestaDivision').innerHTML = "El cociente de esa división no existe en los números reales";
    }
    else
    {
      document.getElementById('respuestaDivision').innerHTML = "El cociente de la división entre los dos números que dijiste es " + division_cifras.toFixed(3);
    }
  }


var boton5 = document.getElementById('mcdCifras');
boton5.addEventListener('click', mcd);
 function mcd()
    {
        function mcd1(n1,n2)
            {
                n1 = parseInt(n1)
                n2 = parseInt(n2)
                while (n1 % n2 !== 0)
                {
                    residuo = n1 % n2
                    n1=n2
                    n2=residuo
                }
                return n2
            }
        var t1, t2, vt1, vt2;
        t1 = parseInt(document.getElementById('maxcd1').value);
        t2 = parseInt(document.getElementById('maxcd2').value);
        t1 = Math.abs(t1);
        t2 = Math.abs(t2);
        document.getElementById('respuestaMCD').innerHTML= "Máximo común divisor entre " + t1 + " y " + t2 + " = " + mcd1(t1,t2);
      }



var boton6 = document.getElementById('mcmCifras');
boton6.addEventListener('click', mcm);
function mcm()
{
    var m1, m2, vm1, vm2, mincm = 1, div = 2, maxcd;
    m1 = parseInt(document.getElementById('mincm1').value);
    m2 = parseInt(document.getElementById('mincm2').value);
    m1 = Math.abs(m1);
    m2 = Math.abs(m2);
    vm1 = m1;
    vm2 = m2;
    while (div <= m1 || div <= m2)
        {
            while ((div <= m1 && m1 % div == 0) || (div <= m2 && m2 % div == 0))
            {
                mincm *= div;
                if (div <= m1 && m1 % div == 0)
                    {
                        m1 /= div;
                    }
                if (div <= m2 && m2 % div == 0)
                    {
                        m2 /= div;
                    }
            }
            div += 1;
        }
    document.getElementById('respuestaMcm').innerHTML = "Mínimo común multiplo entre " + vm1 + " y " + vm2 + " = " + mincm;
}
