
export const partsArr = ["000_weapon", "001_head", "002_shoulder", "003_cloth", "004_pants", "005_glove", "006_necklace", "007_earing1", "008_earing2", "009_ring1", "010_ring2", "011_stone", "012_av_weapon", "013_av_head", "014_av_cloth", "015_av_pants", "016_av_inst", "017_av_face1", "018_av_face2", "019_av_in_weapon", "020_av_in_head", "021_av_in_cloth", "022_av_in_pants"];

export const partsImg = ['/2018/obt/assets/images/common/game/bg_equipment_slot1.png?847938d1e0f475ca73717df97334937d', '/2018/obt/assets/images/common/game/bg_equipment_slot2.png?050db99e03db1afa7f32f00f53010a0a', '/2018/obt/assets/images/common/game/bg_equipment_slot3.png?ad02ff0c0c7f0f750d7254629f61f433', '/2018/obt/assets/images/common/game/bg_equipment_slot4.png?298c62509ce611528f532b8cd05c1de4', '/2018/obt/assets/images/common/game/bg_equipment_slot5.png?206f2a75948642dbd0cddc37dd8ed220', '/2018/obt/assets/images/common/game/bg_equipment_slot6.png?aac2a45f5db714c267e1c59e52dc4286', '/2018/obt/assets/images/common/game/bg_equipment_slot7.png?8fc19274483852c953d0d4d44ffed661', '/2018/obt/assets/images/common/game/bg_equipment_slot8.png?c3a33be4689986ee75e8a8432ee494d5', '/2018/obt/assets/images/common/game/bg_equipment_slot9.png?7326a4a95b92262ab12c1eb47656be34', '/2018/obt/assets/images/common/game/bg_equipment_slot10.png?aafc9248b55a32207e593b0f084905d2', '/2018/obt/assets/images/common/game/bg_equipment_slot11.png?ef291130164ed57acf5a308a3d89b898', '/2018/obt/assets/images/common/game/bg_equipment_slot12.png?152c1781684a979cc20a505b8af89cb3', '/2018/obt/assets/images/common/game/bg_avatar_slot1.png?9aa3bac1ce5aaa477bd3f829e5833d9f', '/2018/obt/assets/images/common/game/bg_avatar_slot3.png?27b016892d9a32cc5b8af5db3b179aa8', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b', '/2018/obt/assets/images/common/game/bg_avatar_slot2.png?c29dbbf56163365571c4cbcf6804336a', '/2018/obt/assets/images/common/game/bg_avatar_slot4.png?620d5ebcc169ff61c4fc2411d0f5af35', '/2018/obt/assets/images/common/game/bg_avatar_slot5.png?88e22b7033cc6dae4325f4f68673be00', '/2018/obt/assets/images/common/game/bg_avatar_slot1.png?9aa3bac1ce5aaa477bd3f829e5833d9f', '/2018/obt/assets/images/common/game/bg_avatar_slot3.png?27b016892d9a32cc5b8af5db3b179aa8', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b'];

