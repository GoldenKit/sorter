class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
  let newArray = [];
    for(let i = 0; i < this.array.length;i++){
      newArray.push(this.array[i]);
    }
    return newArray;
  }

  sort(indices) {
      indices.sort();
      let newArray = [];
      for (let i = 0; i < indices.length; i++)
      {
        newArray[i] = this.array[indices[i]];
      }
      if (this.compareFunction)
      {
        newArray.sort(this.compareFunction);
      }
      else
      {
        function compare(a, b) {
          return a - b;
        }
        newArray.sort(compare);
      }
      let k = 0;
      for (let i = 0; i < indices.length; i++)
      {
        this.array[indices[i]] = newArray[k];
        k++;
      }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
