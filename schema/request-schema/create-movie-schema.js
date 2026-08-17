const ajvInstance = require("../../config/ajv-instance");

const movieREQSchema = {

  type: "object",

  properties: {

    title: {
      type: "string",
      minLength: 1
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
    },

    user: {
      type: "string",
      minLength: 24,
      maxLength: 24
    }
  },

  required: ["title", "user"],

  additionalProperties: false
};

module.exports = ajvInstance.compile(movieREQSchema);