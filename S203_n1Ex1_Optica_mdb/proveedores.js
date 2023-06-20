
db.createCollection( 'proveedores', {validator: {$jsonSchema: {bsonType: 'object',title:'proveedores',required: [         'name',          'telefono',          'fax',          'nif',          'direccion'],properties: {name: {bsonType: 'string'},telefono: {bsonType: 'int'},fax: {bsonType: 'int'},nif: {bsonType: 'int'},direccion: {bsonType: 'array',items: {
title:'object',required: [         'calle',          'numero',          'piso',          'puerta',          'ciudad',          'cp',          'pais'],properties: {calle: {bsonType: 'string'},numero: {bsonType: 'int'},piso: {bsonType: 'int'},puerta: {bsonType: 'int'},ciudad: {bsonType: 'string'},cp: {bsonType: 'int'},pais: {bsonType: 'string'}}}}}         }      }});  