var x;

for (x = 1; x < 101; x++){
  switch(true){
    case Number.isInteger(x/3) && Number.isInteger(x/5):
      $("#fB").append("FizzBuzz, ");
      break;
    case Number.isInteger(x/3):
       $("#fB").append("Fizz, ");
      break;
    case Number.isInteger(x/5): 
       $("#fB").append("Buzz, ");
      break;
    case Number.isInteger(x):
      $("#fB").append(x+ ", ");
      break;
          }
};

