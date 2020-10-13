import React from 'react';
import Factory from '../factory.js';

function EquipDetailActive({data}){
  const {equipGroupType} = data;
  const dataArray = Object.values(data);
  let TripodSkillCustomWrap = null;
  let IndentStringWrap = null;
  const SingleTextBox = Factory.getSameTypeObj(dataArray, "SingleTextBox");
  const ItemPartBox = Factory.getSameTypeObj(dataArray, "ItemPartBox");
  if(equipGroupType === "Acc"){
    const TripodSkillCustom = Factory.getSameTypeObj(dataArray, "TripodSkillCustom")
    TripodSkillCustomWrap = 
    <div className="tirpodSkillCustomWrap">
      {Factory.tripodSkillCustomParser(TripodSkillCustom)}
    </div>
  }
  if(equipGroupType !== "Stone"){
    const IndentStringGroup = Factory.getSameTypeObj(dataArray, "IndentStringGroup");
    IndentStringWrap = 
      <div className="intentStringWrap">
        {Factory.intentStringGroupParser(IndentStringGroup)}
      </div>
  }

  return(
    <div className="equipDetailActive">
      <div className="itemPartBoxWrap">
        {Factory.itemPartBoxParser(ItemPartBox)}
      </div>
      {IndentStringWrap}
      <div className="singleTextWrap">
        {Factory.singleTextBoxParser(SingleTextBox)}
      </div>
      {TripodSkillCustomWrap}
    </div>
  )
}

export default EquipDetailActive;