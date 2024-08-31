export enum CONTRACT_NAME  {
    BROADCASTER_CONTRACT_ADDRESS = "BROADCASTER_CONTRACT_ADDRESS",
    RANDOMIZER_CONTRACT_ADDRESS = "RANDOMIZER_CONTRACT_ADDRESS",
    COIN98_GIFT_CONTRACT_ADDRESS = "COIN98_GIFT_CONTRACT_ADDRESS",
    COIN98_GIFT_FACTORY_CONTRACT_ADDRESS = "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS",
    GAS_SPONSOR_CONTRACT_ADDRESS = "GAS_SPONSOR_CONTRACT_ADDRESS"
}

export const GIFT_CONTRACT = (contractName: CONTRACT_NAME, isDev: boolean = true): string  => {
    const contracts : Record<CONTRACT_NAME, string> = {
    "BROADCASTER_CONTRACT_ADDRESS" : isDev? '0xfc736dd0067075D84640c069b09FDDd05a31E2ca' : "0x66f1116213A153D236326e47Ab9A13FB9DD3Abdd",
    "RANDOMIZER_CONTRACT_ADDRESS" : isDev? '0x14a342D1A849a78b3914F7ed51dd0B7B6c3bCA61' : "0xFb2bd55cf6F508d4162ae8E94a23ac6EfeB9c136",
    "COIN98_GIFT_CONTRACT_ADDRESS": isDev? '0x085b1a35BD1799eA5049a3BFf9804f63B5e6f394' : "0x76b77D4D3d21370761415e0aa14b8425229438CB",
    "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS": isDev? '0xB4ef01689E0323a73c1853F96E8A409F17ba14F0' : "0x485f50422e47c56CfF19Ab42Fd00238011Be1844",
    "GAS_SPONSOR_CONTRACT_ADDRESS": isDev? '0x0CD9ab283645fB7950955d713Ac26a0595bacC55' : "0xb1FF76a965AD7d7f5FCEDf58F0f7EE9A0Fe7F985"
    }
    return contracts[contractName]
}