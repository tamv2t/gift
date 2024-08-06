export enum CONTRACT_NAME  {
    BROADCASTER_CONTRACT_ADDRESS = "BROADCASTER_CONTRACT_ADDRESS",
    RANDOMIZER_CONTRACT_ADDRESS = "RANDOMIZER_CONTRACT_ADDRESS",
    COIN98_GIFT_CONTRACT_ADDRESS = "COIN98_GIFT_CONTRACT_ADDRESS",
    COIN98_GIFT_FACTORY_CONTRACT_ADDRESS = "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS",
    GAS_SPONSOR_CONTRACT_ADDRESS = "GAS_SPONSOR_CONTRACT_ADDRESS"
}

const isDev = process.env.NODE_ENV === 'development'

export const GIFT_CONTRACT: Record<CONTRACT_NAME, string> = {
    "BROADCASTER_CONTRACT_ADDRESS" : isDev ? '0xa19269Cde8b6B8A52640c5bE0566D54805D04253' : ' 0xa19269Cde8b6B8A52640c5bE0566D54805D04253',
    "RANDOMIZER_CONTRACT_ADDRESS" : isDev ? '0x7c3c41E7c76b14d7f03c3fF875f9eCb2F69CB607' : '0x7c3c41E7c76b14d7f03c3fF875f9eCb2F69CB607',
    "COIN98_GIFT_CONTRACT_ADDRESS": isDev ? '0x495bFeE6Bf9e2e6bBEDa1E4F8B5E249a22EEA167' : ' 0x495bFeE6Bf9e2e6bBEDa1E4F8B5E249a22EEA167',
    "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS": isDev ? '0x080A34F16d545b0F084Ea7202f391cfa5b9914Cd' : '0x080A34F16d545b0F084Ea7202f391cfa5b9914Cd',
    "GAS_SPONSOR_CONTRACT_ADDRESS": isDev ? '0xDD133F8CDe28e353fEE74C187ce1A433B1185229' : '0xDD133F8CDe28e353fEE74C187ce1A433B1185229',
}