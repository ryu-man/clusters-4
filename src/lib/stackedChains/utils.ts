import { networks } from './chains';

export function findNetwork(id: number) {
	return networks.find((d) => d.chainId === id);
}
