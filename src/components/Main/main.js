import React, { Component } from 'react';
import './main.css';
import { Input, Button, Select } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/select/style/css'; 
import 'antd/lib/button/style/css'; 
const Option = Select.Option;
class Main extends Component {
  render() {
    return (
      <div className="main-container">
      	<div className='text-block'>
      		<h1>Узнайте информацию о наличии лекарственных средств в вашем учреждении</h1>
      		<div className='input-fields'>
			<Input.Search
				placeholder="Введите название лекарства"
				enterButton="Search"
				size="large"
				onSearch={value => console.log(value)}
			/>
			<p>или выберите из списка</p>
			<div>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Область"
				>
			    <Option value="jack">Jack</Option>
			    <Option value="lucy">Lucy</Option>
			    <Option value="tom">Tom</Option>
			  </Select>
			  <Select
					showSearch
					style={{ width: 200 }}
					placeholder="Учреждение"
				>
			    <Option value="jack">Jack</Option>
			    <Option value="lucy">Lucy</Option>
			    <Option value="tom">Tom</Option>
			    <Option value="jack1">Jack</Option>
			    <Option value="lucy1">Lucy</Option>
			    <Option value="tom1">Tom</Option>
			    <Option value="jack2">Jack</Option>
			    <Option value="lucy2">Lucy</Option>
			    <Option value="tom2">Tom</Option>
			    <Option value="jack3">Jack</Option>
			    <Option value="lucy3">Lucy</Option>
			    <Option value="tom3">Tom</Option>
			  </Select>
			  <Button type="primary">Перейти</Button>
			</div>
      	</div>
      	</div>
      </div>
    );
  }
}

export default Main;