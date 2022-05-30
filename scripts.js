//PRIMEIRA ATIVIDADE
function ativ_01 () {
  var n1 = Number(document.getElementById("num1").value);
  var n2 = Number(document.getElementById("num2").value);

  if (n1 >= n2){
      document.getElementById("menor").innerHTML = "menor ("+n2+")";
      document.getElementById("maior").innerHTML = "maior ("+n1+")";
  } else{
      document.getElementById("menor").innerHTML = "menor ("+n1+")";
      document.getElementById("maior").innerHTML = "maior ("+n2+")";
  }   
}   
//---------------------------------------------------------------------------------------------------------//
//SEGUNDA ATIVIDADE
function ativ_02 () {
  var alt = Number(document.getElementById("mNum").value);
  calc = (val) => { return ((62.1 * val) - 44.7); }

  if (alt > 100) {
      alt = alt/100;
      var res = calc(alt);
  } else if (alt > 10 && alt < 100) { 
      alt = alt/10;
      var res = calc(alt);
  } else {
      var res = calc(alt);
  }   

  document.getElementById("resM").innerHTML = res.toFixed(2).replace(".", ",") + " kg.";
} 
pesoIdealH = () =>{

  var alt = Number(document.getElementById("hNum").value);

  calc = (val) => { return ((72.7 * val) - 44.7); }

  if (alt > 100) {
      alt = alt/100;
      var res = calc(alt);
  } else if (alt > 10 && alt < 100) { 
      alt = alt/10;
      var res = calc(alt);
  } else {
      var res = calc(alt);
  }   

  document.getElementById("resH").innerHTML = res.toFixed(2).replace(".", ",") + " kg.";
}  
//---------------------------------------------------------------------------------------------------------//
//TERCEIRA ATIVIDADE      
ativ_03 = () => {
    
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var menor = Number(0);

    if (num1 < num2 && num1 < num3) { menor = num1; }
    else if (num2 < num1 && num2 < num3) { menor = num2; }
    else { menor = num3; }

    if (menor != 0){
        document.getElementById("resultado").innerHTML = menor + ".";
    }   
}  

