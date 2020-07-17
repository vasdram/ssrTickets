import { translate } from "./translation"
//import translate from "./trans.json"
import store from "../store/store"
type Ttranslate = {
  en: {},
  ru: {}
}

const t = (lang: any, phrase: any) => {
  return translate[lang][phrase] as Ttranslate
}


//console.log(trans.en)

export default t