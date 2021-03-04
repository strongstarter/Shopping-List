'use strict'
const items = document.querySelector('.items')          //2
const input = document.querySelector('.footer__input'); //3-1
const addBtn = document.querySelector('.add__btn');     //3-2




function onAdd() {
// 1. 사용자가 입력한 텍스트 받아옴
const text = input.value;
if(text===''){
    input.focus();
    return;
};

// 2. 새로운 아이템을 만듦 (텍스트 + 삭제버튼)
const item = createItem(text); //(괄호)안에 있는 것 의미: text를 creatItem에 전달해주고~ 
// 그 text를 이용해서  item__Name에 innerText로  설정해준다. 

// 3. items 컨테이너안에 새로 만든 아이템을 추가.
items.appendChild(item);
// 4. 새로추가된 아이템으로 스크롤링
item.scrollIntoView({block: 'end'});
// 5. 안풋을 초기화
input.value=''; //입력된 값이 텅텅빈다.
input.focus();// 커서가 입력란으로 간다. 
};

function createItem(text) { //span안에는 Egg라는 텍스트가 있으니까 여기서 전달받은 text를 지정해줘야함.
    // (괄호)안에 있는 것 의미: text를 creatItem에 전달해주고~ 
    // 그 text를 이용해서  item__Name에 innerText로  설정해준다. 
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.innerText = text; //itemName에는 innerText를 이용해서 전달 받은 text를 할당해준다. 

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');
    });

    item.appendChild(itemName); //item에 appenChild를 이용해서 itemName을 넣어준다. 
    item.appendChild(deleteBtn);
    
    itemRow.appendChild(item);
    
    return itemRow;
};

addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
});