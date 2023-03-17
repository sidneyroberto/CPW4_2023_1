export interface Word {
  term: string
  audioUrls: string[]
  meanings: string[]
}

export interface WordNotFound {
  title: string
}

export const isInstanceOfWordNotFound = (obj: Word[] | WordNotFound) =>
  (<WordNotFound>obj).title != undefined

export const getWords = (jsonObj: any): Word[] | WordNotFound => {}
