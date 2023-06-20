
db.createCollection( 'usuario', {validator: {$jsonSchema: {bsonType: 'object',title:'usuario',required: [         '_idUsuario',          'nombre',          'email',          'password',          'fechaNacimiento',          'sexo',          'pais',          'cp',          'publicacion',          'comentarios',          'videoYOUTUBE',          'Playlist'],properties: {_idUsuario: {bsonType: 'int'},nombre: {bsonType: 'string'},email: {bsonType: 'string'},password: {bsonType: 'string'},fechaNacimiento: {bsonType: 'date'},sexo: {enum: (femenino,masculino)},pais: {bsonType: 'string'},cp: {bsonType: 'int'},publicacion: {bsonType: 'array',items: {bsonType: 'string'}},comentarios: {bsonType: 'array',items: {
title:'object',required: [         'idComentarios',          'texto',          'fechaHora'],properties: {idComentarios: {bsonType: 'int'},texto: {bsonType: 'string'},fechaHora: {bsonType: 'string'}}}},videoYOUTUBE: {bsonType: 'objectId'},Playlist: {bsonType: 'array',items: {
title:'object',required: [         '_idPlaylist',          'nombre',          'fechaCreacion',          'estado'],properties: {_idPlaylist: {bsonType: 'int'},nombre: {bsonType: 'string'},fechaCreacion: {bsonType: 'date'},estado: {bsonType: 'array',items: {
title:'object',required: [         'publica',          'privada'],properties: {publica: {bsonType: 'bool'},privada: {bsonType: 'bool'}}}}}}}}         }      }});  