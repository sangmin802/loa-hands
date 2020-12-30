import React from 'react';
import '../../../css/UserInfo.css';
import _ from '../../../Utility';

// 컴포넌트
import UserBasicInfo from './UserBasicInfo';
import UserExpedition from './UserExpedition';
import UserInfoEquipImg from './UserInfoEquipImg';
import Tab from '../../@Shared/Tab';
import UserDetailInfoContainer from '../Container/UserDetailInfoContainer';

// 타입
import UserData from '../../../models/userInfo'
import {IGetUserData, IExpeditionPopToggle, IChangeUserInfoMainTab} from '../Container/UserInfoContainer'

interface Props {
  userData : UserData
  expeditionPop : boolean
  userInfoMainTab : number 
  getUserData : IGetUserData
  expeditionPopToggle : IExpeditionPopToggle
  changeUserInfoMainTab : IChangeUserInfoMainTab
}

const UserInfo : React.FC<Props> = ({
  userData, 
  getUserData,
  expeditionPop, 
  expeditionPopToggle, 
  userInfoMainTab, 
  changeUserInfoMainTab
}) => {
  const {abilityInfo : {equipInfo}, expeditionUserWrap, classEngName} = userData;
  const [equipArr, ] = _.divideEquipInfo(equipInfo);
  return(
    <div className="userInfo">
      <div className="userInfoTopCetnerWrap">
        <div className="userInfoTop">
          <div className="showExpeditionWrap"
            onClick={() => {
              expeditionPopToggle(true);
            }}
          >
            원정대 캐릭터 보기
          </div>
          <UserBasicInfo 
            userData={userData}
          />
          <UserExpedition 
            getUserData={getUserData}
            expeditionUserWrap={expeditionUserWrap}
            expeditionPopToggle={expeditionPopToggle}
            expeditionPop={expeditionPop}
          />
        </div>
        {/* 중앙 장비 */}
        <div className="userInfoCenter">
          <div className="userInfoLeft equipImgWrap">
            {
              [...equipArr].splice(0,6).map((equip, index) =>{
                return <UserInfoEquipImg key={`EquipImg${index}`} data={equip}/>
              })
            }
          </div>
          <div className="userClassImg">
            <img src={`http://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/${classEngName}.png`} alt="classImg"/>
          </div>
          <div className="userInfoRight equipImgWrap">
            {
              [...equipArr].splice(6,6).map((equip, index) =>{
                return <UserInfoEquipImg key={`EquipImg${index}`} data={equip}/>
              })
            }
          </div>
        </div>
      </div>
      <div className="userInfoBottom">
        <div className="userInfoBottomMainTabWrap">
          {['능력치','스킬' , '수집형포인트'].map((tab, index) => {
            return <Tab 
                      key={`userInfoBottomMainTab${index}`}
                      index={index}
                      tab={userInfoMainTab}
                      tabName={tab}
                      tabDispatcher={changeUserInfoMainTab}
                   />
          })}
        </div>
        <UserDetailInfoContainer />
      </div>
    </div>
  )
}

export default UserInfo;