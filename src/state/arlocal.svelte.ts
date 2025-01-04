import Arweave from "arweave";
import { getContext, setContext } from "svelte";

export type HistoryItem = {
	id: string,
	owner: {
		address: string,
	},
	block: {
		height: number,
        timestamp: number,
	},
	tags: any[],
}

export class ArlocalState {
	error = $state<any>();
	transactionHistory = $state<HistoryItem[]>([]);

	arweave: Arweave;

	constructor() {
		this.arweave = Arweave.init({
			host: "localhost",
			port: 1984,
			protocol: "http",
			timeout: 5000,
			logging: false,
		});
		this.getHistory();
		setInterval(() => {
			this.getHistory();
		}, 10000);
	}

	async mint(addr: string): Promise<string> {
		if (!this.arweave) {
			throw "Not ready";
		}
		return this.arweave.api.get(`mint/${addr}/1000000000000`)
		.then((response) => new Promise(resolve => {
			const to = setTimeout(() => {
				clearTimeout(to);
				resolve(response.data);
			},300)
		}))
		.then((data) => {
			return this.arweave.ar.winstonToAr(data as string);
		})
	}

	async mine(): Promise<void> {
		if (!this.arweave) {
			throw "Not ready";
		}
		return this.arweave.api.get("mine")
		.then(response => response.data);
	}

	async getHistory(len: number = 20): Promise<void> {
		const query = { query: ` { transactions(first: ${len}) { edges { node { id owner { address } tags { name value } block { height timestamp } } } } } ` };
		return this.arweave.api.post("graphql", JSON.stringify(query))
		.then(response => response.data.data.transactions.edges)
		.then(edges => this.transactionHistory = edges?.map((item: any) => item.node as HistoryItem)) || [];
	}
}

const FEED_STATE_KEY = "ArlocalState";

export function setArlocalState(): ArlocalState {
	return setContext(FEED_STATE_KEY, new ArlocalState());
}

export function getArlocalState(): ArlocalState {
	return getContext<ArlocalState>(FEED_STATE_KEY);
}