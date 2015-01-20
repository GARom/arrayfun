module.exports = {
 
 first: function(array,num){

    var arr=[];

    if(num===undefined) return array[0];

    for(var i=0;i<num;i++){
        arr.push(array[i]);

    }
    return arr;

 },


  max : function(array){
     
    var max=0;

    for(var i=0;i<array.length;i++){
    if(array[i]>max){

      max=array[i];
      biggestNum=max;
      }
    }
    return biggestNum;
  },

   min : function(array){

    var minimum = array.reduce(function(x,y){
      return (x < y) ? x : y;

    });

      return minimum;
  },

  intersection : function(array) {

    var object={};
    var arr=[];

    for(var i=0;i<arguments.length;i++){
        
      for(var j=0;j<arguments[i].length;j++){

      object[arguments[i][j]]=object[arguments[i][j]] || 0;
      object[arguments[i][j]]+=1;

        }

    }
    
    for(var property in object){
        if(object[property]==arguments.length)
          arr.push(Number(property));
      }
    return arr; 
  },

 difference : function(array) {

    var object={};
    var arr=[];

    for(var i=0;i<arguments.length;i++){
        
      for(var j=0;j<arguments[i].length;j++){

      object[arguments[i][j]]=object[arguments[i][j]] || 0;
      object[arguments[i][j]]+=1;

        }

    }
    
    for(var property in object){
        if(object[property] ==1)
          arr.push(Number(property));
      }
    return arr; 
  }, 
}