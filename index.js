const { uploadHanabom, putHanabom } = require("./hanabomAPI");
const { dbAction, dbEnd } = require("./db");

const handler = async (event) => {
  // Get Wix Created Item and Upload on Hanabom
  const eventBody = JSON.parse(event.body);
  const eventId = eventBody.id;

  // Delete From DB
  const sql = helpers.sql(eventId);

  dbAction(sql, (sqlData) => sqlData );
  dbEnd();

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("New Product updated"),
  };
  return response;
};

exports.handler = handler;