// 섬 닫히는 시간을 기준으로 작성
// 처음에는 -3분을 하여 섬 열리는 시간으로 카운트다운 하다가, 그 차이가 0이나 0보다 작을 때, 현제 JSON시간으로 다시 계산하여 3분뒤에 닫히는 카운트다운 진행
export const dailyIsland = [
  {name : '환각의섬', src : '/img/island/island_00.png', time : ['00:13', '02:13', '04:13', '06:13', '08:13', '10:13', '12:13', '14:13', '16:13', '18:13', '20:13', '22:13'], endTime : '22:13', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '무릉도원', src : '/img/island/island_04.png', time : ['00:13', '06:13', '12:13', '18:13'], endTime : '18:13', lv : 400, position : '대항해', contType : 'ISLAND'},
  {name : '잠자는 노래의 섬', src : '/img/island/island_05.png', time : ['00:33', '03:33', '06:33', '09:33', '12:33', '15:33', '18:33', '21:33'], endTime : '21:33', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '두키 섬', src : '/img/island/island_06.png', time : ['01:03', '05:03', '09:03', '13:03', '17:03', '21:03'], endTime : '21:03', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '그릇된 욕망의 섬', src : '/img/island/island_07.png', time : ['01:33', '07:33', '13:33', '19:33'], endTime : '19:33', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '스피다 섬', src : '/img/island/island_08.png', time : ['01:43', '07:43', '13:43', '19:43', '22:43'], endTime : '22:43', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '알라케르', src : '/img/island/island_09.png', time : ['02:03', '08:03', '14:03', '20:03'], endTime : '20:03', lv : 302, position : '대항해', contType : 'ISLAND'},
  {name : '우거진 갈대섬', src : '/img/island/island_03.png', time : ['02:13', '05:13', '08:13', '11:13', '14:13', '17:13', '20:13', '23:13'], endTime : '23:13', lv : 505, position : '대항해', contType : 'ISLAND'},
  {name : '신월의 섬', src : '/img/island/island_02.png', time : ['03:13', '07:13', '11:13', '15:13', '19:13', '23:13'], endTime : '23:13', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '미지의 섬', src : '/img/island/island_01.png', time : ['04:33', '10:33', '16:33', '22:33'], endTime : '22:33', lv : 460, position : '대항해', contType : 'ISLAND'},
]

// 캘린더섬 리스트
export const calendarIsland = [
  {name : '기회의 섬', src : 'calendar_00.jpg', lv : 505, position : '대항해', contType : 'ISLAND'},
  {name : '수라도', src : 'calendar_01.jpg', lv : 400, position : '대항해', contType : 'ISLAND'},
  {name : '포르페', src : 'calendar_02.jpg', lv : 325, position : '대항해', contType : 'ISLAND'},
  {name : '쿵덕쿵 아일랜드', src : 'calendar_03.jpg', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '볼라르', src : 'calendar_04.jpg', lv : 250, position : '대항해', contType : 'ISLAND'},
  {name : '블루홀 섬', src : 'calendar_05.jpg', lv : 1005, position : '대항해', contType : 'ISLAND'},
  {name : '하모니 섬', src : 'calendar_06.jpg', lv : 400, position : '대항해', contType : 'ISLAND'},
  {name : '고요한 안식의 섬', src : 'calendar_07.jpg', lv : 505, position : '대항해', contType : 'ISLAND'},
  {name : '몬테 섬', src : 'calendar_08.jpg', lv : 900, position : '대항해', contType : 'ISLAND'},
  {name : '죽음의 협곡', src : 'calendar_09.jpg', lv : 400, position : '대항해', contType : 'ISLAND'},
  {name : '메데이아', src : 'calendar_10.jpg', lv : 250, position : '대항해', contType : 'ISLAND'},
]

