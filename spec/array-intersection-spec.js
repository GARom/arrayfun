var inter=require("../dinnerdash");


describe("intersection",function(){

  it("gets all unique values in a series of arrays",function(){

    var array1 = [1,2,3];
    var array2 = [5,2,1,4];
    var array3 = [2,1];

    var array4 = [2,3,4];
    var array5 = [5,2];
   
    var uniqueNums = inter.intersection( array1, array2, array3 );
    expect(uniqueNums).toEqual([1,2]);

    var uniqueNums2 = inter.intersection( array4, array5 );
    expect(uniqueNums2).toEqual([2]);

  });

});
