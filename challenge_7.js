var PrimeFinder = function(n) {
  this._n = n;
}

PrimeFinder.prototype.getPrimeNumber = function() {
  var primeCount = 0;
  var n = 0;

  while(primeCount < this._n) {
    n++;

    if(this.isPrime(n)) {
      primeCount++;
    }
  }
  return n;
}

PrimeFinder.prototype.isPrime = function(n) {
  if(n % 1 || n < 2) return false;
  if(n % 2 === 0) return (n === 2);
  for(var i = 3; i <= Math.sqrt(n); i+=2) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = PrimeFinder;