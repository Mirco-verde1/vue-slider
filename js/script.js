
var app = new Vue({
 el: '#container',
 data:{

   immagini:[

     "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",

     "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",

     "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",

     "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"

   ],

   firstImages:0, 


   idxImages: 0,

   circleUnderImages :[
     "fas fa-circle",
     "fas fa-circle",
     "fas fa-circle",
     "fas fa-circle",


   ]

 },

 methods:{

   //Funzioni con il quale scorro in loop le immagini
   nextClick: function(immagini){

     if (this.idxImages < this.immagini.length -1) {
       return this.idxImages += 1;
     }
     else {
       return this.idxImages = this.firstImages;
     }
   },


   prevClick : function(immagini){
     if (this.idxImages === this.firstImages) {
       return this.idxImages = this.immagini.length -1;
     }
     else {
       return this.idxImages -= 1

     }
   },


 }

});




Vue.config.devtools = true;
