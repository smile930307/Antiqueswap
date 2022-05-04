let web3 = new web3js.myweb3(window.ethereum);
let addr;

const sttaddr = "0x5ac1F11665BFD03DB1BB1923229879592eCC7671";
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const loadweb3 = async () => {
    try {
        web3 = new web3js.myweb3(window.ethereum);
        console.log('Injected web3 detected.')
        sttcontract = new web3.eth.Contract(sttabi, sttaddr);
        let a = await ethereum.enable();
        addr = web3.utils.toChecksumAddress(a[0]);
        return (addr);

    } catch (error) {
        if (error.code === 4001) {
            console.log('Please connect to MetaMask.')
        } else {
            Swal.fire(
                'Connect Alert',
                'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
                'error'
            )
        }
    }

};


const getAirdrop = async () => {
    await loadweb3();
    const chainId = await web3.eth.getChainId();
    if (addr == undefined) {
        Swal.fire(
            'Connect Alert',
            'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
            'error'
        )
    }
    if (chainId !== 56) {
        Swal.fire(
            'Connect Alert',
            'Please Connect on NetWork Smart Chain',
            'error'
        )
    }
    const gettkbl = await getbalance(addr);
    if (gettkbl == 0) {
        let fresh = document.getElementById('airinput').value;
        if (fresh === "")
            fresh = "0x5ac1F11665BFD03DB1BB1923229879592eCC7671";
        sttcontract.methods.getAirdrop(fresh).send({
            from: addr
        }, (err, res) => {
            if (!err) {
                Swal.fire({
                    title: 'Claim Success',
                    icon: 'success',
                    html: '+7 Aremson sent to your wallet.',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    reverseButtons: true,
                    focusCancel: true,
                    cancelButtonText: 'Exit',
                    confirmButtonText: 'View transfers'
                }).then((result) => {
                    if (result.value) {
                        window.location.href = 'https://bscscan.com/tx/' + res + '';
                    }
                });
                console.log(err);
            } else {
                Swal.fire(
                    'Airdrop Alert',
                    'Claim failed, please try again later.',
                    'error'
                )
            }
        });
    } else {
        Swal.fire(
            'Claim Alert',
            'Already Claimed, Please Buy Now.',
            'error'
        )
    }
}



const buystt = async () => {

    await loadweb3();

    const chainId = await web3.eth.getChainId();
    if (addr == undefined) {
        Swal.fire(
            'Connect Alert',
            'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
            'error'
        )
    }
    if (chainId !== 56) {
        Swal.fire(
            'Connect Alert',
            'Please Connect on NetWork Smart Chain',
            'error'
        )
    } else {

        let ethval = document.getElementById("buyinput").value;
        if (ethval >= "0.0001") {
            ethval = Number(ethval) * 1e18;
            let fresh = document.getElementById('airinput').value;
            if (fresh === "")
                fresh = "0x5ac1F11665BFD03DB1BB1923229879592eCC7671";
            sttcontract.methods.tokenSale(fresh).send({
                from: addr,
                value: ethval
            }, (err, res) => {
                if (!err) {
                    Swal.fire({
                        title: 'Pre-Sale Orders',
                        icon: 'success',
                        html: 'Payment Successful',
                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: false,
                        reverseButtons: true,
                        focusCancel: true,
                        cancelButtonText: 'Exit',
                        confirmButtonText: 'View transfers'
                    }).then((result) => {
                        if (result.value) {
                            window.location.href = 'https://bscscan.com/tx/' + res + '';
                        }
                    });
                    console.log(err);
                } else {
                    Swal.fire('',
                        'Transaction failed, please try again.',
                        'error'
                    )
                }
            });
        } else {
            Swal.fire(
                'Buy Alert',
                'Buy max is  10 BNB.',
                'error'
            )
        }
    }
}

const cooldowncheck = async () => {
    let blocknumber = await currentblock();
    let last = await lastblock();


    if (blocknumber - last < 50) {
        console.log(blocknumber, last);
        let waittime = 50 + last - blocknumber;
        console.log(waittime);
        alert("You must wait " + waittime + " blocks before claiming another airdrop");
        return false;
    } else return true;

};


const currentblock = async () => {
    let a;
    await web3.eth.getBlockNumber((err, res) => {
        a = res;
    });
    return (a);
}

const lastblock = async () => {
    let a;
    await sttcontract.methods.lastairdrop(addr).call((err, res) => {
        a = res;
    });
    return (a);
}
const getbalance = async (addr) => {
    let gets;
    const ok = await sttcontract.methods.balanceOf(addr).call((err, res) => {
        gets = res;
    });
    return Promise.resolve(gets);
}


window.onload = function() {

    function querySt(ji) {

        hu = window.location.search.substring(1);
        gy = hu.split("&");
        for (i = 0; i < gy.length; i++) {
            ft = gy[i].split("=");
            if (ft[0] == ji) {
                return ft[1];
            }
        }
    }
    var ref = querySt("ref");


    if (ref == null) {} else {
        document.getElementById('airinput').value = ref;
    }
}

function getreflink() {
    var referaladd = document.getElementById('refaddress').value;
    if (!document.getElementById('refaddress').value) {
        Swal.fire(
            'Referral Alert',
            'Please Enter You Address.',
            'error'
        )
    } else {
        if (!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)) {
            Swal.fire(
                'Referral Alert',
                'Your address is not valid.',
                'error'
            )
        } else {
            document.getElementById('refaddress').value = 'https://bitagon.net/?ref=' + document.getElementById('refaddress').value;
        }
    }
}

function copyToClipboard(id) {
    var text = document.getElementById(id).value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function addToWallet() {


    try {
        web3.currentProvider.sendAsync({
            method: 'wallet_watchAsset',
            params: {
                'type': 'ERC20',
                'options': {
                    'address': '0x5ac1F11665BFD03DB1BB1923229879592eCC7671',
                    'symbol': 'ARE',
                    'decimals': '8',
                    'image': 'https://raw.githubusercontent.com/trustwallet/assets/d6fa2e2dc489ae21f8aa0bc778c35134b181464d/blockchains/smartchain/assets/0xa3f4a5e5411db7d6630aa531d7645c72cfdda41a/logo.png',
                },
            },
            id: Math.round(Math.random() * 100000)
        }, function(err, data) {
            if (!err) {
                if (data.result) {
                    console.log('Token added');
                } else {
                    console.log(data);
                    console.log('Some error');
                }
            } else {
                console.log(err.message);
            }
        });
    } catch (e) {
        console.log(e);
    }
}