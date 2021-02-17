import React from 'react';
import {UserInfo} from 'store/controller/dispatchers';

import './index.css';

const Index = () => {
  const {expeditionPopToggle} = UserInfo();
  return(
    <div className="showExpeditionWrap"
      onClick={() => {
        expeditionPopToggle(true);
      }}
    >
      원정대 캐릭터 보기
    </div>
  )
}

export default React.memo(Index, () => true);