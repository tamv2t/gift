export enum CONTRACT_NAME  {
    BROADCASTER_CONTRACT_ADDRESS = "BROADCASTER_CONTRACT_ADDRESS",
    RANDOMIZER_CONTRACT_ADDRESS = "RANDOMIZER_CONTRACT_ADDRESS",
    COIN98_GIFT_CONTRACT_ADDRESS = "COIN98_GIFT_CONTRACT_ADDRESS",
    COIN98_GIFT_FACTORY_CONTRACT_ADDRESS = "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS",
    GAS_SPONSOR_CONTRACT_ADDRESS = "GAS_SPONSOR_CONTRACT_ADDRESS"
}

export const GIFT_CONTRACT = (contract: CONTRACT_NAME ,isDev: boolean = process.env.NODE_ENV === 'development'): string => {
    const contracts: Record<CONTRACT_NAME, string> = {
        "BROADCASTER_CONTRACT_ADDRESS" : isDev ? '0x876e3fD7C577bd48159707e390cEC1f58C2Ba4f8' : '',
        "RANDOMIZER_CONTRACT_ADDRESS" : isDev ? '0x0318304aC7FF13c600a91337E529EeF2B7C1db97' : '',
        "COIN98_GIFT_CONTRACT_ADDRESS": isDev ? '0x42833068eD8b5411a4E790976A34808939581bA1' : '',
        "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS": isDev ? '0x7478B6d32CC5A00D315e895a354F7F0929C695c9' : '',
        "GAS_SPONSOR_CONTRACT_ADDRESS": isDev ? '0xF756896336A691117939463ab867974Dfd1bB84c' : '',
    }

    return contracts[contract]
}