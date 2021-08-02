const { delHanabom } = require("./hanabomAPI");
const { dbAction, dbEnd } = require("./db");
const helpers = require("./helpers");

const handler = async (event) => {
  // Get Wix Created Item and Upload on Hanabom
  const eventBody = JSON.parse(event.body);
  const eventId = eventBody._id;

  // Delete Item From Hanabom
  const sql = helpers.sqlget();

  dbAction(sql, results => results.forEach(element => {
    if(element.wixId == eventId){
        delHanabom(element.hanaId);
    }
  }));
  
  // Delete From DB
  const sql = helpers.sqldel(eventId);

  console.log(sql);
  dbAction(sql, (results) => {
    console.log(results);
    return results;
  });

  dbEnd();

  // return code
  const response = {
    statusCode: 200,
    body: JSON.stringify("Product Deletion Implemented"),
  };
  return response;
};

exports.handler = handler;