const expect = require('chai').expect;

const GildedRose = require('../GildedRose.js');

describe('NormalItem', function () {

    it('before sell by date', function () {
        const item = new GildedRose('normal', 10, 5);
        item.tick();

        expect(item.quality).to.equal(9);
        expect(item.daysRemaining).to.equal(4);
    });

    it('quality of zero', function () {
        const item = new GildedRose('normal', 0, 5);
        item.tick();

        expect(item.quality).to.equal(0);
        expect(item.daysRemaining).to.equal(4);
    });

    it('negative days remaining 0 quality', function () {
        const item = new GildedRose('normal', 0, -1);
        item.tick();

        expect(item.quality).to.equal(0);
        expect(item.daysRemaining).to.equal(-2);
    });

    it('negative days remaining high quality', function () {
        const item = new GildedRose('normal', 10, -1);
        item.tick();

        expect(item.quality).to.equal(8);
        expect(item.daysRemaining).to.equal(-2);
    });

});

describe('Sulfuras, Hand of Ragnaros', () => {
    it(`shouldn't lose quality`, () => {
        const item = new GildedRose('Sulfuras, Hand of Ragnaros', 1, 5);
        item.tick();

        expect(item.quality).to.equal(1);
        expect(item.daysRemaining).to.equal(5);
    })

    it(`negative days remaining`, () => {
        const item = new GildedRose('Sulfuras, Hand of Ragnaros', 1, -1);
        item.tick();

        expect(item.quality).to.equal(1);
        expect(item.daysRemaining).to.equal(-1);
    })
})

describe('Aged Brie', () => {
    it('Quality goes up', () => {
        const item = new GildedRose('Aged Brie', 10, 5);
        item.tick();

        expect(item.quality).to.equal(11);
        expect(item.daysRemaining).to.equal(4);
    })

    it('Is never better than 50', () => {
        const item = new GildedRose('Aged Brie', 50, 5);
        item.tick();

        expect(item.quality).to.equal(50);
        expect(item.daysRemaining).to.equal(4);
    })

    it('negative days remaining', () => {
        const item = new GildedRose('Aged Brie', 50, -1);
        item.tick();

        expect(item.quality).to.equal(50);
        expect(item.daysRemaining).to.equal(-2);
    })

    it('gets better faster', () => {
        const item = new GildedRose('Aged Brie', 40, -1);
        item.tick();

        expect(item.quality).to.equal(42);
        expect(item.daysRemaining).to.equal(-2);
    })
})

describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('get better fast', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 10, 5);
        item.tick();

        expect(item.quality).to.equal(13);
        expect(item.daysRemaining).to.equal(4);
    })

    it('Never better than 50', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 49, 5);
        item.tick();

        expect(item.quality).to.equal(50);
        expect(item.daysRemaining).to.equal(4);
    })

    it('maxes out at 50', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 49, 12);
        item.tick();

        expect(item.quality).to.equal(50);
        expect(item.daysRemaining).to.equal(11);
    })

    it('useless after show', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 49, -1);
        item.tick();

        expect(item.quality).to.equal(0);
        expect(item.daysRemaining).to.equal(-2);
    })
})

// describe('Conjured Item', () => {
//     it('degrades faster than normal', () => {
//         const item = new GildedRose('Conjured Item', 10, 5);
//         item.tick();
//
//         expect(item.quality).to.equal(8);
//         expect(item.daysRemaining).to.equal(4);
//     })
//
//     it('can not go below 0 quality', () => {
//         const item = new GildedRose('Conjured Item', 1, 1);
//         item.tick();
//
//         expect(item.quality).to.equal(0);
//         expect(item.daysRemaining).to.equal(0);
//     })
//
//     it('degrades faster on sell date', () => {
//         const item = new GildedRose('Conjured Item', 10, 0);
//         item.tick();
//
//         expect(item.quality).to.equal(6);
//         expect(item.daysRemaining).to.equal(-1);
//     })
//
//     it('can not go below 0 quality even on sell date', () => {
//         const item = new GildedRose('Conjured Item', 0, 0);
//         item.tick();
//
//         expect(item.quality).to.equal(0);
//         expect(item.daysRemaining).to.equal(-1);
//     })
//
//     it('it degrades even faster after sell date', () => {
//         const item = new GildedRose('Conjured Item', 10, -1);
//         item.tick();
//
//         expect(item.quality).to.equal(6);
//         expect(item.daysRemaining).to.equal(-2);
//     })
//
//     it('can not go below 0 quality even after sell date', () => {
//         const item = new GildedRose('Conjured Item', 0, -1);
//         item.tick();
//
//         expect(item.quality).to.equal(0);
//         expect(item.daysRemaining).to.equal(-2);
//     })
// })
