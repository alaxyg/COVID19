import './App.css';
import 'antd/dist/antd.css';
import DataFinal from './ReadDataWithDatePicker.js';
import {Layout, Menu, Space} from 'antd';

const {Header, Content} = Layout;



function App() {
  return (
    <Layout className="layout">
      <Space direction="horizontal" size={100}>
      </Space>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">5-day positive cases prediction across all states in the United States </Menu.Item>
        </Menu>
      </Header>
      <Content style={{fontSize: 14}}>
        <DataFinal />
      </Content>
    </Layout>
  
  );
}

export default App;
