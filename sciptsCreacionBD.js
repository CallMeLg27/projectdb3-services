use projectDB3;


// drop everything
// db.dropDatabase();

// most common drops
// db.Problems.drop()
// db.Comments.drop()
// db.Suggestions.drop()



//Insertamos a los users

db.Users.insert([{
  "userId": 1,
  "username": "JRC",
  "password": "12345",
  "firstname": "JAIRO",
  "lastname": "CABELLO",
  "address": "AV. PERIMETRICA MZ A LT 5 ,CARABAYLLO",
  "birthdate": new Date("1997-12-25"),
  "phone": "926169901",
  "gender": "M",
  "email": "ronal.cabello@unmsm.edu.pe",
  "dni": "73305601",
  "role": "worker"
}, {
  "userId": 2,
  "username": "LG",
  "password": "1234",
  "firstname": "LUIS",
  "lastname": "GERMAN",
  "address": "AV. INDUSTRIAL MZ B LT 5",
  "birthdate": new Date("1999-10-04"),
  "phone": "926169902",
  "dni": "73305602",
  "gender": "M",
  "email": "luis.german@unmsm.edu.pe",
  "role": "worker"
}, {
  "userId": 3,
  "username": "AR",
  "password": "1234",
  "firstname": "ALEX",
  "lastname": "ROJAS",
  "address": "AV. MEXICO MZ C LT 20",
  "birthdate": new Date("1999-08-05"),
  "phone": "926169903",
  "dni": "73305603",
  "gender": "M",
  "email": "alex.rojas@unmsm.edu.pe",
  "role": "worker"
}, {
  "userId": 4,
  "username": "HF",
  "password": "123456",
  "firstname": "HECTOR",
  "lastname": "FLORES",
  "address": "AV. TUPAC MZ D LT 30",
  "birthdate": new Date("1999-10-04"),
  "phone": "926169902",
  "dni": "73305604",
  "gender": "M",
  "email": "hector.flores@unmsm.edu.pe",
  "role": "worker"
}, {
  "userId": 5,
  "username": "GISO",
  "password": "123456",
  "firstname": "GIL",
  "lastname": "SALINAS",
  "address": "AV. TUPAC MZ D LT 40",
  "birthdate": new Date("1960-10-04"),
  "phone": "852635742",
  "dni": "73305605",
  "gender": "M",
  "email": "gil.salinas@unmsm.edu.pe",
  "role": "worker"
}, {
  "userId": 6,
  "username": "DMS",
  "password": "98989",
  "firstname": "Diego",
  "lastname": "Mara",
  "address": "AV. TUPAC MZ D LT 50",
  "birthdate": new Date("1970-10-04"),
  "phone": "992486122",
  "dni": "73305606",
  "gender": "M",
  "email": "diego.mara@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 7,
  "username": "DM",
  "password": "989456",
  "firstname": "Diego",
  "lastname": "Mara",
  "address": "AV. TUPAC MZ D LT 50",
  "birthdate": new Date("1970-10-04"),
  "phone": "992486122",
  "dni": "73305606",
  "gender": "M",
  "email": "diego.mara@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 8,
  "username": "LMJ",
  "password": "989456",
  "firstname": "Luis",
  "lastname": "Fernando",
  "address": "AV. TUPAC MZ D LT 50",
  "birthdate": new Date("1970-10-04"),
  "phone": "992486122",
  "dni": "73305602",
  "gender": "M",
  "email": "luis.fernando@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 9,
  "username": "KRM",
  "password": "9156515",
  "firstname": "Karen",
  "lastname": "Huaman",
  "address": "AV. TUPAC MZ D LT 50",
  "birthdate": new Date("1970-10-04"),
  "phone": "902486100",
  "dni": "73301111",
  "gender": "F",
  "email": "karen.huaman@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 10,
  "username": "JRCC",
  "password": "123461",
  "firstname": "JAIRO",
  "lastname": "CABELLO",
  "address": "AV. PERIMETRICA MZ A LT 5 ,CARABAYLLO",
  "birthdate": new Date("1997-12-25"),
  "phone": "926169901",
  "gender": "M",
  "email": "ronal.cabello@unmsm.edu.pe",
  "dni": "73305601",
  "role": "client"
}, {
  "userId": 11,
  "username": "CRL",
  "password": "981546",
  "firstname": "Claudia",
  "lastname": "Cabello",
  "address": "AV.Lomas MZ A LT 5",
  "birthdate": new Date("1970-10-04"),
  "phone": "997894165",
  "dni": "73305664",
  "gender": "M",
  "email": "claudia.cabello@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 12,
  "username": "AAA",
  "password": "989456",
  "firstname": "Ana",
  "lastname": "Amparo",
  "address": "AV.San Juan MZ E LT 1",
  "birthdate": new Date("1970-10-08"),
  "phone": "942086122",
  "dni": "78305602",
  "gender": "F",
  "email": "ana.amparo@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 13,
  "username": "FMA",
  "password": "9467456",
  "firstname": "Freddy",
  "lastname": "Mamani",
  "address": "AV.Panamericana MZ F LT 15",
  "birthdate": new Date("1970-10-04"),
  "phone": "990006122",
  "dni": "95305602",
  "gender": "M",
  "email": "freddy.mamani@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 14,
  "username": "Hiro",
  "password": "789415",
  "firstname": "Jairo",
  "lastname": "Sotelo",
  "address": "AV.Trapiche MZ B LT 15",
  "birthdate": new Date("1970-10-05"),
  "phone": "925894165",
  "dni": "80305664",
  "gender": "M",
  "email": "jairo.sotelo@unmsm.edu.pe",
  "role": "client"
}, {
  "userId": 15,
  "username": "Damaris",
  "password": "147856",
  "firstname": "Damaris",
  "lastname": "Cordova",
  "address": "AV.Pierola MZ 2 LT 78",
  "birthdate": new Date("1970-09-05"),
  "phone": "905891165",
  "dni": "88305664",
  "gender": "F",
  "email": "damaris.cordova@unmsm.edu.pe",
  "role": "client"
}])


