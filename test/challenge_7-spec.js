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

    beforeEach(function() {
      primeFinder = new PrimeFinder(6);
    })

    describe('getPrimeNumber', function() {

      it('should not be a member of the class PrimeFinder', function() {
        expect(PrimeFinder.getPrimeNumber).to.be.undefined;
      })

      it('should be a member of the PrimeFinder instance', function() {
        expect(primeFinder.getPrimeNumber).to.be.a('function');
      })

      it('should find the nth prime number', function() {
        expect(primeFinder.getPrimeNumber()).to.equal(13);
        //expect(primeFinder.getPrimeNumber()).to.equal();
      })

    }) // ends getPrimeNumber

  })
}) // ends Challenge 7 suite

