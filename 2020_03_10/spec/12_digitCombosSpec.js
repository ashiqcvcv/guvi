var digitCombos, expect;

digitCombos = require('../src/12_digitCombos', expect = require('../vendor/expect'));

describe("Digit Combinations", function() {
    it("returns the single combination of a 1 digit number", function() {
        return expect(digitCombos(5)).to.eql([5]);
    });
    it("returns the sorted combinations of a 2 digit number", function() {
        return expect(digitCombos(12)).to.eql([12, 21]);
    });
    it("returns the combinations of a 3 digit number", function() {
        return expect(digitCombos(123)).to.eql([123, 132, 213, 231, 321, 312]);
    });
    it("returns the combinations of a 4 digit number", function() {
        return expect(digitCombos(1234)).to.eql([1234, 1243, 1324, 1342, 1432, 1423, 2134, 2143, 2314, 2341, 2431, 2413, 3214, 3241, 3124, 3142, 3412, 3421, 4231, 4213, 4321, 4312, 4132, 4123]);
    });
    return it("returns the combinations of a 5+ digit number", function() {
        expect(digitCombos(12345)).to.have.length(120);
        expect(digitCombos(123456)).to.have.length(720);
        return expect(digitCombos(1234567)).to.have.length(5040);
    });
});