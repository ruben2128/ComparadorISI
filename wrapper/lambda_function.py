import json
import boto3
from custom_encoder import CustomEncoder
import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodbTableName = 'Ordenador'
dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
table = dynamodb.Table(dynamodbTableName)

getMethod = 'GET'
healthPath = '/health'
ordenador = '/ordenador'
ordenadores = '/ordenadores'

def lambda_handler(event, context):
    logger.info(event)
    httpMethod = event['httpMethod']
    path = event['path']

    if httpMethod == getMethod and path == healthPath:
        response = buildResponse(200)
    elif httpMethod == getMethod and path == ordenador:
        response = getOrdenador(event['queryStringParameters']['ordenadorId'])
    elif httpMethod == getMethod and path == ordenadores:
        response = getOrdenadores()
    else:
        response = buildResponse(404, 'Not Found')
    
    return response







def buildResponse(statusCode, body=None):


    response = {
        'statusCode': statusCode,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(body)
    }
    return response



def getOrdenador(ordenadorId):

    try:
        response = table.get_item(
            Key= {  
                'ordenadorId': ordenadorId
            }
        )
        if 'Item' in response:
            body = {
            'ordenador' : 'prueba'
            }
            
            return buildResponse(200, body)
        else:
            return buildResponse(404, {'Message': 'modelo: %s not found' % id})

    except:
        body = {
            'ordenador' : 'prueba'
        }
            
        return buildResponse(200, body)



def getOrdenadores():
    try:
        response = table.scan()
        data = response['Items']


        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
            data.extend(response['Items'])

        result = []
        for item in data:
            x = {
                'ordenadorId': item['ordenadorId'],
                'modelo': item['modelo'],
                'cpu': item['cpu'],
                'grafica': item['grafica'],
                'marca': item['marca'],
                'categoria': item['categoria'],
                'almacenamiento': item['almacenamiento'],
                'memoria_ram': item['memoria_ram']
            }
            result.append(x)

        print(x)

        body = {
            'ordenadores' : result
        }
        
        return buildResponse(200, body)

    except:
        logger.exception('Do your custom error handlign here. I am just gonna log it out here!!')
