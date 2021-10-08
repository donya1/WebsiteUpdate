//preventing page reload when the language links are clicked
$('.langWrap a').click(function(event){
 event.preventDefault();
});

// //setting constants; where to find the parameters we want to change
const langEl = document.querySelector('.langWrap');
const link = document.querySelector('.langWrap').querySelectorAll('a');
const par1El = document.querySelector('#par1');
const par2El = document.querySelector('#par2');

// //active class is added to the link that is clicked
link.forEach(el => {
 el.addEventListener('click', () => {
   langEl.querySelector('.active').classList.remove('active');
   el.classList.add('active');
   

   const attr = el.getAttribute('language');

// //change the text content of html elements    
   	   par1El.textContent = data[attr].par1;
   	   par2El.textContent = data[attr].par2;

 });
});

// //variable content of html elements to change language
var data = {
 "english":
	 {
       "par1": "The COVID-19 Policing and Homelessness Initiative is a rapid response research project based at the University of Toronto Scarborough. Our goal is to promote and support a move away from the criminalisation of poverty, with solutions that serve the immediate and long-term needs of the homeless.",
       "par2":"The project is funded by a grant from the Toronto COVID-19 Action Fund at the University of Toronto. It is housed in the Sociology department at the University of Toronto Scarborough.",
 },

 "french":
	  {
       "par1":"L'initiative COVID-19 sur la police et les sans-abri est un projet de recherche de réponse rapide basé à l'Université de Toronto (Scarborough). Notre objectif est de promouvoir et de soutenir l'abandon de la criminalisation de la pauvreté, en proposant des solutions qui puissent répondre aux besoins immédiats et à long terme des sans-abri.",
       "par2":"L'initiative COVID-19 sur la police et les sans-abri est financée par une subvention du Fonds d'action COVID-19 de l'Université de Toronto. Le projet est hébergé dans le département de sociologie de l'Université de Toronto (Scarborough).",
	  }
 }