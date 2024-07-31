export enum CONTRACT_NAME  {
    BROADCASTER_CONTRACT_ADDRESS = "BROADCASTER_CONTRACT_ADDRESS",
    RANDOMIZER_CONTRACT_ADDRESS = "RANDOMIZER_CONTRACT_ADDRESS",
    COIN98_GIFT_CONTRACT_ADDRESS = "COIN98_GIFT_CONTRACT_ADDRESS",
    COIN98_GIFT_FACTORY_CONTRACT_ADDRESS = "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS",
    GAS_SPONSOR_CONTRACT_ADDRESS = "GAS_SPONSOR_CONTRACT_ADDRESS"
}

export const GIFT_CONTRACT = (contract: CONTRACT_NAME ,isDev: boolean = process.env.NODE_ENV === 'development'): string => {
    const contracts: Record<CONTRACT_NAME, string> = {
        "BROADCASTER_CONTRACT_ADDRESS" : isDev ? '0x7F491a61A0c688DDe55e6e3A18Ef7bA6cE397B85' : '',
        "RANDOMIZER_CONTRACT_ADDRESS" : isDev ? '0x960A9CAA11ec6E8b41Df84A6cB1f61e4D7eC236b' : '',
        "COIN98_GIFT_CONTRACT_ADDRESS": isDev ? '0x9d9fdb7202BEB3cb78267eF6EE667EBc0Cd1B333' : '',
        "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS": isDev ? '0xBB8E4185edE84581387E4A5f5bAD5Cb4850E7178' : '',
        "GAS_SPONSOR_CONTRACT_ADDRESS": isDev ? '0xb7e8C7Aa8f2116C76377d3c4E5b43b96aCe2d26d' : '',
    }

    return contracts[contract]
}