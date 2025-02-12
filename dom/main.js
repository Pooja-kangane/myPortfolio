var form = document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

//delete event

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup', filterItems);

//add item
function addItem(e)
{
    e.preventDefault();
    console.log(1);

    //get input value
    var newItem=document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');

    //Add classes to del button

    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}


//remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li =e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//filter items

function filterItems(e){
    //convert text to lowercase

    var text= e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){

            item.style.display = 'block';

        }
        else{
            item.style.display = 'none';
        }
    });
}