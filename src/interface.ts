export interface IJson {
  name : string
  contType : string
  lv : string | number
  src : string
  position : string | string[]
  time : string | string[]
  endTime : string,
  endPosition? : string
  waiting? : number
}

// https://www.typescriptlang.org/docs/handbook/generics.html
// 중간쯤에 
export interface IOneParamMethod {
  <T>(p1 : T) : void
}

export interface ITwoParamMethod {
  <T, U>(p1 : T, p2 : U) : void
}