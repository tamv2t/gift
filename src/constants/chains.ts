export const RPC_URL =  process.env.NODE_ENV === 'development' ? "https://rpc-testnet.viction.xyz" : "https://rpc.viction.xyz" 
export const CHAIN_ID = process.env.NODE_ENV === 'development' ? 89 : 88