var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event

form.addEventListener('submit',addItem);


//filter event
filter.addEventListener('keyup',filterItems);

//Add item

function addItem(e){
    e.preventDefault();

    //get input value

    var newItem = document.getElementById('item').value;

    //create new li element

    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    console.log(li);
//Add text node with input value

li.appendChild(document.createTextNode(newItem));

/// Create del button element
var deleteBtn = document.createElement('button');

// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append text node
deleteBtn.appendChild(document.createTextNode('X'));

// Append button to li
li.appendChild(deleteBtn);

// Append li to list
itemList.appendChild(li);
}

// Remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('Are You Sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
}




//Filter Items

function filterItems(e){
    // convert text to lowercase

    var text = e.target.value.toLowerCase();
   
    //Get lis

    var items =itemList.getElementsByTagName('li');
    //convert to an array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        

    });

}

   

// Deep about Event Listeners

//Closure demo with event Listeners

//Scope Demo with Event Listeners

//Garbage Collection & removeEventListeners

function attachEventListeners() {
    let count=0;
    document.getElementById("Clickme")
    .addEventListener("click",function xyz(){
    console.log("button clicked",++count);
    });
}

attachEventListeners();

document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('The page successfully loaded!');
}
