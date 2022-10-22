import * as dotenv from "dotenv"

import { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import "hardhat-gas-reporter"
import "solidity-coverage"

dotenv.config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.15",
                settings: {
                    viaIR: false,
                    optimizer: {
                        enabled: false,
                    },
                },
            },
        ],
    },
    networks: {
        hardhat: {
            blockGasLimit: 30_000_000,
            throwOnCallFailures: false,
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
}

export default config
