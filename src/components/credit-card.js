import React, { Component } from 'react'
import '../index.scss'

export default class CreditCard extends Component {
  render() {
    const { number, name, date } = this.props
    return (
      <div className="card-container">
        <div className="card-item-wrapper">
          <div className="card-item-top">
            <div className="card-item-chip"></div>
            <div className="card-type">Visa / Mastercard</div>
          </div>
          <div className="card-item-number">
            <div className="numbers">
              <input
                className="input-field-number"
                type="text"
                value={number ? number : '#### #### #### ####'}
                readOnly
              />
            </div>
          </div>
          <div className="card-item-bottom">
            <div className="card-holder-name">
              Card holder
              <input className="input-field-1" type="text" value={name ? name : 'Artur Falii'} readOnly/>
            </div>
            <div className="card-date">
              Expires
              <input className="input-field-1" type="text" value={date ? date : 'MM/YY'} readOnly/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
