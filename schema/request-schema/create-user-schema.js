const { format } = require("morgan");
const ajvInstance = require("../../config/ajv-instance");
 
const registerREQSchema = {
  type: "object",
  properties: {
    username: {
        type: "string",
         minLength: 3
    },

    email: {
      type: "string",
      format: "email"
    },

    password: {
      type: "string",
      minLength: 6
    }
  },
  required: ["username","email", "password"],
  additionalProperties: false
};
 
module.exports = ajvInstance.compile(registerREQSchema);