
      window.contractAddress = '0x3aa400a7fa8a210340cb5c6fdd4f20352b206755';

      const contractAbi = 
      [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "ApprovalCallerNotOwnerNorApproved",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ApprovalQueryForNonexistentToken",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ApproveToCaller",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "BalanceQueryForZeroAddress",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "MintERC2309QuantityExceedsLimit",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "MintToZeroAddress",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "MintZeroQuantity",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "OwnerQueryForNonexistentToken",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "OwnershipNotInitializedForExtraData",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "TransferCallerNotOwnerNorApproved",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "TransferFromIncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "TransferToNonERC721ReceiverImplementer",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "TransferToZeroAddress",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "URIQueryForNonexistentToken",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "fromTokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "toTokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "name": "ConsecutiveTransfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "ts",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "sig",
              "type": "bytes"
            }
          ],
          "name": "mintQtyWithSig",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "name": "mintTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "name": "mintTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "ts",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "sig",
              "type": "bytes"
            }
          ],
          "name": "mintWithSig",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMaxQty",
              "type": "uint256"
            }
          ],
          "name": "setMaxMintLimit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "signaturePair",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "signature",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                }
              ],
              "internalType": "struct PERFUN.SignaturesPair",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]

      document.querySelector('#btnLinkWallet').addEventListener('click', async (e) => {
        e.preventDefault();
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const ethAccounts = await ethereum.request({ method: 'eth_accounts' });

        document.querySelector('span#currentAddress').innerHTML = accounts[0];

        document.querySelector('#btnMint').disabled = false;
        
        console.dir({
          accounts,
          ethAccounts
        }, {depth: Infinity});
      });
      
      document.querySelector('#btnMint').addEventListener('click', async (e) => {
        e.preventDefault();

        const {chainId, selectedAddress} = ethereum;

        const payload = {
          nonce: '0x0',
          to: window.contractAddress,
          from: selectedAddress,
          value:'0x0',
          data: window.contract.methods.mint().encodeABI(),
          chainId,
        };

        const txHash = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [payload],
        });

        window.txHash = txHash;

        document.querySelector('span#currentTransaction').innerHTML = txHash;

        document.querySelector('#btnGetTransaction').disabled = false;
        
        console.dir({
          txHash,
        }, {depth: Infinity});
      });
      
      document.querySelector('#btnGetTransaction').addEventListener('click', async (e) => {
        e.preventDefault();

        if (typeof window.txHash === 'undefined') {
          return;
        }

        const [transactionDetail, transactionReceipt] = await Promise.all([
          ethereum.request({method: 'eth_getTransactionByHash', params:[window.txHash]}),
          ethereum.request({method: 'eth_getTransactionReceipt', params:[window.txHash]}),
        ])

        document.querySelector('div#currentTransactionDetail').innerText = JSON.stringify(transactionDetail, null, 4);
        document.querySelector('div#currentTransactionReceipt').innerText = JSON.stringify(transactionReceipt, null, 4);
        
        console.dir({
          transactionDetail,
          transactionReceipt,
        }, {depth: Infinity});
      });

      async.waterfall([
        async () => {
          if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed! initialing...');

            document.querySelector('#btnLinkWallet').disabled = false;

            window.ethereum.on('accountsChanged', async (accounts) => {
              console.dir(accounts);
              if (accounts.length) {
                document.querySelector('#btnMint').disabled = false;
                document.querySelector('span#currentAddress').innerHTML = accounts[0];
              }
            })

            const web3 = new Web3();
            window.contract = new web3.eth.Contract(contractAbi, contractAddress);

            console.log('initial done.')
          }
        }
      ], (error) => {
        if (error) {
          console.error(error);
        }
      });
    