class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  isNotAgedBrie(item) {
    return item.name != "Aged Brie";
  }

  isNotTicket(item) {
    return item.name != "Backstage passes to a TAFKAL80ETC concert";
  }

  removeSulfuras() {
    return this.items.filter(item => item.name !== "Sulfuras, Hand of Ragnaros")
  }
  updateQuality() {
    let items = this.removeSulfuras()
    for (let item of items) {
      if (this.isNotAgedBrie(item) && this.isNotTicket(item)) {
        if (item.quality > 0) {
            item.quality -= 1;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality += 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality += 1;
              }
            }
          }
        }
      }
        item.sellIn -= 1;
      if (item.sellIn < 0) {
        if (this.isNotAgedBrie(item)) {
          if (this.isNotTicket(item)) {
            if (item.quality > 0) {
              item.quality = item.quality - 1;
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality += 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
};
