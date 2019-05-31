import React from "react";

import Form from "react-jsonschema-form";

function apiToSchema(apiSchema) {
  let schema = {
    title: "/api/v2/ocr",
    type: "object",
    required: [],
    properties: {}
  };

  Object.keys(apiSchema).forEach(el => {
    schema.required.push(el);
    schema.properties[el] = {
      type: "number",
      title: el,
      minimum: 0,
      maximum: 1,
      default: apiSchema[el]
    };
  });
  return schema;
}

class FormJSON extends React.Component {
  handleSubmit({ formData }) {
    console.log(formData);
  }

  render() {
    let schema = apiToSchema(this.props.params);
    return <Form schema={schema} onSubmit={this.handleSubmit} />;
  }
}

export default FormJSON;
