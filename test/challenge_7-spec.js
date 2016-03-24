var PrimeFinder = require('../challenge_7');
var chai = require('chai')
var expect = chai.expect;

describe('PrimeFinder', function() {

  it('should be a function', function() {
    expect(PrimeFinder).to.be.a('function');
  })

  it('should return an object', function() {
    expect(new PrimeFinder()).to.be.an('object');
  })

  describe('PrimeFinder Methods', function() {
    var primeFinder = null;

    describe('getPrimeNumber', function() {

      it('should not be a member of the class PrimeFinder', function() {
        expect(PrimeFinder.getPrimeNumber).to.be.undefined;
      })

      it('should be a member of the PrimeFinder instance', function() {
        expect(new PrimeFinder(6).getPrimeNumber).to.be.a('function');
      })

      it('should find the nth prime number', function() {
        expect(new PrimeFinder(6).getPrimeNumber()).to.equal(13);
        expect(new PrimeFinder(10001).getPrimeNumber()).to.equal(104743);
      })

    }) // ends getPrimeNumber

    describe('isPrime', function() {
      it('should return true if number is prime', function() {
        expect(new PrimeFinder().isPrime(13)).to.be.ok;
        expect(new PrimeFinder().isPrime(104743)).to.be.ok;
        expect(new PrimeFinder().isPrime(12)).to.not.be.ok;
      })
    }) // ends isPrime

  })
}) // ends Challenge 7 suite

