
//alert("Hello From JS");     test for JS Link
//Creates Array of Pictures
var pics = [
  "imgs/kitty_bed.jpg",
  "imgs/kitty_basket.jpg",
  "imgs/kitty_laptop.jpg",
  "imgs/kitty_door.jpg",
  "imgs/kitty_sink.jpg",
  "imgs/kitty_wall.jpg",
]
//Finds The first instance of button and store in variable
var btn = document.querySelector("button");
//Creating Variable
var img = document.querySelector("img");
//Create a counter var
var counter = 1;

btn.addEventListener("click",function(){
  if(counter===6){
    counter = 0;
  }
  img.src = pics[counter];
  counter = counter+1;
});