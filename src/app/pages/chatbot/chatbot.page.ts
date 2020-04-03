import { Component, ViewChild, OnInit } from '@angular/core';//importamos ViewChild para referenciar el contenido de la vista
import { ApiAiClient, ApiAiConstants } from 'api-ai-javascript/es6/ApiAiClient';
import { NavController} from '@ionic/angular';//importanmos content para controlar el deslizamiento al pie de página
import { IonContent } from '@ionic/angular';//importanmos content para controlar el deslizamiento al pie de página

ApiAiConstants.DEFAULT_CLIENT_LANG = ApiAiConstants.AVAILABLE_LANGUAGES.ES; // Aqui controlamos el lenguaje para comunicarnos con el agente
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage{

  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
    client;
  accessToken = '26284866aae341049367ad4a2ba9b95a'; //esta es la llave que nos otroga DialogFlow

  user_textToSend: string; //contiene lo qu el usuario escriba
  messageHistory: any[] = []; //aqui se almacenan los objetos con los mensajes que se pintan en pantalla
  constructor(public navCtrl: NavController) {

    //establecemos la comunicación
    this.client = new ApiAiClient({
      accessToken: this.accessToken
    });

  }//fin constructor


  //enviar mensaje al agente
  sendMessage() {

    //creamos un objeto con un nuevo mensaje
    let newMessage_user = {
      fromUser: true, //en true es un mensaje del usuario
      text: this.user_textToSend
    };

    this.user_textToSend = ''; //limpiamos la caja de texto en la que el usuario escribe

    this.messageHistory.push(newMessage_user); //adiciona lo que el usuario escriba al array de mensajes para que se muestre en pantalla
    this.scrollToBottom();//se desliza hacia el pie de página para que se vea el ultimo mensaje

    //hace envia la petición post al agente
    this.client.textRequest(newMessage_user.text).then(response => {

        let newMessage_bot = {
          fromUser: false, //en false es un mensaje del agente
          text: response.result.fulfillment.speech //contiene el texto que devuelve el agente
        };
        console.log(response.result.fulfillment.speech);
        console.log(newMessage_bot);
        this.messageHistory.push(newMessage_bot); //adiciona lo que el agente escriba al array de mensajes para que se muestre en pantalla
        this.scrollToBottom();//se desliza hacia el pie de página para que se vea el ultimo mensaje

      }).catch(error => {
        //algo salió mal
        this.user_textToSend = ''; //limpiamos la caja de texto en la que el usuario escribe
        console.log(error); //se imprime en consola el error
      });

  }//fin sendMessage

  //desliza la vista al pie de página
  scrollToBottom() {
    setTimeout(() => {
      this.myContent.scrollToBottom(0);
        }, 100);
    console.log(this.messageHistory);

  }//fin scrollToBottom
}
