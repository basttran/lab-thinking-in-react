import React, { Component } from "react";
import data from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: data.data
    };
  }

  updateName(event) {
    const { value } = event.target;
    console.log("value", value);
    const { dataArray } = this.state;
    console.log("dataArray", dataArray);
    const newArray = dataArray.filter(oneData => {
      return oneData.name.includes(value);
    });
    this.setState({
      nameValue: value,
      dataArray: newArray
    });
  }

  render() {
    const { dataArray } = this.state;
    console.log("App.js", dataArray);
    return (
      <div className="App">
        <FilterableProductTable products={dataArray} />
      </div>
    );
  }
}

export default App;
