import { FastifyInstance } from "fastify";

// ceation d'un type pour notre route
export type CalcRoute = {
  Params: {
    x: string;
    y: string;
  };
};

export type CalculateRoute = {
  Headers: {
    operation: string;
  };
  Body: {
    x: number;
    y: number;
  };
};

export default async function CalculateRoute(app: FastifyInstance) {
  // pour décorer l'application
  //app.decorate('collection','calculate_collection')

  // ceation d 'une route permettznt d'additionner 2 NOMBRES
  app.get<CalcRoute>("/calc/add/:x/:y", async (request) => {
    const x = parseFloat(request.params.x);
    const y = parseFloat(request.params.y);

    //Résultat calcultrice
    const result = {
      result: x + y,
      x: x,
      y: y,
      operation: "add",
    };
    // Enreigistré ce « result » dans la collection `calulcalatrice` de
    // votre mongodb !

    const resultat = await app.mongo.db?.collection("calculatrices").insertOne({
      resultat: result,
    });

    //on retourne l'objet resultat
    return result;
  });

  // ceation d 'une route permettznt de substractu=ion 2 NOMBRES
  app.get<CalcRoute>("/calc/sub/:x/:y", async (request) => {
    const x = parseFloat(request.params.x);
    const y = parseFloat(request.params.y);

    //on retourne l'objet resultat
    const result = {
      result: x - y,
      x: x,
      y: y,
      operation: "sub",
    };

    const resultat = await app.mongo.db?.collection("calculatrices").insertOne({
      resultat: result,
    });
    return result;
  });

  // ceation d 'une route permettznt de substractu=ion 2 NOMBRES
  app.get<CalcRoute>("/calc/mul/:x/:y", async (request) => {
    const x = parseFloat(request.params.x);
    const y = parseFloat(request.params.y);

    //on retourne l'objet resultat
    const result = {
      result: x * y,
      x: x,
      y: y,
      operation: "mul",
    };
    const resultat = await app.mongo.db?.collection("calculatrices").insertOne({
      resultat: result,
    });

    return result;
  });

  // ceation d 'une route permettznt de substractu=ion 2 NOMBRES
  app.get<CalcRoute>("/calc/div/:x/:y", async (request, response) => {
    const x = parseFloat(request.params.x);
    const y = parseFloat(request.params.y);
    if (y == 0) {
      response.code(400);

      const resultat = await app.mongo.db
        ?.collection("calculatrices")
        .insertOne({
          Error: "division par 0",
          message: "on peut pas diviser sur 0",
        });
      return resultat;
    }
    //on retourne l'objet resultat
    const result = {
      result: x / y,
      x: x,
      y: y,
      operation: "div",
    };
    const resultat = await app.mongo.db?.collection("calculatrices").insertOne({
      resultat: result,
    });
    return result;
  });

  app.post<CalculateRoute>("/calculate", async (request, response) => {
    // Récupére l'opération
    const operation = request.headers.operation;
    // ON récupére x et y
    const x = request.body.x;
    const y = request.body.y;

    if (operation === "add") {
      const result = {
        result: x + y,
        x: x,
        y: y,
        operation: operation,
      };

      const resultat = await app.mongo.db
        ?.collection("calculatrices")
        .insertOne({
          resultat: result,
        });

      return result;
    }

    if (operation === "sub") {
      const result = {
        result: x - y,
        x: x,
        y: y,
        operation: operation,
      };
      const resultat = await app.mongo.db
        ?.collection("calculatrices")
        .insertOne({
          resultat: result,
        });
      return result;
    }

    if (operation === "mul") {
      const result = {
        result: x * y,
        x: x,
        y: y,
        operation: operation,
      };

      const resultat = await app.mongo.db
        ?.collection("calculatrices")
        .insertOne({
          resultat: result,
        });
      return result;
    }

    if (operation === "div") {
      if (y === 0) {
        response.code(400);

        const resultat = await app.mongo.db
          ?.collection("calculatrices")
          .insertOne({
            error: "division par 0",
            message: "Il est impossible de diviser par 0",
          });
        return resultat;
      }

      const result = {
        result: x / y,
        x: x,
        y: y,
        operation: operation,
      };
      const resultat = await app.mongo.db
        ?.collection("calculatrices")
        .insertOne({
          resultat: result,
        });
      return result;
    }

    response.code(400);
    const resultat = await app.mongo.db?.collection("calculatrices").insertOne({
      error: "invalide operation",
      message: `Je ne connais l'opération ${operation} :/`,
    });
    return resultat;
  });

  app.get("/calculatrice/results", async() => {
    const documents = await app.mongo.db?.collection('calculatrices')
  .find()
  .toArray()
    return documents;
  });

}


