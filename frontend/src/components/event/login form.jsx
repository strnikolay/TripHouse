import React, { Component } from 'react'
import './index.2c124611.css'

export default class Aside extends Component {
  render() {
    return (
      <>
        <form class="_eventinput_1cg6n_1">
              <div class="_eventinput__toggle_1cg6n_8">
                <div class="_eventinput__toggle_text_1cg6n_20">Ивенты</div>
                <div class="_eventinput__toggle_text_1cg6n_20">Услуги</div>
                <div class="_eventinput__toggle_button_1cg6n_28"></div>
              </div>
              <div class="_eventinput__input_1cg6n_52">
                <div class="_eventinput__input_title_1cg6n_59">Место проведения</div>
                <input type="text" placeholder="Нарва" />
              </div>
              <div class="_eventinput__input_1cg6n_52">
                <div class="_eventinput__input_title_1cg6n_59">Дата проведения</div>
                <input type="text" placeholder="10-13 июня" />
              </div>
              <div class="_eventinput__input_1cg6n_52">
                <div class="_eventinput__input_title_1cg6n_59">Категория</div>
                <input type="text" placeholder="Активные игры..." />
              </div>
              <button class="_eventinput__button_1cg6n_69">Сбросить</button>
        </form>
      </>
    )
  }
}