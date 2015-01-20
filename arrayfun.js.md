# arrayfun.js
## part 1

- create a brand new project directory named "ArrayFun"
- initialize this directory as a git project (not tracked in github)
- Setup a TDD project in the "ArrayFun" :
  - arrayfun.js
  - spec/
    - array-first-spec.js
    - array-max-spec.js
    - array-min-spec.js
    - array-intersection-spec.js
    - array-difference-spec.js
    - array-uniq-spec.js
    - array-contains-spec.js
    
- write the first spec `array-first-spec.js`
- then make that entire spec pass by implementing it's corresponding function detailed below
- then write the next spec
- and repeat the cycle, committing your project

### first(array, [n])

````
Arguments
array (Array): The array to query.
[n] (Number): 

Description
Gets the first element or first n elements of an array. 
````

Example  
````
var test_array = ['a','b','c'];

first( test_array ); // → returns 'a'
first( test_array, 2 ); // → returns ['a','b']
````

----

### max( array )

````
Arguments
array (Array): The array to query.

Description
Retrieves the maximum value of a collection. If the collection is empty or falsey -Infinity is returned.
````

Example  
````
max([4, 2, 8, 6]);
// → returns 8
````

----

### min( array )

````
Arguments
array (Array): The array to query.

Description
Retrieves the minimum value of a collection. If the collection is empty or falsey Infinity is returned. 
````

Example  
````
min([4, 2, 8, 6]);
// → returns 2
````

----

### intersection( array, array, ... )

````
Arguments
array (Array): The arrays to query.

Description
Creates an array of unique values present in all provided arrays using strict equality for comparisons
````

Example  
````
intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// → [1, 2]

intersection([2, 3, 4], [5, 2]);
// → [2]
````

----

### difference( array, array, ... )

````
Arguments:
array (Array): The arrays to query.

Description
Creates an array excluding all values of the provided arrays using strict equality for comparisons
````

Example  
````
difference([1, 2, 3, 4, 5], [5, 2, 10]);
// → [1, 3, 4, 10]
````

----

### uniq( array, array, ... )

````
Arguments
array (Array): The arrays to query.

Description
Creates a duplicate-value-free version of an array using strict equality for comparisons.
````

Example
````
uniq([1, 2, 1, 3, 1]);
// → [1, 2, 3]

uniq([1, 1, 2, 2, 3]);
// → [1, 2, 3]

````

----

### contains( array, target )

````
Arguments:
array (Array): The array to query.
target (*): The value to check for.

Description
Checks if a given value is present in a collection using strict equality for comparisons
````

Example
````
contains([1, 2, 3], 1);
// → true

contains([1, 2, 3], 1, 2);
// → false
````