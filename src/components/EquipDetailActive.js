import React from 'react';
import Factory from '../factory.js';

function EquipDetailActive({data}){
  const dataArray = Object.values(data);
  const SingleTextBox = Factory.getSameTypeObj(dataArray, "SingleTextBox");
  const IndentStringGroup = Factory.getSameTypeObj(dataArray, "IndentStringGroup");
  const ItemPartBox = Factory.getSameTypeObj(dataArray, "ItemPartBox");

  return(
    <div className="equipDetailActive">
      <div className="itemPartBoxWrap">
        {itemPartBoxParser(ItemPartBox)}
      </div>
      <div className="intentStringWrap">
        {intentStringGroupParser(IndentStringGroup)}
      </div>
      <div className="singleTextWrap">
        {singleTextBoxParser(SingleTextBox)}
      </div>
    </div>
  )
}

function itemPartBoxParser(_arr){
  return _arr.map(({value : {Element_000, Element_001}}, index) => {
    return (
      <div className="itemPartBox" key={'itemPartBox'+index}>
        <div className="itemPartBoxTitle">{Factory.getOnlyText(Element_000)}</div>
        <div className="itemPartBoxContent">{Factory.getOnlyText(Element_001)}</div>
      </div>
    )
  })
}

function singleTextBoxParser(_arr){
  return _arr.map(({value}, index) => {
    return (
      <div className="singleText" key={'singleText'+index}>
        {Factory.getOnlyText(value)}
      </div>
    )
  })
}

function intentStringGroupParser(_arr){
  return _arr.map(intentString => {
    const {value} = intentString;
    return Object.values(value);
  })
  .map(el => {
    return el.map(({topStr, contentStr}, index) => {
      return (
        <div className="intentString" key={'intentString'+index}>
          <div className="intentStringTitle">
            {Factory.getOnlyText(topStr)}
          </div>
          <div className="intentStringContentWrap">
            {
              Object.values(contentStr).map(({contentStr}, index) => {
                return(
                  <div className="intentStringContent" key={'intentStringContent'+index}>
                    {Factory.getOnlyText(contentStr)}
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    })
  })
}

export default EquipDetailActive;