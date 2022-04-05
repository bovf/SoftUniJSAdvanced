const { expect } = require('chai');
const { cinema } = require('./cinema');

describe('ShowMovies', () => {
    let instance = null;

    beforeEach(() => {
        instance = cinema
    });
    // Happy Path
    it('Works with empty array', () => {
        expect(instance.showMovies([])).to.equal("There are currently no movies to show.");
    });

    it('Works with proper array', () => {
        expect(instance.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal(['King Kong', 'The Tomorrow War', 'Joker'].join(', '));
    });

    it('Works with proper array', () => {
        expect(instance.showMovies(['King Kong'])).to.equal('King Kong');
    });

    // Unhappy Path
    it('Does not work with array without strings', () => {
        expect(instance.showMovies([3, 'The Tomorrow War', 'Joker'])).to.throw;
        expect(instance.showMovies(['King Kong', 3, 'Joker'])).to.throw;
        expect(instance.showMovies([3, 'The Tomorrow War', 3])).to.throw;
    });

});

describe('projectionType', () => {
    let instance = null;

    beforeEach(() => {
        instance = cinema;
    });
    // Happy Path
    it('Works with proper strings', () => {
        expect(instance.ticketPrice('Premiere')).to.equal(12.00);
        expect(instance.ticketPrice('Normal')).to.equal(7.50);
        expect(instance.ticketPrice('Discount')).to.equal(5.50);
    });

    // Unhappy Path
    it('Crashes with bad input', () => {
        expect(() => instance.ticketPrice("Normal2")).to.throw('Invalid projection type.');
        expect(() => instance.ticketPrice("Discount2")).to.throw('Invalid projection type.');
        expect(() => instance.ticketPrice("Premiere2")).to.throw('Invalid projection type.');
    });
});

describe('swapSeatsInHall', () => {
    let instance = null;

    beforeEach(() => {
        instance = cinema;
    });
    // Happy Path
    it('Successful with two valid inputs', () => {
        expect(instance.swapSeatsInHall(1, 3)).to.equal('Successful change of seats in the hall.');
    });
    //Unhappy Path
    it('Unsuccessful with one parameter', () => {
        expect(instance.swapSeatsInHall("")).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('Unsuccessful with one invalid parameter', () => {
        expect(instance.swapSeatsInHall("", 1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(instance.swapSeatsInHall(1, "1")).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('Unsuccessful with two invalid parameter', () => {
        expect(instance.swapSeatsInHall("", "1")).to.equal('Unsuccessful change of seats in the hall.');

    });
    
    it('Unsuccessful with one parameter equal to 0', () => {
        expect(instance.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(instance.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('Unsuccessful with two parameters equal to 0', () => {
        expect(instance.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');

    });

    it('Unsuccessful with one parameter more than 20', () => {
        expect(instance.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(instance.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
    });

    it('Unsuccessful with two parameters more than 20', () => {
        expect(instance.swapSeatsInHall(21, 21)).to.equal('Unsuccessful change of seats in the hall.');

    });

    it('Unsuccessful with two equal parameters', () => {
        expect(instance.swapSeatsInHall(13, 13)).to.equal('Unsuccessful change of seats in the hall.');

    });
});