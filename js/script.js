
var app = new Vue({
  el: '#container',
  data:{

    immagini:[

      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",

      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",

      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",

      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"

    ],

     idxImages: 0,

     firstImages:0,  //nel caso si aggiungesse un immagine o meno,
                    //modificare il dato first o last.
                    //i numeri corrispondono alla lunghezza dell'array
                    //immagini  in questo momento

     lastImages:3

  },

  methods:{

    //Funzioni con il quale scorro in loop le immagini
    nextClick: function(immagini){

      if (this.idxImages < this.lastImages) {
        return this.idxImages += 1;
      }
      else {
        return this.idxImages = 0;
      }
    },


    prevClick : function(immagini){
      if (this.idxImages === this.firstImages) {
        return this.idxImages = 3;;
      }
      else {
        return this.idxImages -= 1;;
      }
    }

  }
});




Vue.config.devtools = true;
