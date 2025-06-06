const object = [
  {
    image: '',
    title: 'Mom mngohol catherine \n Proprietress'
  },
  {
    image: '',
    title: 'Bem  dajo  Gabriel  school\n Administrator'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/IMG_20240526_182650_260 (1) (2)@-2007831903.jpg',
    title: 'corpers lodge'
  },
  {
    image: 'Image/IMG_20240526_180109_087 (1) (1)@249234736.jpg',
    title: 'secondary block'
  },

  {
    image: 'Image/IMG_20240526_180136_107 (1) (1)@633120083.jpg',
    title: 'secondary block'
  },

  {
    image: 'Image/IMG_20240526_180029_262 (1) (1)@1351912044.jpg',
    title: 'primary block'
  },

  {
    image: 'Image/IMG_20240526_180540_199 (1) (1)@333951753.jpg',
    title: 'junction'
  },

  {
    image: 'Image/IMG_20240526_182447_930 (1)@2128811285.jpg',
    title: 'School gate'
  },
  {
    image: 'Image/IMG_20240526_181319_082 (1)@1716450734.jpg',
    title: 'Liabrary'
  },

  {
    image: 'Image/telescope logo.png',
    title: 'School LOgo'
  },

  {
    image: 'Image/IMG_20240526_182009_746 (1)@296927994.jpg',
    title: 'Mission/vision'
  },

];


const objectPrimary = [
  {
    image: '',
    title: 'Mom mngohol catherine \n Proprietress'
  },
  {
    image: '',
    title: 'Bem  dajo  Gabriel  school\n Administrator'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },
  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },


];






let gallery = '';
object.forEach((object) => {


  gallery += `

        <div class=" image1">
         <img src="${object.image}">

      <div class="title">${object.title}
 </div>
     </div>
  `
});

document.querySelector('.js-image-display').innerHTML = gallery;

document.querySelector('.js-primary-button').addEventListener('click', () => {
  document.querySelector('.js-section').innerHTML = 'Primary section';
  let primaryGallery = '';
  objectPrimary.forEach((objectPrimary) => {


    primaryGallery += `
   
           <div class=" image1">
            <img src="${objectPrimary.image}">
   
         <div class="title">${objectPrimary.title}
    </div>
        </div>
     `
  });

  document.querySelector('.js-image-display').innerHTML = primaryGallery;
});




document.querySelector('.js-secondary-button').addEventListener('click', () => {
  document.querySelector('.js-section').innerHTML = 'secondary section';
  let gallery = '';
  object.forEach((object) => {
    gallery += `
   
           <div class=" image1">
            <img src="${object.image}">
   
         <div class="title">${object.title}
    </div>
        </div>
     `
  });

  document.querySelector('.js-image-display').innerHTML = gallery;





});

