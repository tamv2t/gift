export enum CONTRACT_NAME  {
    BROADCASTER_CONTRACT_ADDRESS = "BROADCASTER_CONTRACT_ADDRESS",
    RANDOMIZER_CONTRACT_ADDRESS = "RANDOMIZER_CONTRACT_ADDRESS",
    COIN98_GIFT_CONTRACT_ADDRESS = "COIN98_GIFT_CONTRACT_ADDRESS",
    COIN98_GIFT_FACTORY_CONTRACT_ADDRESS = "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS",
    GAS_SPONSOR_CONTRACT_ADDRESS = "GAS_SPONSOR_CONTRACT_ADDRESS"
}

export const GIFT_CONTRACT = (contractName: CONTRACT_NAME, isDev: boolean = true): string  => {
    const contracts : Record<CONTRACT_NAME, string> = {
    "BROADCASTER_CONTRACT_ADDRESS" : isDev? '0xb9Eeef45Fde80b2Bd65235Ac5161eEB3E1d5499c' : "0x66f1116213A153D236326e47Ab9A13FB9DD3Abdd",
    "RANDOMIZER_CONTRACT_ADDRESS" : isDev? '0xeDA5a95767fd8ef1dc2DE97BbcA21f5dC5A2443B' : "0xFb2bd55cf6F508d4162ae8E94a23ac6EfeB9c136",
    "COIN98_GIFT_CONTRACT_ADDRESS": isDev? '0x8Ae8a2e6cf98fA987f52Ca1FD262142b86DfFca5' : "0x76b77D4D3d21370761415e0aa14b8425229438CB",
    "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS": isDev? '0x2A1CBa5FB62871489fB82A8A33981A2D6F982360' : "0x485f50422e47c56CfF19Ab42Fd00238011Be1844",
    "GAS_SPONSOR_CONTRACT_ADDRESS": isDev? '0x68f501640FA548a8a6ddF4938B4cEdb739D02aeA' : "0xb1FF76a965AD7d7f5FCEDf58F0f7EE9A0Fe7F985"
    }
    return contracts[contractName]
}