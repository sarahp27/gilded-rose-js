const expect = require('chai').expect;

const GildedRose = require('../GildedRose.js');

describe('NormalItem', function () {

    it('before sell by date', function () {
        const item = new GildedRose('normal', 10, 5);
        item.tick();

        expect(item.quality).to.equal(9);
        expect(item.daysRemaining).to.equal(4);
    });

});
