const ajvInstance = require("../../config/ajv-instance");

const updateMovieREQSchema = {

  type: "object",

  properties: {

    title: {
      type: "string",
      minLength: 2
    },

    year: {
      type: "number"
    },

    posterUrl: {
      type: "string",
      format: "uri"
    },

    ratings: {
      type: "number",
      minimum: 0,
      maximum: 10
    },

    favourite: {
      type: "boolean"
    },

    watched: {
      type: "boolean"
    }


  },



  additionalProperties: false
};

module.exports = ajvInstance.compile(updateMovieREQSchema);