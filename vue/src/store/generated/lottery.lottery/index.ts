import { Client, registry, MissingWalletError } from 'lottery-client-ts'

import { Bet } from "lottery-client-ts/lottery.lottery/types"
import { EvtSystemInfoUpdated } from "lottery-client-ts/lottery.lottery/types"
import { EvtLotteryBegan } from "lottery-client-ts/lottery.lottery/types"
import { EvtLotteryEnded } from "lottery-client-ts/lottery.lottery/types"
import { EvtCreateBet } from "lottery-client-ts/lottery.lottery/types"
import { Lottery } from "lottery-client-ts/lottery.lottery/types"
import { Params } from "lottery-client-ts/lottery.lottery/types"
import { SystemInfo } from "lottery-client-ts/lottery.lottery/types"


export { Bet, EvtSystemInfoUpdated, EvtLotteryBegan, EvtLotteryEnded, EvtCreateBet, Lottery, Params, SystemInfo };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				SystemInfo: {},
				Lottery: {},
				LotteryAll: {},
				
				_Structure: {
						Bet: getStructure(Bet.fromPartial({})),
						EvtSystemInfoUpdated: getStructure(EvtSystemInfoUpdated.fromPartial({})),
						EvtLotteryBegan: getStructure(EvtLotteryBegan.fromPartial({})),
						EvtLotteryEnded: getStructure(EvtLotteryEnded.fromPartial({})),
						EvtCreateBet: getStructure(EvtCreateBet.fromPartial({})),
						Lottery: getStructure(Lottery.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						SystemInfo: getStructure(SystemInfo.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getSystemInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SystemInfo[JSON.stringify(params)] ?? {}
		},
				getLottery: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Lottery[JSON.stringify(params)] ?? {}
		},
				getLotteryAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.LotteryAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: lottery.lottery initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.LotteryLottery.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySystemInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.LotteryLottery.query.querySystemInfo()).data
				
					
				commit('QUERY', { query: 'SystemInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySystemInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getSystemInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySystemInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryLottery({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.LotteryLottery.query.queryLottery( key.index)).data
				
					
				commit('QUERY', { query: 'Lottery', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryLottery', payload: { options: { all }, params: {...key},query }})
				return getters['getLottery']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryLottery API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryLotteryAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.LotteryLottery.query.queryLotteryAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.LotteryLottery.query.queryLotteryAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'LotteryAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryLotteryAll', payload: { options: { all }, params: {...key},query }})
				return getters['getLotteryAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryLotteryAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCreateBet({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.LotteryLottery.tx.sendMsgCreateBet({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateBet:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateBet:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateSystemInfo({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.LotteryLottery.tx.sendMsgUpdateSystemInfo({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateSystemInfo:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateSystemInfo:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCreateBet({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.LotteryLottery.tx.msgCreateBet({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateBet:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateBet:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateSystemInfo({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.LotteryLottery.tx.msgUpdateSystemInfo({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateSystemInfo:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateSystemInfo:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
