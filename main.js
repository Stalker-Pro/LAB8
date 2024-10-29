'use strict'; ///строгий режим в js

const container = document.querySelector('.place'); /// input.value чтобы получить значения с input

const saveOutput = document.querySelector('.save-output');

const inputText = document.querySelector('.input-text');
const inputNumber = document.querySelector('.input-number');

const addBtn = document.querySelector('.add-element');
const saveBtn = document.querySelector('.save-element');

const addInput = `
  <div class="input-container">
    <input class="input-text" type="text"><input class="input-number" min="1" type="number"><button class="btn remove-btn">x</button><button class="btn up-btn">&uarr;</button><button class="btn down-btn">&darr;</button>
  </div>  
`;







addBtn.addEventListener('click', (event) => {
  
  container.insertAdjacentHTML('afterbegin', addInput);

  const removeBtn = document.querySelector('.remove-btn');
  const upBtn = document.querySelector('.up-btn');
  const downBtn = document.querySelector('.down-btn');

  removeBtn.addEventListener('click', (e) => {
    const parent = e.target.closest('.input-container'); 
    parent.remove();
  });

  downBtn.addEventListener("click", (e) => {
    const parent = e.target.closest('.input-container');
    
    if (parent) { 
      const nextElement = parent.nextElementSibling; 
      if (nextElement) { 
          parent.parentNode.insertBefore(nextElement,parent);
      }
    }
  })

  upBtn.addEventListener("click", (e) => {
    const parent = e.target.closest('.input-container');

    if (parent) { 
      const previousElement = parent.previousElementSibling;; 
      if (previousElement) { 
          parent.parentNode.insertBefore(parent,previousElement);
      }
    }
  })

});


saveBtn.addEventListener('click', () => {
  const inputContains = document.querySelectorAll('.input-container');
  const inputValues = [];

  inputContains.forEach(container => {
    const textInput = container.querySelector('.input-text');
    const numberInput = container.querySelector('.input-number');

    if (textInput && numberInput) {
      inputValues.push({
          text: textInput.value,   
          number: numberInput.value 
      });
    }
  })


  saveOutput.innerHTML=''; ///очистка предыдущего текста


  const outputString = inputValues.map(input => `"${input.text}":"${input.number}"`).join(',');

  const paragraph = document.createElement('p');
  paragraph.textContent = outputString;
  saveOutput.appendChild(paragraph);
})

















// addBtn.addEventListener('click', (event) => {
  
//   container.insertAdjacentHTML('afterbegin', addInput);

//   const removeBtn = document.createElement('button');
//   removeBtn.classList.add('btn');
//   removeBtn.textContent = 'x';
//   // container.insertAdjacentElement("beforeend", removeBtn);

// })

//   container.appendChild(removeBtn);

// removeBtn.addEventListener('click', (e) =>{
//   const {target} = e;

//   const parent = target.closest('.input-text');
//   parent.remove();
// })










// function moveElemUp(element) {
//   const previous = element.previousElementSibling;

//   if (!previous) return;

//   container.insertBefore(element, previous);
// }

// function moveElemDown(element) {
//   const next = element.nextElementSibling;

//   if (!next) return;

//   container.insertBefore(next, element);
// }




// addBtn.addEventListener('click', (e) => {
//   const list = document.createElement('div');
//   list.classList.add('list');

//   const removeBtn = document.createElement('button');
//   const moveUp = document.createElement('button');
//   const moveDown = document.createElement('button');

//   removeBtn.classList.add('btn');
//   removeBtn.textContent = 'x';

//   moveUp.classList.add('btn');
//   moveDown.classList.add('btn');

//   moveUp.innerHTML = '&uarr;';
//   moveDown.innerHTML = '&darr;';

//   moveUp.addEventListener('click', () => moveElemUp(list));
//   moveDown.addEventListener('click', () => moveElemDown(list));

//   removeBtn.addEventListener('click', e => {
//     const {target} = e;

//     const parent = target.closest('.list');

//     parent.remove();
//   });

//   list.appendChild(moveUp);
//   list.appendChild(moveDown);
//   list.appendChild(removeBtn);

//   const addInput = `
//     <input class="input-text" type="text">
//     <input class="input-number" min="1" type="number">
//   `;
  
//   list.insertAdjacentHTML('afterbegin', addInput);

//   container.appendChild(list);
// });










// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function generateRandomSize() {
//   return {
//     width: generateRandomNumber(50, 200),
//     height: generateRandomNumber(40, 150),
//     left: generateRandomNumber(50,1400),
//     top: generateRandomNumber(100,600),
//   }
// }

// function generateRandomSizeEvenly() {
//   const size = generateRandomNumber(50, 200);
  
//   return {
//     width: size,
//     height: size,
//     left: size,
//     top: size,
//   }
// }


// container.addEventListener('click', e => { ///Удаление если есть shape
//   const {target} = e;

//   if (!target.classList.contains('shape')) return;

//   target.remove();
// })



// squareBtn.addEventListener('click', (e) => {
//   const count = Number(input.value);

//   if (!count) return;

//   for (let i = 0; i < count; i++) {
//     const s = document.createElement('div');

//     const {width, height} = generateRandomSizeEvenly();
//     const {left,top} = generateRandomSize();

//     s.classList.add('addSquare', 'shape');
//     s.style.width = `${width}px`;
//     s.style.height = `${height}px`; 
    
//     s.style.position = 'absolute';
    
//     s.style.left = `${left}px`;
//     s.style.top = `${top}px`;

//   container.appendChild(s);
// }
// })

// triangleBtn.addEventListener('click', (e) => {
//   const count = Number(input.value);

//   if (!count) return;

//   for (let i = 0; i < count; i++) {
//     const t = document.createElement('div');
    
//     const {width, height,left,top} = generateRandomSize();

//     t.classList.add('addTriangle', 'shape');
//     t.style.width = `${width}px`;
//     t.style.height = `${height}px`;

//     t.style.position = 'absolute';

//     t.style.left = `${left}px`;
//     t.style.top = `${top}px`;

//     container.appendChild(t);
//   }
// })


// circleBtn.addEventListener('click', (e) => {
//   const count = Number(input.value);

//   if (!count) return;

//   for (let i = 0; i < count; i++) {
//     const crcl = document.createElement('div');

//     const {width, height} = generateRandomSizeEvenly();
//     const {left,top} = generateRandomSize();

//     crcl.classList.add('addCircle', 'shape');
//     crcl.style.width = `${width}px`;
//     crcl.style.height = `${height}px`;
    
//     crcl.style.position = 'absolute';

//     crcl.style.left = `${left}px`;
//     crcl.style.top = `${top}px`;

//     container.appendChild(crcl);
//   }
// })

