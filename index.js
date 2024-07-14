///index.js

        let shoppingList = [];
        let listContainer = document.getElementById('shopping-list');
        let addItemBtn = document.getElementById('add-btn');
        let clearListBtn = document.getElementById('clear-btn');
        let itemInput = document.getElementById('item-input');

        // Load list from local storage
        if (localStorage.getItem('shoppingList')) {
            shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
            renderList();
        }

        addItemBtn.addEventListener('click', addItem);
        clearListBtn.addEventListener('click', clearList);

        function addItem() {
            let item = itemInput.value.trim();
            if (item) {
                shoppingList.push({ name: item, purchased: false });
                itemInput.value = '';
                renderList();
                saveListToLocalStorage();
            }
        }

        function renderList() {
            listContainer.innerHTML = '';
            shoppingList.forEach((item, index) => {
                let listItem = document.createElement('li');
                listItem.textContent = item.name;
                if (item.purchased) {
                    listItem.classList.add('purchased');
                }
                listItem.addEventListener('click', () => {
                    togglePurchased(index);
                });
                listContainer.appendChild(listItem);
            });
        }

        function togglePurchased(index) {
            shoppingList[index].purchased = !shoppingList[index].purchased;
            renderList();
            saveListToLocalStorage();
        }

        function clearList() {
            shoppingList = [];
            renderList();
            saveListToLocalStorage();
        }

        function saveListToLocalStorage() {
            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        }


/*let shoppingList =[];

document.addEventListener("DOMContentLoaded", function(){
    const addItemInput = document.getElementById("item-input");
    const addBtn = document.getElementById("add-btn");
    const clearBtn = document.getElementById("clear-btn");
    const listContainer = document.getElementById("list-container");

    //Load list 
    const storedList = localStorage.getItem("shoppingList");
    if (storedList) {
        shoppingList = JSON.parse(storedList);
        renderList()
    }

    addBtn.addEventListener("click", function(){
        const newItem = addItemInput.ariaValueMax.trim();
        if (newItem){
            shoppingList.push({ text: newItem, purchased: false});
            addItemInput.value = " ";
            renderList();
        }
    });

    clearBtn.addEventListener("click", function(){
        shoppingList=[];
        renderList();
    });

    listContainer.addEventListener("click", function(event){
        if (event.target.tagName = "LI"){
            const itemIndex = Array.prototype.indexOf.call(listContainer.children, event.target);
            shoppingList[itemIndex].purchased = !shoppingList[itemIndex].purchased;
            renderList();
        }
    })

    function renderList(){
        listContainer.innerHTML="";
        shoppingList.forEach((item, index) =>{
            const listItem = document.createElement("LI");
            listItem.textContent = item.text;
            if (item.purchased){
                listItem.classList.add("purchased");
            }
            listContainer.appendChild(listItem);
        });

        //save
        localStorage.setItem("shoppingList", Json.stringify(shoppingList))
    }

})*/