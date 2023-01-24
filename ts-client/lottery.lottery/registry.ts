import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateBet } from "./types/lottery/lottery/tx";
import { MsgUpdateSystemInfo } from "./types/lottery/lottery/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/lottery.lottery.MsgCreateBet", MsgCreateBet],
    ["/lottery.lottery.MsgUpdateSystemInfo", MsgUpdateSystemInfo],
    
];

export { msgTypes }