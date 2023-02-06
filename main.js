const menu = {
    courses :   {
        appetizers:[],
        mains:[],
        desserts:[]
        },
    addDishToCourse : function (courseName,dishName,dishPrice) {
        const dish =Object.create(menu)
        dish.name=dishName,
        dish.price=dishPrice,
 
        menu.courses[courseName].push(dish)
        },
    
    getRandomDishFromCourse : function (courseName)  {

         let dishes=menu.courses[courseName]
         
   
         let index= Math.floor(Math.random()*dishes.length)
      return dishes[index]


        } 
   
        }

    
    function generateRandomMeal(){
      let appetizer=  menu.getRandomDishFromCourse('appetizers')
      let main=  menu.getRandomDishFromCourse('mains')
      let dessert=  menu.getRandomDishFromCourse('desserts')
      
      let totalPrice=appetizer.price + main.price + dessert.price
console.log(`Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}`)
console.log(`The total price for this meal is $${totalPrice}`)

    }

   
menu.addDishToCourse('appetizers','smoked salmon',32)
menu.addDishToCourse('appetizers','shrimp cocktail',35)
menu.addDishToCourse('appetizers','caviar',50)
menu.addDishToCourse('mains','beef',75)
menu.addDishToCourse('mains','chicken',49)
menu.addDishToCourse('mains','pork',42)
menu.addDishToCourse('desserts','profiteroles',20)
menu.addDishToCourse('desserts','ice cream',10)
menu.addDishToCourse('desserts','cake',12)
menu.addDishToCourse('desserts','pie',10)


generateRandomMeal()
