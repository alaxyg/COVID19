import './App.css';
import React, {Component} from 'react';
import {data0914} from "./20200914";
import {data0915} from "./20200915";
import {Table, DatePicker, Form} from 'antd';
import moment from "moment";
import "antd/dist/antd.css";
import ga_infected from './GA.jpg';
import tx_infected from './TX.jpg';
import ca_infected from './CA.jpg';

const dateFormat = "YYYY-MM-DD";
const worker = {
  dateOfBirth: moment("2020-09-14T12:40:14+0000")
};

const columns = [
  {
    title: 'State',
    dataIndex: 'State',
    key: 'State',
  },
  {
    title: 'CurrentDate',
    dataIndex: 'CurrentDate',
    key: 'CurrentDate',
  },
  {
    title: 'CurrentValue',
    dataIndex: 'CurrentValue',
    key: 'CurrentValue',
  },
  {
    title: 'predicted as of 5 days ago for currentdate',
    dataIndex: 'predicted as of 5 days ago for currentdate',
    key: 'predicted as of 5 days ago for currentdate',
  },
  {
    title: 'Date5',
    dataIndex: 'Date5',
    key: 'Date5',
  },
  {
    title: 'Date5Prediction',
    dataIndex: 'Date5Prediction',
    key: 'Date5Prediction',
  },
  {
    title: 'Risk Category',
    dataIndex: 'Risk Category',
    key: 'Risk Category',
  },
  {
    title: 'Region',
    dataIndex: 'Region',
    key: 'Region',
  },
];

const GlobalData = {
  '2020-09-14': data0914,
  '2020-09-15': data0915
}

class DataFinal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: '2020-09-14',
      infectedData: GlobalData['2020-09-14']
    };
    this.onFinish = this.onFinish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date, dateString){
    this.setState({startDate: dateString,
      infectedData: GlobalData[dateString]
    })
  }

  onFinish = dateString => {
    this.setState({startDate: dateString,
      infectedData: GlobalData[dateString]
    });
    console.log(dateString);
  };

  render() {
    return (
      <div> 
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={values => this.onFinish(values)}
          initialValues={worker}
          >
          <Form.Item label="" name="dateOfBirth" style={{margin: 20}}>
            <DatePicker format={dateFormat} onChange={this.handleChange}/>
          </Form.Item>
        </Form>
        <img src={ga_infected} className="App-logo" alt="GA infected number" />
        <img src={ca_infected} className="App-logo" alt="CA infected number" />
        <img src={tx_infected} className="App-logo" alt="TX infected number" />
        <Table dataSource={this.state.infectedData} columns={columns} pagination={false}/>
      </div>
    )
  }
}

export default DataFinal;
