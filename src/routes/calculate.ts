import { FastifyInstance } from "fastify";

// ceation d'un type pour notre route
export type CalcRoute = {
    Params:{
      x: string
      y:string
    }
  }
 
  export type CalculateRoute = {
    Headers: {
      operation: string
    }
    Body: {
      x: number
      y: number
    }
  }

export default async function CalculateRoute(app:FastifyInstance) {
// pour décorer l'application
app.decorate('collection','calculate_collection')
  


    // ceation d 'une route permettznt d'additionner 2 NOMBRES
app.get<CalcRoute>('/calc/add/:x/:y', async(request)=> {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    
    
  
    //on retourne l'objet resultat
    return {
      result: x + y,
      x:x,
      y:y,
      operation: 'add',
    }
  });
  
  
  // ceation d 'une route permettznt de substractu=ion 2 NOMBRES
  app.get<CalcRoute>('/calc/sub/:x/:y', async (request) => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    
    //on retourne l'objet resultat
    return {
      result: x - y,
      x:x,
      y:y,
      operation: 'sub',
    }
  });
  
  // ceation d 'une route permettznt de substractu=ion 2 NOMBRES
  app.get<CalcRoute>('/calc/mul/:x/:y', async(request) => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    
    //on retourne l'objet resultat
    return {
      result: x * y,
      x:x,
      y:y,
      operation: 'mul',
    }
  });
  
  
  // ceation d 'une route permettznt de substractu=ion 2 NOMBRES
  app.get<CalcRoute>('/calc/div/:x/:y', async(request,response) => {
    const x = parseFloat(request.params.x)
    const y = parseFloat(request.params.y)
    if(y == 0)
    {
      response.code(400);
  
      return {
        Error:"division par 0",
        message:'on peut pas diviser sur 0'
      }
    }
    //on retourne l'objet resultat
    return {
      result: x / y,
      x:x,
      y:y,
      operation: 'div',
    }
  });


  
  
  app.post<CalculateRoute>('/calculate', async(request, response) => {
    // Récupére l'opération
    const operation = request.headers.operation
    // ON récupére x et y
    const x = request.body.x
    const y = request.body.y
  
    if (operation === 'add') {
      return {
        result: x + y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    if (operation === 'sub') {
      return {
        result: x - y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    if (operation === 'mul') {
      return {
        result: x * y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    if (operation === 'div') {
      if (y === 0) {
        response.code(400)
  
        return {
          error: 'division par 0',
          message: 'Il est impossible de diviser par 0',
        }
      }
  
      return {
        result: x / y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    response.code(400)
  
    return {
      error: 'invalide operation',
      message: `Je ne connais l'opération ${operation} :/`,
    }
  })
  


    
}