//Insertamos a los cellphones

db.Cellphones.insert([{
  "cellphoneId": 1,
  "brand": "SAMSUNG",
  "model": "GALAXY A0",
  "quality": "GAMA MEDIA",
  "price": 400,
  "stock": 50,
  "description": "GALAXY A10 ES UN TELEFONO INTELIGENTE ECONÓMICO DE LA SERIE A",
  "os": "ANDROID 9.0(PIE)",
  "memory": "32GB ,2GB RAM"
}, {
  "cellphoneId": 2,
  "brand": "SAMSUNG",
  "model": "GALAXY A20",
  "quality": "GAMA MEDIA",
  "price": 600,
  "stock": 20,
  "description": "CUENTA CON SENSOR DE HUELLA , ACELERÓMETRO , GIROSCOPIO ,SENSOR DE PROXIMIDAD, BRUJULA",
  "os": "ANDROID 9.0(PIE)",
  "memory": "32GB , 3GB RAM"
}, {
  "cellphoneId": 3,
  "brand": "SAMSUNG",
  "model": "GALAXY S30",
  "quality": "GAMA ALTA",
  "price": 800,
  "stock": 100,
  "description": "RESISTE AL POLVO Y AL AGUA",
  "os": "ANDROID 9.0(PIE)",
  "memory": "64GB , 4GB RAM"
}, {
  "cellphoneId": 4,
  "brand": "SAMSUNG",
  "model": "GALAXY J8",
  "quality": "GAMA MEDIA",
  "price": 1100,
  "stock": 20,
  "description": "RESISTE AL POLVO Y AL AGUA",
  "os": "ANDROID 8.0",
  "memory": "64GB , 4GB RAM"
}, {
  "cellphoneId": 5,
  "brand": "SAMSUNG",
  "model": "GALAXY A70",
  "quality": "GAMA ALTA",
  "price": 1200,
  "stock": 600,
  "description": "CUENTA CON SENSOR DE HUELLA , ACELERÓMETRO , GIROSCOPIO ,SENSOR DE PROXIMIDAD Y BRUJULA",
  "os": "ANDROID 9.0(PIE)",
  "memory": "128GB , 6GB RAM"
}])