//---------------------------------------------------------------------------------------------------------//
//QUARTA ATIVIDADE
function ativ_04() {
  var num = Number(document.getElementById("num").value);
  
  if (num > 0){

      var temp = num % 2;
      var qual = "";

      if (temp == 0){
          qual = "par";
      } else {
          qual = "impar";
      }
      document.getElementById("resultado").innerHTML = ("O número selecionado é " + qual + ".");
  } else if (num == 0) {
      document.getElementById("resultado").innerHTML = ("Informe um número positivo ou negativo.");
  } else {
      var val = Math.abs(num);
      document.getElementById("resultado").innerHTML = ("O número tem como seu valor absoluto: " + val + ".");
  }   
}
//---------------------------------------------------------------------------------------------------------//   
//QUINTA ATIVIDADE
ativ_05 = () => {

    var num = Number(document.getElementById("num").value);

    res = (num, param) => {
        document.getElementById("resultado").innerHTML = ("O número " + num + " " + param + ".");
    }   

    if ((num % 3) == 0 && (num % 2) == 0) {
        param = "divisível por 2 e 3"
        res(num, param);
    } else {
        param = "não é divisível por 2 e 3"
        res(num, param);
    }   
}  
//---------------------------------------------------------------------------------------------------------//   
//SEXTA ATIVIDADE
ativ_06= () => {
    //VAR'S
    var num = Number(document.getElementById("num").value);

    res = (num, param) => {
        document.getElementById("resultado").innerHTML = ("O número " + num + " " + param + ".");
    }   

    if ((num % 2) == 0 && (num % 7) == 0) {
        param = "divisível por 2 e 7"
        res(num, param);
    } else if ((num % 2) == 0) {
        param = "divisível por 2"
        res(num, param);
    } else if ((num % 7) == 0) {
        param = "divisível por 7"
        res(num, param);
    } else {
        param = "não é divisível por 2 e 7"
        res(num, param);
    }   
}   
//---------------------------------------------------------------------------------------------------------//   
//SÉTIMA ATIVIDADE
ativ_07 = () => {
    var dia = Number(document.getElementById("dia").value);

    show = (val) => { return document.getElementById("resultado").innerHTML = ("Vai ser " + val);}

    switch (dia){
        case 1:
            show("Domingo");
        break;
        case 2:
            show("Segunda-feira");
        break;
        case 3:
            show("Terça-feira");
        break;
        case 4:
            show("Quarta-feira");
        break;
        case 5:
            show("Quinta-feira");
        break;
        case 6:
            show("Sexta-feira");
        break;
        case 7:
            show("Sábado");
        break;

        default:
            document.getElementById("resultado").textContent = "Dia não registrado."
        break;
    }
}   
//---------------------------------------------------------------------------------------------------------//   
ativ_08 = () => {
    var soma = Number(0);

    for (var i = 0; i <= 20; i++)
    {
        if ((i % 2) == 0)
        {
            soma += i;
        }
    } 
    document.getElementById("resultado").innerHTML = (soma);
}  
//---------------------------------------------------------------------------------------------------------//  
ativ_09 = () => {

    var num = Number(document.getElementById("num").value);

    var resposta = document.getElementById('resposta');

    var tabuada = '';
  
    for(var i=1; i<=10 ; i++)
    {
        tabuada += num + " x " + i + " = " + num*i + ".<br>";
    
        resposta.innerHTML = tabuada
    }
    document.getElementById("resNum").innerHTML = ("Tabuada do " + num + ".");
}   
//---------------------------------------------------------------------------------------------------------// 
ativ_10 = () => {

    var num = Number(document.getElementById("num").value);

    var resposta = document.getElementById('resposta');

    var temp = Number(1);

    var fat = '';
  
    for(var i = num; i > 0 ; i--)
    {
        if (i != 1){
            fat += i + " * ";
        }
        else {
            fat += i + " = ";
        }
    
        temp =+ temp * i;
        resposta.innerHTML = fat
    }
    document.getElementById("resNum").innerHTML = ("Fatorial de " + num + ".");
    document.getElementById("final").innerHTML = (temp + " e 0! = 1.");
}   
//---------------------------------------------------------------------------------------------------------// 
// ⣿⣿⣿⣿⣿⣿⣿⠟⠉⠉⠄⠄⠄⠄⠄⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿ 
// ⣿⣿⣿⣿⣿⡿⠁⢀⣤⡶⠶⠶⣦⡄⠰⡌⠂⠄⢸⣿⣿⣿⣿⣿⣿ 
// ⣿⣿⣿⣿⡟⠄⣰⠟⣡⣴⣶⣶⣤⣉⣀⣴⠖⠂⠈⣀⣀⣀⠉⠻⣿ 
// ⣿⣿⣿⣿⡇⠠⡏⠰⢋⣴⣶⣬⠹⣿⡟⢀⣴⣾⣿⣿⣿⣿⣿⣆⠘ 
// ⣿⣿⣿⣿⡇⠄⡇⠄⢉⠉⠉⠄⠄⣿⠁⣾⣿⣿⣿⣿⣿⣿⣿⣿⡄ 
// ⣿⣿⣿⣿⡇⠄⢻⠘⣬⣀⣀⣀⣴⢋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇ 
// ⣿⣿⣿⣿⡇⠄⢸⠆⣿⣿⣿⡟⢱⣿⡟⠻⠛⠉⠄⠄⠄⣀⣴⣶⣶ 
// ⣿⣿⣿⣿⡇⠄⠈⣰⣿⣿⣿⣷⡈⢿⣿⣦⣄⣀⠄⠄⠄⠉⠛⢻⣿ 
// ⣿⣿⣿⣿⠃⠄⠄⠈⠋⠹⣿⣿⡿⣦⡉⠻⠿⠿⣿⡿⠿⠒⠄⣸⣿ 
// ⠁⠄⠄⠈⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠐⠄⠄⠄⠄⠄⠠⣶⣿⣿ 
// ⠄⠄⢀⣴⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿ 
// ⠄⢠⣾⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⡀⢸⣿⣿ 
// ⢀⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣴⣶⣿⣿⣿⡇⣼⣿⣿ 
// ⢸⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣾⣿⣿⣿⣿⣿⡟⢠⣿⣿⣿ 
// ⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣿⣿⣿⣿⣿⣿⠟⡀⠻⢿⣿⣿ 
// ⣷⣶⣶⣤⡀⠄⠄⠄⠄⠄⠄⢠⣤⣄⠉⡉⢉⣉⣥⡌⢻⡆⠈⣿⣿ 
// ⣿⣿⣿⣿⣿⣶⣤⠄⠄⠄⠄⢸⣿⡟⢀⡷⠸⢿⡿⠇⠘⠃⣰⣿⣿ 
// ⠛⠛⠛⠛⠛⠛⠛⠂⠄⠄⠄⠄⠉⠄⠄⠄⠂⠄⠄⠒⠚⠛
      
	


