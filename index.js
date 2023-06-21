

const qrcode = require('qrcode-terminal');
const fs = require('fs');

const { Client, LocalAuth, Buttons} = require('whatsapp-web.js');

const { MessageMedia } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});



//Genera el código qr para conectarse a whatsapp-web
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on('ready', () => {
    console.log('Conexion exitosa');
    lisenMesagge();     
});

/// conct
const sendMessage=(to,message)=>{
    client.sendMessage(to,message)
}

///// id
const lisenMesagge = () =>{
    client.on('message', (msg) =>{
        const { from, to, body } = msg;
        console.log(from, to, body);
    })
}

    const sendMedia = (to, file) => { 
    const mediaFile = MessageMedia.fromFilePath(`./mediaSend/${file}`) 
    client.sendMessage(to, mediaFile)
    
}

////

client.on('message', message => {
    
    switch (message.body){

        
        case 'mas info':
            client.sendMessage(message.from, 'Gracias por escoger el servicio de transportes de ANDESKAR, recuerde que también puede encontrarnos en *Facebook* como *Transportes Andeskar* (click aquí: https://www.facebook.com/TransportesAndeskar)  o en *Instagram* como *transportes_andeskar* (click aquí: https://instagram.com/transportes_andeskar?igshid=YmMyMTA2M2Y=)') 
            break;

            case 'menos info':
            sendMessage(message.from,'hihi')
            sendMedia(message.from,'lola.png')
            break;


    }
	if(message.body === "hola" || message.body === "Hola" || message.body === "HOLA" || message.body ==="buenas" || message.body ==="Buenas" || message.body ==="Buenos dias" || message.body ==='buenos días' || message.body ==="BUENOS DIAS"   || message.body ==="Buenos días" || message.body ==="BUENOS DÍAS"  || message.body ==="buenas noches" || message.body ==="Buenas noches" || message.body ==="BUENAS NOCHES" 
     || message.body ==='buenas tardes' || message.body ==="Buenas tardes" || message.body ==="BUENAS TARDES" ) {  
      client.sendMessage(message.from, 'Bienvenido al sistema de información de Andeskar, En qué podemos ayudarle?');

      // menú //

	  client.sendMessage(message.from, '*Destinos*                                                                                                                                                                                                       *Cotizar*                                                                                                                                                                                                        *Horarios* de recojo y envío');
  
    }
    if(message.body === "Destinos" || message.body ==="destinos" || message.body ==="DESTINOS" ){
       client.sendMessage(message.from, '🗺️🚛Aquí encontrará información sobre nuestras oficinas🗺️🚛. Introduzca el destino 🚚🚚💨:                                                                                                                                                                                                       🔘LIMA *ARRIOLA*                                                                                                                                                                                                        🔘LIMA *RENOVACION*                                                                                                                                                                                                        🔘 *TRUJILLO*                                                                                                                                                                                                       🔘 *CHIMBOTE*                                                                                                                                                                                                       🔘 *NUEVO CHIMBOTE*                                                                                                                                                                                                       🔘 *HUAMACHUCO*                                                                                                                                                                                                       🔘 *CAJABAMBA*                                                                                                                                                                                                       🔘 *CHAO*                                                                                                                                                                                                       🔘 *CHEPEN*                                                                                                                                                                                                       🔘 *CHICLAYO*                                                                                                                                                                                                       🔘 *PIURA* ');}

    
    
    //////////////////////////////
    if(message.body === "Arriola" || message.body ==="arriola" || message.body ==="ARRIOLA"  || message.body ==="lima arriola" || message.body ==="LIMA ARRIOLA"  || message.body ==="Lima arriola"){  client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Av. Nicolás Arriola 2000 - San Luis también puede comunicarse al ☎️ *939 770 830*');}
    if(message.body === "Renovacion" || message.body ==="renovacion"  || message.body ==="RENOVACION"  || message.body ==="lima renovacion" || message.body ==="LIMA RENOVACION"  || message.body ==="Lima renovacion"  || message.body ==="lima renovación" || message.body ==="LIMA RENOVACIÓN"  || message.body ==="Lima renovación"){ client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Calle Renovacion 300 - La Victoria  también puede comunicarse al  ☎️ *989 383 698*');}
    if(message.body === "Trujillo" || message.body ==="trujillo" || message.body ==="TRUJILLO" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Av. César Vallejo Mz. 44 - Lt. 9 - Urb. La Rinconada también puede comunicarse al ☎️ *979 214 138*');}
    if(message.body === "Chimbote" || message.body ==="chimbote" || message.body ==="CHIMBOTE" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Av. Pardo 3621 - Santa - Ancash - también puede comunicarse al ☎️ *963 195 813*');}
    if(message.body === "Nuevo chimbote" || message.body ==="nuevo chimbote" || message.body ==="NUEVO CHIMBOTE" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Av.Belén Mz- O - Lt. 1 - San Luis Santa - Ancash también puede comunicarse al ☎️ *976 377 158*');}
    if(message.body === "Huamachuco" || message.body ==="huamachuco"  || message.body ==="HUAMACHUCO" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Av. Jr. Simón Boilivar  1041 - Sánchez Carrión  también puede comunicarse al ☎️ *960 063 298*');}
    if(message.body === "Cajabamba" || message.body ==="cajabamba" || message.body ==="CAJABAMBA" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Jr. Cáceres 390 (Esquina con Nacarino) Cajabamba  también puede comunicarse al ☎️ *995 823 030*');}
    if(message.body === "Chao" || message.body ==="chao" || message.body ==="CHAO" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Sector La Victoria S/N - Chao - Virú - La Libertad Red Costado Grifo Chimu  también puede comunicarse al ☎️ *984 493 406*');}
    if(message.body === "Chepen" || message.body ==="chepen" || message.body ==="CHEPEN" || message.body ==="Chepén"  || message.body ==="chepén" || message.body ==="CHEPÉN" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Mz. A Lt. 08 - Urb Santa Luisa - Ref. Frente al mercado La Explanada  también puede comunicarse al ☎️ *989 376 246*');}
    if(message.body === "Chiclayo" || message.body ==="chiclayo" || message.body ==="CHICLAYO"  ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Victor Raúl Haya de la Torre 2450 La Victoria también puede comunicarse al ☎️ *991 221 513*');}
    if(message.body === "Piura" || message.body ==="piura"  || message.body ==="PIURA" ){client.sendMessage(message.from, 'Nuestras oficinas se encuentran en Av. Guillermo Gulman Mz. B Lote 32 Urb. Jose Maria Arguedas  también puede comunicarse al ☎️ *953 147 080*');}


    ///////////COTIZAR y HORARIOS ///////////
        if(message.body ==='Cotizar' || message.body ==='cotizar' || message.body ==='COTIZAR' || message.body ==='cotizaciones' || message.body ==='COTIZACIONES' || message.body ==='Cotizaciones'){

        client.sendMessage(message.from, '📃Para realizar una cotización detallada📃 puede llamarnos al ☎️ *939 770 830*  de Lunes a Viernes de 8:00 a.m. a 5:00 p.m  lo atenderemos a la brevedad. Que tenga un buen día!')



        }else if(message.body ==='Horarios' || message.body ==='horarios' || message.body ==='HORARIOS' || message.body ==='horario' || message.body ==='HORARIO' || message.body ==='Horario'){client.sendMessage(message.from, '🗓️Nuestro horario de atención🗓️ Recojos en oficinas de Lunes a Sábado de 8:00 a.m. a 6:00 p.m. y Envíos de Lunes a Sábado de 8:00 a.m. a 8:00 p.m.  Que tenga un buen día!😊 '); }
    
        }

    ////////////////////////////


);

client.initialize();