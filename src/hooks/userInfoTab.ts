import {useEffect} from 'react';

export const UserInfoTab = (userData) => {
  useEffect(() => {
    if(userData){
      const mainTabs = document.querySelector('.mainTabWrap').children;
      const subTabWrap = document.querySelectorAll('.subTabWrap');      

      // 첫번째 메인탭 활성화
      mainTabs[0].classList.add('white');
      // 첫번째 서브탭 탭 블럭, 첫번째 서브탭, 이벤트 활성화
      targetSubTabWrap(0, subTabWrap);


      [...mainTabs].forEach((res, index) => {
        res.addEventListener('click', () => {
          targetTab(res, mainTabs);
          targetSubTabWrap(index, subTabWrap);
        })
      });
    }
  }, [userData])

  function targetTab(node, arr){
    resetTab(arr)
    node.classList.add('white')
  }

  function resetTab(arr){
    [...arr].forEach(res => res.classList.remove('white'));
  }

  function targetSubTabWrap(index, arr){
    // 모든 서브탭블럭 비활성화
    [...arr].forEach(res => res.classList.remove('display')); 
    
    // 선택된 서브탭블럭
    const subTabWrap = arr[index];
    // 선택된 서브탭블럭의 탭들
    const subTabs = [...subTabWrap.children];
    // 선택된 서브탭블럭 활성화
    subTabWrap.classList.add('display');

    // 이전에 선택된 다른 서브탭들 비활성화
    resetTab(subTabs);
    // 선택된 서브탭블럭의 첫번째 탭 활성화
    subTabs[0].classList.add('white');
    
    // 선택된 서브탭블럭의 탭들에게 이벤트 부여
    subTabs.forEach((res) => {
      res.addEventListener('click', () => {
        targetTab(res, subTabs);
      })
    })
  }
}