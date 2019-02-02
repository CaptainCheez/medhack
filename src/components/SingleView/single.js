import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style/css'; 
import './single.css';

class SingleView extends Component {
  render() {
    return (
      <div className='single-view-container'>
      	<div className='place-info'>
          <div className='left-info'>
            <p>ЦСМ №42</p>
            <p>г.Бишкек ул.Улица 42</p>
          </div>
          <div className='mid-info'>
            <p>Телефон:42-42-42 </p>
            <p>Факс: 4242</p>
          </div>
          <div className='right-info'>
            <p>Время работы: 7:00 - 12:00</p>
            <p>Доп. инфо:</p>
          </div>
        </div>
      	<div className='place-medicine'>
          <Input.Search
            placeholder="Введите название лекарства/"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
      		<div className='medicine-header'>
      			<p>Название</p>
      			<p>Ком. название</p>
      			<p>Кодификатор</p>
      			<p>Дата обновления</p>
      			<p>Форма</p>
            <p>Кол-во</p>
      		</div>
      		<div className='medicine-content'>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>
            <div className='meidcine-row'>
              <p className='name'>Name</p>
              <p className='market-name'>Name</p>
              <p className='code'>A114</p>
              <p className='date'>02.02.2019</p>
              <p className='form'>Таблетки</p>
              <p className='amount'>250</p>
            </div>

      		</div>
      	</div>
      </div>
    );
  }
}

export default SingleView;