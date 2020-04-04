import { Component, ViewChild, OnInit } from '@angular/core';//importamos ViewChild para referenciar el contenido de la vista
import { ApiAiClient, ApiAiConstants } from 'api-ai-javascript/es6/ApiAiClient';
import { NavController} from '@ionic/angular';//importanmos content para controlar el deslizamiento al pie de página
import { IonContent } from '@ionic/angular';//importanmos content para controlar el deslizamiento al pie de página
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import {Reporte} from '../../model/Reporte';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

ApiAiConstants.DEFAULT_CLIENT_LANG = ApiAiConstants.AVAILABLE_LANGUAGES.ES; // Aqui controlamos el lenguaje para comunicarnos con el agente
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit{
  reporte: Reporte = {
    title: '',
    content: '',
    fecha: '',
    hora: '',
    locationlat: '',
    locationlong: '',
    createdAt: new Date().getTime()
  };
  

  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
    client;
  accessToken = '26284866aae341049367ad4a2ba9b95a'; // esta es la llave que nos otroga DialogFlow

  user_textToSend: string; // contiene lo qu el usuario escriba
  messageHistory: any[] = []; // aqui se almacenan los objetos con los mensajes que se pintan en pantalla
  constructor(public navCtrl: NavController,
              private geolocation: Geolocation,
              private activatedRoute: ActivatedRoute,
              private fbService: FirebaseService,
              private toastCtrl: ToastController,
              private router: Router
    ) {

    // establecemos la comunicación
    this.client = new ApiAiClient({
      accessToken: this.accessToken
    });

  } // fin constructor
  async ngOnInit() {

    /*
    for (const dia of this.miarray) {
      console.log(dia);
    }*/

    const rta = await this.geolocation.getCurrentPosition();
    // tslint:disable-next-line: no-unused-expression
    this.reporte.locationlat = rta.coords.latitude;
    this.reporte.locationlong = rta.coords.longitude;

  }

  // enviar mensaje al agente
  sendMessage() {

    // creamos un objeto con un nuevo mensaje
    let newMessage_user = {
      fromUser: true, // en true es un mensaje del usuario
      text: this.user_textToSend
    };

    this.user_textToSend = ''; // limpiamos la caja de texto en la que el usuario escribe
    // console.log(newMessage_user.text);
    if ((newMessage_user.text).includes('robaron') || (newMessage_user.text).includes('asaltado')) {
      this.reporte.title = newMessage_user.text;
      console.log(this.reporte.title);
    }
    if ((newMessage_user.text).includes('noche') || (newMessage_user.text).includes('día') || (newMessage_user.text).includes('avenida')) {
      this.reporte.content = newMessage_user.text;
      console.log(this.reporte.content);
      this.agregarReporte();
    }
    this.messageHistory.push(newMessage_user);
    // adiciona lo que el usuario escriba al array de mensajes para que se muestre en pantalla
    this.scrollToBottom();// se desliza hacia el pie de página para que se vea el ultimo mensaje

    // hace envia la petición post al agente
    this.client.textRequest(newMessage_user.text).then(response => {

        let newMessage_bot = {
          fromUser: false, // en false es un mensaje del agente
          text: response.result.fulfillment.speech // contiene el texto que devuelve el agente
        };
        console.log(response.result.fulfillment.speech);
        if ((response.result.fulfillment.speech).includes('registrado')) {
          console.log('se ha registrado');
        }
        // console.log(newMessage_bot);
        this.messageHistory.push(newMessage_bot); // adiciona lo que el agente escriba al array de mensajes para que se muestre en pantalla
        this.scrollToBottom(); // se desliza hacia el pie de página para que se vea el ultimo mensaje

      }).catch(error => {
        // algo salió mal
        this.user_textToSend = ''; // limpiamos la caja de texto en la que el usuario escribe
        console.log(error); // se imprime en consola el error
      });

  }// fin sendMessage

  // desliza la vista al pie de página
  scrollToBottom() {
    setTimeout(() => {
      this.myContent.scrollToBottom(0);
        }, 100);
    // console.log(this.messageHistory);

  }//fin scrollToBottom
  agregarReporte() {
    this.fbService.addReporte(this.reporte).then(() => {
      console.log('Se ha guardado con exito');
    }, err => {
    });
  }
}
