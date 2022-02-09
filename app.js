const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
   e.preventDefault();

   // Get input value
   const newItem = document.getElementById('item').value;

   // Create new li element
   const li = document.createElement('li');

   // Add class to li
   li.className = 'list-group-item';

   // Append text node with input value
   li.appendChild(document.createTextNode(newItem));

   // Create delete btn element
   const deleteBtn = document.createElement('button');

   // Add classes to delete btn
   deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

   // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   // Append deleteBtn to li
   li.appendChild(deleteBtn);

   // Append li to ul (item to list)
   itemList.appendChild(li);

   // Cleaning the input
   item.value = '';
}

// Remove item
function removeItem(e) {
   if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure to delete this item?')) {
         const li = e.target.parentElement;
         itemList.removeChild(li);
      }
   }
}

// Filter item
function filterItems(e) {

   // Convert the text to lowercase
   const text = e.target.value.toLowerCase();

   // Get the list items
   const getItems = itemList.getElementsByTagName('li');

   // Convert to an array
   Array.from(getItems).forEach(function (item) {
      const itemName = item.firstChild.textContent;

      if (itemName.toLowerCase().indexOf(text) !== -1) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
}