/*
 * Fair Protocol, open source decentralised inference marketplace for artificial intelligence.
 * Copyright (C) 2023 Fair Protocol
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */

import Irys from '@irys/sdk';
import fs from 'fs';
import { ANT, ArweaveSigner } from '@ar.io/sdk';

const main = async () => {
  const wallet = './wallet.json';

  const jwk = JSON.parse(fs.readFileSync(wallet).toString());
  
  // NOTE: Depending on the version of JavaScript you use, you may need to use
  // the commented out line below to create a new Bundlr object.
  // const bundlr = new Bundlr("http://node1.bundlr.network", "arweave", jwk);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const irys = new Irys({ url: 'https://up.arweave.net', token: 'arweave', key: jwk });
  
  // Get loaded balance in atomic units
  const atomicBalance = await irys.getLoadedBalance();
  console.log(`node balance (atomic units) = ${atomicBalance}`);
  
  // Convert balance to an easier to read format
  const convertedBalance = irys.utils.unitConverter(atomicBalance);
  console.log(`node balance (converted) = ${convertedBalance}`);
  
  // Print your wallet address
  console.log(`wallet address = ${irys.address}`);
  const dist = './dist/';

  let forks = '';
  try {
    const previousManifestMeta = fs.readFileSync('./dist-id.txt', 'utf-8');
    const { id } = JSON.parse(previousManifestMeta);
    forks = id;
  } catch (err) {
    // ignore
  }
  


  const tags = [
    { name: 'Title', value: 'Fair Protocol Landing Page' },
    { name: 'Description', value: 'Building the leading global decentralised marketplace for open-source AI' },
    { name: 'Published', value: String(Date.now()) },
    { name: 'Page-Code', value: 'fair-protocol-landing-page' },
    { name: 'Group-Id', value: 'fair-protocol-landing-page' },
    { name: 'App-Name', value: 'SmartWeaveContract' },
    { name: 'App-Version', value: '0.3.0' },
    { name: 'Contract-Src', value: 'h9v17KHV4SXwdW2-JHU6a23f6R0YtbXZJJht8LfP8QM'},
    { name: 'Logo', value: 'i4Hmf2yh-_TCA9-ypKeiEHhrIJlkhPyvZ_n4SOyj6BI'}, // logo txid
    {
      name: 'Init-State', value: JSON.stringify({
        balances: { [`${irys.address}`]: 1 },
        name: 'Fair Protocol Landing Page',
        ticker: 'FPLP',
      })
    },
  ];

  if (forks) {
    tags.splice(4, 0, { name: 'Forks', value: forks });
  }

  const response = await irys.uploadFolder(dist, {
    manifestTags: tags, // tags to apply to the manifest
    indexFile: 'index.html', // optional index file (file the user will load when accessing the manifest)
    batchSize: 50, // number of items to upload at once
    keepDeleted: false   // whether to keep now deleted items from previous uploads
  }); // returns the manifest ID

  console.log(`SPA Uploaded https://arweave.net/${response?.id}`);
  if (!response) {
    console.error('Upload failed');
    return;
  }

  const controllerWallet = './wallet-old-marketplace.json';

  const controllerJWK = JSON.parse(fs.readFileSync(controllerWallet).toString());
  // in a node environment
  const nodeSigner = new ArweaveSigner(controllerJWK);

  const ant = ANT.init({
    contractTxId: 'oI-6VPflmSVqlITr90St-9q4PjJLSsl5T-JK9D_TEXg', // fair.ar-io.dev contract
    signer: nodeSigner,
  });
  const state = await ant.getState();
  console.log(state);
  console.log('previous Txid:', await ant.getRecords());
  
  const subDomain = '@';
  const ttlSeconds = 900;
  const { id: txId } = await ant.setRecord({
    subDomain,
    transactionId: response?.id,
    ttlSeconds,
  });

  console.log(`Set record https://arweave.net/${txId}`);
};

(async () => await main())();