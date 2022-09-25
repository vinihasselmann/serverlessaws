"use strict";
const { DateTime } = require('luxon')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Bem vindo a ArauGrow",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.now = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: DateTime.now().toHTTP().toString(),
        input: event,
      },
      null,
      2
    ),
  };
};
