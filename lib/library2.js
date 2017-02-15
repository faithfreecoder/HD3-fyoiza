const oneToTwenty= Array.prototype.toTwenty = function()

{
  oneToTwenty = [];
  for (var i=1; i<=20;i++)
  {oneToTwenty.push(i);}
  return oneToTwenty;  
};


const twoToForty= Array.prototype.toForty = function()
{
  twoToForty = [];
  for (var i=2; i<=40;i+=2)
  {twoToForty.push(i);}
  return twoToForty;  
};


const tenToOneThousand= Array.prototype.toOneThousand = function()

{
  tenToOneThousand = [];
  for (var i=10; i<=1000;i+=10)
  {tenToOneThousand.push(i);}
  return tenToOneThousand;  
};

const search= Array.prototype.search  = function(p)
{
    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];
 
        if (currentElement < p) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > p) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1;
};
 

module.exports = 
{
  oneToTwenty,
  twoToForty,
  tenToOneThousand,
  search
};