export interface IExpeditionPopToggle {
  (p1 : boolean) : void
}

export interface IChangeUserInfoMainTab {
  (p1 : number) : void
}

// Parameters유틸리티로 history타입 가져옴
// export interface IGetUserData {
//   (p1 : string, p2 : Parameters<typeof Actions.getUserData_Thunk>[1]) : void
// }
