export default class SkillInfo {
  constructor(skill, raw){
    this.battleSkill = {};
    this.lifeSkill = {};
    const 
      batteSkill = raw.getElementsByClassName('profile-skill-battle')[1];


    //  전투스킬
    this.setBattleSkill(skill, batteSkill);
  }

  setBattleSkill(skill, batteSkill){
    const 
      children = batteSkill.children,
      use = children[0].children[1].textContent,
      get = children[0].children[3].textContent,

      useSkillList = [...children[1].children]
      .map(el => el.children[0])
      .filter(el => {
        const check = el.children[2].children[0].textContent;
        if(check === '각성기' || check !== '1'){
          return el
        }
        return null;
      });

    const skillArr = Object.values(skill);
    this.battleSkill.usePoint = use;
    this.battleSkill.getPoint = get;
    this.battleSkill.skillDetail = useSkillList.map(el => {
      const 
        children = el.children,
        skillImg = children[0].children[0].attributes[0].value,
        skillType = children[1].children[0].textContent,
        skillName = children[1].children[1].textContent,
        matchSkillArr = skillArr.find(res => res.Element_000.value === skillName),
        skillLv = children[2].children[0].textContent;

      let 
        skillTripod = null,
        rune = null;

      if(skillLv !== '각성기'){
        skillTripod = Object.values(matchSkillArr).find(res => res.type==="TripodSkillCustom")
      }
      if(children[1].children[3].dataset.runetooltip){
        const runeJSON = JSON.parse(children[1].children[3].dataset.runetooltip);
        rune = {
          runeInfo : Object.values(matchSkillArr).find(res => res.type==="ItemPartBox"),
          runeImg : children[1].children[3].children[0].attributes.src.value,
          runeGrade : runeJSON.Element_001.value.leftStr0
        }
      }

      return {
        skillImg, skillType, skillName, skillLv, skillTripod, rune
      }
    })
  }
}
