import { autoCompete } from "../../service/restConnection";

export const autoCompleteRequest = (req: string) => autoCompete.get(req).then(res => res.data);