var arrayfun = require("../dinnerdash");


describe("arrayfun",function(){


  it("Array must return lowest value",function(){

    var array= [4,2,8,6];
    var lowest= arrayfun.min(array);
    expect(lowest).toEqual(2);

  });

});