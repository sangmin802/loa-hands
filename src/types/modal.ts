import ExpeditionInfo from "models/expeditionInfo";
import UserInfo from "models/userInfo";

export interface IUserDetail {
  backSrc: string;
  type: string;
  detail: {
    src: string;
    grade: string;
    title: string;
    subTitle: string[];
    hover: boolean;
    rune?: {
      runeGrade: string;
      runeImg: string;
      runeInfo: string;
      runeGradeNo: number;
    };
    quality?: number;
    itemPartBox?: [];
    indentStringGroup?: [];
    tripodSkillCustom?: [];
  };
}

type ModalData = UserInfo | ExpeditionInfo | IUserDetail | null;
type ModalType = "ITEM" | "EXPEDITION" | null;

export interface IModalState {
  type: ModalType;
  data: ModalData;
}
