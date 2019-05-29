import React from "react";

import Form from "react-jsonschema-form";

const apiSchema = {
  params: {
    glare_th: 0.99,
    card_detector_th: 0.1,
    card_type_th: 0.1,
    blur_th: 0.9,
    ocr_th: "default"
  }
};

function apiToSchema(apiSchema) {
  let schema = {
    title: "/api/v2/ocr",
    type: "object",
    required: [],
    properties: {
    }
  };

  Object.keys(apiSchema.params).forEach(el => {
    schema.required.push(el);
    console.log(el);
    schema.properties[el] = {
      type: "number",
      title: el,
      minimum: 0,
      maximum: 1,
      default: apiSchema.params[el]
    }; 
  }); 

  console.log(schema)
  
  return schema
}

class FormJSON extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ formData }) {
    console.log(formData);
  }

  render() {
    let schema = apiToSchema(apiSchema);
    return <Form schema={schema} onSubmit={this.handleSubmit} />;
  }
}

export default FormJSON;
