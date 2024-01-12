var assert = require('assert');

describe(' Operations Mathématiques - Test Suite', function(){

  this.timeout(10000);

    var x = 10;
    var y = 5;
 

  it('Ajout de deux nombres', function(done){

    var z = x+y;

    assert.equal(z,1);
    setTimeout(done,1000);
  });

  it('Soustraction de deux nombres', function(done){

    var z = x-y;

    assert.equal(z,5);
    setTimeout(done,1000);
   });

  it('Multiplication de deux nombres', function(done){

    var z = x*y;

    assert.equal(z,50);

    setTimeout(done,1000);
  });

  it('Division de deux nombres', function(done){
      
    var z= x/y;
    setTimeout(done,1000);
  });
 

 
});