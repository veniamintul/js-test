const quantitySelector = document.querySelector(".quantity-selector"); //ищем нужные айди
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = (quantity) => {
  let markup = ""; //3 переменная где храниться разметка

  for (let i = 0; i < quantity; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML; //innerHTML берет только внутренности outerHTML и внутренности  и сам блок
  }

  return markup;
};

quantitySelector.addEventListener("change", function(event)  { //1.добавили обработчик событий
    
  const quantity = e.target.value;  //2.в таком свойстве содержится значения полей ввода
  const markup = createMarkup(quantity);

  blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
};

let changed = false;//буллева переменная по умолчанию фолз

colorSelector.addEventListener("change", (e) => {
  const color = e.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;  //при каждом изменении буллева перменная НЕ ченджет

  for (let i = 0; i < items.length; i++) {   // 4 создаем блоки с циферками
    const currentBlock = items[i];
    const blockNumber = i + 1;   //для того чтобы цифры не начинались с нуля
    let colorToApply = "";

    if (changed) {
      colorToApply = blockNumber % 2 !== 0 ? color : "#fff"; //знак ? означает слово "то" (если... то-то то-то....... то выполняем следующее)
    } else {
      colorToApply = blockNumber % 2 === 0 ? color : "#fff";
    }

    colorTheBlock(currentBlock, colorToApply);
  }
});