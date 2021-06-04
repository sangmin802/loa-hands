import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BasicInfo from "./index";

const demoUserData = {
  basicInfo: {
    expeditionLv: "221",
    title: "-",
    curBigLv: "1,402",
    curSmallLv: ".50",
    reachBigLv: "1,502",
    reachSmallLv: ".30",
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
    render(<BasicInfo userData={demoUserData} collection={demoCollection} />);
    const { basicInfo, expeditionInfo } = demoUserData;
    const name = `${expeditionInfo.Lv} ${expeditionInfo.name}`;
    const expedition = `${expeditionInfo.server} Lv ${basicInfo.expeditionLv}`;

    expect(screen.getByText(basicInfo.className)).toBeInTheDocument();
    expect(screen.getByAltText(basicInfo.classSrc)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(expedition)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.curBigLv)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.curSmallLv)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.reachBigLv)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.reachSmallLv)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.garden)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.pvp)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.title)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.guild)).toBeInTheDocument();
    expect(screen.getByText(demoCollection)).toBeInTheDocument();
  });
});
