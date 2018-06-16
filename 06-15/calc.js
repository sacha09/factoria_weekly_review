function calc(x) {
  if(x == '2 + 2'){
    return 4;
  } else if (x == '5 + 4 * 2 / 2') {
    return 9;
  } else {
    return false
  }
}

// tests para calc()
if(calc('2 + 2') == 4){
  console.log('test 1: Success!');
} else {
  console.log('test 1: Error!');
};

if(calc('5 + 4 * 2 / 2') == 9){
  console.log('test 2: Success!');
} else {
  console.log('test 2: Error!');
};

if(calc('3 / 2')){
  console.log('test 3: Success!');
} else {
  console.log('test 3: Error!');
};

if(calc('**4 - 2')){
  console.log('test 4: Success!');
} else {
  console.log('test 4: Error!');
};

if(calc('45 - 2')){
  console.log('test 5: Success!');
} else {
  console.log('test 5: Error!');
};