// 필드보스 일월화수목금토
export const fieldBoss = [
  [
    {id : 2, name : '타르실라', lv : 340, position : '슈샤이어-머무른 시간의 호수', src : 'img/boss/boss_02.png', time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 3, name : '에라스모', lv : 355, position : '대항해-에라스모의 섬', src : 'img/boss/boss_04.png', time : ['06:03', '14:03', '20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 4, name : '솔 그랑데', lv : 370, position : '대항해-알트아이젠', src : 'img/boss/boss_01.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 8, name : '브리아레오스', lv : 505, position : '대항해-얼음과 불의 섬', src : 'img/boss/boss_03.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 9, name : '하르마게돈', lv : 550, position : '로헨델-파괴된 제나일', src : 'img/boss/boss_08.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 10, name : '강림하신 호박신', lv : 885, position : '대항해-오르비스', src : 'img/boss/boss_05.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 11, name : '티파니', lv : 915, position : '욘-무쇠망치 작업장', src : 'img/boss/boss_10.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 12, name : '아우리온', lv : 960, position : '대항해-격류의 섬', src : 'img/boss/boss_07.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 13, name : '엔켈라두스', lv : 1050, position : '페이튼-붉은 달의 흔적', src : 'img/boss/boss_11.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 14, name : '모아케', lv : 1415, position : '파푸니카-티키타카 군락지', src : 'img/boss/boss_13.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
  ],
  [
    {id : 3, name : '에라스모', lv : 355, position : '대항해-에라스모의 섬', src : 'img/boss/boss_04.png', time : ['06:03', '14:03', '20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 7, name : '아드린느', lv : 460, position : '대항해-환영 나비 섬', src : 'img/boss/boss_12.png',time : ['20:33'], endTime : '20:33', contType : 'FIELD_BOSS'},
  ],
  [],[],
  [
    {id : 1, name : '시그나투스', lv : 310, position : '아르데타인-갈라진 땅', src : 'img/boss/boss_06.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 3, name : '에라스모', lv : 355, position : '대항해-에라스모의 섬', src : 'img/boss/boss_04.png', time : ['06:03', '14:03', '20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 5, name : '혼재의 추오', lv : 385, position : '애니츠-소리의 숲', src : 'img/boss/boss_09.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 8, name : '브리아레오스', lv : 505, position : '대항해-얼음과 불의 섬', src : 'img/boss/boss_03.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 10, name : '강림하신 호박신', lv : 885, position : '대항해-오르비스', src : 'img/boss/boss_05.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 12, name : '아우리온', lv : 960, position : '대항해-격류의 섬', src : 'img/boss/boss_07.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 14, name : '모아케', lv : 1415, position : '파푸니카-티키타카 군락지', src : 'img/boss/boss_13.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
  ],
  [
    {id : 1, name : '시그나투스', lv : 310, position : '아르데타인-갈라진 땅', src : 'img/boss/boss_06.png',time : ['02:03'], endTime : '02:03', contType : 'FIELD_BOSS'},
    {id : 3, name : '에라스모', lv : 355, position : '대항해-에라스모의 섬', src : 'img/boss/boss_04.png', time : ['06:03', '14:03', '20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 5, name : '혼재의 추오', lv : 385, position : '애니츠-소리의 숲', src : 'img/boss/boss_09.png',time : ['02:03'], endTime : '02:03', contType : 'FIELD_BOSS'},
    {id : 6, name : '프록시마', lv : 415, position : '베른 북부-베르닐 산림', src : 'img/boss/boss_00.png',time : ['02:03'], endTime : '02:03', contType : 'FIELD_BOSS'},
    {id : 7, name : '아드린느', lv : 460, position : '대항해-환영 나비 섬', src : 'img/boss/boss_12.png',time : ['12:03'], endTime : '12:03', contType : 'FIELD_BOSS'},
    {id : 9, name : '하르마게돈', lv : 550, position : '로헨델-파괴된 제나일', src : 'img/boss/boss_08.png',time : ['02:03'], endTime : '02:03', contType : 'FIELD_BOSS'},
    {id : 11, name : '티파니', lv : 915, position : '욘-무쇠망치 작업장', src : 'img/boss/boss_10.png',time : ['02:03'], endTime : '02:03', contType : 'FIELD_BOSS'},
    {id : 13, name : '엔켈라두스', lv : 1050, position : '페이튼-붉은 달의 흔적', src : 'img/boss/boss_11.png',time : ['02:03'], endTime : '02:03', contType : 'FIELD_BOSS'},
    {id : 14, name : '모아케', lv : 1415, position : '파푸니카-티키타카 군락지', src : 'img/boss/boss_13.png',time : ['02:03'], endTime : '02:03', contType : 'FIELD_BOSS'},
  ],
  [
    {id : 2, name : '타르실라', lv : 340, position : '슈샤이어-머무른 시간의 호수', src : 'img/boss/boss_02.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 3, name : '에라스모', lv : 355, position : '대항해-에라스모의 섬', src : 'img/boss/boss_04.png', time : ['06:03', '14:03', '20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 4, name : '솔 그랑데', lv : 370, position : '대항해-알트아이젠', src : 'img/boss/boss_01.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 6, name : '프록시마', lv : 415, position : '베른 북부-베르닐 산림', src : 'img/boss/boss_00.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 7, name : '아드린느', lv : 460, position : '대항해-환영 나비 섬', src : 'img/boss/boss_12.png',time : ['20:33'], endTime : '20:33', contType : 'FIELD_BOSS'},
    {id : 8, name : '브리아레오스', lv : 505, position : '대항해-얼음과 불의 섬', src : 'img/boss/boss_03.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 9, name : '하르마게돈', lv : 550, position : '로헨델-파괴된 제나일', src : 'img/boss/boss_08.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 10, name : '강림하신 호박신', lv : 885, position : '대항해-오르비스', src : 'img/boss/boss_05.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 11, name : '티파니', lv : 915, position : '욘-무쇠망치 작업장', src : 'img/boss/boss_10.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 12, name : '아우리온', lv : 960, position : '대항해-격류의 섬', src : 'img/boss/boss_07.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 13, name : '엔켈라두스', lv : 1050, position : '페이튼-붉은 달의 흔적', src : 'img/boss/boss_11.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
    {id : 14, name : '모아케', lv : 1415, position : '파푸니카-티키타카 군락지', src : 'img/boss/boss_13.png',time : ['20:03'], endTime : '20:03', contType : 'FIELD_BOSS'},
  ]
]

// 질병 광기 몽환 어둠
export const chaosGate = [
 [
  {name : '일렁이는 몽환군단', src : '/img/chaos/chaos_03.png', time : ['22:13'], endTime : '22:13', lv : 302, position : '아르데타인-바람결 구릉지', contType : 'CHAOS_GATE'},
  {name : '일렁이는 몽환군단', src : '/img/chaos/chaos_03.png', time : ['22:13'], endTime : '22:13', lv : 415, position : '로헨델-엘조윈의 그늘', contType : 'CHAOS_GATE'},
  {name : '일렁이는 질병군단', src : '/img/chaos/chaos_01.png', time : ['22:13'], endTime : '22:13', lv : 802, position : '욘-미완의 정원', contType : 'CHAOS_GATE'},
  {name : '일렁이는 어둠군단', src : '/img/chaos/chaos_04.png', time : ['22:13'], endTime : '22:13', lv : 915, position : '페이튼-울부짖는 늪지대', contType : 'CHAOS_GATE'},
  {name : '일렁이는 광기군단', src : '/img/chaos/chaos_02.png', time : ['22:13'], endTime : '22:13', lv : 1302, position : '파푸니카-별모래 해변', contType : 'CHAOS_GATE'},
 ],
 [],
 [
  {name : '일렁이는 광기군단', src : '/img/chaos/chaos_02.png', time : ['20:13'], endTime : '20:13', lv : 302, position : '애니츠-등나무 언덕', contType : 'CHAOS_GATE'},
  {name : '일렁이는 몽환군단', src : '/img/chaos/chaos_03.png', time : ['20:13'], endTime : '20:13', lv : 415, position : '로헨델-엘조윈의 그늘', contType : 'CHAOS_GATE'},
  {name : '일렁이는 질병군단', src : '/img/chaos/chaos_01.png', time : ['20:13'], endTime : '20:13', lv : 802, position : '욘-미완의 정원', contType : 'CHAOS_GATE'},
  {name : '일렁이는 어둠군단', src : '/img/chaos/chaos_04.png', time : ['20:13'], endTime : '20:13', lv : 915, position : '페이튼-울부짖는 늪지대', contType : 'CHAOS_GATE'},
  {name : '일렁이는 광기군단', src : '/img/chaos/chaos_02.png', time : ['20:13'], endTime : '20:13', lv : 1302, position : '파푸니카-별모래 해변', contType : 'CHAOS_GATE'},   
 ],
 [],[],
 [
  {name : '일렁이는 질병군단', src : '/img/chaos/chaos_01.png', time : ['20:13'], endTime : '20:13', lv : 302, position : '슈샤이어-얼음나비 절벽', contType : 'CHAOS_GATE'},
  {name : '일렁이는 몽환군단', src : '/img/chaos/chaos_03.png', time : ['20:13'], endTime : '20:13', lv : 415, position : '로헨델-엘조윈의 그늘', contType : 'CHAOS_GATE'},
  {name : '일렁이는 질병군단', src : '/img/chaos/chaos_01.png', time : ['20:13'], endTime : '20:13', lv : 802, position : '욘-미완의 정원', contType : 'CHAOS_GATE'},
  {name : '일렁이는 어둠군단', src : '/img/chaos/chaos_04.png', time : ['20:13'], endTime : '20:13', lv : 915, position : '페이튼-울부짖는 늪지대', contType : 'CHAOS_GATE'},
  {name : '일렁이는 광기군단', src : '/img/chaos/chaos_02.png', time : ['20:13'], endTime : '20:13', lv : 1302, position : '파푸니카-별모래 해변', contType : 'CHAOS_GATE'},   
 ],
 [
  {name : '일렁이는 어둠군단', src : '/img/chaos/chaos_04.png', time : ['22:13'], endTime : '22:13', lv : 302, position : '베른 북부-발란카르 산맥', contType : 'CHAOS_GATE'},
  {name : '일렁이는 몽환군단', src : '/img/chaos/chaos_03.png', time : ['22:13'], endTime : '22:13', lv : 415, position : '로헨델-엘조윈의 그늘', contType : 'CHAOS_GATE'},
  {name : '일렁이는 질병군단', src : '/img/chaos/chaos_01.png', time : ['22:13'], endTime : '22:13', lv : 802, position : '욘-미완의 정원', contType : 'CHAOS_GATE'},
  {name : '일렁이는 어둠군단', src : '/img/chaos/chaos_04.png', time : ['22:13'], endTime : '22:13', lv : 915, position : '페이튼-울부짖는 늪지대', contType : 'CHAOS_GATE'},
  {name : '일렁이는 광기군단', src : '/img/chaos/chaos_02.png', time : ['22:13'], endTime : '22:13', lv : 1302, position : '파푸니카-별모래 해변', contType : 'CHAOS_GATE'},   
 ]
]

// 항해
export const oceanCont = [
 [
   {name : '기에나', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['아르데타인', '베른', '애니츠'], endPosition : '애니츠', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
   {name : '프로키온', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['페이튼', '파푸니카', '로헨델'], endPosition : '로헨델', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
 ],
 [
  {name : '기에나', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['아르데타인', '애니츠', '베른'], endPosition : '베른', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '프로키온', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['페이튼', '로헨델', '욘'], endPosition : '욘', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '조화의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-베른 북부', '대항해-베른 북부'], endPosition : '대항해-베른 북부', time : ['18:11', '22:11'], endTime : '22:11', waiting : 1},
  {name : '대지의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-욘'], endPosition : '대항해-욘', time : ['18:11'], endTime : '18:11', waiting : 1},
  {name : '인내의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-페이튼'], endPosition : '대항해-페이튼', time : ['18:11'], endTime : '18:11', waiting : 1},
  {name : '지혜의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-로헨델'], endPosition : '대항해-로헨델', time : ['22:11'], endTime : '22:11', waiting : 1},
  {name : '인도의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-파푸니카'], endPosition : '대항해-파푸니카', time : ['22:11'], endTime : '22:11', waiting : 1},
 ],
 [
  {name : '기에나', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['애니츠', '베른', '아르데타인'], endPosition : '아르데타인', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '프로키온', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['파푸니카', '욘', '로헨델'], endPosition : '로헨델', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '악몽을 떠도는 유령선', contType : 'PHANTOM_SHIP', lv : 415, src : '/img/ocean/ocean_03.png', position : '로헨델', endPosition : '로헨델', time : ['23:13'], endTime : '23:13'},
  {name : '그림자를 헤매는 유령선', contType : 'PHANTOM_SHIP', lv : 915, src : '/img/ocean/ocean_03.png', position : '페이튼', endPosition : '페이튼', time : ['23:13'], endTime : '23:13'},
  {name : '폭풍을 부르는 유령선', contType : 'PHANTOM_SHIP', lv : 1370, src : '/img/ocean/ocean_03.png', position : '파푸니카', endPosition : '파푸니카', time : ['23:13'], endTime : '23:13'},
 ],
 [
  {name : '기에나', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['베른', '아르데타인', '애니츠'], endPosition : '애니츠', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '프로키온', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['욘', '페이튼', '파푸니카'], endPosition : '파푸니카', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '조화의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-베른 북부', '대항해-베른 북부'], endPosition : '대항해-베른 북부', time : ['18:11', '22:11'], endTime : '22:11', waiting : 1},
  {name : '지혜의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : '대항해-로헨델', endPosition : '대항해-로헨델', time : ['18:11'], endTime : '18:11', waiting : 1},
  {name : '인도의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-파푸니카'], endPosition : '대항해-파푸니카', time : ['18:11'], endTime : '18:11', waiting : 1},
  {name : '대지의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-욘'], endPosition : '대항해-욘', time : ['22:11'], endTime : '22:11', waiting : 1},
  {name : '인내의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-페이튼'], endPosition : '대항해-페이튼', time : ['22:11'], endTime : '22:11', waiting : 1},
 ],
 [
  {name : '기에나', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['아르데타인', '애니츠', '베른'], endPosition : '베른', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '프로키온', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['로헨델', '파푸니카', '페이튼'], endPosition : '페이튼', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '악몽을 떠도는 유령선', contType : 'PHANTOM_SHIP', lv : 415, src : '/img/ocean/ocean_03.png', position : '로헨델', endPosition : '로헨델', time : ['23:13'], endTime : '23:13'},
  {name : '그림자를 헤매는 유령선', contType : 'PHANTOM_SHIP', lv : 915, src : '/img/ocean/ocean_03.png', position : '페이튼', endPosition : '페이튼', time : ['23:13'], endTime : '23:13'},
  {name : '폭풍을 부르는 유령선', contType : 'PHANTOM_SHIP', lv : 1370, src : '/img/ocean/ocean_03.png', position : '파푸니카', endPosition : '파푸니카', time : ['23:13'], endTime : '23:13'},
 ],
 [
  {name : '기에나', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['애니츠', '페이튼', '베른'], endPosition : '베른', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '프로키온', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['페이튼', '로헨델', '욘'], endPosition : '욘', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
],
[
  {name : '기에나', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['베른', '아르데타인', '애니츠'], endPosition : '애니츠', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '프로키온', contType : 'CO_OCEAN', lv : '-', src : '/img/ocean/ocean_01.png', position : ['로헨델', '욘', '파푸니카'], endPosition : '파푸니카', time : ['19:31', '21:31', '23:31'], endTime : '23:31', waiting : 1},
  {name : '조화의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-베른 북부', '대항해-베른 북부'], endPosition : '대항해-베른 북부', time : ['18:11', '23:11'], endTime : '23:11', waiting : 1},
  {name : '대지의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-욘'], endPosition : '대항해-욘', time : ['18:11'], endTime : '18:11', waiting : 1},
  {name : '인내의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-페이튼'], endPosition : '대항해-페이튼', time : ['18:11'], endTime : '18:11', waiting : 1},
  {name : '지혜의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-로헨델'], endPosition : '대항해-로헨델', time : ['23:11'], endTime : '23:11', waiting : 1},
  {name : '인도의 관문', contType : 'GATE', lv : '-', src : '/img/ocean/ocean_02.png', position : ['대항해-파푸니카'], endPosition : '대항해-파푸니카', time : ['23:11'], endTime : '23:11', waiting : 1},
  {name : '악몽을 떠도는 유령선', contType : 'PHANTOM_SHIP', lv : 415, src : '/img/ocean/ocean_03.png', position : '로헨델', endPosition : '로헨델', time : ['19:13'], endTime : '19:13'},
  {name : '그림자를 헤매는 유령선', contType : 'PHANTOM_SHIP', lv : 915, src : '/img/ocean/ocean_03.png', position : '페이튼', endPosition : '페이튼', time : ['19:13'], endTime : '19:13'},
  {name : '폭풍을 부르는 유령선', contType : 'PHANTOM_SHIP', lv : 1370, src : '/img/ocean/ocean_03.png', position : '파푸니카', endPosition : '파푸니카', time : ['19:13'], endTime : '19:13'},
 ],
]