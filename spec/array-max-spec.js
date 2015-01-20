var arrayfun=require('../dinnerdash');

describe("arrayfun",function(){

  //Must have a function named first()
  it("must have a function named first()", function() {
    expect( arrayfun.first ).toBeDefined();
  });

  it("Array must return highest number",function(){

        var array= [4,2,8,6];
        var highest = arrayfun.max(array);
        expect(highest).toBe(8);

  });
});