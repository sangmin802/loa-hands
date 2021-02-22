import {useEffect} from 'react';

export const UserInfoTab = (userData) => {
  useEffect(() => {
    if(userData){
      document.querySelector('.mainTabWrap').classList.remove('displayNone')
      const mainTabs = document.querySelector('.mainTabWrap').children;
      const subTabWraps = document.querySelectorAll('.subTabWrap');
      const contentWraps = document.querySelector('.tabContentWrap').children;

      // 메인탭 변경시
      const mainTabTrigger = (mainTabIndex) => {
        // 메인탭 선택
        removeStyle(mainTabs, 'white');
        mainTabs[mainTabIndex].classList.add('white');

        // 서브탭묶음 선택
        addStyle(subTabWraps, 'displayNone');
        subTabWraps[mainTabIndex].classList.remove('displayNone');

        // 첫 서브탭 선택
        removeStyle(subTabWraps[mainTabIndex].children, 'white');
        subTabWraps[mainTabIndex].children[0].classList.add('white');

        // 컨텐츠 묶음 선택
        addStyle(contentWraps, 'displayNone');
        contentWraps[mainTabIndex].classList.remove('displayNone');


        // 첫 컨텐츠 선택
        addStyle(contentWraps[mainTabIndex].children, 'displayNone');
        contentWraps[mainTabIndex].children[0].classList.remove('displayNone');

        // 서브탭 이벤트 부여
        [...subTabWraps[mainTabIndex].children].forEach((subTab, subTabIndex) => {
          subTab.addEventListener('click', () => {
            subTabTrigger(mainTabIndex, subTabIndex);
          })
        })
      }
      
      const subTabTrigger = (mainTabIndex, subTabIndex) => {
        const selectedSubTabWrap = subTabWraps[mainTabIndex].children;
        const selectedContentWrap = contentWraps[mainTabIndex].children;

        // 선택한 서브탭 활성화
        removeStyle(selectedSubTabWrap, 'white');
        selectedSubTabWrap[subTabIndex].classList.add('white');

        // 선택한 컨텐츠 활성화
        addStyle(selectedContentWrap, 'displayNone');
        selectedContentWrap[subTabIndex].classList.remove('displayNone');
      }


      //  첫번째 메인 탭 활성화
      mainTabTrigger(0);
      //  첫번째 컨텐츠, 첫번째 서브탭 활성화
      subTabTrigger(0, 0);
      


      [...mainTabs].forEach((mainTab, i) => {
        mainTab.addEventListener('click', () => {
          mainTabTrigger(i)
        })
      })
    }
  }, [userData])
}

function addStyle(arr, style){
  [...arr].forEach(el => el.classList.add(style));
}

function removeStyle(arr, style){
  [...arr].forEach(el => el.classList.remove(style));
}