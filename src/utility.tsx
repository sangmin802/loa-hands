import { useHistory } from "react-router-dom";
import _History from "history";
import { useDispatch } from "react-redux";
import _ from "lodash";

export default {
  GetHooks() {
    const history: _History.History = useHistory();
    const dispatch = useDispatch();
    return { history, dispatch };
  },

  // 태그가 포함된 문자열에서 태그를 제외한 문자열만 반환
  // BR태그가 있다면, div태그로 줄바꿈되도록 하고 {}를 통해 읽을수 있게 처리
  getOnlyText(string) {
    if (!string) return;
    const newStr = string.replace(/<BR>$/gi, "").replace(/<BR>/gi, "enter");
    const parsed = new DOMParser().parseFromString(newStr, "text/html").body
      .textContent;
    if (parsed.includes("enter")) {
      const split = parsed.split("enter");
      return split.map(res => {
        if (res !== "") return res;
        return null;
      });
    } else {
      return parsed;
    }
  },

  // 아바타 or 장비 나누기
  divideEquipInfo(equipInfo) {
    return Object.keys(equipInfo).reduce(
      (prev, cur) => {
        if (!cur.includes("av_")) {
          prev[0].push(equipInfo[cur]);
        } else {
          prev[1].push({ ...equipInfo[cur], avatarPart: cur });
        }
        return prev;
      },
      [[], []]
    );
  },

  // 여러개의 value값(string, 그 외)을 가진 객체의 값들만 배열로 추출
  multipleValues(_val) {
    let resultArr = [];
    const keyArr = Object.keys(_val);
    keyArr.forEach(key => {
      if (typeof _val[key] === "string") {
        resultArr.push(this.getOnlyText(_val[key]));
      } else {
        resultArr.push(_val[key]);
      }
    });
    return resultArr;
  },

  // 동일한 타입을 가진 객체만 찾아서 반환
  getSameTypeObj(_arr, _type) {
    return _arr.filter(res => {
      if (!res) return;
      if (res.type === _type) return res;
      return;
    });
  },

  // 문자열을 Element화 해서, Body부분만 반환
  returnBody(data) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const body = doc.getElementsByTagName("body")[0];

    return body;
  },

  // 객체 비교
  compareObj(obj1, obj2) {
    // 동일하면 true 다르면 false
    return _.isEqual(obj1, obj2);
  },

  addZero(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  },

  arrayReducer(arr, type) {
    return arr.reduce(
      (prev, cur) => {
        if (cur.type.includes(type)) {
          prev[0].push(cur);
        } else {
          prev[1].push(cur);
        }
        return prev;
      },
      [[], []]
    );
  },

  setQualityColor(qualityValue) {
    if (qualityValue >= 0 && qualityValue < 10) return -1;
    if (qualityValue >= 10 && qualityValue < 70) return 1;
    if (qualityValue >= 70 && qualityValue < 90) return 2;
    if (qualityValue >= 90) return 3;
    return -2;
  },
};
