import React, { Component } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";

const fetchURL = "https://randomuser.me/api/";

class EmployeeData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
        },

        {
          label: "Gender",
          field: "gender",
          sort: "asc",
          width: 200,
        },
        {
          label: "Phone",
          field: "phone",
          sort: "asc",
          width: 100,
        },
        {
          label: "E-mail",
          field: "email",
          sort: "asc",
          width: 150,
        },
        {
          label: "DOB",
          field: "dob",
          sort: "asc",
          width: 100,
        },
      ],
      rows: [],
    };
  }

  componentDidMount = () => {
    this.fetchUpdate();
  };
  fetchData = async () => {
    const result = await axios.get(fetchURL);
    // console.log({ result })
    const results = result.data.results[0];

    const first = results.name.first;
    const last = results.name.last;
    const title = results.name.title;

    const employee = {
      name: `${title} ${first} ${last}`,
      gender: results.gender,
      phone: results.phone,
      email: results.email,
      dob: results.dob.age,
    };

    let rows = this.state.rows;
    rows.push(employee);

    this.setState({
      rows: rows,
    });
  };

  fetchUpdate = () => {
    const fetchCount = 100;
    for (var i = 0; i < fetchCount; i++) {
      this.fetchData();
    }
  };
  render() {
    let data = this.state;

    return <MDBDataTable data={data} />;
  }
}

export default EmployeeData;
