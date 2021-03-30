var app = new Vue(
  {
    el: '#root',
    data: {
      contatti: [
          {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
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
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
              },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
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
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
              },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
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
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
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
                  date: '10/01/2020 15:30:55',
                  message: 'Di a mamma che torno più tardi?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
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
                  date: '10/01/2020 15:30:55',
                  message: 'Ricordati il regalo per Dario?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ok, tranquillo.',
                      status: 'received'
                  }
              ],
          }
      ],
      currentContact: 0,  //index contatto
      messageText: "",    //campo messaggio
    },
    methods: {
      // funzione per 'catturare' l'index del contatto cliccato
      setIndexContact: function(position) {
        this.currentContact = position;
        return this.currentContact;
      },
      // funzione invio messaggio e risposta
      newMessage: function(contact) {
        const newSentMessage = {
          date: '10/01/2020 15:50:00',
          message: this.messageText,
          status: 'sent'
        };

        if (this.messageText !== ""){
          this.contatti[contact].messages.push(newSentMessage);
          this.messageText = "";
          setTimeout(()=>
           {

            const newReceivedMessage = {
              date: '10/01/2020 15:50:01',
              message: "Ok",
              status: 'received'
            };
            this.contatti[contact].messages.push(newReceivedMessage);

            },1000
          );
        }
      }
    }
  }
);
