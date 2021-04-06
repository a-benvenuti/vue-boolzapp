Vue.use(EmojiPicker)
var app = new Vue(
  {
    el: '#root',
    // -------------------------------------------------------------------------
    data: {
      contatti: [
          {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                  date: '20/03/2021 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                  },
                  {
                      date: '20/03/2021 15:50:00',
                      message: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2021 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                  date: '18/03/2021 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
                  },
                  {
                      date: '18/03/2021 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '18/03/2021 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                  date: '17/03/2021 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
                  },
                  {
                      date: '17/03/2021 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '17/03/2021 12:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Mario',
              avatar: '_4',
              visible: true,
              messages: [{
                  date: '16/03/2021 18:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                  },
                  {
                      date: '16/03/2020 18:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Gianluca',
              avatar: '_5',
              visible: true,
              messages: [{
                  date: '10/03/2021 20:30:55',
                  message: 'Di a mamma che torno più tardi?',
                  status: 'sent'
                  },
                  {
                      date: '10/03/2021 20:50:00',
                      message: 'Ok',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Simona',
              avatar: '_6',
              visible: true,
              messages: [{
                  date: '01/02/2021 21:30:55',
                  message: 'Ricordati il regalo per Dario?',
                  status: 'sent'
                  },
                  {
                      date: '01/02/2021 21:50:00',
                      message: 'Ok, tranquillo.',
                      status: 'received'
                  }
              ],
          }
      ],
      currentContact: 0,      //index contatto
      currentMessage: null,   //index messaggio
      lastMessage: 0,         //index ultimo messaggio
      messageText: "",        //campo messaggio
      search: "",
    },
    // -------------------------------------------------------------------------
    methods: {
      // inserisce emoji in this.messageText
      insert(emoji) {
        this.messageText += emoji
      },
      // funzione per 'catturare' l'index del contatto cliccato
      setIndexContact: function(index) {
        this.currentContact = index;
        return this.currentContact;
      },
      // funzione invio messaggio e risposta
      newMessage: function(contact) {
        const newSentMessage = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          message: this.messageText,
          status: 'sent'
        };

        if (this.messageText !== ""){
          this.filteredContacts[contact].messages.push(newSentMessage);
          this.messageText = "";
          setTimeout(()=>
           {
            const newReceivedMessage = {
              date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
              message: "Ok",
              status: 'received'
            };
            this.filteredContacts[contact].messages.push(newReceivedMessage);

            },1000
          );
        }
      },
      // funzione per 'catturare' l'index del messaggio al mouseenter
      setIndexMessage: function(index) {
        this.currentMessage = index;
        return this.currentMessage;
       },
       // funzione per 'riazzerare' l'index del messaggio al mouseleave
      removeIndexMessage: function() {
        this.currentMessage = null;
        return this.currentMessage;
       },
      // funzione per eliminare il messaggio e 'riaggiornare' l'ultimo messaggio
      deleteMessage: function(soggetto, index){
        this.filteredContacts[soggetto].messages.splice(index, 1);
        this.lastMessage--;
      },
    },
    // -------------------------------------------------------------------------
    computed: {
      // funzione per 'catturare' l'indice dell'ultimo messaggio del contatto corrente
      getIndexLast: function() {
        this.lastMessage = this.filteredContacts[this.currentContact].messages.length - 1;
        return this.lastMessage;
      },
      // filtro dei contatti in rubrica
      filteredContacts() {
       return this.contatti.filter((element) =>
          {
            return element.name.toLocaleLowerCase().includes(this.search.toLowerCase());
          }
        );
      },
    },
    // -------------------------------------------------------------------------
  }
);
