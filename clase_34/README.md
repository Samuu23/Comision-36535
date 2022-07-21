# Teoría

## Objetivos

- Presentar AWS (Amazon Web Services) y crear una cuenta.
- Recorrer e implementar a partir de la plataforma Elastic Beanstalk de AWS. 
- Desarrollar un proyecto de Node en la plataforma de AWS.

## Plataforma AWS

- Amazon Web Services (AWS) es una plataforma en la nube muy adoptada y completa.
- Ofrece más de 200 servicios integrales de centros de datos a nivel global. Muchas empresas lo utilizan y con esto reducen los costos, aumentan su agilidad e innovan de forma más rápida.

En esta clase utilizaremos la plataforma Elastic Beanstalk de AWS para implementar aplicaciones NodeJS en la nube.

👉 Ten en cuenta que al crearnos una cuenta en AWS nos piden una tarjeta de crédito.
Sin embargo, si hacemos las pruebas y luego lo borramos será sin cargo.

## Advertencia

- Para crear una cuenta en AWS, la plataforma solicitará los datos de una tarjeta de crédito.
- Si hacemos las pruebas y luego lo borramos no generará cargos. De todos modos, a fines de este curso no será obligatorio que lo hagas.

## Plataforma Elastic Beanstalk

- Administra de manera automática la implementación de nuestra aplicación (desde el aprovisionamiento de la capacidad, el balanceo de carga y el auto escalamiento hasta la monitorización del estado) ingresando únicamente el código.
- Ajusta el escalado de la aplicación automáticamente en función de las necesidades específicas de las aplicaciones. Para ello utiliza una configuración de Auto Scaling que se puede adaptar con facilidad.

Usaremos también Amazon DynamoDB que es un servicio de base de datos NoSQL rápido y flexible, completamente administrado en la nube, compatible con modelos de almacenamiento de valor de clave y de documentos.

## Recursos de Elastic Beanstalk

- Instancia EC2
- Grupo de seguridad de la instancia
- Balanceador de carga
- Grupo de seguridad del balanceador de carga
- Grupo de Auto Scaling
- Bucket de Amazon S3
- Alarmas de Amazon CloudWatch
- Scaling aumenta o reduce los recursos
- Pila de AWS CloudFormation
- Nombre de dominio

- Instancia EC2:

Máquina virtual de Amazon Elastic Compute Cloud (Amazon EC2) configurada para ejecutar aplicaciones web en la plataforma que elija. Cada plataforma ejecuta un conjunto específico de software, archivos de configuración y scripts compatibles con una determinada versión de lenguaje, marco de trabajo y contenedor web (o una combinación de estos). La mayoría de las plataformas utilizan Apache o nginx como un proxy inverso que se sitúa delante de la aplicación web, reenvía las solicitudes a esta, administra los recursos estáticos y genera registros de acceso y errores.

- Grupo de seguridad de la instancia:

Grupo de seguridad de Amazon EC2 configurado para permitir el tráfico entrante en el puerto 80. Este recurso permite que el tráfico HTTP procedente del balanceador de carga llegue a la instancia EC2 en la que se ejecuta la aplicación web. De forma predeterminada, el tráfico no está permitido en otros puertos.

- Balanceador de carga:

Balanceador de carga de Elastic Load Balancing que está configurado para distribuir solicitudes a las instancias que se ejecutan en la aplicación. También permiten que las instancias no estén expuestas directamente a Internet.

- Grupo de seguridad del balanceador de carga:

Grupo de seguridad como el de la instancia. 

- Grupo de Auto Scaling:

Está configurado para reemplazar una instancia si termina o deja de estar disponible.

- Bucket de Amazon S3:

Ubicación de almacenamiento para el código fuente, los registros y otros artefactos que se crean al utilizar Elastic Beanstalk.

- Alarmas de Amazon CloudWatch:

Dos alarmas de CloudWatch que monitoriean la carga recibida por las instancias y que se activan si la carga es demasiado alta o demasiado baja. Cuando se activa una alarma, en respuesta, el grupo de Auto Scaling aumenta o reduce los recursos.

- Plataforma de AWS CloudFormation:

Elastic Beanstalk utiliza AWS CloudFormation para lanzar los recursos del entorno y propagar los cambios de configuración.

- Nombre de dominio:

Nombre de dominio que direcciona el tráfico a la aplicación web con el formato subdominio.region.elasticbeanstalk.com.

> Proyecto AWS
const dynamodb = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = 'product-inventory'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('test api')
})

app.get('/api/productos', async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  }
  try {
    const productos = await scanDynamoRecords(params)
    res.json(productos)
  } catch (error) {
    console.error('Ocurrió un error: ', error)
    res.sendStatus(500)
  }
})

app.get('/api/productos/:id', (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      productId: req.params.id,
    },
  }
  dynamodb
    .get(params)
    .promise()
    .then(response => {
      res.json(response.Item)
    })
    .catch(error => {
      console.error('Ocurrió un error: ', error)
      res.sendStatus(500)
    })
})

app.post('/api/productos', (req, res) => {
  const newProduct = req.body
  newProduct.productId = `product-${Date.now()}`

  const params = {
    TableName: TABLE_NAME,
    Item: newProduct,
  }
  dynamodb
    .put(params)
    .promise()
    .then(() => {
      console.log('se guardó')
      const prod = JSON.stringify(newProduct)
      return sns
        .publish({
          Message: `nuevo producto agregado! ${prod}`,
          Subject: 'nuevo producto',
          TopicArn: SNS_TOPIC_ARN,
        })
        .promise()
    })
    .then(data => {
      console.log('se notificó')
      console.log(data)

      const body = {
        Operation: 'SAVE',
        Message: 'SUCCESS',
        Item: newProduct,
      }
      res.json(body)
    })
    .catch(error => {
      console.error('Ocurrió un error: ', error)
      res.status(500).end()
    })
})

app.put('/api/productos/:id', (req, res) => {
  const item = {
    ...req.body,
    productId: req.params.id,
  }
  const params = {
    TableName: TABLE_NAME,
    Item: item,
  }
  dynamodb
    .put(params)
    .promise()
    .then(() => {
      const body = {
        Operation: 'UPDATE',
        Message: 'SUCCESS',
        Item: item,
      }
      res.json(body)
    })
    .catch(error => {
      console.error('Ocurrió un error: ', error)
      res.sendStatus(500)
    })
})

app.delete('/api/productos/:id', (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      productId: req.params.id,
    },
    ReturnValues: 'ALL_OLD',
  }
  dynamodb
    .delete(params)
    .promise()
    .then(response => {
      const body = {
        Operation: 'DELETE',
        Message: 'SUCCESS',
        Item: response,
      }
      res.json(body)
    })
    .catch(error => {
      console.error('Ocurrió un error: ', error)
      res.sendStatus(500)
    })
})

async function scanDynamoRecords(scanParams) {
  try {
    let dynamoData = await dynamodb.scan(scanParams).promise()
    const items = dynamoData.Items
    while (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey
      dynamoData = await dynamodb.scan(scanParams).promise()
      items.push(...dynamoData.Items)
    }
    return items
  } catch (error) {
    throw new Error(error)
  }
}

const port = process.env.PORT || 8080
const server = app.listen(port, () => {
  console.log(`Escuchando en puerto ${server.address().port}`)
})
server.on('error', error => {
  console.log(error)
})
