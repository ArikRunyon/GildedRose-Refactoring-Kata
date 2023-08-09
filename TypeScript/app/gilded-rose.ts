export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // ------------- REFACTORED CODE ---------------------
      let item = this.items[i]

      if (!/Brie|Backstage|Sulfuras/.test(item.name) && item.quality > 0) {
        item.quality -= 1
      }
      else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name.includes("Backstage") && item.quality < 50 && item.sellIn < 11) {
            item.sellIn < 6 ? item.quality += 2 : item.quality += 1
          }
        }
      }
      
      if (!item.name.includes("Sulfuras")) { item.sellIn -= 1; }
      
      if (item.sellIn < 0) {
        if (item.name == "Aged Brie" && item.quality < 50) {item.quality += 1}
        if (item.name.includes("Backstage")) {item.quality = 0}
        if (!/Brie|Backstage|Sulfuras/.test(item.name) && item.quality != 0) {item.quality -= 1}
      }
    }
    return this.items;
  }
}

// ------------- ORIGINAL CODE ---------------------

// if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
  //   if (item.quality > 0) {
    //     if (item.name != 'Sulfuras, Hand of Ragnaros') {
      //       item.quality = item.quality - 1
      //     }
      //   }
      // } 
      // if (item.sellIn < 11) {
        // if (item.quality < 50) {
          // item.quality = item.quality + 1
          // }
          // }
      // if (item.sellIn < 6) {
        // if (item.quality < 50) {
          // item.quality += 2
          // }
          // } else {
        // item.quality += 1
        // }
        // if (item.name != 'Aged Brie') {//
        //   if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {//
        //     if (item.quality > 0) {
        //       if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //         item.quality = item.quality - 1
        //       }
        //     }
        //   } else {//
        //     item.quality = item.quality - item.quality//
        //   }//
        // } else {//
        //   if (item.quality < 50) {//
        //     item.quality = item.quality + 1//
        //   }//
        // }//