//Insertamos a los chip 

db.Chips.insert([{
  "chipId": 1,
  "plan": "PREPAGO",
  "provider": "MOVISTAR",
  "balance": 0,
  "number": "926169001",
  "dni_user": "73305601"
}, {
  "chipId": 2,
  "plan": "PREPAGO",
  "provider": "MOVISTAR",
  "balance": 0,
  "number": "926169002",
  "dni_user": "73305602"
}, {
  "chipId": 3,
  "plan": "PREPAGO",
  "provider": "MOVISTAR",
  "balance": 0,
  "number": "926169003",
  "dni_user": "73305603"
}, {
  "chipId": 4,
  "plan": "POSTPAGO",
  "provider": "MOVISTAR",
  "balance": 10,
  "number": "926169004",
  "dni_user": "73305604"
}, {
  "chipId": 5,
  "plan": "POSTPAGO",
  "provider": "MOVISTAR",
  "balance": 10,
  "number": "926169005",
  "dni_user": "73305605"
}, {
  "chipId": 6,
  "plan": "PREPAGO",
  "provider": "CLARO",
  "balance": 0,
  "number": "926169006",
  "dni_user": "73305606"
}, {
  "chipId": 7,
  "plan": "POSTPAGO",
  "provider": "CLARO",
  "balance": 30,
  "number": "926169007",
  "dni_user": "73305607"
}, {
  "chipId": 8,
  "plan": "PREPAGO",
  "provider": "CLARO",
  "balance": 0,
  "number": "926169008",
  "dni_user": "73305608"
}, {
  "chipId": 9,
  "plan": "POSTPAGO",
  "provider": "CLARO",
  "balance": 40,
  "number": "926169009",
  "dni_user": "73305609"
}, {
  "chipId": 10,
  "plan": "POSTPAGO",
  "provider": "BITEL",
  "balance": 30,
  "number": "926169010",
  "dni_user": "73305610"
}, {
  "chipId": 11,
  "plan": "POSTPAGO",
  "provider": "ENTEL",
  "balance": 50,
  "number": "926169011",
  "dni_user": "73305611"
}])


//Insertamos Internet 

db.Internets.insert([{
    "internetId": 1,
    "speed": 20,
    "upload_speed": 3,
    "cost": 59
  },
  {
    "internetId": 2,
    "speed": 40,
    "upload_speed": 4,
    "cost": 59
  },
  {
    "internetId": 3,
    "speed": 80,
    "upload_speed": 8,
    "cost": 90
  },
  {
    "internetId": 4,
    "speed": 150,
    "upload_speed": 15,
    "cost": 140
  },
  {
    "internetId": 5,
    "speed": 240,
    "upload_speed": 25,
    "cost": 199
  },
  {
    "internetId": 6,
    "speed": 600,
    "upload_speed": 50,
    "cost": 390
  },
  {
    "internetId": 7,
    "speed": 1000,
    "upload_speed": 50,
    "cost": 490
  }
])


//Insertamos a los Problemas (publicos, abiertos a todo el mundo)

