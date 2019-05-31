import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import Fab from "@material-ui/core/Fab";
import FormDialog from "./FormDialog";
import axios from "axios";

// https://medium.com/@BogdanSoare/how-to-use-reacts-new-context-api-to-easily-manage-modals-2ae45c7def81

const POSTMANURL =
  "https://7c767e60-6f40-4fdd-adka6-3f75e3ac6b79.mock.pstmn.io";
const API = "/api/v2/ocr";
const REQUEST = "/get_params";

class Footer extends React.Component {
  state = {
    params: "apple"
  };

  componentDidMount() {
    axios
      .get(POSTMANURL + API + REQUEST)
      .then(res => res.data)
      .then(data => {
        this.setState(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <footer>
        <FormDialog {...this.state} />
        <Fab color="primary">
          <FontAwesomeIcon icon={faSearch} size="2x" color="#fff" />
        </Fab>
      </footer>
    );
  }
}

export default Footer;
