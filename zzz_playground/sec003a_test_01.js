
//  test_01.js
//  node test_01.js
//  npm install -g nodemon
//  nodemon test_01.js

const user =
{
  name: 'Andrew',
  cities: [ 'Philadelphia', 'New York', 'Dublin' ],
  printPlacesLived ()
  {
    return this.cities.map ( (P_city) =>
        this.name + ' has lived in ' + P_city
                           );
  }
}

console.log (user.printPlacesLived ());

const mult_obj =
{
    multiplier: 11,
    mult_set: [ 1, 2, 3, 4 ],
    mult_op ()
    {
      return this.mult_set.map ( (P_num) =>
        this.multiplier * P_num
                               );
    }

}

console.log (mult_obj.mult_op ());
