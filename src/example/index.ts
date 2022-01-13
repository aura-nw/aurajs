'use strict';

import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing';
import {SigningAuraWasmClient} from '../signingaurawasmclient';

export class Example {
  /* Public Instance Methods */

  public async exampleMethod() {

    const mnemonic = 'february victory grape oblige leader invest organ noble control finger hurt wage sunny jeans panel dress bulk clerk visit fish essay weasel sport finger';
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: 'aura'});
    const [firstAccount] = await wallet.getAccounts();

    const rpcEndpoint = 'http://18.138.28.51:26657';
    const client = await SigningAuraWasmClient.connectWithSigner(rpcEndpoint, wallet);

    const contractAddress = 'aura14hj2tavq8fpesdwxxcu44rty3hh90vhurzxerr';
    const mintMsg = {
      mint: {
        token_id: 'token2',
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
      gas: '152375', // 180k
    }
    const result = await client.execute(firstAccount.address, contractAddress, mintMsg, fee);
    console.log('result', result);
  }
}


async function bootstrap() {
  const app = new Example();
  app.exampleMethod();
}

bootstrap();
