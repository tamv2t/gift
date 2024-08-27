export enum CONTRACT_NAME  {
    BROADCASTER_CONTRACT_ADDRESS = "BROADCASTER_CONTRACT_ADDRESS",
    RANDOMIZER_CONTRACT_ADDRESS = "RANDOMIZER_CONTRACT_ADDRESS",
    COIN98_GIFT_CONTRACT_ADDRESS = "COIN98_GIFT_CONTRACT_ADDRESS",
    COIN98_GIFT_FACTORY_CONTRACT_ADDRESS = "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS",
    GAS_SPONSOR_CONTRACT_ADDRESS = "GAS_SPONSOR_CONTRACT_ADDRESS"
}

export const GIFT_CONTRACT = (contractName: CONTRACT_NAME, isDev: boolean = true): string  => {
    const contracts : Record<CONTRACT_NAME, string> = {
    "BROADCASTER_CONTRACT_ADDRESS" : isDev? '0x8f15D886AC9BCE3b08066fCaaCB3d29A5D287B9e' : "0x5C8ABc6B9d669405BCB46aF982A4A9d53Ed9d2e7",
    "RANDOMIZER_CONTRACT_ADDRESS" : isDev? '0x8EC1c86C16e6ED673737ef927a5a27E53eC29354' : "0x9822bF0915D1FDc29C5eaA68c93E115A8F3303Dd",
    "COIN98_GIFT_CONTRACT_ADDRESS": isDev? '0x7631645693316BE37A9071fF75C11F0926741420' : "0xf25F71E761C09b18979aADAF1433104EE1945CBF",
    "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS": isDev? '0xB88996D92cf34bE25CA071bd81705abed141eCb8' : "0xF827A1389d206194dEe7624F25015B86b376F26A",
    "GAS_SPONSOR_CONTRACT_ADDRESS": isDev? '0x464d8Af7211B30C1cBb7dAbA028F4C7B2eCC85Cc' : "0x095e458725ce80C54F2D595E4Ac4868B247DCC9e"
    }
    return contracts[contractName]
}