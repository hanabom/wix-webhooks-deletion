const sqldel = (WixID) => 'DELETE FROM products WHERE WixID =' + WixID + ';';
const sqlget = () => "SELECT * FROM products";

module.exports = { sqldel, sqlget };