db.Problems.insert([{
  "problemId": 1,
  "userId": 10,
  "category": "Internet",
  "title": "Problemas con mi Wifi",
  "description": "¿Por qué mi red wifi falla demasiado? ¿Es normal? Tengo un internet de 60 Mbps por favor ayuda",
  "date": new Date("1997-12-30"),
  "score": 3,
  "solved": true,
  "isPrivate": false,
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
}, {
  "problemId": 2,
  "userId": 6,
  "category": "Internet",
  "title": "Problemas de velocidad de internet",
  "description": "¿Cómo aumento la velocidad de mi internet? Tengo un 1 Play de 15 Mpbs",
  "date": new Date("1997-11-01"),
  "score": 1,
  "solved": true,
  "isPrivate": false,
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047'
}, {
  "problemId": 3,
  "userId": 11,
  "category": "Celular",
  "title": "Mi celular vino con la pantalla rallada",
  "description": "¿Cómo se podria solucionar eso?",
  "date": new Date("1997-11-02"),
  "score": 3,
  "solved": false,
  "isPrivate": false,
}, {
  "problemId": 4,
  "userId": 16,
  "category": "Celular",
  "title": "Seguro ante robo o hurto",
  "description": "¿El Seguro te protege ante el robo o hurto de tu móvil?",
  "date": new Date("1997-12-02"),
  "score": 5,
  "solved": true,
  "isPrivate": false,
}, {
  "problemId": 5,
  "userId": 16,
  "category": "Chip",
  "title": "¿Cómo puedo migrar a postpago?",
  "description": "Quiero tener un plan mensual",
  "date": new Date("1997-12-02"),
  "score": 2,
  "solved": true,
  "isPrivate": false,
}, {
  "problemId": 1,
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
  "userId": 10,
  "category": "Chip",
  "title": "No se reconoce mi chip",
  "description": "No se reconoce mi chip",
  "date": new Date("1997-12-30"),
  "solved": true,
  "isPrivate": true,
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
}])




//Insertamos a los Comentarios

db.Comments.insert([{
  "commentId": 1,
  "problemId": 1,
  "userId": 3,
  "content": "En casa también tenemos claro hogar de 60 mbps, es un router sagemcom y antes teníamos muchas caídas en todos nuestros dispositivos WiFi, así que compramos en estabilizador eléctrico que conectamos al router y las caídas han bajado notablemente.Quizás otros compañeros también puedan dejarte sus consejos. Y si a pesar de los cuidados tu red WiFi sigue teniendo problemas puedes comunicarte con un asesor de Claro al 123 o por el chat de Facebook de Claro para solicitar la visita de servicio técnico y si fuera necesario solicitar cambio de router.",
  "score": 2,
  "date": new Date("1997-12-31"),
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
}, {
  "commentId": 2,
  "problemId": 1,
  "userId": 11,
  "content": " Q tal gary,Entiendo tu malestar porq pase por lo mism. Te recomiendo apagues y enciendas tu router, también que cambies tu clave y por último informar sobre tus problemas llamando al 123 y comunicarte con un asesor.",
  "score": 1,
  "date": new Date("1997-12-31"),
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
}, {
  "commentId": 3,
  "problemId": 1,
  "userId": 13,
  "content": " Muy fácil llamando al 123, también comunicándote con un asesor por el inbox del Facebook de claro (Mucho más rápido).Espero que te sirva la información, si es así acéptala como solución y regálame un like.Saludos.",
  "score": 2,
  "date": new Date("1997-11-01")
}, {
  "commentId": 4,
  "problemId": 2,
  "userId": 12,
  "content": "buenas noches si quieres mejorar tu línea te sugiero que no aumentes tu plan mejor paga una VPN ya que eso te garantiza el 90% de tu velocidad contratada(cosa que claro no puede hacer con la velocidad de subida) con ligeros aumentos de la misma y con un solo pago anual, además el sistema de claro esta en conflictos internos por lo cual puede que tu tramite se traspapele (por decirlo así) y luego pagaras otro plan que no querías(por ejemplo tu solo pediste un aumento pero quizás te pongan en un dúo o trio ya que generalmente las velocidades mayores solo están disponibles bajo esos planes)",
  "score": 3,
  "date": new Date("1997-11-02"),
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047'
}, {
  "commentId": 5,
  "problemId": 2,
  "userId": 13,
  "content": "Tienes que mirar bien el cel antes de que puedas llevartelo",
  "score": 1,
  "date": new Date("1997-11-03"),
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047'
}, {
  "commentId": 6,
  "problemId": 3,
  "userId": 12,
  "content": "Bueno en ese caso puedes llamar a atención al cliente para que te lo puedan cambiar",
  "score": 4,
  "date": new Date("1997-11-03")
}, {
  "commentId": 7,
  "problemId": 3,
  "userId": 2,
  "content": "si te roban el móvil, el trastorno puede ser importante tanto en tu vida laboral como cotidiana, por eso nos preocupamos por minimizar el daño causado",
  "score": 4,
  "date": new Date("1997-12-06")
}])



