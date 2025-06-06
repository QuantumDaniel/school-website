const background = document.getElementById('background');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const images = [
  'Image/Admistrative block.jpg',
  'Image/telescope logo.png',
  'Image/IMG_20240526_180029_262 (1) (1)@1351912044.jpg',
  'Image/IMG_20240526_180029_262 (1) (1)@1351912044.jpg',
  'Image/IMG_20240526_182541_497 (5)@1394047752.jpg',
  'Image/IMG_20240526_180540_199 (1) (1)@333951753.jpg',
];

const items = [
  {
    line1:'2024/2025 Telescope INT',
    line2:'National Common',
    line3:'Entrance Exam',
    line4: 'Result',
    button:'check here'
  },
  {
    line1:'2024/2025 Telescope INT',
    line2:'National Common',
    line3:'Entrance Exam',
    line4: 'Result',
    button:'check here'
  }

]

let content = '';
items.forEach((item)=>{
content+=`
<div class="items">
          <div class="grid-display-item1">${item.line1}</div>
          <div class="grid-display-item2">${item.line2}</div>
          <div class="grid-display-item3">${item.line3}</div>
          <div class="grid-display-item4">${item.line}</div>
          <button class="grid-button">
            <a href="#">
              ${item.button}
            </a>
          </button>
        </div>

`;

});
document.querySelector('.grid').innerHTML = content;

