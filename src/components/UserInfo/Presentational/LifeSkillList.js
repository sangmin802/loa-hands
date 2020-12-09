import React from 'react';

function LifeSkillList({data}){
  return(
    <div className="userLifeSkillWrap">
      {data.map((skill, index) => {
        return <LifeSkill 
                  key={`lifeSkillList${index}`}
                  skill={skill}
               />
      })}
    </div>
  )
}

function LifeSkill({skill}){
  return(
    <div className="lifeSkillList">
      <div className="lifeSkillLv">{skill.lv}</div>
      <div className="lifeSkillName">{skill.name}</div>
    </div>
  )
}

export default LifeSkillList;