//Insertamos a los Sugerencias

db.Suggestions.insert([{
  "suggestionId": 1,
  "userId": 10,
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
  "category": "Internet",
  "title": "Soporte para el Handshake DNS",
  "description": "El DNS de Movistar podría resolver los nombres de Handshake ",
  "date": new Date("1997-12-30"),
}, {
  "suggestionId": 2,
  "userId": 6,
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
  "category": "Celular",
  "title": "Más móviles homologados para llamadas VoLTE",
  "description": "Propongo que los que estéis interesados en que Movistar amplíe la oferta de dispositivos homologados para las llamadas VoLTE (Voz 4G) lo comentéis en este post. ",
  "date": new Date("1997-11-01"),
}, {
  "suggestionId": 3,
  "userId": 11,
  "image": 'https://cdn.shopify.com/s/files/1/1142/1404/articles/No_Service_on_your_Cell_Phone_14_Ways_You_Can_Fix_That_large.png?v=1539896047',
  "category": "Internet",
  "title": "PROMOCION VERANO",
  "description": "¿Vais a lanzar alguna pormocion con gigas de regalo/ilimitadas para este verano como estan haciendo otras compañias? No he visto publicidad ni leido nada como otros años.",
  "date": new Date("1997-11-02"),
}])


//Insertamos a los Likes
db.Likes.insert([{
  "date": new Date("2020-09-28T20:47:11.074Z"),
  "problemId": 1,
  "userId": 2
}, {
  "date": new Date("2020-09-28T23:07:28.131Z"),
  "problemId": 1,
  "userId": 5
}, {
  "date": new Date("2020-09-29T00:29:21.882Z"),
  "problemId": 1,
  "userId": 4
}, {
  "date": new Date("2020-09-29T00:29:21.882Z"),
  "problemId": 2,
  "userId": 1
}])

//Insertamos a los Dislikes
db.Dislikes.insert([{
  "date": new Date("2020-09-28T23:20:14.645Z"),
  "problemId": 1,
  "userId": 1
}])


//Consultas

/* 1.cantidad de problemas por día en una semana (Jairo) */

/* db.Problems.aggregate([{$match:{date:{"$gt": new Date("1997-11-00"), "$lt":new Date("1997-11-07")}}},{$group:{_id:"$date",count:{$sum:1}}},{$sort:{count:-1}}]) */

/* 2.cantidad de problemas por día en una mes(Jairo) */

/* db.Problems.aggregate([{$match:{date:{"$gt": new Date("1997-11-00"), "$lt":new Date("1997-11-30")}}},{$group:{_id:"$date",count:{$sum:1}}},{$sort:{count:-1}}]) */

/* 3.cantidad de problemas por categoría (Jairo) */

/* > db.Problems.aggregate([{$group:{_id:"$category",count:{$sum:1}}}]) */


/* 4.problemas más comentados (Jairo) */

/* db.Comments.aggregate([{$group:{_id:"$problemId",count:{$sum:1}}}]) */

/* 5.sugerencia con mayor score (Jairo) */

/* db.Suggestions.find({},{_id:0,suggestionId:1,score:1}).sort({score:-1}).limit(1) */


/* 6.problema con mayor score (Jairo) */

/* db.Problems.find({},{_id:0,problemId:1,score:1}).sort({score:-1}).limit(1) */