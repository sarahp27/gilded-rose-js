
class GildedRose {
    constructor(name, quality, daysRemaining) {
      this.name = name;
      this.quality = quality;
      this.daysRemaining = daysRemaining;
    }
  
    tick() {
      if (this.name === 'Aged Brie') {
        this.ageBrie();
      } else if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.backstagePass();
      } else if (this.name !== 'Sulfuras, Hand of Ragnaros') {
        this.normalItem();
      }
  
      if (this.name !== 'Sulfuras, Hand of Ragnaros') {
        this.daysRemaining -= 1;
      }
  
      if (this.daysRemaining < 0) {
        this.updateExpireItem();
      }
    }
  
    ageBrie() {
      if (this.quality < 50) {
        this.quality += 1;
      }
    }
  
    backstagePass() {
      if (this.quality < 50) {
        this.quality += 1;
  
        if (this.daysRemaining < 11 && this.quality < 50) {
          this.quality += 1;
        }
  
        if (this.daysRemaining < 6 && this.quality < 50) {
          this.quality += 1;
        }
      }
    }
  
    normalItem() {
      if (this.quality > 0) {
        this.quality -= 1;
      }
    }
  
    updateExpireItem() {
      if (this.name !== 'Aged Brie' ) {
        if (this.name !== 'Backstage passes to a TAFKAL80ETC concert')
         
        {
          if (this.quality > 1) {
            this.quality -= 1;
          }
        } else {
          this.quality = 0;
        }
      } else {
        if (this.quality < 50) {
          this.quality += 1;
        }
      }
    }}

module.exports = GildedRose;