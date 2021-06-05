import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BasicInfo from "./index";

const demoUserData = {
  basicInfo: {
    expeditionLv: "221",
    title: "-",
    curBigLv: "1,402",
    curSmallLv: ".50",
    reachBigLv: "1,402",
    reachSmallLv: ".50",
    guild: "지칠때쉬러와",
    pvp: "8단",
    garden: "Lv.65 동산",
    className: "바드",
    classSrc:
      "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/bard_m.png",
  },
  expeditionInfo: {
    name: "모여요꿈동산",
    Lv: "Lv.57",
    server: "@아브렐슈드",
  },
};

const demoCollection = "유저 컬렉션";

describe("BasicInfo", () => {
  it("데이터에 맞는 DOM 구성", () => {
    const { container } = render(
      <BasicInfo userData={demoUserData} collection={demoCollection} />
    );
    const { basicInfo, expeditionInfo } = demoUserData;
    const name = `${expeditionInfo.Lv} ${expeditionInfo.name}`;
    const expedition = `${expeditionInfo.server} Lv ${basicInfo.expeditionLv}`;

    const classInfo = `클래스${basicInfo.className}`;
    const nameInfo = `이름${name}원정대 레벨${expedition}`;
    const levelInfo = `현재 아이템 레벨${basicInfo.curBigLv}${basicInfo.curSmallLv}달성 아이템 레벨${basicInfo.reachBigLv}${basicInfo.reachSmallLv}`;
    const sub1Info = `영지${basicInfo.garden}PVP${basicInfo.pvp}`;
    const sub2Info = `칭호${basicInfo.title}길드${basicInfo.guild}`;
    const collectionInfo = demoCollection;

    expect(getTextContent(container, ".class-info")).toBe(classInfo);
    expect(getTextContent(container, ".name-info")).toBe(nameInfo);
    expect(getTextContent(container, ".level-info")).toBe(levelInfo);
    expect(getTextContent(container, ".sub1-info")).toBe(sub1Info);
    expect(getTextContent(container, ".sub2-info")).toBe(sub2Info);
    expect(getTextContent(container, ".collection-info")).toBe(collectionInfo);
  });
});

function getTextContent(dom, query) {
  return dom.querySelector(query).textContent;
}
