var differ= require('../dinnerdash');


describe("differ",function(){

    it("must return a array with numbers not included in 2nd argument",function(){

        var res = differ.difference([1,2,3,4,5],[5,2,10]);
        expect(res).toEqual([1,3,4, 10]);
    });

});
