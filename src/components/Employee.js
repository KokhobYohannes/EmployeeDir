import React, { Component } from 'react'

import EmployeeData from './EmployeeData'
export class Employee extends Component {

    componentDidMount() {


    }


    render() {
        return (
            <div style={{ width: "80%" }}>
                <EmployeeData />
            </div>
        )
    }
}

export default Employee
