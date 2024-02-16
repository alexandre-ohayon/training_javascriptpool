const ages = [32, 33, 16, 40];
const result = ages.filter(checkAge);
console.log(result);

function checkAge(ages) {
    return ages >= 18;
}

checkAge(ages);


const list = ['toto', 'titi', 'tete'];

function checkNames() {

    let tab = [];

   let modifiedArr = list.map(function(element) {

       element.startsWith('te') ? tab.push('ok') : tab.push('nn');
       return element + 'modified';
   })
    console.log(modifiedArr);
    console.log(tab);
}

checkNames(list);

