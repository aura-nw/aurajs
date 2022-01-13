# AuraJs SDK
AuraJs a JavaScript SDK for writing applications that interact with the smart contract Aura blockchain from either Node.js or browser environments

## Features
- Written in TypeScript, with type definitions
- Works in Node.js, in the browser

## Installation
Grab the latest version off NPM:

```bash
npm install @auranw/aurajs
```

## Usage
Terra.js can be use in Node.js

```typescript
import {SigningAuraWasmClient} from '@auranw/aurajs';
import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing';

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix:'aura'});
const [firstAccount] = await wallet.getAccounts();

const mnemonic = 'xxx';
const rpcEndpoint = 'http://x.x.x.x:26657'; // rpc of testnet aura: http://18.138.28.51:26657
const client = await SigningAuraWasmClient.connectWithSigner(rpcEndpoint, wallet);

const contractAddress = 'aura14hj2tavq8fpesdwxxcu44rty3hh90vhurzxerr';
const mintMsg = {
  mint: {
    token_id: 'token1',
    owner: 'aura1mmsenr5nejugxqv6jtetlckwjhsmft7f8dqud4',
    token_uri: 'ANFT',
    extension: {}
  }
};
const fee = {
  amount: [
    {
      denom: 'uaura',
      amount: '16',
    },
  ],
  gas: '152375',
}
const result = await client.execute(firstAccount.address, contractAddress, mintMsg, fee);

```
## License
This software is licensed under the MIT license
