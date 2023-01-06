const judgeVegetable = function (vegetables, metric) {

  let topValueIndex = 0;
  let winner = vegetables[topValueIndex].submitter;



    vegetables.forEach(
      function(item,index){
        
        if(item[metric] >= vegetables[topValueIndex][metric] ){
          topValueIndex = index;
          winner = item.submitter;
        }
    
      }
    );
        



  return winner;

}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 100,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 54,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));