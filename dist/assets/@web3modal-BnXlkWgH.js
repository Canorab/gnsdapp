function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{B as Un}from"./bignumber.js-DOH-f-tm.js";import{_ as ro,w as Rc,a as Ic,g as Pc,b as Oc,c as Nc,s as Dc,d as da,e as Lc,f as Mc,h as Uc,i as Wc,p as jc,j as Bc,k as zc,l as Hc,n as Fr,m as Vc,o as Fc,q as Zc,r as Gc}from"./@wagmi-Cwopbt2N.js";import{x as pa,y as qc,z as Yc,f as Kc,S as ha,g as Xc}from"./viem-DO_zHWKk.js";import{b as Qc}from"./buffer-EBb79ogF.js";import{z as l}from"./zod-dIKOytT1.js";import{p as ge,b as Me,s as We,r as bi,a as $l}from"./valtio-D-UtsqsE.js";import{d as so,r as Jc,u as eu}from"./dayjs-D3dD73DO.js";import{b as tu}from"./qrcode-CGiDONbL.js";const Zr="https://secure.walletconnect.com",Al=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],ae={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Zr,SECURE_SITE_DASHBOARD:`${Zr}/dashboard`,SECURE_SITE_FAVICON:`${Zr}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},$={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(i,e=""){return i==null?void 0:i.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const i=window.navigator.userAgent.toLowerCase();return $.isMobile()&&i.includes("android")},isIos(){const i=window.navigator.userAgent.toLowerCase();return $.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(i){return i?i-Date.now()<=ae.TEN_SEC_MS:!0},isAllowedRetry(i){return Date.now()-i>=ae.ONE_SEC_MS},copyToClopboard(i){navigator.clipboard.writeText(i)},getPairingExpiry(){return Date.now()+ae.FOUR_MINUTES_MS},getPlainAddress(i){return i.split(":")[2]},async wait(i){return new Promise(e=>{setTimeout(e,i)})},debounce(i,e=500){let t;return(...n)=>{function r(){i(...n)}t&&clearTimeout(t),t=setTimeout(r,e)}},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},formatNativeUrl(i,e){if($.isHttpUrl(i))return this.formatUniversalUrl(i,e);let t=i;t.includes("://")||(t=i.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`);const n=encodeURIComponent(e);return{redirect:`${t}wc?uri=${n}`,href:t}},formatUniversalUrl(i,e){if(!$.isHttpUrl(i))return this.formatNativeUrl(i,e);let t=i;t.endsWith("/")||(t=`${t}/`);const n=encodeURIComponent(e);return{redirect:`${t}wc?uri=${n}`,href:t}},openHref(i,e,t){window.open(i,e,t||"noreferrer noopener")},async preloadImage(i){const e=new Promise((t,n)=>{const r=new Image;r.onload=t,r.onerror=n,r.crossOrigin="anonymous",r.src=i});return Promise.race([e,$.wait(2e3)])},formatBalance(i,e){var n;let t;if(i==="0")t="0.000";else if(typeof i=="string"){const r=Number(i);r&&(t=(n=r.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return t?`${t} ${e??""}`:`0.000 ${e??""}`},formatBalance2(i,e){var n;let t;if(i==="0")t="0";else if(typeof i=="string"){const r=Number(i);r&&(t=(n=r.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return{value:t??"0",rest:t==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return ae.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return $.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return $.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return $.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,i=>{const e=Math.random()*16|0;return(i==="x"?e:e&3|8).toString(16)})},parseError(i){var e,t;return typeof i=="string"?i:typeof((t=(e=i==null?void 0:i.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?i.issues[0].message:i instanceof Error?i.message:"Unknown error"},sortRequestedNetworks(i,e=[]){const t={};return e&&i&&(i.forEach((n,r)=>{t[n]=r}),e.sort((n,r)=>{const o=t[n.id],s=t[r.id];return o!==void 0&&s!==void 0?o-s:o!==void 0?-1:s!==void 0?1:0})),e},calculateBalance(i){let e=0;for(const t of i)e+=t.value??0;return e},formatTokenBalance(i){const e=i.toFixed(2),[t,n]=e.split(".");return{dollars:t,pennies:n}},isAddress(i){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)||/^(?:0x)?[0-9A-F]{40}$/iu.test(i))return!0}else return!1;return!1}};class $s{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async put({body:e,headers:t,signal:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async delete({body:e,headers:t,signal:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}createUrl({path:e,params:t}){const n=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([r,o])=>{o&&n.searchParams.append(r,o)}),n}}const ve=ge({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),R={state:ve,subscribeKey(i,e){return Me(ve,i,e)},setProjectId(i){ve.projectId=i},setAllWallets(i){ve.allWallets=i},setIncludeWalletIds(i){ve.includeWalletIds=i},setExcludeWalletIds(i){ve.excludeWalletIds=i},setFeaturedWalletIds(i){ve.featuredWalletIds=i},setTokens(i){ve.tokens=i},setTermsConditionsUrl(i){ve.termsConditionsUrl=i},setPrivacyPolicyUrl(i){ve.privacyPolicyUrl=i},setCustomWallets(i){ve.customWallets=i},setIsSiweEnabled(i){ve.isSiweEnabled=i},setEnableAnalytics(i){ve.enableAnalytics=i},setSdkVersion(i){ve.sdkVersion=i},setMetadata(i){ve.metadata=i},setOnrampEnabled(i){ve.enableOnramp=i},setWalletFeaturesEnabled(i){ve.enableWalletFeatures=i}},iu={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},ou=$.getBlockchainApiUrl(),Ge=new $s({baseUrl:ou}),ke={fetchIdentity({address:i}){return Ge.get({path:`/v1/identity/${i}`,params:{projectId:R.state.projectId}})},fetchTransactions({account:i,projectId:e,cursor:t,onramp:n,signal:r}){const o=t?{cursor:t}:{};return Ge.get({path:`/v1/account/${i}/history?projectId=${e}${n?`&onramp=${n}`:""}`,params:o,signal:r})},fetchConvertTokens({projectId:i,chainId:e}){return Ge.get({path:`/v1/convert/tokens?projectId=${i}&chainId=${e}`})},fetchTokenPrice({projectId:i,addresses:e}){return Ge.post({path:"/v1/fungible/price",body:{projectId:i,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchConvertAllowance({projectId:i,tokenAddress:e,userAddress:t}){const{sdkType:n,sdkVersion:r}=R.state;return Ge.get({path:`/v1/convert/allowance?projectId=${i}&tokenAddress=${e}&userAddress=${t}`,headers:{"Content-Type":"application/json","x-sdk-type":n,"x-sdk-version":r}})},fetchGasPrice({projectId:i,chainId:e}){const{sdkType:t,sdkVersion:n}=R.state;return Ge.get({path:`/v1/convert/gas-price?projectId=${i}&chainId=${e}`,headers:{"Content-Type":"application/json","x-sdk-type":t,"x-sdk-version":n}})},generateConvertCalldata({amount:i,from:e,projectId:t,to:n,userAddress:r}){return Ge.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:i,eip155:{slippage:ae.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:t,to:n,userAddress:r}})},generateApproveCalldata({from:i,projectId:e,to:t,userAddress:n}){const{sdkType:r,sdkVersion:o}=R.state;return Ge.get({path:`/v1/convert/build-approve?projectId=${e}&userAddress=${n}&from=${i}&to=${t}`,headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":o}})},async getBalance(i,e){const{sdkType:t,sdkVersion:n}=R.state;return Ge.get({path:`/v1/account/${i}/balance`,headers:{"x-sdk-type":t,"x-sdk-version":n},params:{currency:"usd",projectId:R.state.projectId,chainId:e}})},async generateOnRampURL({destinationWallets:i,partnerUserId:e,defaultNetwork:t,purchaseAmount:n,paymentAmount:r}){return(await Ge.post({path:`/v1/generators/onrampurl?projectId=${R.state.projectId}`,body:{destinationWallets:i,defaultNetwork:t,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:n,presetFiatAmount:r}})).url},async getOnrampOptions(){try{return await Ge.get({path:`/v1/onramp/options?projectId=${R.state.projectId}`})}catch{return iu}},async getOnrampQuote({purchaseCurrency:i,paymentCurrency:e,amount:t,network:n}){try{return await Ge.post({path:`/v1/onramp/quote?projectId=${R.state.projectId}`,body:{purchaseCurrency:i,paymentCurrency:e,amount:t,network:n}})}catch{return{coinbaseFee:{amount:t,currency:e.id},networkFee:{amount:t,currency:e.id},paymentSubtotal:{amount:t,currency:e.id},paymentTotal:{amount:t,currency:e.id},purchaseAmount:{amount:t,currency:e.id},quoteId:"mocked-quote-id"}}}},Tt=ge({message:"",variant:"success",open:!1}),F={state:Tt,subscribeKey(i,e){return Me(Tt,i,e)},showSuccess(i){Tt.message=i,Tt.variant="success",Tt.open=!0},showError(i){const e=$.parseError(i);Tt.message=e,Tt.variant="error",Tt.open=!0},hide(){Tt.open=!1}},Gr="WALLETCONNECT_DEEPLINK_CHOICE",fa="@w3m/recent",wa="@w3m/connected_wallet_image_url",ga="@w3m/connected_connector",re={setWalletConnectDeepLink({href:i,name:e}){try{localStorage.setItem(Gr,JSON.stringify({href:i,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const i=localStorage.getItem(Gr);if(i)return JSON.parse(i)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Gr)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(i){try{const e=re.getRecentWallets();e.find(n=>n.id===i.id)||(e.unshift(i),e.length>2&&e.pop(),localStorage.setItem(fa,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const i=localStorage.getItem(fa);return i?JSON.parse(i):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(i){try{localStorage.setItem(wa,i)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(wa)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(i){try{localStorage.setItem(ga,i)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(ga)}catch{console.info("Unable to get Connected Connector")}}},nu=$.getAnalyticsUrl(),ru=new $s({baseUrl:nu}),su=["MODAL_CREATED"],to=ge({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),O={state:to,subscribe(i){return We(to,()=>i(to))},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=R.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _sendAnalyticsEvent(i){try{if(su.includes(i.data.event)||typeof window>"u")return;await ru.post({path:"/e",headers:O._getApiHeaders(),body:{eventId:$.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:i.timestamp,props:i.data}})}catch{}},sendEvent(i){to.timestamp=Date.now(),to.data=i,R.state.enableAnalytics&&O._sendAnalyticsEvent(to)}},ie=ge({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Ce={state:ie,subscribe(i){return We(ie,()=>i(ie))},async fetchTransactions(i,e){const{projectId:t}=R.state;if(!t||!i)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");ie.loading=!0;try{const n=await ke.fetchTransactions({account:i,projectId:t,cursor:ie.next,onramp:e}),r=this.filterSpamTransactions(n.data),o=[...ie.transactions,...r];ie.loading=!1,e==="coinbase"?ie.coinbaseTransactions=this.groupTransactionsByYearAndMonth(ie.coinbaseTransactions,n.data):(ie.transactions=o,ie.transactionsByYear=this.groupTransactionsByYearAndMonth(ie.transactionsByYear,r)),ie.empty=o.length===0,ie.next=n.next?n.next:void 0}catch{O.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:i,projectId:t,cursor:ie.next}}),F.showError("Failed to fetch transactions"),ie.loading=!1,ie.empty=!0,ie.next=void 0}},groupTransactionsByYearAndMonth(i={},e=[]){const t=i;return e.forEach(n=>{const r=new Date(n.metadata.minedAt).getFullYear(),o=new Date(n.metadata.minedAt).getMonth(),s=t[r]??{},d=(s[o]??[]).filter(g=>g.id!==n.id);t[r]={...s,[o]:[...d,n].sort((g,w)=>new Date(w.metadata.minedAt).getTime()-new Date(g.metadata.minedAt).getTime())}}),t},filterSpamTransactions(i){return i.filter(e=>!e.transfers.every(n=>{var r;return((r=n.nft_info)==null?void 0:r.flags.is_spam)===!0}))},clearCursor(){ie.next=void 0},resetTransactions(){ie.transactions=[],ie.transactionsByYear={},ie.loading=!1,ie.empty=!1,ie.next=void 0}},de=ge({wcError:!1,buffering:!1}),B={state:de,subscribeKey(i,e){return Me(de,i,e)},_getClient(){if(!de._client)throw new Error("ConnectionController client not set");return de._client},setClient(i){de._client=bi(i)},connectWalletConnect(){de.wcPromise=this._getClient().connectWalletConnect(i=>{de.wcUri=i,de.wcPairingExpiry=$.getPairingExpiry()}),re.setConnectedConnector("WALLET_CONNECT")},async connectExternal(i){var e,t;await((t=(e=this._getClient()).connectExternal)==null?void 0:t.call(e,i)),re.setConnectedConnector(i.type)},async signMessage(i){return this._getClient().signMessage(i)},parseUnits(i,e){return this._getClient().parseUnits(i,e)},formatUnits(i,e){return this._getClient().formatUnits(i,e)},async sendTransaction(i){return this._getClient().sendTransaction(i)},async estimateGas(i){return this._getClient().estimateGas(i)},checkInstalled(i){var e,t;return(t=(e=this._getClient()).checkInstalled)==null?void 0:t.call(e,i)},resetWcConnection(){de.wcUri=void 0,de.wcPairingExpiry=void 0,de.wcPromise=void 0,de.wcLinking=void 0,de.recentWallet=void 0,Ce.resetTransactions(),re.deleteWalletConnectDeepLink()},setWcLinking(i){de.wcLinking=i},setWcError(i){de.wcError=i,de.buffering=!1},setRecentWallet(i){de.recentWallet=i},setBuffering(i){de.buffering=i},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},Wo=ge({loading:!1,open:!1,selectedNetworkId:void 0}),vi={state:Wo,subscribe(i){return We(Wo,()=>i(Wo))},set(i){Object.assign(Wo,{...Wo,...i})}};so.extend(Jc);so.extend(eu);so.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const As={getYear(i=new Date().toISOString()){return so(i).year()},getRelativeDateFromNow(i){return so(i).fromNow(!0)},formatDate(i,e="DD MMM"){return so(i).format(e)}},jt={caipNetworkIdToNumber(i){return i?Number(i.split(":")[1]):void 0}},xe={bigNumber(i){return new Un(i)},multiply(i,e){if(i===void 0||e===void 0)return Un(0);const t=new Un(i),n=new Un(e);return t.multipliedBy(n)}},J=ge({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),k={state:J,subscribe(i){return We(J,()=>i(J))},subscribeKey(i,e){return Me(J,i,e)},_getClient(){if(!J._client)throw new Error("NetworkController client not set");return J._client},setClient(i){J._client=bi(i)},setCaipNetwork(i){J.caipNetwork=i,vi.set({selectedNetworkId:i==null?void 0:i.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(i){J.caipNetwork=i,vi.set({selectedNetworkId:i==null?void 0:i.id}),J.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(i){J.requestedCaipNetworks=i},setAllowUnsupportedChain(i){J.allowUnsupportedChain=i},setSmartAccountEnabledNetworks(i){J.smartAccountEnabledNetworks=i},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:i,requestedCaipNetworks:e}=J,t=i,n=e;return $.sortRequestedNetworks(t,n)},async getApprovedCaipNetworksData(){const i=await this._getClient().getApprovedCaipNetworksData();J.supportsAllNetworks=i.supportsAllNetworks,J.approvedCaipNetworkIds=i.approvedCaipNetworkIds},async switchActiveNetwork(i){await this._getClient().switchCaipNetwork(i),J.caipNetwork=i,i&&O.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:i.id}})},checkIfSupportedNetwork(){var i;J.isUnsupportedChain=!((i=J.requestedCaipNetworks)!=null&&i.some(e=>{var t;return e.id===((t=J.caipNetwork)==null?void 0:t.id)})),J.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){var e,t;const i=jt.caipNetworkIdToNumber((e=J.caipNetwork)==null?void 0:e.id);return i?!!((t=J.smartAccountEnabledNetworks)!=null&&t.includes(i)):!1},resetNetwork(){J.isDefaultCaipNetwork||(J.caipNetwork=void 0),J.approvedCaipNetworkIds=void 0,J.supportsAllNetworks=!0,J.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{H.open({view:"UnsupportedChain"})},300)}},Ho={async getTokenList(){var t;return(await ke.fetchConvertTokens({chainId:(t=k.state.caipNetwork)==null?void 0:t.id,projectId:R.state.projectId})).tokens.map(n=>({...n,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))},async fetchGasPrice(){const i=R.state.projectId,e=k.state.caipNetwork;return e?await ke.fetchGasPrice({projectId:i,chainId:e.id}):null},async fetchConvertAllowance({tokenAddress:i,userAddress:e,sourceTokenAmount:t,sourceTokenDecimals:n}){const r=R.state.projectId,o=await ke.fetchConvertAllowance({projectId:r,tokenAddress:i,userAddress:e});if(o!=null&&o.allowance&&t&&n){const s=B.parseUnits(t,n);return BigInt(o.allowance)>=s}return!1},async getMyTokensWithBalance(){const i=_.state.address,e=k.state.caipNetwork;if(!i||!e)return[];const n=(await ke.getBalance(i,e.id)).balances;return this.mapBalancesToConvertTokens(n)},mapBalancesToConvertTokens(i){return i.map(e=>{var t;return{symbol:e.symbol,name:e.name,address:e!=null&&e.address?e.address:`${(t=k.state.caipNetwork)==null?void 0:t.id}:${ae.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1,quantity:e.quantity,price:e.price,value:e.value}})}},te=ge({view:"Connect",history:["Connect"],transactionStack:[]}),m={state:te,subscribeKey(i,e){return Me(te,i,e)},pushTransactionStack(i){te.transactionStack.push(i)},popTransactionStack(i){var t,n;const e=te.transactionStack.pop();e&&(i?(this.goBack(),(t=e==null?void 0:e.onCancel)==null||t.call(e)):(e.goBack?this.goBack():e.view&&this.reset(e.view),(n=e==null?void 0:e.onSuccess)==null||n.call(e)))},push(i,e){i!==te.view&&(te.view=i,te.history.push(i),te.data=e)},reset(i){te.view=i,te.history=[i]},replace(i,e){te.history.length>1&&te.history.at(-1)!==i&&(te.view=i,te.history[te.history.length-1]=i,te.data=e)},goBack(){if(te.history.length>1){te.history.pop();const[i]=te.history.slice(-1);i&&(te.view=i)}},goBackToIndex(i){if(te.history.length>1){te.history=te.history.slice(0,i+1);const[e]=te.history.slice(-1);e&&(te.view=e)}}},au=15e4,y=ge({initialized:!1,loading:!1,loadingPrices:!1,approvalTransaction:void 0,convertTransaction:void 0,transactionError:void 0,transactionLoading:!1,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",inputError:void 0,slippage:ae.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:BigInt(0),gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0}),P={state:y,subscribe(i){return We(y,()=>i(y))},subscribeKey(i,e){return Me(y,i,e)},getParams(){var t,n,r,o,s;const{address:i}=_.state,e=`${(t=k.state.caipNetwork)==null?void 0:t.id}:${ae.NATIVE_TOKEN_ADDRESS}`;if(!i)throw new Error("No address found to swap the tokens from.");return{networkAddress:e,fromAddress:i,fromCaipAddress:_.state.caipAddress,sourceTokenAddress:(n=y.sourceToken)==null?void 0:n.address,toTokenAddress:(r=y.toToken)==null?void 0:r.address,toTokenAmount:y.toTokenAmount,toTokenDecimals:(o=y.toToken)==null?void 0:o.decimals,sourceTokenAmount:y.sourceTokenAmount,sourceTokenDecimals:(s=y.sourceToken)==null?void 0:s.decimals}},setLoading(i){y.loading=i},setSourceToken(i){i&&(y.sourceToken=i,this.setTokenValues(i.address,"sourceToken"))},setSourceTokenAmount(i){const{sourceTokenAddress:e}=this.getParams();y.sourceTokenAmount=i,e&&this.setTokenValues(e,"sourceToken")},setToToken(i){const{sourceTokenAddress:e,sourceTokenAmount:t}=this.getParams();if(!i){y.toTokenAmount="0",y.toTokenPriceInUSD=0;return}y.toToken=i,this.setTokenValues(i.address,"toToken"),e&&t&&this.makeChecks()},setToTokenAmount(i){const{toTokenAddress:e}=this.getParams();y.toTokenAmount=i,e&&this.setTokenValues(e,"toToken")},async setTokenValues(i,e){let t=y.tokensPriceMap[i]||0;t||(t=await this.getAddressPrice(i)),e==="sourceToken"?y.sourceTokenPriceInUSD=t:e==="toToken"&&(y.toTokenPriceInUSD=t)},switchTokens(){const i=y.toToken?{...y.toToken}:void 0,e=y.sourceToken?{...y.sourceToken}:void 0;this.setSourceToken(i),this.setToToken(e),this.setSourceTokenAmount(y.toTokenAmount||"0"),P.convertTokens()},resetTokens(){y.tokens=void 0,y.popularTokens=void 0,y.myTokensWithBalance=void 0,y.initialized=!1},resetValues(){var t;const{networkAddress:i}=this.getParams(),e=(t=y.tokens)==null?void 0:t.find(n=>n.address===i);this.setSourceToken(e),y.sourceTokenPriceInUSD=y.tokensPriceMap[i]||0,y.sourceTokenAmount="0",this.setToToken(void 0),y.gasPriceInUSD=0},clearError(){y.transactionError=void 0},async initializeState(){y.initialized||(await this.fetchTokens(),y.initialized=!0)},async fetchTokens(){var t;const{networkAddress:i}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(t=y.tokens)==null?void 0:t.find(n=>n.address===i);e&&this.setSourceToken(e)},async getTokenList(){const i=await Ho.getTokenList();y.tokens=i,y.popularTokens=i.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0).filter(e=>!!ae.POPULAR_TOKENS.includes(e.symbol),{}),y.suggestedTokens=i.filter(e=>!!ae.SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(i){var d,g;const e=y.tokensPriceMap[i];if(e)return e;const n=(await ke.fetchTokenPrice({projectId:R.state.projectId,addresses:[i]})).fungibles||[],r=[...y.tokens||[],...y.myTokensWithBalance||[]],o=(d=r==null?void 0:r.find(w=>w.address===i))==null?void 0:d.symbol,s=((g=n.find(w=>w.symbol===o))==null?void 0:g.price)||"0",a=parseFloat(s);return y.tokensPriceMap[i]=a,a},async getNetworkTokenPrice(){var r;const{networkAddress:i}=this.getParams(),t=(r=(await ke.fetchTokenPrice({projectId:R.state.projectId,addresses:[i]})).fungibles)==null?void 0:r[0],n=(t==null?void 0:t.price)||"0";y.tokensPriceMap[i]=parseFloat(n),y.networkPrice=n},async getMyTokensWithBalance(){const i=await Ho.getMyTokensWithBalance();i&&(await this.getInitialGasPrice(),this.setBalances(i))},setBalances(i){const{networkAddress:e}=this.getParams(),t=i.find(n=>n.address===e);i.forEach(n=>{y.tokensPriceMap[n.address]=n.price||0}),y.myTokensWithBalance=i,y.networkBalanceInUSD=t?xe.multiply(t.quantity.numeric,t.price).toString():"0"},async getInitialGasPrice(){const i=await Ho.fetchGasPrice();if(!i)return;const e=i.instant,t=BigInt(e),n=BigInt(au),r=this.calculateGasPriceInUSD(n,t);y.gasPriceInUSD=r},async refreshConvertValues(){const{fromAddress:i,toTokenDecimals:e,toTokenAddress:t}=this.getParams();if(i&&t&&e&&!y.loading){const n=await this.getTransaction();this.setTransactionDetails(n)}},calculateGasPriceInEther(i,e){const t=e*i;return Number(t)/1e18},calculateGasPriceInUSD(i,e){const t=this.calculateGasPriceInEther(i,e);return xe.bigNumber(y.networkPrice).multipliedBy(t).toNumber()},calculatePriceImpact(i,e){const t=y.sourceTokenAmount,n=y.sourceTokenPriceInUSD,r=y.toTokenPriceInUSD;return xe.bigNumber(t).multipliedBy(n).plus(e).dividedBy(i).minus(r).dividedBy(r).multipliedBy(100).toNumber()},calculateMaxSlippage(){const i=xe.bigNumber(y.slippage).dividedBy(100);return xe.multiply(y.sourceTokenAmount,i).toNumber()},async convertTokens(){const{sourceTokenAddress:i,toTokenAddress:e}=this.getParams();!i||!e||await this.makeChecks()},async makeChecks(){const{toTokenDecimals:i,toTokenAddress:e}=this.getParams();if(!i||!e)return;y.loading=!0;const t=await this.getTransaction();this.setTransactionDetails(t),y.loading=!1},async getTransaction(){const{fromCaipAddress:i,sourceTokenAddress:e,sourceTokenAmount:t,sourceTokenDecimals:n}=this.getParams();if(!i||!e||!t||parseFloat(t)===0||!n)return;const r=await Ho.fetchConvertAllowance({userAddress:i,tokenAddress:e,sourceTokenAmount:t,sourceTokenDecimals:n});let o;return r?(y.approvalTransaction=void 0,o=await this.createConvert(),y.convertTransaction=o):(y.convertTransaction=void 0,o=await this.createTokenAllowance(),y.approvalTransaction=o),o},getToAmount(){const{sourceTokenDecimals:i}=this.getParams(),t=10**(i||18);return(y.sourceTokenPriceInUSD&&y.toTokenPriceInUSD&&y.sourceTokenAmount?xe.bigNumber(y.sourceTokenAmount).multipliedBy(y.sourceTokenPriceInUSD).dividedBy(y.toTokenPriceInUSD):xe.bigNumber(0)).multipliedBy(t).toString()},async createTokenAllowance(){const{fromCaipAddress:i,fromAddress:e,sourceTokenAddress:t,toTokenAddress:n}=this.getParams();if(!i||!n)return;if(!t)throw new Error(">>> createTokenAllowance - No source token address found.");const r=await ke.generateApproveCalldata({projectId:R.state.projectId,from:t,to:n,userAddress:i}),o=await B.estimateGas({address:e,to:$.getPlainAddress(r.tx.to),data:r.tx.data}),s=this.getToAmount();return{data:r.tx.data,to:$.getPlainAddress(r.tx.from),gas:o,gasPrice:BigInt(r.tx.eip155.gasPrice),value:BigInt(r.tx.value),toAmount:s}},async sendTransactionForApproval(i){const{fromAddress:e}=this.getParams();y.transactionLoading=!0,m.pushTransactionStack({view:null,goBack:!0});try{await B.sendTransaction({address:e,to:i.to,data:i.data,value:BigInt(i.value),gasPrice:BigInt(i.gasPrice)}),y.approvalTransaction=void 0,y.transactionLoading=!1,this.makeChecks()}catch(t){const n=t;y.transactionError=n==null?void 0:n.shortMessage,y.transactionLoading=!1}},async createConvert(){const{networkAddress:i,fromCaipAddress:e,sourceTokenAddress:t,sourceTokenDecimals:n,sourceTokenAmount:r,toTokenAddress:o}=this.getParams();if(!(!e||!r||!t||!o||!n))try{const s=B.parseUnits(r,n).toString(),a=await ke.generateConvertCalldata({projectId:R.state.projectId,userAddress:e,from:t,to:o,amount:s}),d=t===i,g=this.getToAmount(),w=BigInt(a.tx.eip155.gas),v=BigInt(a.tx.eip155.gasPrice),C={data:a.tx.data,to:$.getPlainAddress(a.tx.to),gas:w,gasPrice:v,value:BigInt(d?s:"0"),toAmount:g};return y.gasPriceInUSD=this.calculateGasPriceInUSD(w,v),C}catch{return}},async sendTransactionForConvert(i){if(!i)return;const{fromAddress:e}=this.getParams();y.transactionLoading=!0,m.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){P.resetValues()}});try{const t=await B.sendTransaction({address:e,to:i.to,data:i.data,gas:i.gas,gasPrice:BigInt(i.gasPrice),value:i.value});return y.transactionLoading=!1,setTimeout(()=>{this.resetValues(),this.getMyTokensWithBalance()},1e3),t}catch(t){const n=t;y.transactionError=n==null?void 0:n.shortMessage,y.transactionLoading=!1,F.showError((n==null?void 0:n.shortMessage)||"Transaction error");return}},getToTokenValues(i,e){const{toTokenAddress:t}=this.getParams();if(!t)return{toTokenAmount:"0",toTokenPriceInUSD:0};const n=xe.bigNumber(i).dividedBy(10**e).toFixed(20),r=y.tokensPriceMap[t]||"0",o=xe.bigNumber(r).toNumber();return{toTokenAmount:n,toTokenPriceInUSD:o}},isInsufficientNetworkTokenForGas(){return xe.bigNumber(xe.bigNumber(y.gasPriceInUSD||"0")).isGreaterThan(y.networkBalanceInUSD)},setTransactionDetails(i){const{toTokenAddress:e,toTokenDecimals:t}=this.getParams();if(!i||!e||!t)return;this.isInsufficientNetworkTokenForGas()?y.inputError="Insufficient balance":y.inputError=void 0;const{toTokenAmount:r,toTokenPriceInUSD:o}=this.getToTokenValues(i.toAmount,t);y.toTokenAmount=r,y.toTokenPriceInUSD=o,y.gasPriceInUSD=this.calculateGasPriceInUSD(i.gas,i.gasPrice),y.priceImpact=this.calculatePriceImpact(y.toTokenAmount,y.gasPriceInUSD),y.maxSlippage=this.calculateMaxSlippage()}},G=ge({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),_={state:G,subscribe(i){return We(G,()=>i(G))},subscribeKey(i,e){return Me(G,i,e)},setIsConnected(i){G.isConnected=i},setCaipAddress(i){G.caipAddress=i,G.address=i?$.getPlainAddress(i):void 0},setBalance(i,e){G.balance=i,G.balanceSymbol=e},setProfileName(i){G.profileName=i},setProfileImage(i){G.profileImage=i},setAddressExplorerUrl(i){G.addressExplorerUrl=i},setSmartAccountDeployed(i){G.smartAccountDeployed=i},setCurrentTab(i){G.currentTab=i},setTokenBalance(i){i&&(G.tokenBalance=bi(i))},setConnectedWalletInfo(i){G.connectedWalletInfo=i},setPreferredAccountType(i){G.preferredAccountType=i},async fetchTokenBalance(){try{if(G.address){const i=await ke.getBalance(G.address);this.setTokenBalance(i.balances),P.setBalances(Ho.mapBalancesToConvertTokens(i.balances))}}catch{F.showError("Failed to fetch token balance")}},resetAccount(){G.isConnected=!1,G.smartAccountDeployed=!1,G.currentTab=0,G.caipAddress=void 0,G.address=void 0,G.balance=void 0,G.balanceSymbol=void 0,G.profileName=void 0,G.profileImage=void 0,G.addressExplorerUrl=void 0,G.tokenBalance=[],G.connectedWalletInfo=void 0,G.preferredAccountType=void 0}},et=ge({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),fe={state:et,subscribeNetworkImages(i){return We(et.networkImages,()=>i(et.networkImages))},subscribeKey(i,e){return Me(et,i,e)},subscribe(i){return We(et,()=>i(et))},setWalletImage(i,e){et.walletImages[i]=e},setNetworkImage(i,e){et.networkImages[i]=e},setConnectorImage(i,e){et.connectorImages[i]=e},setTokenImage(i,e){et.tokenImages[i]=e},setCurrencyImage(i,e){et.currencyImages[i]=e}},ui=ge({themeMode:"dark",themeVariables:{}}),ue={state:ui,subscribe(i){return We(ui,()=>i(ui))},setThemeMode(i){ui.themeMode=i;try{const e=q.getEmailConnector();e&&e.provider.syncTheme({themeMode:ue.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(i){ui.themeVariables={...ui.themeVariables,...i};try{const e=q.getEmailConnector();e&&e.provider.syncTheme({themeVariables:ue.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot(){return $l(ui)}},Wt=ge({connectors:[]}),q={state:Wt,subscribeKey(i,e){return Me(Wt,i,e)},setConnectors(i){Wt.connectors=i.map(e=>bi(e))},addConnector(i){var e,t;if(Wt.connectors.push(bi(i)),i.id==="w3mEmail"){const n=i,r=$l(R.state);(t=(e=n==null?void 0:n.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId}),n.provider.syncTheme({themeMode:ue.getSnapshot().themeMode,themeVariables:ue.getSnapshot().themeVariables})}},getEmailConnector(){return Wt.connectors.find(i=>i.type==="EMAIL")},getAnnouncedConnectorRdns(){return Wt.connectors.filter(i=>i.type==="ANNOUNCED").map(i=>{var e;return(e=i.info)==null?void 0:e.rdns})},getConnectors(){return Wt.connectors},getConnector(i,e){return Wt.connectors.find(t=>{var n;return t.explorerId===i||((n=t.info)==null?void 0:n.rdns)===e})}},lu=$.getApiUrl(),Te=new $s({baseUrl:lu}),cu="40",ma="4",be=ge({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),U={state:be,subscribeKey(i,e){return Me(be,i,e)},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=R.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _fetchWalletImage(i){const e=`${Te.baseUrl}/getWalletImage/${i}`,t=await Te.getBlob({path:e,headers:U._getApiHeaders()});fe.setWalletImage(i,URL.createObjectURL(t))},async _fetchNetworkImage(i){const e=`${Te.baseUrl}/public/getAssetImage/${i}`,t=await Te.getBlob({path:e,headers:U._getApiHeaders()});fe.setNetworkImage(i,URL.createObjectURL(t))},async _fetchConnectorImage(i){const e=`${Te.baseUrl}/public/getAssetImage/${i}`,t=await Te.getBlob({path:e,headers:U._getApiHeaders()});fe.setConnectorImage(i,URL.createObjectURL(t))},async _fetchCurrencyImage(i){const e=`${Te.baseUrl}/public/getCurrencyImage/${i}`,t=await Te.getBlob({path:e,headers:U._getApiHeaders()});fe.setCurrencyImage(i,URL.createObjectURL(t))},async _fetchTokenImage(i){const e=`${Te.baseUrl}/public/getTokenImage/${i}`,t=await Te.getBlob({path:e,headers:U._getApiHeaders()});fe.setTokenImage(i,URL.createObjectURL(t))},async fetchNetworkImages(){const{requestedCaipNetworks:i}=k.state,e=i==null?void 0:i.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>U._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:i}=q.state,e=i.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>U._fetchConnectorImage(t)))},async fetchCurrencyImages(i=[]){await Promise.allSettled(i.map(e=>U._fetchCurrencyImage(e)))},async fetchTokenImages(i=[]){await Promise.allSettled(i.map(e=>U._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:i}=R.state;if(i!=null&&i.length){const{data:e}=await Te.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:"1",entries:i!=null&&i.length?String(i.length):ma,include:i==null?void 0:i.join(",")}});e.sort((n,r)=>i.indexOf(n.id)-i.indexOf(r.id));const t=e.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(t.map(n=>U._fetchWalletImage(n))),be.featured=e}},async fetchRecommendedWallets(){var g;const{includeWalletIds:i,excludeWalletIds:e,featuredWalletIds:t}=R.state,n=[...e??[],...t??[]].filter(Boolean),{data:r,count:o}=await Te.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:"1",chains:(g=k.state.caipNetwork)==null?void 0:g.id,entries:ma,include:i==null?void 0:i.join(","),exclude:n==null?void 0:n.join(",")}}),s=re.getRecentWallets(),a=r.map(w=>w.image_id).filter(Boolean),d=s.map(w=>w.image_id).filter(Boolean);await Promise.allSettled([...a,...d].map(w=>U._fetchWalletImage(w))),be.recommended=r,be.count=o??0},async fetchWallets({page:i}){var d;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=R.state,r=[...be.recommended.map(({id:g})=>g),...t??[],...n??[]].filter(Boolean),{data:o,count:s}=await Te.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:String(i),entries:cu,chains:(d=k.state.caipNetwork)==null?void 0:d.id,include:e==null?void 0:e.join(","),exclude:r.join(",")}}),a=o.map(g=>g.image_id).filter(Boolean);await Promise.allSettled([...a.map(g=>U._fetchWalletImage(g)),$.wait(300)]),be.wallets=[...be.wallets,...o],be.count=s>be.count?s:be.count,be.page=i},async searchWallet({search:i}){var o;const{includeWalletIds:e,excludeWalletIds:t}=R.state;be.search=[];const{data:n}=await Te.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:"1",entries:"100",search:i,chains:(o=k.state.caipNetwork)==null?void 0:o.id,include:e==null?void 0:e.join(","),exclude:t==null?void 0:t.join(",")}}),r=n.map(s=>s.image_id).filter(Boolean);await Promise.allSettled([...r.map(s=>U._fetchWalletImage(s)),$.wait(300)]),be.search=n},async reFetchWallets(){be.page=1,be.wallets=[],await U.fetchFeaturedWallets(),await U.fetchRecommendedWallets()},prefetch(){const i=[U.fetchFeaturedWallets(),U.fetchRecommendedWallets(),U.fetchNetworkImages(),U.fetchConnectorImages()];R.state.enableAnalytics===void 0&&i.push(U.fetchAnalyticsConfig()),be.prefetchPromise=Promise.race([Promise.allSettled(i),$.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:i}=await Te.get({path:"/getAnalyticsConfig",headers:U._getApiHeaders()});R.setEnableAnalytics(i)}},di=ge({loading:!1,open:!1}),H={state:di,subscribe(i){return We(di,()=>i(di))},subscribeKey(i,e){return Me(di,i,e)},async open(i){await U.state.prefetchPromise;const e=_.state.isConnected;i!=null&&i.view?m.reset(i.view):e?m.reset("Account"):m.reset("Connect"),di.open=!0,vi.set({open:!0}),O.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const i=_.state.isConnected;di.open=!1,vi.set({open:!1}),O.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:i}})},setLoading(i){di.loading=i,vi.set({loading:i})}},Zo={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},ds={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},uu={providers:Al,selectedProvider:null,error:null,purchaseCurrency:Zo,paymentCurrency:ds,purchaseCurrencies:[Zo],paymentCurrencies:[],quotesLoading:!1},Y=ge(uu),K={state:Y,subscribe(i){return We(Y,()=>i(Y))},subscribeKey(i,e){return Me(Y,i,e)},setSelectedProvider(i){Y.selectedProvider=i},setPurchaseCurrency(i){Y.purchaseCurrency=i},setPaymentCurrency(i){Y.paymentCurrency=i},setPurchaseAmount(i){this.state.purchaseAmount=i},setPaymentAmount(i){this.state.paymentAmount=i},async getAvailableCurrencies(){const i=await ke.getOnrampOptions();Y.purchaseCurrencies=i.purchaseCurrencies,Y.paymentCurrencies=i.paymentCurrencies,Y.paymentCurrency=i.paymentCurrencies[0]||ds,Y.purchaseCurrency=i.purchaseCurrencies[0]||Zo,await U.fetchCurrencyImages(i.paymentCurrencies.map(e=>e.id)),await U.fetchTokenImages(i.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var i,e;Y.quotesLoading=!0;try{const t=await ke.getOnrampQuote({purchaseCurrency:Y.purchaseCurrency,paymentCurrency:Y.paymentCurrency,amount:((i=Y.paymentAmount)==null?void 0:i.toString())||"0",network:(e=Y.purchaseCurrency)==null?void 0:e.symbol});return Y.quotesLoading=!1,Y.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return Y.error=t.message,Y.quotesLoading=!1,null}finally{Y.quotesLoading=!1}},resetState(){Y.providers=Al,Y.selectedProvider=null,Y.error=null,Y.purchaseCurrency=Zo,Y.paymentCurrency=ds,Y.purchaseCurrencies=[Zo],Y.paymentCurrencies=[],Y.paymentAmount=void 0,Y.purchaseAmount=void 0,Y.quotesLoading=!1}},Pe=ge({}),Se={state:Pe,subscribe(i){return We(Pe,()=>i(Pe))},subscribeKey(i,e){return Me(Pe,i,e)},setToken(i){i&&(Pe.token=bi(i))},setTokenAmount(i){Pe.sendTokenAmount=i},setReceiverAddress(i){Pe.receiverAddress=i},setReceiverProfileImageUrl(i){Pe.receiverProfileImageUrl=i},setReceiverProfileName(i){Pe.receiverProfileName=i},resetSend(){Pe.token=void 0,Pe.sendTokenAmount=void 0,Pe.receiverAddress=void 0,Pe.receiverProfileImageUrl=void 0,Pe.receiverProfileName=void 0}},Q={getWalletImage(i){if(i!=null&&i.image_url)return i==null?void 0:i.image_url;if(i!=null&&i.image_id)return fe.state.walletImages[i.image_id]},getNetworkImage(i){if(i!=null&&i.imageUrl)return i==null?void 0:i.imageUrl;if(i!=null&&i.imageId)return fe.state.networkImages[i.imageId]},getConnectorImage(i){if(i!=null&&i.imageUrl)return i.imageUrl;if(i!=null&&i.imageId)return fe.state.connectorImages[i.imageId]}},yr={goBackOrCloseModal(){m.state.history.length>1?m.goBack():H.close()},navigateAfterNetworkSwitch(){const{history:i}=m.state,e=i.findIndex(t=>t==="Networks");e>=1?m.goBackToIndex(e-1):H.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zn=globalThis,Ts=zn.ShadowRoot&&(zn.ShadyCSS===void 0||zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ss=Symbol(),va=new WeakMap;let Tl=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ss)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ts&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=va.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&va.set(t,e))}return e}toString(){return this.cssText}};const ht=i=>new Tl(typeof i=="string"?i:i+"",void 0,Ss),E=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Tl(t,i,Ss)},du=(i,e)=>{if(Ts)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=zn.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},ba=Ts?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return ht(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pu,defineProperty:hu,getOwnPropertyDescriptor:fu,getOwnPropertyNames:wu,getOwnPropertySymbols:gu,getPrototypeOf:mu}=Object,Ft=globalThis,ya=Ft.trustedTypes,vu=ya?ya.emptyScript:"",qr=Ft.reactiveElementPolyfillSupport,Go=(i,e)=>i,Fn={toAttribute(i,e){switch(e){case Boolean:i=i?vu:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ks=(i,e)=>!pu(i,e),xa={attribute:!0,type:String,converter:Fn,reflect:!1,hasChanged:ks};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ft.litPropertyMetadata??(Ft.litPropertyMetadata=new WeakMap);let io=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xa){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&hu(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:o}=fu(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const a=r==null?void 0:r.call(this);o.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xa}static _$Ei(){if(this.hasOwnProperty(Go("elementProperties")))return;const e=mu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Go("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Go("properties"))){const t=this.properties,n=[...wu(t),...gu(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(ba(r))}else e!==void 0&&t.push(ba(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return du(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var o;const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Fn).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var o;const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Fn;this._$Em=r,this[r]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??ks)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};io.elementStyles=[],io.shadowRootOptions={mode:"open"},io[Go("elementProperties")]=new Map,io[Go("finalized")]=new Map,qr==null||qr({ReactiveElement:io}),(Ft.reactiveElementVersions??(Ft.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=globalThis,Zn=qo.trustedTypes,Ca=Zn?Zn.createPolicy("lit-html",{createHTML:i=>i}):void 0,Sl="$lit$",Bt=`lit$${Math.random().toFixed(9).slice(2)}$`,kl="?"+Bt,bu=`<${kl}>`,yi=document,on=()=>yi.createComment(""),nn=i=>i===null||typeof i!="object"&&typeof i!="function",Rl=Array.isArray,yu=i=>Rl(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Yr=`[ 	
\f\r]`,jo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_a=/-->/g,Ea=/>/g,pi=RegExp(`>|${Yr}(?:([^\\s"'>=/]+)(${Yr}*=${Yr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$a=/'/g,Aa=/"/g,Il=/^(?:script|style|textarea|title)$/i,Pl=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),h=Pl(1),b=Pl(2),xi=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),Ta=new WeakMap,wi=yi.createTreeWalker(yi,129);function Ol(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ca!==void 0?Ca.createHTML(e):e}const xu=(i,e)=>{const t=i.length-1,n=[];let r,o=e===2?"<svg>":"",s=jo;for(let a=0;a<t;a++){const d=i[a];let g,w,v=-1,C=0;for(;C<d.length&&(s.lastIndex=C,w=s.exec(d),w!==null);)C=s.lastIndex,s===jo?w[1]==="!--"?s=_a:w[1]!==void 0?s=Ea:w[2]!==void 0?(Il.test(w[2])&&(r=RegExp("</"+w[2],"g")),s=pi):w[3]!==void 0&&(s=pi):s===pi?w[0]===">"?(s=r??jo,v=-1):w[1]===void 0?v=-2:(v=s.lastIndex-w[2].length,g=w[1],s=w[3]===void 0?pi:w[3]==='"'?Aa:$a):s===Aa||s===$a?s=pi:s===_a||s===Ea?s=jo:(s=pi,r=void 0);const I=s===pi&&i[a+1].startsWith("/>")?" ":"";o+=s===jo?d+bu:v>=0?(n.push(g),d.slice(0,v)+Sl+d.slice(v)+Bt+I):d+Bt+(v===-2?a:I)}return[Ol(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let ps=class Nl{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0;const a=e.length-1,d=this.parts,[g,w]=xu(e,t);if(this.el=Nl.createElement(g,n),wi.currentNode=this.el.content,t===2){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=wi.nextNode())!==null&&d.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(Sl)){const C=w[s++],I=r.getAttribute(v).split(Bt),z=/([.?@])?(.*)/.exec(C);d.push({type:1,index:o,name:z[2],strings:I,ctor:z[1]==="."?_u:z[1]==="?"?Eu:z[1]==="@"?$u:xr}),r.removeAttribute(v)}else v.startsWith(Bt)&&(d.push({type:6,index:o}),r.removeAttribute(v));if(Il.test(r.tagName)){const v=r.textContent.split(Bt),C=v.length-1;if(C>0){r.textContent=Zn?Zn.emptyScript:"";for(let I=0;I<C;I++)r.append(v[I],on()),wi.nextNode(),d.push({type:2,index:++o});r.append(v[C],on())}}}else if(r.nodeType===8)if(r.data===kl)d.push({type:2,index:o});else{let v=-1;for(;(v=r.data.indexOf(Bt,v+1))!==-1;)d.push({type:7,index:o}),v+=Bt.length-1}o++}}static createElement(e,t){const n=yi.createElement("template");return n.innerHTML=e,n}};function co(i,e,t=i,n){var s,a;if(e===xi)return e;let r=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl;const o=nn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=r:t._$Cl=r),r!==void 0&&(e=co(i,r._$AS(i,e.values),r,n)),e}let Cu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??yi).importNode(t,!0);wi.currentNode=r;let o=wi.nextNode(),s=0,a=0,d=n[0];for(;d!==void 0;){if(s===d.index){let g;d.type===2?g=new Rs(o,o.nextSibling,this,e):d.type===1?g=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(g=new Au(o,this,e)),this._$AV.push(g),d=n[++a]}s!==(d==null?void 0:d.index)&&(o=wi.nextNode(),s++)}return wi.currentNode=yi,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Rs=class Dl{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=co(this,e,t),nn(e)?e===oe||e==null||e===""?(this._$AH!==oe&&this._$AR(),this._$AH=oe):e!==this._$AH&&e!==xi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yu(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==oe&&nn(this._$AH)?this._$AA.nextSibling.data=e:this.T(yi.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ps.createElement(Ol(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const s=new Cu(r,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Ta.get(e.strings);return t===void 0&&Ta.set(e.strings,t=new ps(e)),t}k(e){Rl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new Dl(this.S(on()),this.S(on()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},xr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=oe}_$AI(e,t=this,n,r){const o=this.strings;let s=!1;if(o===void 0)e=co(this,e,t,0),s=!nn(e)||e!==this._$AH&&e!==xi,s&&(this._$AH=e);else{const a=e;let d,g;for(e=o[0],d=0;d<o.length-1;d++)g=co(this,a[n+d],t,d),g===xi&&(g=this._$AH[d]),s||(s=!nn(g)||g!==this._$AH[d]),g===oe?e=oe:e!==oe&&(e+=(g??"")+o[d+1]),this._$AH[d]=g}s&&!r&&this.j(e)}j(e){e===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_u=class extends xr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===oe?void 0:e}},Eu=class extends xr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==oe)}},$u=class extends xr{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=co(this,e,t,0)??oe)===xi)return;const n=this._$AH,r=e===oe&&n!==oe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==oe&&(n===oe||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Au=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){co(this,e)}};const Kr=qo.litHtmlPolyfillSupport;Kr==null||Kr(ps,Rs),(qo.litHtmlVersions??(qo.litHtmlVersions=[])).push("3.1.3");const Tu=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let r=n._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new Rs(e.insertBefore(on(),o),o,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let A=class extends io{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Tu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return xi}};var xl;A._$litElement$=!0,A.finalized=!0,(xl=globalThis.litElementHydrateSupport)==null||xl.call(globalThis,{LitElement:A});const Xr=globalThis.litElementPolyfillSupport;Xr==null||Xr({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const Ll=b`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,Ml=b`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let Yo,Zt,Gt;function Ul(i,e){Yo=document.createElement("style"),Zt=document.createElement("style"),Gt=document.createElement("style"),Yo.textContent=ao(i).core.cssText,Zt.textContent=ao(i).dark.cssText,Gt.textContent=ao(i).light.cssText,document.head.appendChild(Yo),document.head.appendChild(Zt),document.head.appendChild(Gt),Is(e)}function Is(i){Zt&&Gt&&(i==="light"?(Zt.removeAttribute("media"),Gt.media="enabled"):(Gt.removeAttribute("media"),Zt.media="enabled"))}function Wl(i){Yo&&Zt&&Gt&&(Yo.textContent=ao(i).core.cssText,Zt.textContent=ao(i).dark.cssText,Gt.textContent=ao(i).light.cssText)}function ao(i){return{core:E`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${ht(i!=null&&i["--w3m-color-mix-strength"]?`${i["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${ht((i==null?void 0:i["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${ht((i==null?void 0:i["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${ht((i==null?void 0:i["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${ht((i==null?void 0:i["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:E`
      :root {
        --w3m-color-mix: ${ht((i==null?void 0:i["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${ht((i==null?void 0:i["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:E`
      :root {
        --w3m-color-mix: ${ht((i==null?void 0:i["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${ht((i==null?void 0:i["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const S=E`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,V=E`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Ps=E`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Su(i,e){const{kind:t,elements:n}=e;return{kind:t,elements:n,finisher(r){customElements.get(i)||customElements.define(i,r)}}}function ku(i,e){return customElements.get(i)||customElements.define(i,e),e}function f(i){return function(t){return typeof t=="function"?ku(i,t):Su(i,t)}}const Ru=E`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var Iu=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Gn=class extends A{render(){return h`<slot></slot>`}};Gn.styles=[S,Ru];Gn=Iu([f("wui-card")],Gn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pu={attribute:!0,type:String,converter:Fn,reflect:!1,hasChanged:ks},Ou=(i=Pu,e,t)=>{const{kind:n,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(t.name,i),n==="accessor"){const{name:s}=t;return{set(a){const d=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,d,i)},init(a){return a!==void 0&&this.P(s,void 0,i),a}}}if(n==="setter"){const{name:s}=t;return function(a){const d=this[s];e.call(this,a),this.requestUpdate(s,d,i)}}throw Error("Unsupported decorator location: "+n)};function c(i){return(e,t)=>typeof t=="object"?Ou(i,e,t):((n,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(r,o):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Os(i){return c({...i,state:!0,attribute:!1})}const Nu=E`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Du=b`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Lu=b`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,Mu=b`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Uu=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Wu=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ju=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Bu=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,zu=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Hu=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Vu=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,Fu=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Zu=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Gu=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,qu=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Yu=b`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Ku=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Xu=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Qu=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Ju=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,e0=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,t0=b`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,i0=b` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,o0=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,n0=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,r0=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,s0=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,a0=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,l0=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,c0=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,u0=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,d0=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,p0=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,h0=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,f0=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,w0=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,g0=b`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,m0=b`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,v0=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,b0=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,y0=b` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,x0=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,C0=b`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,_0=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,E0=b`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,$0=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,A0=b`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,T0=b`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,S0=b`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,k0=b`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,R0=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,I0=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,P0=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,O0=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,N0=b`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,D0=b`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,L0=b`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,M0=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,U0=b`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,W0=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,j0=b`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,B0=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,z0=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,H0=b`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,V0=b`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,F0=b`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var Cr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Z0={add:t0,allWallets:Du,arrowBottomCircle:Lu,appStore:Mu,apple:Uu,arrowBottom:Wu,arrowLeft:ju,arrowRight:Bu,arrowTop:zu,bank:B0,browser:Hu,card:z0,checkmark:Vu,checkmarkBold:F0,chevronBottom:Fu,chevronLeft:Zu,chevronRight:Gu,chevronTop:qu,chromeStore:Yu,clock:Ku,close:Xu,compass:Ju,coinPlaceholder:Qu,copy:e0,cursor:i0,cursorTransparent:V0,desktop:o0,disconnect:n0,discord:r0,etherscan:s0,extension:a0,externalLink:l0,facebook:c0,filters:u0,github:d0,google:p0,helpCircle:h0,infoCircle:f0,mail:w0,mobile:g0,networkPlaceholder:m0,nftPlaceholder:v0,off:b0,playStore:y0,plus:H0,qrCode:x0,recycleHorizontal:j0,refresh:C0,search:_0,send:E0,swapHorizontal:$0,swapHorizontalMedium:T0,swapHorizontalBold:A0,swapHorizontalRoundedBold:S0,swapVertical:k0,telegram:R0,twitch:I0,twitter:P0,twitterIcon:O0,verify:N0,verifyFilled:D0,wallet:M0,walletConnect:U0,walletPlaceholder:L0,warningCircle:W0};let Ci=class extends A{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,h`${Z0[this.name]}`}};Ci.styles=[S,Ps,Nu];Cr([c()],Ci.prototype,"size",void 0);Cr([c()],Ci.prototype,"name",void 0);Cr([c()],Ci.prototype,"color",void 0);Ci=Cr([f("wui-icon")],Ci);const G0=E`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var _r=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let _i=class extends A{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,h`<img src=${this.src} alt=${this.alt} />`}};_i.styles=[S,Ps,G0];_r([c()],_i.prototype,"src",void 0);_r([c()],_i.prototype,"alt",void 0);_r([c()],_i.prototype,"size",void 0);_i=_r([f("wui-image")],_i);const q0=E`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Y0=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let qn=class extends A{render(){return h`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};qn.styles=[S,q0];qn=Y0([f("wui-loading-hexagon")],qn);const K0=E`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Ns=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let uo=class extends A{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,h`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};uo.styles=[S,K0];Ns([c()],uo.prototype,"color",void 0);Ns([c()],uo.prototype,"size",void 0);uo=Ns([f("wui-loading-spinner")],uo);const X0=E`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var jl=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let rn=class extends A{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,r=116+n,o=245+n,s=360+n*1.75;return h`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};rn.styles=[S,X0];jl([c({type:Number})],rn.prototype,"radius",void 0);rn=jl([f("wui-loading-thumbnail")],rn);const Q0=E`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Er=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ei=class extends A{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,h`<slot></slot>`}};Ei.styles=[Q0];Er([c()],Ei.prototype,"width",void 0);Er([c()],Ei.prototype,"height",void 0);Er([c()],Ei.prototype,"borderRadius",void 0);Ei=Er([f("wui-shimmer")],Ei);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zl=i=>(...e)=>({_$litDirective$:i,values:e});let Hl=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J0=zl(class extends Hl{constructor(i){var e;if(super(i),i.type!==Bl.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var n,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const t=i.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(s?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return xi}}),ed=E`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var $r=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let $i=class extends A{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,h`<slot class=${J0(e)}></slot>`}};$i.styles=[S,ed];$r([c()],$i.prototype,"variant",void 0);$r([c()],$i.prototype,"color",void 0);$r([c()],$i.prototype,"align",void 0);$i=$r([f("wui-text")],$i);const td=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,id=b`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,od=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,nd=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,rd=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,sd=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ad=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ld=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,cd=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,ud=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,dd=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,pd=b`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,hd=b`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,fd=b`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,wd=b`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,gd=b`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,md=b`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,vd=b`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,bd=b`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,yd=b`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,xd=b`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Cd=E`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Ds=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const _d={browser:td,dao:id,defi:od,defiAlt:nd,eth:rd,layers:sd,lock:ad,login:ld,network:cd,nft:ud,noun:dd,profile:pd,system:hd,coinbase:fd,onrampCard:vd,moonpay:wd,stripe:gd,paypal:md,google:bd,pencil:yd,lightbulb:xd};let po=class extends A{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,h`${_d[this.name]}`}};po.styles=[S,Cd];Ds([c()],po.prototype,"name",void 0);Ds([c()],po.prototype,"size",void 0);po=Ds([f("wui-visual")],po);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=i=>i??oe,L={getSpacingStyles(i,e){if(Array.isArray(i))return i[e]?`var(--wui-spacing-${i[e]})`:void 0;if(typeof i=="string")return`var(--wui-spacing-${i})`},getFormattedDate(i){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(i)},getHostName(i){return new URL(i).hostname},getTruncateString({string:i,charsStart:e,charsEnd:t,truncate:n}){return i.length<=e+t?i:n==="end"?`${i.substring(0,e)}...`:n==="start"?`...${i.substring(i.length-t)}`:`${i.substring(0,Math.floor(e))}...${i.substring(i.length-Math.floor(t))}`},generateAvatarColors(i){const t=i.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(t),r=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(r==null?void 0:r.replace("px","")),a=`${s}% ${s}% at 65% 40%`,d=[];for(let g=0;g<5;g+=1){const w=this.tintColor(n,.15*g);d.push(`rgb(${w[0]}, ${w[1]}, ${w[2]})`)}return`
    --local-color-1: ${d[0]};
    --local-color-2: ${d[1]};
    --local-color-3: ${d[2]};
    --local-color-4: ${d[3]};
    --local-color-5: ${d[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(i){const e=parseInt(i,16),t=e>>16&255,n=e>>8&255,r=e&255;return[t,n,r]},tintColor(i,e){const[t,n,r]=i,o=Math.round(t+(255-t)*e),s=Math.round(n+(255-n)*e),a=Math.round(r+(255-r)*e);return[o,s,a]},isNumber(i){return{number:/^[0-9]+$/u}.number.test(i)},getColorTheme(i){return i||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(i){const e=i.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(i,e,t){return Math.abs(i)>=e?Number(i.toFixed(t)):i},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Ed=E`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Fe=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let _e=class extends A{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&L.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&L.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&L.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&L.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&L.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&L.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&L.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&L.getSpacingStyles(this.margin,3)};
    `,h`<slot></slot>`}};_e.styles=[S,Ed];Fe([c()],_e.prototype,"flexDirection",void 0);Fe([c()],_e.prototype,"flexWrap",void 0);Fe([c()],_e.prototype,"flexBasis",void 0);Fe([c()],_e.prototype,"flexGrow",void 0);Fe([c()],_e.prototype,"flexShrink",void 0);Fe([c()],_e.prototype,"alignItems",void 0);Fe([c()],_e.prototype,"justifyContent",void 0);Fe([c()],_e.prototype,"columnGap",void 0);Fe([c()],_e.prototype,"rowGap",void 0);Fe([c()],_e.prototype,"gap",void 0);Fe([c()],_e.prototype,"padding",void 0);Fe([c()],_e.prototype,"margin",void 0);_e=Fe([f("wui-flex")],_e);const $d=E`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Ar=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ai=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return h`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",h`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=L.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Ai.styles=[S,$d];Ar([c()],Ai.prototype,"imageSrc",void 0);Ar([c()],Ai.prototype,"alt",void 0);Ar([c()],Ai.prototype,"address",void 0);Ai=Ar([f("wui-avatar")],Ai);const Ad=E`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Mt=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ye=class extends A{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",n=this.size==="xl",r=t?"12%":"16%",o=t?"xxs":n?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",d=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let g=`var(--wui-color-${this.backgroundColor})`;return d?g=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(g=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${g};
       --local-bg-mix: ${d||s?"100%":r};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,h` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Ye.styles=[S,V,Ad];Mt([c()],Ye.prototype,"size",void 0);Mt([c()],Ye.prototype,"backgroundColor",void 0);Mt([c()],Ye.prototype,"iconColor",void 0);Mt([c()],Ye.prototype,"iconSize",void 0);Mt([c()],Ye.prototype,"background",void 0);Mt([c({type:Boolean})],Ye.prototype,"border",void 0);Mt([c()],Ye.prototype,"borderColor",void 0);Mt([c()],Ye.prototype,"icon",void 0);Ye=Mt([f("wui-icon-box")],Ye);const Td=E`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var at=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ne=class extends A{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return h`
      <button
        ?disabled=${this.disabled}
        class=${tt(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?L.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return h` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?h`<wui-image src=${this.networkSrc}></wui-image>`:h`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return h`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};Ne.styles=[S,V,Td];at([c()],Ne.prototype,"networkSrc",void 0);at([c()],Ne.prototype,"avatarSrc",void 0);at([c()],Ne.prototype,"balance",void 0);at([c({type:Boolean})],Ne.prototype,"isUnsupportedChain",void 0);at([c({type:Boolean})],Ne.prototype,"disabled",void 0);at([c({type:Boolean})],Ne.prototype,"isProfileName",void 0);at([c()],Ne.prototype,"address",void 0);at([c()],Ne.prototype,"profileName",void 0);at([c()],Ne.prototype,"charsStart",void 0);at([c()],Ne.prototype,"charsEnd",void 0);Ne=at([f("wui-account-button")],Ne);const Sd=E`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Zi=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ft=class extends A{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),h`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?h`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:h`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ft.styles=[S,Sd];Zi([c()],ft.prototype,"size",void 0);Zi([c()],ft.prototype,"name",void 0);Zi([c()],ft.prototype,"imageSrc",void 0);Zi([c()],ft.prototype,"walletIcon",void 0);Zi([c({type:Boolean})],ft.prototype,"installed",void 0);Zi([c()],ft.prototype,"badgeSize",void 0);ft=Zi([f("wui-wallet-image")],ft);const kd=E`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Vl=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Qr=4;let sn=class extends A{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Qr;return h`${this.walletImages.slice(0,Qr).map(({src:t,walletName:n})=>h`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${tt(n)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Qr-this.walletImages.length)].map(()=>h` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};sn.styles=[S,kd];Vl([c({type:Array})],sn.prototype,"walletImages",void 0);sn=Vl([f("wui-all-wallets-image")],sn);const Rd=E`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var _t=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Id={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let je=class extends A{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??Id[this.size];return h`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?h`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:h``}};je.styles=[S,V,Rd];_t([c()],je.prototype,"size",void 0);_t([c({type:Boolean})],je.prototype,"disabled",void 0);_t([c({type:Boolean})],je.prototype,"fullWidth",void 0);_t([c({type:Boolean})],je.prototype,"loading",void 0);_t([c()],je.prototype,"variant",void 0);_t([c({type:Boolean})],je.prototype,"hasIconLeft",void 0);_t([c({type:Boolean})],je.prototype,"hasIconRight",void 0);_t([c()],je.prototype,"borderRadius",void 0);_t([c()],je.prototype,"textVariant",void 0);je=_t([f("wui-button")],je);const Fl=b`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Pd=E`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Zl=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let an=class extends A{constructor(){super(...arguments),this.type="wallet"}render(){return h`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?h` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Fl}`:h`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};an.styles=[S,V,Pd];Zl([c()],an.prototype,"type",void 0);an=Zl([f("wui-card-select-loader")],an);const Od=b`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Nd=b`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Dd=E`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var An=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Kt=class extends A{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:Od,md:Fl,lg:Nd};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,h`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:h`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Kt.styles=[S,Dd];An([c()],Kt.prototype,"size",void 0);An([c()],Kt.prototype,"name",void 0);An([c()],Kt.prototype,"imageSrc",void 0);An([c({type:Boolean})],Kt.prototype,"selected",void 0);Kt=An([f("wui-network-image")],Kt);const Ld=E`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Gi=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let wt=class extends A{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return h`
      <button data-selected=${tt(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?h`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${tt(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:h`
      <wui-wallet-image
        size="md"
        imageSrc=${tt(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};wt.styles=[S,V,Ld];Gi([c()],wt.prototype,"name",void 0);Gi([c()],wt.prototype,"type",void 0);Gi([c()],wt.prototype,"imageSrc",void 0);Gi([c({type:Boolean})],wt.prototype,"disabled",void 0);Gi([c({type:Boolean})],wt.prototype,"selected",void 0);Gi([c({type:Boolean})],wt.prototype,"installed",void 0);wt=Gi([f("wui-card-select")],wt);const Md=E`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var qi=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let gt=class extends A{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return h`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:L.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?h`<wui-image src=${this.imageSrc}></wui-image>`:null}};gt.styles=[S,V,Md];qi([c()],gt.prototype,"variant",void 0);qi([c()],gt.prototype,"imageSrc",void 0);qi([c({type:Boolean})],gt.prototype,"disabled",void 0);qi([c()],gt.prototype,"icon",void 0);qi([c()],gt.prototype,"href",void 0);qi([c()],gt.prototype,"text",void 0);gt=qi([f("wui-chip")],gt);const Ud=E`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Ls=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ho=class extends A{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return h`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?h`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ho.styles=[S,V,Ud];Ls([c()],ho.prototype,"size",void 0);Ls([c({type:Boolean})],ho.prototype,"loading",void 0);ho=Ls([f("wui-connect-button")],ho);const Wd=E`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Tr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ti=class extends A{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return h`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ti.styles=[S,V,Wd];Tr([c({type:Boolean})],Ti.prototype,"disabled",void 0);Tr([c()],Ti.prototype,"label",void 0);Tr([c()],Ti.prototype,"buttonLabel",void 0);Ti=Tr([f("wui-cta-button")],Ti);const jd=E`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var Bd=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Yn=class extends A{render(){return h`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Yn.styles=[S,V,jd];Yn=Bd([f("wui-details-group")],Yn);const zd=E`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var Gl=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ln=class extends A{constructor(){super(...arguments),this.name=""}render(){return h`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};ln.styles=[S,V,zd];Gl([c()],ln.prototype,"name",void 0);ln=Gl([f("wui-details-group-item")],ln);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hd=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=(i,e)=>{var n;const t=i._$AN;if(t===void 0)return!1;for(const r of t)(n=r._$AO)==null||n.call(r,e,!1),Ko(r,e);return!0},Kn=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},ql=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Zd(e)}};function Vd(i){this._$AN!==void 0?(Kn(this),this._$AM=i,ql(this)):this._$AM=i}function Fd(i,e=!1,t=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)Ko(n[o],!1),Kn(n[o]);else n!=null&&(Ko(n,!1),Kn(n));else Ko(this,i)}const Zd=i=>{i.type==Bl.CHILD&&(i._$AP??(i._$AP=Fd),i._$AQ??(i._$AQ=Vd))};let Gd=class extends Hl{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),ql(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(Ko(this,e),Kn(this))}setValue(e){if(Hd(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=()=>new qd;let qd=class{};const Jr=new WeakMap,Us=zl(class extends Gd{render(i){return oe}update(i,[e]){var n;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=i.options)==null?void 0:n.host,this.rt(this.ct=i.element)),oe}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=Jr.get(e);t===void 0&&(t=new WeakMap,Jr.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=Jr.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Yd=E`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var oi=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let it=class extends A{constructor(){super(...arguments),this.inputElementRef=Ms(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-size-${this.size}`;return h` ${this.templateIcon()}
      <input
        ${Us(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${tt(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?h`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};it.styles=[S,V,Yd];oi([c()],it.prototype,"size",void 0);oi([c()],it.prototype,"icon",void 0);oi([c({type:Boolean})],it.prototype,"disabled",void 0);oi([c()],it.prototype,"placeholder",void 0);oi([c()],it.prototype,"type",void 0);oi([c()],it.prototype,"keyHint",void 0);oi([c()],it.prototype,"value",void 0);it=oi([f("wui-input-text")],it);const Kd=E`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Sr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Si=class extends A{constructor(){super(...arguments),this.disabled=!1}render(){return h`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?h`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Si.styles=[S,Kd];Sr([c()],Si.prototype,"errorMessage",void 0);Sr([c({type:Boolean})],Si.prototype,"disabled",void 0);Sr([c()],Si.prototype,"value",void 0);Si=Sr([f("wui-email-input")],Si);const Xd=E`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Tn=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Xt=class extends A{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,h`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Xt.styles=[S,V,Ps,Xd];Tn([c()],Xt.prototype,"size",void 0);Tn([c({type:Boolean})],Xt.prototype,"disabled",void 0);Tn([c()],Xt.prototype,"icon",void 0);Tn([c()],Xt.prototype,"iconColor",void 0);Xt=Tn([f("wui-icon-link")],Xt);const Qd=E`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Yl=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let cn=class extends A{constructor(){super(...arguments),this.icon="copy"}render(){return h`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};cn.styles=[S,V,Qd];Yl([c()],cn.prototype,"icon",void 0);cn=Yl([f("wui-input-element")],cn);const Jd=E`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var Ws=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let fo=class extends A{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return h`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};fo.styles=[S,V,Jd];Ws([c({type:Boolean})],fo.prototype,"disabled",void 0);Ws([c({type:String})],fo.prototype,"value",void 0);fo=Ws([f("wui-input-numeric")],fo);const e1=E`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var js=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let wo=class extends A{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return h`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};wo.styles=[S,V,e1];js([c({type:Boolean})],wo.prototype,"disabled",void 0);js([c()],wo.prototype,"color",void 0);wo=js([f("wui-link")],wo);const t1=E`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Et=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Be=class extends A{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return h`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${tt(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return h`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return h`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",n=this.iconSize?this.iconSize:t;return h`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?h`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:h``}chevronTemplate(){return this.chevron?h`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Be.styles=[S,V,t1];Et([c()],Be.prototype,"icon",void 0);Et([c()],Be.prototype,"iconSize",void 0);Et([c()],Be.prototype,"variant",void 0);Et([c()],Be.prototype,"iconVariant",void 0);Et([c({type:Boolean})],Be.prototype,"disabled",void 0);Et([c()],Be.prototype,"imageSrc",void 0);Et([c()],Be.prototype,"alt",void 0);Et([c({type:Boolean})],Be.prototype,"chevron",void 0);Et([c({type:Boolean})],Be.prototype,"loading",void 0);Be=Et([f("wui-list-item")],Be);var hs;(function(i){i.approve="approved",i.bought="bought",i.borrow="borrowed",i.burn="burnt",i.cancel="canceled",i.claim="claimed",i.deploy="deployed",i.deposit="deposited",i.execute="executed",i.mint="minted",i.receive="received",i.repay="repaid",i.send="sent",i.sell="sold",i.stake="staked",i.trade="swapped",i.unstake="unstaked",i.withdraw="withdrawn"})(hs||(hs={}));const i1=E`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Yi=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let mt=class extends A{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,n=(e==null?void 0:e.type)==="NFT",r=t!=null&&t.url?t.type==="NFT":n,o=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,h`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,n=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?h`<div class="swap-images-container">
        ${e!=null&&e.url?h`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?h`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?h`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:n==="NFT"?h`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:h`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?h`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};mt.styles=[i1];Yi([c()],mt.prototype,"type",void 0);Yi([c()],mt.prototype,"status",void 0);Yi([c()],mt.prototype,"direction",void 0);Yi([c({type:Boolean})],mt.prototype,"onlyDirectionIcon",void 0);Yi([c({type:Array})],mt.prototype,"images",void 0);Yi([c({type:Object})],mt.prototype,"secondImage",void 0);mt=Yi([f("wui-transaction-visual")],mt);const o1=E`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var lt=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let De=class extends A{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return h`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${tt(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${tt(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${hs[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?h`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?h`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};De.styles=[S,o1];lt([c()],De.prototype,"type",void 0);lt([c({type:Array})],De.prototype,"descriptions",void 0);lt([c()],De.prototype,"date",void 0);lt([c({type:Boolean})],De.prototype,"onlyDirectionIcon",void 0);lt([c()],De.prototype,"status",void 0);lt([c()],De.prototype,"direction",void 0);lt([c({type:Array})],De.prototype,"images",void 0);lt([c({type:Array})],De.prototype,"price",void 0);lt([c({type:Array})],De.prototype,"amount",void 0);lt([c({type:Array})],De.prototype,"symbol",void 0);De=lt([f("wui-transaction-list-item")],De);const n1=E`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var r1=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Xn=class extends A{render(){return h`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Xn.styles=[S,n1];Xn=r1([f("wui-transaction-list-item-loader")],Xn);const s1=E`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var Bs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let go=class extends A{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return h`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};go.styles=[S,s1];Bs([c()],go.prototype,"variant",void 0);Bs([c()],go.prototype,"size",void 0);go=Bs([f("wui-tag")],go);const a1=E`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var ct=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Le=class extends A{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return h`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?h` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?h` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?h`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?h`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?h`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?h`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Le.styles=[S,V,a1];ct([c({type:Array})],Le.prototype,"walletImages",void 0);ct([c()],Le.prototype,"imageSrc",void 0);ct([c()],Le.prototype,"name",void 0);ct([c()],Le.prototype,"tagLabel",void 0);ct([c()],Le.prototype,"tagVariant",void 0);ct([c()],Le.prototype,"icon",void 0);ct([c()],Le.prototype,"walletIcon",void 0);ct([c({type:Boolean})],Le.prototype,"installed",void 0);ct([c({type:Boolean})],Le.prototype,"disabled",void 0);ct([c({type:Boolean})],Le.prototype,"showAllWallets",void 0);Le=ct([f("wui-list-wallet")],Le);const l1=E`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Kl=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let un=class extends A{constructor(){super(...arguments),this.logo="google"}render(){return h`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};un.styles=[S,l1];Kl([c()],un.prototype,"logo",void 0);un=Kl([f("wui-logo")],un);const c1=E`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var zs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let mo=class extends A{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return h`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};mo.styles=[S,V,c1];zs([c()],mo.prototype,"logo",void 0);zs([c({type:Boolean})],mo.prototype,"disabled",void 0);mo=zs([f("wui-logo-select")],mo);const u1=E`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var kr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ki=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return h`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?h`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?h`<wui-image src=${this.imageSrc}></wui-image>`:h`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ki.styles=[S,V,u1];kr([c()],ki.prototype,"imageSrc",void 0);kr([c({type:Boolean})],ki.prototype,"isUnsupportedChain",void 0);kr([c({type:Boolean})],ki.prototype,"disabled",void 0);ki=kr([f("wui-network-button")],ki);const d1=E`
  :host {
    position: relative;
    display: block;
  }
`;var Rr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ri=class extends A{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(n=>n!==""),this.handleKeyDown=(e,t)=>{const n=e.target,r=this.getInputElement(n),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!r)return;o.includes(e.key)&&e.preventDefault();const s=r.selectionStart;switch(e.key){case"ArrowLeft":s&&r.setSelectionRange(s+1,s+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":r.value===""?this.focusInputField("prev",t):this.updateInput(r,t,"");break;case"Backspace":r.value===""?this.focusInputField("prev",t):this.updateInput(r,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const n=t+1;if(!this.shouldInputBeEnabled(n))return;const r=this.numerics[n<this.length?n:t],o=r?this.getInputElement(r):void 0;o&&(o.disabled=!1,o.focus())}if(e==="prev"){const n=t-1,r=this.numerics[n>-1?n:t],o=r?this.getInputElement(r):void 0;o&&o.focus()}}}firstUpdated(){var t,n;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(n=this.numerics[0])==null||n.focus()}render(){return h`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>h`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,t)}
              @click=${n=>this.selectInput(n)}
              @keydown=${n=>this.handleKeyDown(n,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,n){const r=this.numerics[t],o=e||(r?this.getInputElement(r):void 0);o&&(o.value=n,this.values=this.values.map((s,a)=>a===t?n:s))}selectInput(e){const t=e.target;if(t){const n=this.getInputElement(t);n==null||n.select()}}handleInput(e,t){const n=e.target,r=this.getInputElement(n);if(r){const o=r.value;e.inputType==="insertFromPaste"?this.handlePaste(r,o,t):L.isNumber(o)&&e.data?(this.updateInput(r,t,e.data),this.focusInputField("next",t)):this.updateInput(r,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,n){const r=t[0];if(r&&L.isNumber(r)){this.updateInput(e,n,r);const s=t.substring(1);if(n+1<this.length&&s.length){const a=this.numerics[n+1],d=a?this.getInputElement(a):void 0;d&&this.handlePaste(d,s,n+1)}else this.focusInputField("next",n)}else this.updateInput(e,n,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Ri.styles=[S,d1];Rr([c({type:Number})],Ri.prototype,"length",void 0);Rr([c({type:String})],Ri.prototype,"otp",void 0);Rr([Os()],Ri.prototype,"values",void 0);Ri=Rr([f("wui-otp")],Ri);const p1=.1,Sa=2.5,St=7;function es(i,e,t){return i===e?!1:(i-e<0?e-i:i-e)<=t+p1}function h1(i,e){const t=Array.prototype.slice.call(tu.create(i,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(t.length);return t.reduce((r,o,s)=>(s%n===0?r.push([o]):r[r.length-1].push(o))&&r,[])}const f1={generate(i,e,t){const n="#141414",r="transparent",s=[],a=h1(i,"Q"),d=e/a.length,g=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];g.forEach(({x:X,y:Z})=>{const se=(a.length-St)*d*X,ee=(a.length-St)*d*Z,Ae=.45;for(let ce=0;ce<g.length;ce+=1){const pt=d*(St-ce*2);s.push(b`
            <rect
              fill=${ce===2?n:r}
              width=${ce===0?pt-5:pt}
              rx= ${ce===0?(pt-5)*Ae:pt*Ae}
              ry= ${ce===0?(pt-5)*Ae:pt*Ae}
              stroke=${n}
              stroke-width=${ce===0?5:0}
              height=${ce===0?pt-5:pt}
              x= ${ce===0?ee+d*ce+5/2:ee+d*ce}
              y= ${ce===0?se+d*ce+5/2:se+d*ce}
            />
          `)}});const w=Math.floor((t+25)/d),v=a.length/2-w/2,C=a.length/2+w/2-1,I=[];a.forEach((X,Z)=>{X.forEach((se,ee)=>{if(a[Z][ee]&&!(Z<St&&ee<St||Z>a.length-(St+1)&&ee<St||Z<St&&ee>a.length-(St+1))&&!(Z>v&&Z<C&&ee>v&&ee<C)){const Ae=Z*d+d/2,ce=ee*d+d/2;I.push([Ae,ce])}})});const z={};return I.forEach(([X,Z])=>{var se;z[X]?(se=z[X])==null||se.push(Z):z[X]=[Z]}),Object.entries(z).map(([X,Z])=>{const se=Z.filter(ee=>Z.every(Ae=>!es(ee,Ae,d)));return[Number(X),se]}).forEach(([X,Z])=>{Z.forEach(se=>{s.push(b`<circle cx=${X} cy=${se} fill=${n} r=${d/Sa} />`)})}),Object.entries(z).filter(([X,Z])=>Z.length>1).map(([X,Z])=>{const se=Z.filter(ee=>Z.some(Ae=>es(ee,Ae,d)));return[Number(X),se]}).map(([X,Z])=>{Z.sort((ee,Ae)=>ee<Ae?-1:1);const se=[];for(const ee of Z){const Ae=se.find(ce=>ce.some(pt=>es(ee,pt,d)));Ae?Ae.push(ee):se.push([ee])}return[X,se.map(ee=>[ee[0],ee[ee.length-1]])]}).forEach(([X,Z])=>{Z.forEach(([se,ee])=>{s.push(b`
              <line
                x1=${X}
                x2=${X}
                y1=${se}
                y2=${ee}
                stroke=${n}
                stroke-width=${d/(Sa/2)}
                stroke-linecap="round"
              />
            `)})}),s}},w1=E`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Ki=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let vt=class extends A{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,h`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return b`
      <svg height=${e} width=${e}>
        ${f1.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:h`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};vt.styles=[S,w1];Ki([c()],vt.prototype,"uri",void 0);Ki([c({type:Number})],vt.prototype,"size",void 0);Ki([c()],vt.prototype,"theme",void 0);Ki([c()],vt.prototype,"imageSrc",void 0);Ki([c()],vt.prototype,"alt",void 0);Ki([c({type:Boolean})],vt.prototype,"arenaClear",void 0);vt=Ki([f("wui-qr-code")],vt);const g1=E`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var m1=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Qn=class extends A{constructor(){super(...arguments),this.inputComponentRef=Ms()}render(){return h`
      <wui-input-text
        ${Us(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Qn.styles=[S,g1];Qn=m1([f("wui-search-bar")],Qn);const v1=E`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Sn=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Qt=class extends A{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return h`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Qt.styles=[S,v1];Sn([c()],Qt.prototype,"backgroundColor",void 0);Sn([c()],Qt.prototype,"iconColor",void 0);Sn([c()],Qt.prototype,"icon",void 0);Sn([c()],Qt.prototype,"message",void 0);Qt=Sn([f("wui-snackbar")],Qt);const b1=E`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ni=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ot=class extends A{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var r;const n=t===this.activeTab;return h`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${n}
          data-testid="tab-${(r=e.label)==null?void 0:r.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?h`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const n=this.buttons[this.activeTab],r=this.buttons[e],o=n==null?void 0:n.querySelector("wui-text"),s=r==null?void 0:r.querySelector("wui-text"),a=r==null?void 0:r.getBoundingClientRect(),d=s==null?void 0:s.getBoundingClientRect();n&&o&&!t&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&a&&d&&s&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+d.width)+6}px`,r.animate([{width:`${a.width+d.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};ot.styles=[S,V,b1];ni([c({type:Array})],ot.prototype,"tabs",void 0);ni([c()],ot.prototype,"onTabChange",void 0);ni([c({type:Array})],ot.prototype,"buttons",void 0);ni([c({type:Boolean})],ot.prototype,"disabled",void 0);ni([c()],ot.prototype,"localTabWidth",void 0);ni([Os()],ot.prototype,"activeTab",void 0);ni([Os()],ot.prototype,"isDense",void 0);ot=ni([f("wui-tabs")],ot);const y1=E`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var Hs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let vo=class extends A{constructor(){super(...arguments),this.text=""}render(){return h`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?h`<wui-image src=${this.imageSrc}></wui-image>`:h`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};vo.styles=[S,V,y1];Hs([c()],vo.prototype,"imageSrc",void 0);Hs([c()],vo.prototype,"text",void 0);vo=Hs([f("wui-token-button")],vo);const x1=E`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ir=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ii=class extends A{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,h`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ii.styles=[S,V,x1];Ir([c()],Ii.prototype,"placement",void 0);Ir([c()],Ii.prototype,"variant",void 0);Ir([c()],Ii.prototype,"message",void 0);Ii=Ir([f("wui-tooltip")],Ii);const C1=E`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
    }
  }
`;var Vs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let bo=class extends A{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return h`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-tooltip");e&&(e.style.display="flex",e==null||e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250}))}onMouseLeave(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-tooltip");e&&(e.style.display="none",e==null||e.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200}))}};bo.styles=[S,V,C1];Vs([c()],bo.prototype,"text",void 0);Vs([c()],bo.prototype,"icon",void 0);bo=Vs([f("wui-tooltip-select")],bo);const _1=E`
  :host > wui-flex {
    cursor: pointer;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition: background-color 0.2s linear;
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > wui-image::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var Po=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Rt=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0}render(){var t;const e=(t=xe.multiply(this.price,this.amount))==null?void 0:t.toFixed(3);return h`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100">${this.name}</wui-text>
            ${e?h`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${L.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200">${this.symbol}</wui-text>
            ${this.amount&&h`<wui-text variant="small-400" color="fg-200"
              >${L.formatNumberToLocalString(this.amount,4)}</wui-text
            >`}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageSrc?h`<wui-image width="40" height="40" src=${this.imageSrc}></wui-image>`:null}};Rt.styles=[S,V,_1];Po([c()],Rt.prototype,"imageSrc",void 0);Po([c()],Rt.prototype,"name",void 0);Po([c()],Rt.prototype,"symbol",void 0);Po([c()],Rt.prototype,"price",void 0);Po([c()],Rt.prototype,"amount",void 0);Rt=Po([f("wui-token-list-item")],Rt);const E1=E`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Pr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Pi=class extends A{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,h`${this.templateVisual()}`}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:h`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Pi.styles=[S,E1];Pr([c()],Pi.prototype,"imageSrc",void 0);Pr([c()],Pi.prototype,"alt",void 0);Pr([c({type:Boolean})],Pi.prototype,"borderRadiusFull",void 0);Pi=Pr([f("wui-visual-thumbnail")],Pi);const $1=E`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Or=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Oi=class extends A{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return h`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Oi.styles=[S,V,$1];Or([c()],Oi.prototype,"label",void 0);Or([c()],Oi.prototype,"description",void 0);Or([c()],Oi.prototype,"icon",void 0);Oi=Or([f("wui-notice-card")],Oi);const A1=E`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Fs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const ts=100;let yo=class extends A{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var n,r;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".heightContent"),t=(r=this.shadowRoot)==null?void 0:r.querySelector(".textContent");if(e&&t){this.scrollElement=e;const o=t==null?void 0:t.scrollHeight;o&&o>ts&&(this.enableAccordion=!0,this.scrollHeightElement=o,this.requestUpdate())}})}render(){return h`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${ts}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${ts}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?h` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};yo.styles=[S,V,A1];Fs([c()],yo.prototype,"textTitle",void 0);Fs([c()],yo.prototype,"overflowedContent",void 0);yo=Fs([f("wui-list-accordion")],yo);const T1=E`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Nr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ni=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return h`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?h` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:h`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Ni.styles=[S,V,T1];Nr([c()],Ni.prototype,"imageSrc",void 0);Nr([c()],Ni.prototype,"textTitle",void 0);Nr([c()],Ni.prototype,"textValue",void 0);Ni=Nr([f("wui-list-content")],Ni);const S1=E`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var kn=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Jt=class extends A{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return h`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?h`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:h`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Jt.styles=[S,V,S1];kn([c()],Jt.prototype,"imageSrc",void 0);kn([c()],Jt.prototype,"name",void 0);kn([c({type:Boolean})],Jt.prototype,"disabled",void 0);kn([c({type:Boolean})],Jt.prototype,"transparent",void 0);Jt=kn([f("wui-list-network")],Jt);const k1=E`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Oo=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let It=class extends A{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return h`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?h`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:h`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};It.styles=[S,V,k1];Oo([c()],It.prototype,"amount",void 0);Oo([c()],It.prototype,"networkCurreny",void 0);Oo([c()],It.prototype,"networkImageUrl",void 0);Oo([c()],It.prototype,"receiverAddress",void 0);Oo([c()],It.prototype,"addressExplorerUrl",void 0);It=Oo([f("wui-list-wallet-transaction")],It);const R1=E`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var Ze=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ee=class extends A{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return h`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?h`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:h`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await U._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return h`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return h`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return h`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};Ee.styles=[S,V,R1];Ze([c({type:Boolean})],Ee.prototype,"disabled",void 0);Ze([c()],Ee.prototype,"color",void 0);Ze([c()],Ee.prototype,"label",void 0);Ze([c()],Ee.prototype,"purchaseValue",void 0);Ze([c()],Ee.prototype,"purchaseCurrency",void 0);Ze([c()],Ee.prototype,"date",void 0);Ze([c({type:Boolean})],Ee.prototype,"completed",void 0);Ze([c({type:Boolean})],Ee.prototype,"inProgress",void 0);Ze([c({type:Boolean})],Ee.prototype,"failed",void 0);Ze([c()],Ee.prototype,"onClick",void 0);Ze([c()],Ee.prototype,"symbol",void 0);Ze([c()],Ee.prototype,"icon",void 0);Ee=Ze([f("wui-onramp-activity-item")],Ee);const I1=E`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var ri=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let nt=class extends A{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return h`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${tt(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?h`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:h`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var n;const e=k.getRequestedCaipNetworks(),t=(n=e==null?void 0:e.filter(r=>r==null?void 0:r.imageId))==null?void 0:n.slice(0,5);return h`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(r=>h`
            <wui-flex class="network-icon">
              <wui-image src=${tt(Q.getNetworkImage(r))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};nt.styles=[S,V,I1];ri([c({type:Boolean})],nt.prototype,"disabled",void 0);ri([c()],nt.prototype,"color",void 0);ri([c()],nt.prototype,"name",void 0);ri([c()],nt.prototype,"label",void 0);ri([c()],nt.prototype,"feeRange",void 0);ri([c({type:Boolean})],nt.prototype,"loading",void 0);ri([c()],nt.prototype,"onClick",void 0);nt=ri([f("wui-onramp-provider-item")],nt);const P1=E`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-060);
    }
  }
`;var Xl=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let dn=class extends A{constructor(){super(...arguments),this.text=""}render(){return h`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};dn.styles=[S,V,P1];Xl([c()],dn.prototype,"text",void 0);dn=Xl([f("wui-promo")],dn);const O1=E`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var Zs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let xo=class extends A{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return h`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};xo.styles=[S,O1];Zs([c()],xo.prototype,"dollars",void 0);Zs([c()],xo.prototype,"pennies",void 0);xo=Zs([f("wui-balance")],xo);const N1=E`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var No=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Pt=class extends A{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return h`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${L.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?h`<wui-image src=${this.networkSrc}></wui-image>`:h`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Pt.styles=[S,V,N1];No([c()],Pt.prototype,"networkSrc",void 0);No([c()],Pt.prototype,"avatarSrc",void 0);No([c({type:Boolean})],Pt.prototype,"isProfileName",void 0);No([c()],Pt.prototype,"address",void 0);No([c()],Pt.prototype,"icon",void 0);Pt=No([f("wui-profile-button")],Pt);const D1=E`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var Do=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ot=class extends A{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return h`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Ot.styles=[S,V,D1];Do([c()],Ot.prototype,"variant",void 0);Do([c()],Ot.prototype,"imageSrc",void 0);Do([c({type:Boolean})],Ot.prototype,"disabled",void 0);Do([c()],Ot.prototype,"icon",void 0);Do([c()],Ot.prototype,"text",void 0);Ot=Do([f("wui-chip-button")],Ot);const L1=E`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var Gs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Co=class extends A{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return h`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return h` <wui-flex class="networks">
      ${e==null?void 0:e.map(t=>h` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};Co.styles=[S,V,L1];Gs([c({type:Array})],Co.prototype,"networkImages",void 0);Gs([c()],Co.prototype,"text",void 0);Co=Gs([f("wui-compatible-network")],Co);const M1=E`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var qs=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let _o=class extends A{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return h`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};_o.styles=[S,V,M1];qs([c()],_o.prototype,"icon",void 0);qs([c()],_o.prototype,"text",void 0);_o=qs([f("wui-banner")],_o);const U1=E`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Xi=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let bt=class extends A{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return h`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${L.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};bt.styles=[S,V,U1];Xi([c()],bt.prototype,"tokenName",void 0);Xi([c()],bt.prototype,"tokenImageUrl",void 0);Xi([c({type:Number})],bt.prototype,"tokenValue",void 0);Xi([c()],bt.prototype,"tokenAmount",void 0);Xi([c()],bt.prototype,"tokenCurrency",void 0);Xi([c({type:Boolean})],bt.prototype,"clickable",void 0);bt=Xi([f("wui-list-token")],bt);const W1=E`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var si=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let rt=class extends A{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return h`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?h` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:h`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};rt.styles=[S,V,W1];si([c()],rt.prototype,"icon",void 0);si([c()],rt.prototype,"text",void 0);si([c()],rt.prototype,"description",void 0);si([c()],rt.prototype,"tag",void 0);si([c()],rt.prototype,"iconBackgroundColor",void 0);si([c()],rt.prototype,"iconColor",void 0);si([c({type:Boolean})],rt.prototype,"disabled",void 0);rt=si([f("wui-list-description")],rt);const j1=E`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,B1=/[.*+?^${}()|[\]\\]/gu,z1=/[0-9,.]/u;var Dr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Di=class extends A{constructor(){super(...arguments),this.inputElementRef=Ms(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),h`<input
      ${Us(this.inputElementRef)}
      type="text"
      inputmode="numeric"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var n,r;const t=e.data;t&&!z1.test(t)&&(n=this.inputElementRef)!=null&&n.value&&(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(B1,"\\$&"),"gu"),"")),this.dispatchEvent(new CustomEvent("inputChange",{detail:(r=this.inputElementRef.value)==null?void 0:r.value,bubbles:!0,composed:!0}))}};Di.styles=[S,V,j1];Dr([c({type:Boolean})],Di.prototype,"disabled",void 0);Dr([c({type:String})],Di.prototype,"value",void 0);Dr([c({type:String})],Di.prototype,"placeholder",void 0);Di=Dr([f("wui-input-amount")],Di);const H1=E`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-002);
  }
`;var Rn=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ei=class extends A{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return h`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?h`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?h`<wui-image src=${this.imageSrc}></wui-image>`:h`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ei.styles=[S,V,H1];Rn([c()],ei.prototype,"text",void 0);Rn([c()],ei.prototype,"address",void 0);Rn([c()],ei.prototype,"imageSrc",void 0);Rn([c({type:Boolean})],ei.prototype,"isAddress",void 0);ei=Rn([f("wui-preview-item")],ei);const V1=E`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Qe=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ie=class extends A{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&L.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&L.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&L.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&L.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&L.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&L.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&L.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&L.getSpacingStyles(this.margin,3)};
    `,h`<slot></slot>`}};Ie.styles=[S,V1];Qe([c()],Ie.prototype,"gridTemplateRows",void 0);Qe([c()],Ie.prototype,"gridTemplateColumns",void 0);Qe([c()],Ie.prototype,"justifyItems",void 0);Qe([c()],Ie.prototype,"alignItems",void 0);Qe([c()],Ie.prototype,"justifyContent",void 0);Qe([c()],Ie.prototype,"alignContent",void 0);Qe([c()],Ie.prototype,"columnGap",void 0);Qe([c()],Ie.prototype,"rowGap",void 0);Qe([c()],Ie.prototype,"gap",void 0);Qe([c()],Ie.prototype,"padding",void 0);Qe([c()],Ie.prototype,"margin",void 0);Ie=Qe([f("wui-grid")],Ie);const F1=E`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var Ql=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let pn=class extends A{constructor(){super(...arguments),this.text=""}render(){return h`${this.template()}`}template(){return this.text?h`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};pn.styles=[S,F1];Ql([c()],pn.prototype,"text",void 0);pn=Ql([f("wui-separator")],pn);const Vo={interpolate(i,e,t){if(i.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const n=i[0]||0,r=i[1]||0,o=e[0]||0,s=e[1]||0;return t<n?o:t>r?s:(s-o)/(r-n)*(t-n)+o}},Z1=3,G1=["receive","deposit","borrow","claim"],q1=["withdraw","repay","burn"],Vt={getMonthName(i){const e=new Date;return e.setMonth(i),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(i,e){const t=As.getYear(),n=this.getMonthName(e);return i===t?n:`${n} ${i}`},getTransactionImages(i){const[e,t]=i,n=!!e&&(i==null?void 0:i.every(s=>!!s.nft_info)),r=(i==null?void 0:i.length)>1;return(i==null?void 0:i.length)===2&&!n?[this.getTransactionImage(e),this.getTransactionImage(t)]:r?i.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(i){return{type:Vt.getTransactionTransferTokenType(i),url:Vt.getTransactionImageURL(i)}},getTransactionImageURL(i){var r,o,s,a,d;let e;const t=!!(i!=null&&i.nft_info),n=!!(i!=null&&i.fungible_info);return i&&t?e=(s=(o=(r=i==null?void 0:i.nft_info)==null?void 0:r.content)==null?void 0:o.preview)==null?void 0:s.url:i&&n&&(e=(d=(a=i==null?void 0:i.fungible_info)==null?void 0:a.icon)==null?void 0:d.url),e},getTransactionTransferTokenType(i){if(i!=null&&i.fungible_info)return"FUNGIBLE";if(i!=null&&i.nft_info)return"NFT"},getTransactionDescriptions(i){var v,C,I;const e=(v=i==null?void 0:i.metadata)==null?void 0:v.operationType,t=i==null?void 0:i.transfers,n=((C=i==null?void 0:i.transfers)==null?void 0:C.length)>0,r=((I=i==null?void 0:i.transfers)==null?void 0:I.length)>1,o=n&&(t==null?void 0:t.every(z=>!!(z!=null&&z.fungible_info))),[s,a]=t;let d=this.getTransferDescription(s),g=this.getTransferDescription(a);if(!n)return(e==="send"||e==="receive")&&o?(d=L.getTruncateString({string:i==null?void 0:i.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),g=L.getTruncateString({string:i==null?void 0:i.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[d,g]):[i.metadata.status];if(r)return t.map(z=>this.getTransferDescription(z));let w="";return G1.includes(e)?w="+":q1.includes(e)&&(w="-"),d=w.concat(d),[d]},getTransferDescription(i){var t;let e="";return i&&(i!=null&&i.nft_info?e=((t=i==null?void 0:i.nft_info)==null?void 0:t.name)||"-":i!=null&&i.fungible_info&&(e=this.getFungibleTransferDescription(i)||"-")),e},getFungibleTransferDescription(i){var n;return i?[this.getQuantityFixedValue(i==null?void 0:i.quantity.numeric),(n=i==null?void 0:i.fungible_info)==null?void 0:n.symbol].join(" ").trim():null},getQuantityFixedValue(i){return i?parseFloat(i).toFixed(Z1):null}},Y1=Object.freeze(Object.defineProperty({__proto__:null,MathUtil:Vo,TransactionUtil:Vt,UiHelperUtil:L,get WuiAccountButton(){return Ne},get WuiAllWalletsImage(){return sn},get WuiAvatar(){return Ai},get WuiBalance(){return xo},get WuiBanner(){return _o},get WuiButton(){return je},get WuiCard(){return Gn},get WuiCardSelect(){return wt},get WuiCardSelectLoader(){return an},get WuiChip(){return gt},get WuiChipButton(){return Ot},get WuiCompatibleNetwork(){return Co},get WuiConnectButton(){return ho},get WuiCtaButton(){return Ti},get WuiDetailsGroup(){return Yn},get WuiDetailsGroupItem(){return ln},get WuiEmailInput(){return Si},get WuiFlex(){return _e},get WuiGrid(){return Ie},get WuiIcon(){return Ci},get WuiIconBox(){return Ye},get WuiIconLink(){return Xt},get WuiImage(){return _i},get WuiInputAmount(){return Di},get WuiInputElement(){return cn},get WuiInputNumeric(){return fo},get WuiInputText(){return it},get WuiLink(){return wo},get WuiListAccordion(){return yo},get WuiListContent(){return Ni},get WuiListDescription(){return rt},get WuiListItem(){return Be},get WuiListNetwork(){return Jt},get WuiListToken(){return bt},get WuiListWallet(){return Le},get WuiListWalletTransaction(){return It},get WuiLoadingHexagon(){return qn},get WuiLoadingSpinner(){return uo},get WuiLoadingThumbnail(){return rn},get WuiLogo(){return un},get WuiLogoSelect(){return mo},get WuiNetworkButton(){return ki},get WuiNetworkImage(){return Kt},get WuiNoticeCard(){return Oi},get WuiOnRampActivityItem(){return Ee},get WuiOnRampProviderItem(){return nt},get WuiOtp(){return Ri},get WuiPreviewItem(){return ei},get WuiProfileButton(){return Pt},get WuiPromo(){return dn},get WuiQrCode(){return vt},get WuiSearchBar(){return Qn},get WuiSeparator(){return pn},get WuiShimmer(){return Ei},get WuiSnackbar(){return Qt},get WuiTabs(){return ot},get WuiTag(){return go},get WuiText(){return $i},get WuiTokenButton(){return vo},get WuiTokenListItem(){return Rt},get WuiTooltip(){return Ii},get WuiTooltipSelect(){return bo},get WuiTransactionListItem(){return De},get WuiTransactionListItemLoader(){return Xn},get WuiTransactionVisual(){return mt},get WuiVisual(){return po},get WuiVisualThumbnail(){return Pi},get WuiWalletImage(){return ft},convertInputMaskBottomSvg:Ll,convertInputMaskTopSvg:Ml,customElement:f,initializeTheming:Ul,setColorTheme:Is,setThemeVariables:Wl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hn=globalThis,Ys=Hn.ShadowRoot&&(Hn.ShadyCSS===void 0||Hn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ks=Symbol(),ka=new WeakMap;let Jl=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ks)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ys&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ka.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ka.set(t,e))}return e}toString(){return this.cssText}};const K1=i=>new Jl(typeof i=="string"?i:i+"",void 0,Ks),W=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Jl(t,i,Ks)},X1=(i,e)=>{if(Ys)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=Hn.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},Ra=Ys?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return K1(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Q1,defineProperty:J1,getOwnPropertyDescriptor:ep,getOwnPropertyNames:tp,getOwnPropertySymbols:ip,getPrototypeOf:op}=Object,qt=globalThis,Ia=qt.trustedTypes,np=Ia?Ia.emptyScript:"",is=qt.reactiveElementPolyfillSupport,Xo=(i,e)=>i,Jn={toAttribute(i,e){switch(e){case Boolean:i=i?np:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Xs=(i,e)=>!Q1(i,e),Pa={attribute:!0,type:String,converter:Jn,reflect:!1,hasChanged:Xs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qt.litPropertyMetadata??(qt.litPropertyMetadata=new WeakMap);let oo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Pa){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&J1(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:o}=ep(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const a=r==null?void 0:r.call(this);o.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pa}static _$Ei(){if(this.hasOwnProperty(Xo("elementProperties")))return;const e=op(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xo("properties"))){const t=this.properties,n=[...tp(t),...ip(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Ra(r))}else e!==void 0&&t.push(Ra(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return X1(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var o;const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Jn).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var o;const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Jn;this._$Em=r,this[r]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Xs)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};oo.elementStyles=[],oo.shadowRootOptions={mode:"open"},oo[Xo("elementProperties")]=new Map,oo[Xo("finalized")]=new Map,is==null||is({ReactiveElement:oo}),(qt.reactiveElementVersions??(qt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=globalThis,er=Qo.trustedTypes,Oa=er?er.createPolicy("lit-html",{createHTML:i=>i}):void 0,ec="$lit$",zt=`lit$${Math.random().toFixed(9).slice(2)}$`,tc="?"+zt,rp=`<${tc}>`,Li=document,hn=()=>Li.createComment(""),fn=i=>i===null||typeof i!="object"&&typeof i!="function",ic=Array.isArray,sp=i=>ic(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",os=`[ 	
\f\r]`,Bo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Na=/-->/g,Da=/>/g,hi=RegExp(`>|${os}(?:([^\\s"'>=/]+)(${os}*=${os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),La=/'/g,Ma=/"/g,oc=/^(?:script|style|textarea|title)$/i,ap=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),u=ap(1),Eo=Symbol.for("lit-noChange"),ne=Symbol.for("lit-nothing"),Ua=new WeakMap,gi=Li.createTreeWalker(Li,129);function nc(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oa!==void 0?Oa.createHTML(e):e}const lp=(i,e)=>{const t=i.length-1,n=[];let r,o=e===2?"<svg>":"",s=Bo;for(let a=0;a<t;a++){const d=i[a];let g,w,v=-1,C=0;for(;C<d.length&&(s.lastIndex=C,w=s.exec(d),w!==null);)C=s.lastIndex,s===Bo?w[1]==="!--"?s=Na:w[1]!==void 0?s=Da:w[2]!==void 0?(oc.test(w[2])&&(r=RegExp("</"+w[2],"g")),s=hi):w[3]!==void 0&&(s=hi):s===hi?w[0]===">"?(s=r??Bo,v=-1):w[1]===void 0?v=-2:(v=s.lastIndex-w[2].length,g=w[1],s=w[3]===void 0?hi:w[3]==='"'?Ma:La):s===Ma||s===La?s=hi:s===Na||s===Da?s=Bo:(s=hi,r=void 0);const I=s===hi&&i[a+1].startsWith("/>")?" ":"";o+=s===Bo?d+rp:v>=0?(n.push(g),d.slice(0,v)+ec+d.slice(v)+zt+I):d+zt+(v===-2?a:I)}return[nc(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let fs=class rc{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0;const a=e.length-1,d=this.parts,[g,w]=lp(e,t);if(this.el=rc.createElement(g,n),gi.currentNode=this.el.content,t===2){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=gi.nextNode())!==null&&d.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(ec)){const C=w[s++],I=r.getAttribute(v).split(zt),z=/([.?@])?(.*)/.exec(C);d.push({type:1,index:o,name:z[2],strings:I,ctor:z[1]==="."?up:z[1]==="?"?dp:z[1]==="@"?pp:Lr}),r.removeAttribute(v)}else v.startsWith(zt)&&(d.push({type:6,index:o}),r.removeAttribute(v));if(oc.test(r.tagName)){const v=r.textContent.split(zt),C=v.length-1;if(C>0){r.textContent=er?er.emptyScript:"";for(let I=0;I<C;I++)r.append(v[I],hn()),gi.nextNode(),d.push({type:2,index:++o});r.append(v[C],hn())}}}else if(r.nodeType===8)if(r.data===tc)d.push({type:2,index:o});else{let v=-1;for(;(v=r.data.indexOf(zt,v+1))!==-1;)d.push({type:7,index:o}),v+=zt.length-1}o++}}static createElement(e,t){const n=Li.createElement("template");return n.innerHTML=e,n}};function $o(i,e,t=i,n){var s,a;if(e===Eo)return e;let r=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl;const o=fn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=r:t._$Cl=r),r!==void 0&&(e=$o(i,r._$AS(i,e.values),r,n)),e}let cp=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??Li).importNode(t,!0);gi.currentNode=r;let o=gi.nextNode(),s=0,a=0,d=n[0];for(;d!==void 0;){if(s===d.index){let g;d.type===2?g=new Qs(o,o.nextSibling,this,e):d.type===1?g=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(g=new hp(o,this,e)),this._$AV.push(g),d=n[++a]}s!==(d==null?void 0:d.index)&&(o=gi.nextNode(),s++)}return gi.currentNode=Li,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Qs=class sc{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=ne,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$o(this,e,t),fn(e)?e===ne||e==null||e===""?(this._$AH!==ne&&this._$AR(),this._$AH=ne):e!==this._$AH&&e!==Eo&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):sp(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ne&&fn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Li.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=fs.createElement(nc(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const s=new cp(r,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Ua.get(e.strings);return t===void 0&&Ua.set(e.strings,t=new fs(e)),t}k(e){ic(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new sc(this.S(hn()),this.S(hn()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Lr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=ne,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ne}_$AI(e,t=this,n,r){const o=this.strings;let s=!1;if(o===void 0)e=$o(this,e,t,0),s=!fn(e)||e!==this._$AH&&e!==Eo,s&&(this._$AH=e);else{const a=e;let d,g;for(e=o[0],d=0;d<o.length-1;d++)g=$o(this,a[n+d],t,d),g===Eo&&(g=this._$AH[d]),s||(s=!fn(g)||g!==this._$AH[d]),g===ne?e=ne:e!==ne&&(e+=(g??"")+o[d+1]),this._$AH[d]=g}s&&!r&&this.j(e)}j(e){e===ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},up=class extends Lr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ne?void 0:e}},dp=class extends Lr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ne)}},pp=class extends Lr{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=$o(this,e,t,0)??ne)===Eo)return;const n=this._$AH,r=e===ne&&n!==ne||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==ne&&(n===ne||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},hp=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$o(this,e)}};const ns=Qo.litHtmlPolyfillSupport;ns==null||ns(fs,Qs),(Qo.litHtmlVersions??(Qo.litHtmlVersions=[])).push("3.1.3");const fp=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let r=n._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new Qs(e.insertBefore(hn(),o),o,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends oo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Eo}};var Cl;T._$litElement$=!0,T.finalized=!0,(Cl=globalThis.litElementHydrateSupport)==null||Cl.call(globalThis,{LitElement:T});const rs=globalThis.litElementPolyfillSupport;rs==null||rs({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wp={attribute:!0,type:String,converter:Jn,reflect:!1,hasChanged:Xs},gp=(i=wp,e,t)=>{const{kind:n,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(t.name,i),n==="accessor"){const{name:s}=t;return{set(a){const d=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,d,i)},init(a){return a!==void 0&&this.P(s,void 0,i),a}}}if(n==="setter"){const{name:s}=t;return function(a){const d=this[s];e.call(this,a),this.requestUpdate(s,d,i)}}throw Error("Unsupported decorator location: "+n)};function N(i){return(e,t)=>typeof t=="object"?gp(i,e,t):((n,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(r,o):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(i){return N({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=i=>i??ne;var Je=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ze=class extends T{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=_.state.address,this.balanceVal=_.state.balance,this.balanceSymbol=_.state.balanceSymbol,this.profileName=_.state.profileName,this.profileImage=_.state.profileImage,this.network=k.state.caipNetwork,this.isUnsupportedChain=k.state.isUnsupportedChain,this.unsubscribe.push(_.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),k.subscribeKey("caipNetwork",e=>this.network=e),k.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Q.getNetworkImage(this.network),t=this.balance==="show";return u`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${M(this.address)}
        profileName=${M(this.profileName)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${M(e)}
        avatarSrc=${M(this.profileImage)}
        balance=${t?$.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?H.open({view:"UnsupportedChain"}):H.open()}};Je([N({type:Boolean})],ze.prototype,"disabled",void 0);Je([N()],ze.prototype,"balance",void 0);Je([N()],ze.prototype,"charsStart",void 0);Je([N()],ze.prototype,"charsEnd",void 0);Je([p()],ze.prototype,"address",void 0);Je([p()],ze.prototype,"balanceVal",void 0);Je([p()],ze.prototype,"balanceSymbol",void 0);Je([p()],ze.prototype,"profileName",void 0);Je([p()],ze.prototype,"profileImage",void 0);Je([p()],ze.prototype,"network",void 0);Je([p()],ze.prototype,"isUnsupportedChain",void 0);ze=Je([f("w3m-account-button")],ze);const mp=W`
  :host {
    display: block;
    width: max-content;
  }
`;var Ut=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let st=class extends T{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=_.state.isConnected,this.unsubscribe.push(_.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?u`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${M(this.balance)}
            .charsStart=${M(this.charsStart)}
            .charsEnd=${M(this.charsEnd)}
          >
          </w3m-account-button>
        `:u`
          <w3m-connect-button
            size=${M(this.size)}
            label=${M(this.label)}
            loadingLabel=${M(this.loadingLabel)}
          ></w3m-connect-button>
        `}};st.styles=mp;Ut([N({type:Boolean})],st.prototype,"disabled",void 0);Ut([N()],st.prototype,"balance",void 0);Ut([N()],st.prototype,"size",void 0);Ut([N()],st.prototype,"label",void 0);Ut([N()],st.prototype,"loadingLabel",void 0);Ut([N()],st.prototype,"charsStart",void 0);Ut([N()],st.prototype,"charsEnd",void 0);Ut([p()],st.prototype,"isAccount",void 0);st=Ut([f("w3m-button")],st);var Lo=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Mi=class extends T{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=H.state.open,this.loading=H.state.loading,this.unsubscribe.push(H.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return u`
      <wui-connect-button
        size=${M(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?H.close():this.loading||H.open()}};Lo([N()],Mi.prototype,"size",void 0);Lo([N()],Mi.prototype,"label",void 0);Lo([N()],Mi.prototype,"loadingLabel",void 0);Lo([p()],Mi.prototype,"open",void 0);Lo([p()],Mi.prototype,"loading",void 0);Mi=Lo([f("w3m-connect-button")],Mi);const vp=W`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Mr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Wa="scroll-lock";let Ui=class extends T{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=H.state.open,this.caipAddress=_.state.caipAddress,this.isSiweEnabled=R.state.isSiweEnabled,this.initializeTheming(),U.prefetch(),this.unsubscribe.push(H.subscribeKey("open",e=>e?this.onOpen():this.onClose()),_.subscribe(e=>this.onNewAccountState(e))),O.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?u`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await ro(()=>Promise.resolve().then(()=>br),void 0);e.state.status!=="success"&&await B.disconnect()}H.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=ue.state,n=L.getColorTheme(t);Ul(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,F.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Wa,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Wa}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",n=>{if(n.key==="Escape")this.handleClose();else if(n.key==="Tab"){const{tagName:r}=n.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:n}=e;if(this.isSiweEnabled){const{SIWEController:r}=await ro(()=>Promise.resolve().then(()=>br),void 0);t&&!this.caipAddress&&(this.caipAddress=n),t&&n&&this.caipAddress!==n&&(await r.signOut(),this.onSiweNavigation(),this.caipAddress=n);try{const o=await r.getSession();o&&!t?await r.signOut():t&&!o&&this.onSiweNavigation()}catch{t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?m.push("ConnectingSiwe"):H.open({view:"ConnectingSiwe"})}};Ui.styles=vp;Mr([p()],Ui.prototype,"open",void 0);Mr([p()],Ui.prototype,"caipAddress",void 0);Mr([p()],Ui.prototype,"isSiweEnabled",void 0);Ui=Mr([f("w3m-modal")],Ui);const bp=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Ui}},Symbol.toStringTag,{value:"Module"})),yp=W`
  :host {
    display: block;
    width: max-content;
  }
`;var Mo=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ti=class extends T{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=k.state.caipNetwork,this.connected=_.state.isConnected,this.loading=H.state.loading,this.isUnsupportedChain=k.state.isUnsupportedChain,this.unsubscribe.push(k.subscribeKey("caipNetwork",e=>this.network=e),_.subscribeKey("isConnected",e=>this.connected=e),H.subscribeKey("loading",e=>this.loading=e),k.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return u`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${M(Q.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(O.sendEvent({type:"track",event:"CLICK_NETWORKS"}),H.open({view:"Networks"}))}};ti.styles=yp;Mo([N({type:Boolean})],ti.prototype,"disabled",void 0);Mo([p()],ti.prototype,"network",void 0);Mo([p()],ti.prototype,"connected",void 0);Mo([p()],ti.prototype,"loading",void 0);Mo([p()],ti.prototype,"isUnsupportedChain",void 0);ti=Mo([f("w3m-network-button")],ti);const xp=W`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var ac=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let tr=class extends T{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=m.state.view,this.unsubscribe.push(m.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return u`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return u`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return u`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return u`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return u`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return u`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return u`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return u`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return u`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return u`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return u`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return u`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return u`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return u`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return u`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return u`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return u`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return u`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return u`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return u`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return u`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return u`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return u`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return u`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return u`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return u`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return u`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return u`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return u`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return u`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return u`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return u`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"Convert":return u`<w3m-convert-view></w3m-convert-view>`;case"ConvertSelectToken":return u`<w3m-convert-select-token-view></w3m-convert-select-token-view>`;case"ConvertPreview":return u`<w3m-convert-preview-view></w3m-convert-preview-view>`;case"WalletSend":return u`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return u`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return u`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;default:return u`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:t}=m.state;let n=-10,r=10;t.length<this.prevHistoryLength&&(n=10,r=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${r}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};tr.styles=xp;ac([p()],tr.prototype,"view",void 0);tr=ac([f("w3m-router")],tr);const Cp=W`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var ai=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const _p={USD:"$",EUR:"€",GBP:"£"},Ep=[100,250,500,1e3];let yt=class extends T{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=_.state.isConnected,this.loading=H.state.loading,this.paymentCurrency=K.state.paymentCurrency,this.paymentAmount=K.state.paymentAmount,this.purchaseAmount=K.state.purchaseAmount,this.quoteLoading=K.state.quotesLoading,this.unsubscribe.push(_.subscribeKey("isConnected",e=>{this.connected=e}),H.subscribeKey("loading",e=>{this.loading=e}),K.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Ep.map(e=>{var t;return u`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${_p[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?u`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:u`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||H.open({view:"OnRampProviders"})}openModal(){H.open({view:"Connect"})}async onPaymentAmountChange(e){K.setPaymentAmount(Number(e.detail)),await K.getQuote()}async selectPresetAmount(e){K.setPaymentAmount(e),await K.getQuote()}};yt.styles=Cp;ai([N({type:Boolean})],yt.prototype,"disabled",void 0);ai([p()],yt.prototype,"connected",void 0);ai([p()],yt.prototype,"loading",void 0);ai([p()],yt.prototype,"paymentCurrency",void 0);ai([p()],yt.prototype,"paymentAmount",void 0);ai([p()],yt.prototype,"purchaseAmount",void 0);ai([p()],yt.prototype,"quoteLoading",void 0);yt=ai([f("w3m-onramp-widget")],yt);const $p=W`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var _l;typeof window<"u"&&(window.Buffer||(window.Buffer=Qc.Buffer),window.global||(window.global=window),window.process||(window.process={}),(_l=window.process)!=null&&_l.env||(window.process={env:{}}));var Ap={};const Tp=Ap.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",x={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},Re={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},ye=l.object({message:l.string()});function D(i){return l.literal(x[i])}l.object({accessList:l.array(l.string()),blockHash:l.string().nullable(),blockNumber:l.string().nullable(),chainId:l.string(),from:l.string(),gas:l.string(),hash:l.string(),input:l.string().nullable(),maxFeePerGas:l.string(),maxPriorityFeePerGas:l.string(),nonce:l.string(),r:l.string(),s:l.string(),to:l.string(),transactionIndex:l.string().nullable(),type:l.string(),v:l.string(),value:l.string()});const Sp=l.object({chainId:l.number()}),kp=l.object({email:l.string().email()}),Rp=l.object({otp:l.string()}),Ip=l.object({chainId:l.optional(l.number()),preferredAccountType:l.optional(l.string())}),Pp=l.object({email:l.string().email()}),Op=l.object({otp:l.string()}),Np=l.object({otp:l.string()}),Dp=l.object({themeMode:l.optional(l.enum(["light","dark"])),themeVariables:l.optional(l.record(l.string(),l.string().or(l.number())))}),Lp=l.object({metadata:l.object({name:l.string(),description:l.string(),url:l.string(),icons:l.array(l.string())}).optional(),sdkVersion:l.string(),projectId:l.string()}),Mp=l.object({type:l.string()}),Up=l.object({action:l.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),Wp=l.object({action:l.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),jp=l.object({email:l.string().email(),address:l.string(),chainId:l.number(),smartAccountDeployed:l.optional(l.boolean()),preferredAccountType:l.optional(l.string())}),Bp=l.object({isConnected:l.boolean()}),zp=l.object({chainId:l.number()}),Hp=l.object({chainId:l.number()}),Vp=l.object({newEmail:l.string().email()}),Fp=l.object({smartAccountEnabledNetworks:l.array(l.number())});l.object({address:l.string(),isDeployed:l.boolean()});const Zp=l.object({type:l.string(),address:l.string()}),Gp=l.any(),qp=l.object({method:l.literal("eth_accounts")}),Yp=l.object({method:l.literal("eth_blockNumber")}),Kp=l.object({method:l.literal("eth_call"),params:l.array(l.any())}),Xp=l.object({method:l.literal("eth_chainId")}),Qp=l.object({method:l.literal("eth_estimateGas"),params:l.array(l.any())}),Jp=l.object({method:l.literal("eth_feeHistory"),params:l.array(l.any())}),eh=l.object({method:l.literal("eth_gasPrice")}),th=l.object({method:l.literal("eth_getAccount"),params:l.array(l.any())}),ih=l.object({method:l.literal("eth_getBalance"),params:l.array(l.any())}),oh=l.object({method:l.literal("eth_getBlockByHash"),params:l.array(l.any())}),nh=l.object({method:l.literal("eth_getBlockByNumber"),params:l.array(l.any())}),rh=l.object({method:l.literal("eth_getBlockReceipts"),params:l.array(l.any())}),sh=l.object({method:l.literal("eth_getBlockTransactionCountByHash"),params:l.array(l.any())}),ah=l.object({method:l.literal("eth_getBlockTransactionCountByNumber"),params:l.array(l.any())}),lh=l.object({method:l.literal("eth_getCode"),params:l.array(l.any())}),ch=l.object({method:l.literal("eth_getFilterChanges"),params:l.array(l.any())}),uh=l.object({method:l.literal("eth_getFilterLogs"),params:l.array(l.any())}),dh=l.object({method:l.literal("eth_getLogs"),params:l.array(l.any())}),ph=l.object({method:l.literal("eth_getProof"),params:l.array(l.any())}),hh=l.object({method:l.literal("eth_getStorageAt"),params:l.array(l.any())}),fh=l.object({method:l.literal("eth_getTransactionByBlockHashAndIndex"),params:l.array(l.any())}),wh=l.object({method:l.literal("eth_getTransactionByBlockNumberAndIndex"),params:l.array(l.any())}),gh=l.object({method:l.literal("eth_getTransactionByHash"),params:l.array(l.any())}),mh=l.object({method:l.literal("eth_getTransactionCount"),params:l.array(l.any())}),vh=l.object({method:l.literal("eth_getTransactionReceipt"),params:l.array(l.any())}),bh=l.object({method:l.literal("eth_getUncleCountByBlockHash"),params:l.array(l.any())}),yh=l.object({method:l.literal("eth_getUncleCountByBlockNumber"),params:l.array(l.any())}),xh=l.object({method:l.literal("eth_maxPriorityFeePerGas")}),Ch=l.object({method:l.literal("eth_newBlockFilter")}),_h=l.object({method:l.literal("eth_newFilter"),params:l.array(l.any())}),Eh=l.object({method:l.literal("eth_newPendingTransactionFilter")}),$h=l.object({method:l.literal("eth_sendRawTransaction"),params:l.array(l.any())}),Ah=l.object({method:l.literal("eth_syncing"),params:l.array(l.any())}),Th=l.object({method:l.literal("eth_uninstallFilter"),params:l.array(l.any())}),ja=l.object({method:l.literal("personal_sign"),params:l.array(l.any())}),Sh=l.object({method:l.literal("eth_signTypedData_v4"),params:l.array(l.any())}),Ba=l.object({method:l.literal("eth_sendTransaction"),params:l.array(l.any())}),za=l.object({token:l.string()}),Wn={appEvent:l.object({type:D("APP_SWITCH_NETWORK"),payload:Sp}).or(l.object({type:D("APP_CONNECT_EMAIL"),payload:kp})).or(l.object({type:D("APP_CONNECT_DEVICE")})).or(l.object({type:D("APP_CONNECT_OTP"),payload:Rp})).or(l.object({type:D("APP_GET_USER"),payload:l.optional(Ip)})).or(l.object({type:D("APP_SIGN_OUT")})).or(l.object({type:D("APP_IS_CONNECTED"),payload:l.optional(za)})).or(l.object({type:D("APP_GET_CHAIN_ID")})).or(l.object({type:D("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(l.object({type:D("APP_INIT_SMART_ACCOUNT")})).or(l.object({type:D("APP_SET_PREFERRED_ACCOUNT"),payload:Mp})).or(l.object({type:D("APP_RPC_REQUEST"),payload:ja.or(Ba).or(qp).or(Yp).or(Kp).or(Xp).or(Qp).or(Jp).or(eh).or(th).or(ih).or(oh).or(nh).or(rh).or(sh).or(ah).or(lh).or(ch).or(uh).or(dh).or(ph).or(hh).or(fh).or(wh).or(gh).or(mh).or(vh).or(bh).or(yh).or(xh).or(Ch).or(_h).or(Eh).or($h).or(Ah).or(Th).or(ja).or(Sh).or(Ba)})).or(l.object({type:D("APP_UPDATE_EMAIL"),payload:Pp})).or(l.object({type:D("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:Op})).or(l.object({type:D("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:Np})).or(l.object({type:D("APP_SYNC_THEME"),payload:Dp})).or(l.object({type:D("APP_SYNC_DAPP_DATA"),payload:Lp})),frameEvent:l.object({type:D("FRAME_SWITCH_NETWORK_ERROR"),payload:ye}).or(l.object({type:D("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Hp})).or(l.object({type:D("FRAME_CONNECT_EMAIL_ERROR"),payload:ye})).or(l.object({type:D("FRAME_CONNECT_EMAIL_SUCCESS"),payload:Up})).or(l.object({type:D("FRAME_CONNECT_OTP_ERROR"),payload:ye})).or(l.object({type:D("FRAME_CONNECT_OTP_SUCCESS")})).or(l.object({type:D("FRAME_CONNECT_DEVICE_ERROR"),payload:ye})).or(l.object({type:D("FRAME_CONNECT_DEVICE_SUCCESS")})).or(l.object({type:D("FRAME_GET_USER_ERROR"),payload:ye})).or(l.object({type:D("FRAME_GET_USER_SUCCESS"),payload:jp})).or(l.object({type:D("FRAME_SIGN_OUT_ERROR"),payload:ye})).or(l.object({type:D("FRAME_SIGN_OUT_SUCCESS")})).or(l.object({type:D("FRAME_IS_CONNECTED_ERROR"),payload:ye})).or(l.object({type:D("FRAME_IS_CONNECTED_SUCCESS"),payload:Bp})).or(l.object({type:D("FRAME_GET_CHAIN_ID_ERROR"),payload:ye})).or(l.object({type:D("FRAME_GET_CHAIN_ID_SUCCESS"),payload:zp})).or(l.object({type:D("FRAME_RPC_REQUEST_ERROR"),payload:ye})).or(l.object({type:D("FRAME_RPC_REQUEST_SUCCESS"),payload:Gp})).or(l.object({type:D("FRAME_SESSION_UPDATE"),payload:za})).or(l.object({type:D("FRAME_UPDATE_EMAIL_ERROR"),payload:ye})).or(l.object({type:D("FRAME_UPDATE_EMAIL_SUCCESS"),payload:Wp})).or(l.object({type:D("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:ye})).or(l.object({type:D("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(l.object({type:D("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:ye})).or(l.object({type:D("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:Vp})).or(l.object({type:D("FRAME_SYNC_THEME_ERROR"),payload:ye})).or(l.object({type:D("FRAME_SYNC_THEME_SUCCESS")})).or(l.object({type:D("FRAME_SYNC_DAPP_DATA_ERROR"),payload:ye})).or(l.object({type:D("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(l.object({type:D("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:Fp})).or(l.object({type:D("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:ye})).or(l.object({type:D("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:ye})).or(l.object({type:D("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:Zp})).or(l.object({type:D("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:ye}))},Oe={set(i,e){pe.isClient&&localStorage.setItem(`${x.STORAGE_KEY}${i}`,e)},get(i){return pe.isClient?localStorage.getItem(`${x.STORAGE_KEY}${i}`):null},delete(i){pe.isClient&&localStorage.removeItem(`${x.STORAGE_KEY}${i}`)}},Ha={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[A-Fa-f0-9]{130})$/u},kh=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],jn=30*1e3,pe={getBlockchainApiUrl(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return kh.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const i=Oe.get(x.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<jn){const t=Math.ceil((jn-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const i=Oe.get(x.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<jn)return Math.ceil((jn-e)/1e3)}return 0},checkIfRequestExists(i){const e=this.getRequestMethod(i);return Re.NOT_SAFE_RPC_METHODS.includes(e)||Re.SAFE_RPC_METHODS.includes(e)},getRequestMethod(i){var e;return(e=i==null?void 0:i.payload)==null?void 0:e.method},getResponseType(i){const{type:e,payload:t}=i;return e===x.FRAME_RPC_REQUEST_ERROR?x.RPC_RESPONSE_TYPE_ERROR:typeof t=="string"&&(t.match(Ha.transactionHash)||t.match(Ha.signedMessage))?x.RPC_RESPONSE_TYPE_TX:x.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsAllowed(i){const e=this.getRequestMethod(i);return Re.SAFE_RPC_METHODS.includes(e)},isClient:typeof window<"u"};class Rh{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=pe.getBlockchainApiUrl(),this.events={onFrameEvent:n=>{pe.isClient&&window.addEventListener("message",({data:r})=>{var s;if(!((s=r.type)!=null&&s.includes(x.FRAME_EVENT_KEY)))return;const o=Wn.frameEvent.parse(r);n(o)})},onAppEvent:n=>{pe.isClient&&window.addEventListener("message",({data:r})=>{var s;if(!((s=r.type)!=null&&s.includes(x.APP_EVENT_KEY)))return;const o=Wn.appEvent.parse(r);n(o)})},postAppEvent:n=>{var r;if(pe.isClient){if(!((r=this.iframe)!=null&&r.contentWindow))throw new Error("W3mFrame: iframe is not set");Wn.appEvent.parse(n),window.postMessage(n),this.iframe.contentWindow.postMessage(n,"*")}},postFrameEvent:n=>{if(pe.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");Wn.frameEvent.parse(n),parent.postMessage(n,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((n,r)=>{this.frameLoadPromiseResolver={resolve:n,reject:r}}),t&&(this.frameLoadPromise=new Promise((n,r)=>{this.frameLoadPromiseResolver={resolve:n,reject:r}}),pe.isClient)){const n=document.createElement("iframe");n.id="w3m-iframe",n.src=`${Tp}?projectId=${e}`,n.style.position="fixed",n.style.zIndex="999999",n.style.display="none",n.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",n.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",n.style.opacity="0",n.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",n.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(n),this.iframe=n,this.iframe.onload=()=>{var r;(r=this.frameLoadPromiseResolver)==null||r.resolve(void 0)},this.iframe.onerror=()=>{var r;(r=this.frameLoadPromiseResolver)==null||r.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(t=>({[t]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${t}&projectId=${this.projectId}`,chainId:t}}));return Object.assign({},...e)}}class Ih{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new Rh(e,!0),this.w3mFrame.events.onFrameEvent(t=>{switch(console.log("💻 received",t),t.type){case x.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(t);case x.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(t);case x.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case x.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(t);case x.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case x.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(t);case x.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(t);case x.FRAME_GET_USER_ERROR:return this.onConnectError(t);case x.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(t);case x.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(t);case x.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(t);case x.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(t);case x.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case x.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(t);case x.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(t);case x.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(t);case x.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(t);case x.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(t);case x.FRAME_SESSION_UPDATE:return this.onSessionUpdate(t);case x.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess(t);case x.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(t);case x.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case x.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(t);case x.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(t);case x.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(t);case x.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case x.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(t);case x.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case x.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(t);case x.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(t);case x.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(t);case x.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onSetPreferredAccountSuccess();case x.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onSetPreferredAccountError();default:return null}})}getLoginEmailUsed(){return!!Oe.get(x.EMAIL_LOGIN_USED_KEY)}getEmail(){return Oe.get(x.EMAIL)}rejectRpcRequest(){var e;(e=this.rpcRequestResolver)==null||e.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,pe.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:x.APP_CONNECT_EMAIL,payload:e}),new Promise((t,n)=>{this.connectEmailResolver={resolve:t,reject:n}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_CONNECT_OTP,payload:e}),new Promise((t,n)=>{this.connectOtpResolver={resolve:t,reject:n}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,pe.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:x.APP_UPDATE_EMAIL,payload:e}),new Promise((t,n)=>{this.updateEmailResolver={resolve:t,reject:n}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((t,n)=>{this.updateEmailPrimaryOtpResolver={resolve:t,reject:n}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((t,n)=>{this.updateEmailSecondaryOtpResolver={resolve:t,reject:n}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_SYNC_THEME,payload:e}),new Promise((t,n)=>{this.syncThemeResolver={resolve:t,reject:n}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_SYNC_DAPP_DATA,payload:e}),new Promise((t,n)=>{this.syncDappDataResolver={resolve:t,reject:n}})}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}})}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((t,n)=>{this.setPreferredAccountResolver={resolve:t,reject:n}})}async connect(e){const t=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_GET_USER,payload:{chainId:t}}),new Promise((n,r)=>{this.connectResolver={resolve:n,reject:r}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((t,n)=>{this.switchChainResolver={resolve:t,reject:n}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:x.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return await this.w3mFrame.frameLoadPromise,Re.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:x.APP_RPC_REQUEST,payload:e}),new Promise((t,n)=>{this.rpcRequestResolver={resolve:t,reject:n}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(x.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(x.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===x.FRAME_GET_USER_SUCCESS&&e(t.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===x.FRAME_IS_CONNECTED_ERROR&&e(),t.type===x.FRAME_IS_CONNECTED_SUCCESS&&!t.payload.isConnected&&e()})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===x.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===x.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:Re.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===x.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===x.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}onConnectEmailSuccess(e){var t;(t=this.connectEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var t;(t=this.connectEmailResolver)==null||t.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var t;(t=this.connectDeviceResolver)==null||t.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var t;(t=this.connectOtpResolver)==null||t.reject(e.payload.message)}onConnectSuccess(e){var t;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(t=this.connectResolver)==null||t.resolve(e.payload)}onConnectError(e){var t;(t=this.connectResolver)==null||t.reject(e.payload.message)}onIsConnectedSuccess(e){var t;e.payload.isConnected||this.deleteEmailLoginCache(),(t=this.isConnectedResolver)==null||t.resolve(e.payload)}onIsConnectedError(e){var t;(t=this.isConnectedResolver)==null||t.reject(e.payload.message)}onGetChainIdSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.getChainIdResolver)==null||t.resolve(e.payload)}onGetChainIdError(e){var t;(t=this.getChainIdResolver)==null||t.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var t;(t=this.disconnectResolver)==null||t.reject(e.payload.message)}onSwitchChainSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.switchChainResolver)==null||t.resolve(e.payload)}onSwitchChainError(e){var t;(t=this.switchChainResolver)==null||t.reject(e.payload.message)}onRpcRequestSuccess(e){var t;(t=this.rpcRequestResolver)==null||t.resolve(e.payload)}onRpcRequestError(e){var t;(t=this.rpcRequestResolver)==null||t.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(e){var t;(t=this.updateEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var t;(t=this.updateEmailResolver)==null||t.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;(e=this.updateEmailPrimaryOtpResolver)==null||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var t;(t=this.updateEmailPrimaryOtpResolver)==null||t.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var n;const{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),(n=this.updateEmailSecondaryOtpResolver)==null||n.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){var t;(t=this.updateEmailSecondaryOtpResolver)==null||t.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var t;(t=this.syncThemeResolver)==null||t.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var t;(t=this.syncDappDataResolver)==null||t.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){var t;this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),(t=this.smartAccountEnabledNetworksResolver)==null||t.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){var t;this.persistSmartAccountEnabledNetworks([]),(t=this.smartAccountEnabledNetworksResolver)==null||t.reject(e.payload.message)}onSetPreferredAccountSuccess(){var e;(e=this.setPreferredAccountResolver)==null||e.resolve(void 0)}onSetPreferredAccountError(){var e;(e=this.setPreferredAccountResolver)==null||e.reject()}setNewLastEmailLoginTime(){Oe.set(x.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Oe.set(x.EMAIL,e),Oe.set(x.EMAIL_LOGIN_USED_KEY,"true"),Oe.delete(x.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Oe.delete(x.EMAIL_LOGIN_USED_KEY),Oe.delete(x.EMAIL),Oe.delete(x.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Oe.set(x.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(Oe.get(x.LAST_USED_CHAIN_KEY))}persistSmartAccountEnabledNetworks(e){Oe.set(x.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}var li=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let xt=class extends T{constructor(){super(),this.usubscribe=[],this.networkImages=fe.state.networkImages,this.address=_.state.address,this.profileImage=_.state.profileImage,this.profileName=_.state.profileName,this.network=k.state.caipNetwork,this.preferredAccountType=_.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(_.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):H.close()}),k.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t,n;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((t=this.network)==null?void 0:t.imageId)??""];return u`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${M(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?L.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):L.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${M(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((n=this.network)==null?void 0:n.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=k.state,t=e?e.length>1:!1,n=e==null?void 0:e.find(({id:r})=>{var o;return r===((o=this.network)==null?void 0:o.id)});return t||!n}onCopyAddress(){try{this.address&&($.copyToClopboard(this.address),F.showSuccess("Address copied"))}catch{F.showError("Failed to copy")}}emailBtnTemplate(){const e=re.getConnectedConnector(),t=q.getEmailConnector();if(!t||e!=="EMAIL")return null;const n=t.provider.getEmail()??"";return u`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){const e=k.checkIfSmartAccountEnabled(),t=re.getConnectedConnector();if(!q.getEmailConnector()||t!=="EMAIL"||!e)return null;const r=this.preferredAccountType===Re.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return u`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}async changePreferredAccountType(){const e=k.checkIfSmartAccountEnabled(),t=this.preferredAccountType===Re.ACCOUNT_TYPES.SMART_ACCOUNT||!e?Re.ACCOUNT_TYPES.EOA:Re.ACCOUNT_TYPES.SMART_ACCOUNT,n=q.getEmailConnector();n&&(this.loading=!0,await(n==null?void 0:n.provider.setPreferredAccount(t)),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){m.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&m.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await B.disconnect(),O.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),H.close()}catch{O.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),F.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};xt.styles=$p;li([p()],xt.prototype,"address",void 0);li([p()],xt.prototype,"profileImage",void 0);li([p()],xt.prototype,"profileName",void 0);li([p()],xt.prototype,"network",void 0);li([p()],xt.prototype,"preferredAccountType",void 0);li([p()],xt.prototype,"disconnecting",void 0);li([p()],xt.prototype,"loading",void 0);xt=li([f("w3m-account-settings-view")],xt);var Ph=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Va=class extends T{render(){const e=re.getConnectedConnector();return u`
      ${R.state.enableWalletFeatures&&e==="EMAIL"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return u`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return u`<w3m-account-default-widget></w3m-account-default-widget>`}};Va=Ph([f("w3m-account-view")],Va);var lc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ws=class extends T{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=$.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return u`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?u`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:u`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return $.isMobile()?u`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){m.push("ConnectingWalletConnect")}};lc([p()],ws.prototype,"search",void 0);ws=lc([f("w3m-all-wallets-view")],ws);const Oh=W`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var ut=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let He=class extends T{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=K.state.selectedProvider,this.uri=B.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(K.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var n,r;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(n=this.selectedOnRampProvider)==null?void 0:n.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return u`
      <wui-flex
        data-error=${M(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${M((r=this.selectedOnRampProvider)==null?void 0:r.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=_.state.address,t=R.state.projectId;if(!e)throw new Error("No address found");(await ke.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(o=>new Date(o.metadata.minedAt)>new Date(this.startTime)||o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),m.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){F.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,$.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?u`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=ue.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){F.showError("No link found"),m.goBack();return}try{$.copyToClopboard(this.selectedOnRampProvider.url),F.showSuccess("Link copied")}catch{F.showError("Failed to copy")}}};He.styles=Oh;ut([p()],He.prototype,"selectedOnRampProvider",void 0);ut([p()],He.prototype,"uri",void 0);ut([p()],He.prototype,"ready",void 0);ut([p()],He.prototype,"showRetry",void 0);ut([p()],He.prototype,"buffering",void 0);ut([p()],He.prototype,"error",void 0);ut([p()],He.prototype,"intervalId",void 0);ut([p()],He.prototype,"startTime",void 0);ut([N({type:Boolean})],He.prototype,"isMobile",void 0);ut([N()],He.prototype,"onRetry",void 0);He=ut([f("w3m-buy-in-progress-view")],He);const Nh=W`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,j={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.11"},kt={ConnectorExplorerIds:{[j.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[j.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[j.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[j.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[j.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[j.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[j.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[j.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[j.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[j.INJECTED_CONNECTOR_ID]:"Browser Wallet",[j.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[j.COINBASE_CONNECTOR_ID]:"Coinbase",[j.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[j.LEDGER_CONNECTOR_ID]:"Ledger",[j.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[j.INJECTED_CONNECTOR_ID]:"INJECTED",[j.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[j.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[j.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Dh={getCaipTokens(i){if(!i)return;const e={};return Object.entries(i).forEach(([t,n])=>{e[`${j.EIP155}:${t}`]=n}),e}};var Js=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let wn=class extends T{constructor(){super(),this.unsubscribe=[],this.connectors=q.state.connectors,this.count=U.state.count,this.unsubscribe.push(q.subscribeKey("connectors",e=>this.connectors=e),U.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if($.isMobile())return null;const e=this.connectors.find(t=>t.type==="WALLET_CONNECT");return e?u`
      <wui-list-wallet
        imageSrc=${M(Q.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=R.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(n=>u`
        <wui-list-wallet
          imageSrc=${M(Q.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          data-testid=${`wallet-selector-${n.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(r=>r.type==="WALLET_CONNECT"))return null;const{featured:t}=U.state;return t.length?this.filterOutDuplicateWallets(t).map(r=>u`
        <wui-list-wallet
          imageSrc=${M(Q.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return re.getRecentWallets().map(t=>u`
        <wui-list-wallet
          imageSrc=${M(Q.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:u`
        <wui-list-wallet
          imageSrc=${M(Q.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>e.type!=="INJECTED"||!B.checkInstalled()?null:u`
        <wui-list-wallet
          imageSrc=${M(Q.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}externalTemplate(){const e=q.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(j.CONNECTOR_RDNS_MAP[t.id])?null:u`
        <wui-list-wallet
          imageSrc=${M(Q.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(a=>a.type==="WALLET_CONNECT"),{allWallets:t}=R.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!$.isMobile())return null;const n=U.state.featured.length,r=this.count+n,o=r<10?r:Math.floor(r/10)*10,s=o<r?`${o}+`:`${o}`;return u`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(C=>C.type==="WALLET_CONNECT"))return null;const{recommended:t}=U.state,{customWallets:n,featuredWalletIds:r}=R.state,{connectors:o}=q.state,s=re.getRecentWallets(),d=o.filter(C=>C.type==="INJECTED").filter(C=>C.name!=="Browser Wallet");if(r||n||!t.length)return null;const g=d.length+s.length,w=Math.max(0,2-g);return this.filterOutDuplicateWallets(t).slice(0,w).map(C=>u`
        <wui-list-wallet
          imageSrc=${M(Q.getWalletImage(C))}
          name=${(C==null?void 0:C.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(C)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?$.isMobile()?m.push("AllWallets"):m.push("ConnectingWalletConnect"):m.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const t=re.getRecentWallets(),n=this.connectors.map(a=>{var d;return(d=a.info)==null?void 0:d.rdns}).filter(Boolean),r=t.map(a=>a.rdns).filter(Boolean),o=n.concat(r);return e.filter(a=>!o.includes(String(a==null?void 0:a.rdns)))}onAllWallets(){O.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),m.push("AllWallets")}onConnectWallet(e){m.push("ConnectingWalletConnect",{wallet:e})}};wn.styles=Nh;Js([p()],wn.prototype,"connectors",void 0);Js([p()],wn.prototype,"count",void 0);wn=Js([f("w3m-connect-view")],wn);const Lh=W`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Qi=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};class Ue extends T{constructor(){var e,t,n,r;super(),this.wallet=(e=m.state.data)==null?void 0:e.wallet,this.connector=(t=m.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Q.getWalletImage(this.wallet)??Q.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=B.state.wcUri,this.error=B.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(B.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),B.subscribeKey("wcError",o=>this.error=o),B.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),u`
      <wui-flex
        data-error=${M(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${M(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?u`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(B.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=ue.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&($.copyToClopboard(this.uri),F.showSuccess("Link copied"))}catch{F.showError("Failed to copy")}}}Ue.styles=Lh;Qi([p()],Ue.prototype,"uri",void 0);Qi([p()],Ue.prototype,"error",void 0);Qi([p()],Ue.prototype,"ready",void 0);Qi([p()],Ue.prototype,"showRetry",void 0);Qi([p()],Ue.prototype,"buffering",void 0);Qi([N({type:Boolean})],Ue.prototype,"isMobile",void 0);Qi([N()],Ue.prototype,"onRetry",void 0);var Mh=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Fa=class extends Ue{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&re.setConnectedWalletImageUrl(this.connector.imageUrl),await B.connectExternal(this.connector),R.state.isSiweEnabled?m.push("ConnectingSiwe"):H.close(),O.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){O.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Fa=Mh([f("w3m-connecting-external-view")],Fa);var ea=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ir=class extends T{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=m.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),ae.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),u`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):u`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=B.state;if(e||$.isPairingExpired(t)){if(B.connectWalletConnect(),this.wallet){const n=Q.getWalletImage(this.wallet);n&&re.setConnectedWalletImageUrl(n)}else{const r=q.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=Q.getConnectorImage(r);o&&re.setConnectedWalletImageUrl(o)}await B.state.wcPromise,this.finalizeConnection(),R.state.isSiweEnabled?m.push("ConnectingSiwe"):H.close()}}catch(t){O.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),B.setWcError(!0),$.isAllowedRetry(this.lastRetry)&&(F.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var n;const{wcLinking:e,recentWallet:t}=B.state;e&&re.setWalletConnectDeepLink(e),t&&re.setWeb3ModalRecent(t),O.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((n=this.wallet)==null?void 0:n.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:o}=this.wallet,s=r==null?void 0:r.map(({injected_id:z})=>z).filter(Boolean),a=o?[o]:s??[],d=a.length,g=e,w=n,v=B.checkInstalled(a),C=d&&v,I=t&&!$.isMobile();C&&this.platforms.push("browser"),g&&this.platforms.push($.isMobile()?"mobile":"qrcode"),w&&this.platforms.push("web"),I&&this.platforms.push("desktop"),!C&&d&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return u`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return u`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return u`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ea([p()],ir.prototype,"platform",void 0);ea([p()],ir.prototype,"platforms",void 0);ir=ea([f("w3m-connecting-wc-view")],ir);var Uh=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Za=class extends T{constructor(){var e;super(...arguments),this.wallet=(e=m.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return u`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&$.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&$.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&$.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&$.openHref(this.wallet.homepage,"_blank")}};Za=Uh([f("w3m-downloads-view")],Za);var Wh=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const jh="https://walletconnect.com/explorer";let Ga=class extends T{render(){return u`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{$.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=U.state,{customWallets:n}=R.state;return[...t,...n??[],...e].slice(0,4).map(o=>u`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${M(Q.getWalletImage(o))}
          @click=${()=>{$.openHref(o.homepage??jh,"_blank")}}
        ></wui-list-wallet>
      `)}};Ga=Wh([f("w3m-get-wallet-view")],Ga);const Bh=W`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ta=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let gn=class extends T{constructor(){var e;super(),this.network=(e=m.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return u`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${M(Q.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:u`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=re.getConnectedConnector();return q.getEmailConnector()&&e==="EMAIL"?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var n;const e=re.getConnectedConnector();return q.getEmailConnector()&&e==="EMAIL"?`Switching to ${((n=this.network)==null?void 0:n.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await k.switchActiveNetwork(this.network),R.state.isSiweEnabled||yr.navigateAfterNetworkSwitch())}catch{this.error=!0}}};gn.styles=Bh;ta([p()],gn.prototype,"showRetry",void 0);ta([p()],gn.prototype,"error",void 0);gn=ta([f("w3m-network-switch-view")],gn);const zh=W`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var cc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let or=class extends T{constructor(){super(),this.unsubscribe=[],this.caipNetwork=k.state.caipNetwork,this.unsubscribe.push(k.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){O.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),m.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:n}=k.state,r=$.sortRequestedNetworks(e,t);return r==null?void 0:r.map(o=>{var s;return u`
        <wui-card-select
          .selected=${((s=this.caipNetwork)==null?void 0:s.id)===o.id}
          imageSrc=${M(Q.getNetworkImage(o))}
          type="network"
          name=${o.name??o.id}
          @click=${()=>this.onSwitchNetwork(o)}
          .disabled=${!n&&!(e!=null&&e.includes(o.id))}
          data-testid=${`w3m-network-switch-${o.name??o.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:t}=_.state,{approvedCaipNetworkIds:n,supportsAllNetworks:r,caipNetwork:o}=k.state,{data:s}=m.state;t&&(o==null?void 0:o.id)!==e.id?n!=null&&n.includes(e.id)?(await k.switchActiveNetwork(e),yr.navigateAfterNetworkSwitch()):r&&m.push("SwitchNetwork",{...s,network:e}):t||(k.setCaipNetwork(e),m.push("Connect"))}};or.styles=zh;cc([p()],or.prototype,"caipNetwork",void 0);or=cc([f("w3m-networks-view")],or);const Hh=W`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var In=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Vh=7;let Wi=class extends T{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=K.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=Ce.state.coinbaseTransactions,this.tokenImages=fe.state.tokenImages,this.unsubscribe.push(K.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),fe.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},Ce.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),Ce.clearCursor(),this.fetchTransactions()}render(){return u`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var a,d,g;const n=As.formatDate((a=t==null?void 0:t.metadata)==null?void 0:a.minedAt),r=t.transfers[0],o=r==null?void 0:r.fungible_info;if(!o)return null;const s=((d=o==null?void 0:o.icon)==null?void 0:d.url)||((g=this.tokenImages)==null?void 0:g[o.symbol||""]);return u`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${M(o.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${n}
          icon=${M(s)}
          symbol=${M(o.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const n=parseInt(t,10);return new Array(12).fill(null).map((o,s)=>s).reverse().map(o=>{var d;const s=Vt.getTransactionGroupTitle(n,o),a=(d=this.coinbaseTransactions[n])==null?void 0:d[o];return a?u`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=_.state.address,t=R.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await Ce.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var r;const e=new Date;if((((r=this.coinbaseTransactions[e.getFullYear()])==null?void 0:r[e.getMonth()])||[]).filter(o=>o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const o=_.state.address;await Ce.fetchTransactions(o,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(Vh).fill(u` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};Wi.styles=Hh;In([p()],Wi.prototype,"selectedOnRampProvider",void 0);In([p()],Wi.prototype,"loading",void 0);In([p()],Wi.prototype,"coinbaseTransactions",void 0);In([p()],Wi.prototype,"tokenImages",void 0);Wi=In([f("w3m-onramp-activity-view")],Wi);const Fh=W`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Ur=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ao=class extends T{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=K.state.paymentCurrency,this.currencies=K.state.paymentCurrencies,this.currencyImages=fe.state.currencyImages,this.unsubscribe.push(K.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),fe.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var t;return u`
        <wui-list-item
          imageSrc=${M((t=this.currencyImages)==null?void 0:t[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(K.setPaymentCurrency(e),H.close())}};Ao.styles=Fh;Ur([p()],Ao.prototype,"selectedCurrency",void 0);Ur([p()],Ao.prototype,"currencies",void 0);Ur([p()],Ao.prototype,"currencyImages",void 0);Ao=Ur([f("w3m-onramp-fiat-select-view")],Ao);var uc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let gs=class extends T{constructor(){super(),this.unsubscribe=[],this.providers=K.state.providers,this.unsubscribe.push(K.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((n,r)=>({...n,url:t[r]||""}))})}render(){return u`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>u`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){K.setSelectedProvider(e),m.push("BuyInProgress"),$.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=_.state.address,t=k.state.caipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const n=ae.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??ae.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,r=K.state.purchaseCurrency,o=r?[r.symbol]:K.state.purchaseCurrencies.map(s=>s.symbol);return await ke.generateOnRampURL({defaultNetwork:n,destinationWallets:[{address:e,blockchains:ae.WC_COINBASE_PAY_SDK_CHAINS,assets:o}],partnerUserId:e,purchaseAmount:K.state.purchaseAmount})}};uc([p()],gs.prototype,"providers",void 0);gs=uc([f("w3m-onramp-providers-view")],gs);const Zh=W`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Wr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let To=class extends T{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=K.state.purchaseCurrencies,this.tokens=K.state.purchaseCurrencies,this.tokenImages=fe.state.tokenImages,this.unsubscribe.push(K.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),fe.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var t;return u`
        <wui-list-item
          imageSrc=${M((t=this.tokenImages)==null?void 0:t[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(K.setPurchaseCurrency(e),H.close())}};To.styles=Zh;Wr([p()],To.prototype,"selectedCurrency",void 0);Wr([p()],To.prototype,"tokens",void 0);Wr([p()],To.prototype,"tokenImages",void 0);To=Wr([f("w3m-onramp-token-select-view")],To);const Gh=W`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-gray-glass-005);
  }

  .convert-inputs-container {
    position: relative;
  }

  .replace-tokens-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-005);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button:hover {
    background: var(--wui-gray-glass-010);
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var me=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let le=class extends T{constructor(){var e;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(e=k.state.caipNetwork)==null?void 0:e.id,this.initialized=P.state.initialized,this.loading=P.state.loading,this.loadingPrices=P.state.loadingPrices,this.sourceToken=P.state.sourceToken,this.sourceTokenAmount=P.state.sourceTokenAmount,this.sourceTokenPriceInUSD=P.state.sourceTokenPriceInUSD,this.toToken=P.state.toToken,this.toTokenAmount=P.state.toTokenAmount,this.toTokenPriceInUSD=P.state.toTokenPriceInUSD,this.inputError=P.state.inputError,this.gasPriceInUSD=P.state.gasPriceInUSD,this.priceImpact=P.state.priceImpact,this.maxSlippage=P.state.maxSlippage,this.transactionLoading=P.state.transactionLoading,this.onDebouncedGetSwapCalldata=$.debounce(async()=>{await P.convertTokens()},500),k.subscribeKey("caipNetwork",t=>{this.caipNetworkId!==(t==null?void 0:t.id)&&(this.caipNetworkId=t==null?void 0:t.id,P.resetTokens(),P.resetValues(),P.initializeState())}),this.unsubscribe.push(H.subscribeKey("open",t=>{t||P.resetValues()}),m.subscribeKey("view",t=>{t.includes("Convert")||P.resetValues()}),P.subscribe(t=>{this.initialized=t.initialized,this.loading=t.loading,this.loadingPrices=t.loadingPrices,this.transactionLoading=t.transactionLoading,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.gasPriceInUSD=t.gasPriceInUSD,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage})),this.watchTokensAndValues()}firstUpdated(){this.initialized||P.initializeState()}disconnectedCallback(){P.setLoading(!1),this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" padding="l" gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{P.getNetworkTokenPrice(),P.getMyTokensWithBalance(),P.refreshConvertValues()},2e4)}templateSwap(){return u`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          class="convert-inputs-container"
        >
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.inputError?this.inputError:"Review convert"}templateReplaceTokensButton(){return u`
      <button class="replace-tokens-button" @click=${this.onSwitchTokens.bind(this)}>
        <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
      </button>
    `}templateLoading(){return u`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="swapHorizontalRoundedBold"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>

      <wui-loading-hexagon></wui-loading-hexagon>
    </wui-flex>`}templateTokenInput(e,t){var a,d;const n=(a=P.state.myTokensWithBalance)==null?void 0:a.find(g=>(g==null?void 0:g.address)===(t==null?void 0:t.address)),r=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,o=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let s=parseFloat(r)*o;return e==="toToken"&&(s-=this.gasPriceInUSD||0),u`<w3m-convert-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loading&&e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${(d=n==null?void 0:n.quantity)==null?void 0:d.numeric}
      .price=${this.sourceTokenPriceInUSD}
      .marketValue=${isNaN(s)?"":L.formatNumberToLocalString(s)}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-convert-input>`}onSetMaxValue(e,t){const n=e==="sourceToken"?this.sourceToken:this.toToken,r=(n==null?void 0:n.address)===ae.NATIVE_TOKEN_ADDRESS;let o="0";if(!t){o="0",this.handleChangeAmount(e,o);return}if(!this.gasPriceInUSD){o=t,this.handleChangeAmount(e,o);return}const s=xe.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),a=r?xe.bigNumber(t).minus(s):xe.bigNumber(t);this.handleChangeAmount(e,a.isGreaterThan(0)?a.toFixed(20):"0")}templateDetails(){var t,n;if(this.loading||this.inputError||!this.sourceToken||!this.toToken||!this.sourceTokenAmount||!this.toTokenAmount)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return u`
      <w3m-convert-details
        .detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(t=this.sourceToken)==null?void 0:t.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(n=this.toToken)==null?void 0:n.symbol}
        toTokenConvertedAmount=${e}
        gasPriceInUSD=${this.gasPriceInUSD}
        .priceImpact=${this.priceImpact}
        slippageRate=${ae.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
      ></w3m-convert-details>
    `}handleChangeAmount(e,t){P.clearError(),e==="sourceToken"?P.setSourceTokenAmount(t):P.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=this.loading||this.loadingPrices||this.transactionLoading;return u` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        ?fullWidth=${!0}
        size="lg"
        borderRadius="xs"
        variant=${e?"shade":"fill"}
        .loading=${t}
        .disabled=${t||e||this.inputError}
        @click=${this.onConvertPreview}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){P.switchTokens()}onConvertPreview(){m.push("ConvertPreview")}};le.styles=Gh;me([p()],le.prototype,"interval",void 0);me([p()],le.prototype,"detailsOpen",void 0);me([p()],le.prototype,"caipNetworkId",void 0);me([p()],le.prototype,"initialized",void 0);me([p()],le.prototype,"loading",void 0);me([p()],le.prototype,"loadingPrices",void 0);me([p()],le.prototype,"sourceToken",void 0);me([p()],le.prototype,"sourceTokenAmount",void 0);me([p()],le.prototype,"sourceTokenPriceInUSD",void 0);me([p()],le.prototype,"toToken",void 0);me([p()],le.prototype,"toTokenAmount",void 0);me([p()],le.prototype,"toTokenPriceInUSD",void 0);me([p()],le.prototype,"inputError",void 0);me([p()],le.prototype,"gasPriceInUSD",void 0);me([p()],le.prototype,"priceImpact",void 0);me([p()],le.prototype,"maxSlippage",void 0);me([p()],le.prototype,"transactionLoading",void 0);le=me([f("w3m-convert-view")],le);const qh=W`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .cancel-button:hover,
  .convert-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > button.convert-button {
    flex: 4;
    background-color: var(--wui-color-accent-090);
  }

  .action-buttons-container > button.convert-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var $e=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let we=class extends T{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=P.state.approvalTransaction,this.convertTransaction=P.state.convertTransaction,this.sourceToken=P.state.sourceToken,this.sourceTokenAmount=P.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=P.state.sourceTokenPriceInUSD,this.toToken=P.state.toToken,this.toTokenAmount=P.state.toTokenAmount??"",this.toTokenPriceInUSD=P.state.toTokenPriceInUSD,this.caipNetwork=k.state.caipNetwork,this.transactionLoading=P.state.transactionLoading,this.balanceSymbol=_.state.balanceSymbol,this.gasPriceInUSD=P.state.gasPriceInUSD,this.priceImpact=P.state.priceImpact,this.maxSlippage=P.state.maxSlippage,this.unsubscribe.push(_.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&m.goBack()}),k.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),P.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.convertTransaction=e.convertTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.transactionLoading=e.transactionLoading,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage}))}render(){return u`
      <wui-flex flexDirection="column" padding="l" gap="s">${this.templateSwap()}</wui-flex>
    `}templateSwap(){var a,d,g,w;const e=`${L.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(a=this.sourceToken)==null?void 0:a.symbol}`,t=`${L.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(d=this.toToken)==null?void 0:d.symbol}`,n=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,r=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),o=L.formatNumberToLocalString(n),s=L.formatNumberToLocalString(r);return u`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${o}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(g=this.sourceToken)==null?void 0:g.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${s}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(w=this.toToken)==null?void 0:w.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <button
            class="cancel-button"
            ?disabled=${this.transactionLoading}
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </button>
          <button
            class="convert-button"
            ?disabled=${this.transactionLoading}
            @click=${this.onSendTransaction.bind(this)}
          >
            ${this.transactionLoading?u`<wui-loading-spinner color="inverse-100"></wui-loading-spinner>`:u`<wui-text variant="paragraph-600" color="inverse-100">
                  ${this.actionButtonLabel()}
                </wui-text>`}
          </button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){var t,n;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return u`
      <w3m-convert-details
        detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(t=this.sourceToken)==null?void 0:t.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(n=this.toToken)==null?void 0:n.symbol}
        toTokenConvertedAmount=${e}
        gasPriceInUSD=${L.formatNumberToLocalString(this.gasPriceInUSD,3)}
        .priceImpact=${this.priceImpact}
        slippageRate=${ae.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
      ></w3m-convert-details>
    `}actionButtonLabel(){return this.approvalTransaction?"Approve":"Convert"}onCancelTransaction(){m.goBack()}onSendTransaction(){this.approvalTransaction?P.sendTransactionForApproval(this.approvalTransaction):P.sendTransactionForConvert(this.convertTransaction)}};we.styles=qh;$e([p()],we.prototype,"detailsOpen",void 0);$e([p()],we.prototype,"approvalTransaction",void 0);$e([p()],we.prototype,"convertTransaction",void 0);$e([p()],we.prototype,"sourceToken",void 0);$e([p()],we.prototype,"sourceTokenAmount",void 0);$e([p()],we.prototype,"sourceTokenPriceInUSD",void 0);$e([p()],we.prototype,"toToken",void 0);$e([p()],we.prototype,"toTokenAmount",void 0);$e([p()],we.prototype,"toTokenPriceInUSD",void 0);$e([p()],we.prototype,"caipNetwork",void 0);$e([p()],we.prototype,"transactionLoading",void 0);$e([p()],we.prototype,"balanceSymbol",void 0);$e([p()],we.prototype,"gasPriceInUSD",void 0);$e([p()],we.prototype,"priceImpact",void 0);$e([p()],we.prototype,"maxSlippage",void 0);we=$e([f("w3m-convert-preview-view")],we);const Yh=W`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .search-input-container,
  .suggested-tokens-container {
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-s);
  }

  .tokens-container .tokens {
    padding: 0px var(--wui-spacing-s);
    padding-bottom: var(--wui-spacing-s);
  }

  .search-input-container {
    padding-top: var(--wui-spacing-s);
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var Uo=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ii=class extends T{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=(e=m.state.data)==null?void 0:e.target,this.sourceToken=P.state.sourceToken,this.toToken=P.state.toToken,this.searchValue="",this.unsubscribe.push(P.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken})),this.watchTokens()}updated(){var n,r;const e=(n=this.renderRoot)==null?void 0:n.querySelector(".suggested-tokens-container");e==null||e.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=(r=this.renderRoot)==null?void 0:r.querySelector(".tokens");t==null||t.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var n,r;super.disconnectedCallback();const e=(n=this.renderRoot)==null?void 0:n.querySelector(".suggested-tokens-container"),t=(r=this.renderRoot)==null?void 0:r.querySelector(".tokens");e==null||e.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t==null||t.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}watchTokens(){this.interval=setInterval(()=>{P.getNetworkTokenPrice(),P.getMyTokensWithBalance()},5e3)}onSelectToken(e){this.targetToken==="sourceToken"?P.setSourceToken(e):P.setToToken(e),m.goBack()}templateSearchInput(){return u`
      <wui-flex class="search-input-container" gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=P.state.myTokensWithBalance?Object.values(P.state.myTokensWithBalance):[],t=P.state.popularTokens?P.state.popularTokens:[],n=this.filterTokensWithText(e,this.searchValue),r=this.filterTokensWithText(t,this.searchValue);return u`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" flexDirection="column">
          ${(n==null?void 0:n.length)>0?u`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${n.map(o=>{var a,d,g;const s=o.symbol===((a=this.sourceToken)==null?void 0:a.symbol)||o.symbol===((d=this.toToken)==null?void 0:d.symbol);return u`
                    <wui-token-list-item
                      name=${o.name}
                      ?disabled=${s}
                      symbol=${o.symbol}
                      price=${o==null?void 0:o.price}
                      amount=${(g=o==null?void 0:o.quantity)==null?void 0:g.numeric}
                      imageSrc=${o.logoUri}
                      @click=${()=>{s||this.onSelectToken(o)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Popular tokens</wui-text>
          </wui-flex>

          ${(r==null?void 0:r.length)>0?r.map(o=>u`
                  <wui-token-list-item
                    name=${o.name}
                    symbol=${o.symbol}
                    imageSrc=${o.logoUri}
                    @click=${()=>this.onSelectToken(o)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=P.state.suggestedTokens?P.state.suggestedTokens.slice(0,8):null;return e?u`
      <wui-flex class="suggested-tokens-container" gap="xs">
        ${e.map(t=>u`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",Vo.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",Vo.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",Vo.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",Vo.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(n=>`${n.symbol} ${n.name} ${n.address}`.toLowerCase().includes(t.toLowerCase()))}};ii.styles=Yh;Uo([p()],ii.prototype,"interval",void 0);Uo([p()],ii.prototype,"targetToken",void 0);Uo([p()],ii.prototype,"sourceToken",void 0);Uo([p()],ii.prototype,"toToken",void 0);Uo([p()],ii.prototype,"searchValue",void 0);ii=Uo([f("w3m-convert-select-token-view")],ii);const Kh=W`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var Xh=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ms=class extends T{render(){return u`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};ms.styles=Kh;ms=Xh([f("w3m-transactions-view")],ms);var Qh=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Jh=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let qa=class extends T{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Jh}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{$.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};qa=Qh([f("w3m-what-is-a-network-view")],qa);var e2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const t2=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Ya=class extends T{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${t2}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){O.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),m.push("GetWallet")}};Ya=e2([f("w3m-what-is-a-wallet-view")],Ya);var i2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ka=class extends T{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${m.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};Ka=i2([f("w3m-what-is-a-buy-view")],Ka);const o2=W`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var jr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const n2=6;let Nt=class extends T{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=pe.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=m.state.data)==null?void 0:e.email,this.emailConnector=q.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?u`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:u` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?u`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=pe.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=pe.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===n2&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(n){this.error=$.parseError(n),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!q.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),F.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){F.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};Nt.styles=o2;jr([p()],Nt.prototype,"loading",void 0);jr([p()],Nt.prototype,"timeoutTimeLeft",void 0);jr([p()],Nt.prototype,"error",void 0);Nt=jr([f("w3m-email-otp-widget")],Nt);var dc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let vs=class extends Nt{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=_.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.emailConnector){const t=k.checkIfSmartAccountEnabled();await this.emailConnector.provider.connectOtp({otp:e}),O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await B.connectExternal(this.emailConnector),O.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?m.push("UpgradeToSmartAccount"):H.close()}}catch(t){throw O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(_.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};dc([p()],vs.prototype,"smartAccountDeployed",void 0);vs=dc([f("w3m-email-verify-otp-view")],vs);const r2=W`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var pc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let nr=class extends T{constructor(){var e;super(),this.email=(e=m.state.data)==null?void 0:e.email,this.emailConnector=q.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),O.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),m.replace("EmailVerifyOtp",{email:this.email})}catch{m.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),F.showSuccess("Code email resent")}}catch(e){F.showError(e)}finally{this.loading=!1}}};nr.styles=r2;pc([p()],nr.prototype,"loading",void 0);nr=pc([f("w3m-email-verify-device-view")],nr);const s2=W`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var hc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Xa=400,Qa=360,a2=64;let rr=class extends T{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(H.subscribeKey("open",e=>{e||(this.onHideIframe(),m.popTransactionStack())}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(()=>{this.iframe.style.width=`${Qa}px`,this.iframe.style.height=`${Xa}px`,this.iframe.style.left=`calc(50% - ${Qa/2}px)`,this.iframe.style.top=`calc(50% - ${Xa/2}px + ${a2/2}px)`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),u`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){this.iframe.style.display="none",await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished}async syncTheme(){const e=q.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:ue.getSnapshot().themeVariables})}};rr.styles=s2;hc([p()],rr.prototype,"ready",void 0);rr=hc([f("w3m-approve-transaction-view")],rr);var l2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ja=class extends T{render(){return u`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${ae.SECURE_SITE_DASHBOARD}
          imageSrc=${ae.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Ja=l2([f("w3m-upgrade-wallet-view")],Ja);var ia=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let sr=class extends T{constructor(){super(...arguments),this.emailConnector=q.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.emailConnector)try{this.loading=!0,await this.emailConnector.provider.setPreferredAccount(Re.ACCOUNT_TYPES.SMART_ACCOUNT),await this.emailConnector.provider.connect(),this.loading=!1,m.push("Account")}catch{F.showError("Error upgrading to smart account")}}}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return u` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return u`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){m.push("Account")}};ia([p()],sr.prototype,"emailConnector",void 0);ia([p()],sr.prototype,"loading",void 0);sr=ia([f("w3m-upgrade-to-smart-account-view")],sr);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c2=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},d2=i=>(...e)=>({_$litDirective$:i,values:e});let p2=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo=(i,e)=>{var n;const t=i._$AN;if(t===void 0)return!1;for(const r of t)(n=r._$AO)==null||n.call(r,e,!1),Jo(r,e);return!0},ar=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},fc=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),w2(e)}};function h2(i){this._$AN!==void 0?(ar(this),this._$AM=i,fc(this)):this._$AM=i}function f2(i,e=!1,t=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)Jo(n[o],!1),ar(n[o]);else n!=null&&(Jo(n,!1),ar(n));else Jo(this,i)}const w2=i=>{i.type==u2.CHILD&&(i._$AP??(i._$AP=f2),i._$AQ??(i._$AQ=h2))};let g2=class extends p2{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),fc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(Jo(this,e),ar(this))}setValue(e){if(c2(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr=()=>new m2;let m2=class{};const ss=new WeakMap,cr=d2(class extends g2{render(i){return ne}update(i,[e]){var n;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=i.options)==null?void 0:n.host,this.rt(this.ct=i.element)),ne}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=ss.get(e);t===void 0&&(t=new WeakMap,ss.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=ss.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),v2=W`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var oa=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let mn=class extends T{constructor(){var e;super(...arguments),this.formRef=lr(),this.initialEmail=((e=m.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return u`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${cr(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${m.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=q.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");const n=await t.provider.updateEmail({email:this.email});O.sendEvent({type:"track",event:"EMAIL_EDIT"}),n.action==="VERIFY_SECONDARY_OTP"?m.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):m.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){F.showError(t),this.loading=!1}}};mn.styles=v2;oa([p()],mn.prototype,"email",void 0);oa([p()],mn.prototype,"loading",void 0);mn=oa([f("w3m-update-email-wallet-view")],mn);var b2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let el=class extends Nt{constructor(){var e;super(),this.email=(e=m.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:t}),O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),m.replace("UpdateEmailSecondaryOtp",m.state.data))}catch(n){throw O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),n}},this.onStartOver=()=>{m.replace("UpdateEmailWallet",m.state.data)}}};el=b2([f("w3m-update-email-primary-otp-view")],el);var y2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let tl=class extends Nt{constructor(){var e;super(),this.email=(e=m.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:t}),O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),m.reset("Account"))}catch(n){throw O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),n}},this.onStartOver=()=>{m.replace("UpdateEmailWallet",m.state.data)}}};tl=y2([f("w3m-update-email-secondary-otp-view")],tl);const x2=W`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var wc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ur=class extends T{constructor(){super(...arguments),this.disconecting=!1}render(){return u`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=k.state;return $.sortRequestedNetworks(e,t).map(r=>u`
        <wui-list-network
          imageSrc=${M(Q.getNetworkImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(r)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await B.disconnect(),O.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),H.close()}catch{O.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),F.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:t}=_.state,{approvedCaipNetworkIds:n,supportsAllNetworks:r,caipNetwork:o}=k.state,{data:s}=m.state;t&&(o==null?void 0:o.id)!==e.id?n!=null&&n.includes(e.id)?(await k.switchActiveNetwork(e),yr.navigateAfterNetworkSwitch()):r&&m.push("SwitchNetwork",{...s,network:e}):t||(k.setCaipNetwork(e),m.push("Connect"))}};ur.styles=x2;wc([p()],ur.prototype,"disconecting",void 0);ur=wc([f("w3m-unsupported-chain-view")],ur);const C2=W`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Pn=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ji=class extends T{constructor(){super(),this.unsubscribe=[],this.address=_.state.address,this.profileName=_.state.profileName,this.network=k.state.caipNetwork,this.preferredAccountType=_.state.preferredAccountType,this.unsubscribe.push(_.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):F.showError("Account not found")}),k.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=Q.getNetworkImage(this.network);return u` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${L.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ue.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var s;const e=k.getRequestedCaipNetworks(),t=k.checkIfSmartAccountEnabled(),n=k.state.caipNetwork;if(this.preferredAccountType===Re.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return n?u`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[Q.getNetworkImage(n)??""]}
      ></wui-compatible-network>`:null;const o=((s=e==null?void 0:e.filter(a=>a==null?void 0:a.imageId))==null?void 0:s.slice(0,5)).map(Q.getNetworkImage).filter(Boolean);return u`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${o}
    ></wui-compatible-network>`}onReceiveClick(){m.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&($.copyToClopboard(this.address),F.showSuccess("Address copied"))}catch{F.showError("Failed to copy")}}};ji.styles=C2;Pn([p()],ji.prototype,"address",void 0);Pn([p()],ji.prototype,"profileName",void 0);Pn([p()],ji.prototype,"network",void 0);Pn([p()],ji.prototype,"preferredAccountType",void 0);ji=Pn([f("w3m-wallet-receive-view")],ji);const _2=W`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var gc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let dr=class extends T{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=_.state.preferredAccountType,this.unsubscribe.push(_.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:n}=k.state,r=k.checkIfSmartAccountEnabled();let o=$.sortRequestedNetworks(e,t);if(r&&this.preferredAccountType===Re.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;o=[n]}return o.map(s=>u`
        <wui-list-network
          imageSrc=${M(Q.getNetworkImage(s))}
          name=${s.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};dr.styles=_2;gc([p()],dr.prototype,"preferredAccountType",void 0);dr=gc([f("w3m-wallet-compatible-networks-view")],dr);const E2=W`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var On=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Bi=class extends T{constructor(){super(),this.unsubscribe=[],this.token=Se.state.token,this.sendTokenAmount=Se.state.sendTokenAmount,this.receiverAddress=Se.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(Se.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),u` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){m.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!$.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};Bi.styles=E2;On([p()],Bi.prototype,"token",void 0);On([p()],Bi.prototype,"sendTokenAmount",void 0);On([p()],Bi.prototype,"receiverAddress",void 0);On([p()],Bi.prototype,"message",void 0);Bi=On([f("w3m-wallet-send-view")],Bi);const $2=W`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Br=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let So=class extends T{constructor(){super(),this.unsubscribe=[],this.tokenBalance=_.state.tokenBalance,this.search="",this.onDebouncedSearch=$.debounce(e=>{this.search=e}),this.unsubscribe.push(_.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return u`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e;return this.search?this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(t=>t.name.toLowerCase().includes(this.search.toLowerCase())):this.tokens=this.tokenBalance,u`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map(t=>u`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,t)}
                    ?clickable=${!0}
                    tokenName=${t.name}
                    tokenImageUrl=${t.iconUrl}
                    tokenAmount=${t.quantity.numeric}
                    tokenValue=${t.value}
                    tokenCurrency=${t.symbol}
                  ></wui-list-token>`):u`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){m.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){Se.setToken(e),Se.setTokenAmount(void 0),m.goBack()}};So.styles=$2;Br([p()],So.prototype,"tokenBalance",void 0);Br([p()],So.prototype,"tokens",void 0);Br([p()],So.prototype,"search",void 0);So=Br([f("w3m-wallet-send-select-token-view")],So);const A2=W`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var Nn=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let zi=class extends T{constructor(){super(),this.unsubscribe=[],this.token=Se.state.token,this.sendTokenAmount=Se.state.sendTokenAmount,this.receiverAddress=Se.state.receiverAddress,this.caipNetwork=k.state.caipNetwork,this.unsubscribe.push(Se.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}),k.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t,n;return u` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number((e=this.token)==null?void 0:e.quantity.numeric).toFixed(2)} ${(t=this.token)==null?void 0:t.symbol}"
            .imageSrc=${(n=this.token)==null?void 0:n.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${L.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return u`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){m.reset("Account"),setTimeout(()=>{Se.resetSend()},200)}onCancelClick(){m.goBack()}};zi.styles=A2;Nn([p()],zi.prototype,"token",void 0);Nn([p()],zi.prototype,"sendTokenAmount",void 0);Nn([p()],zi.prototype,"receiverAddress",void 0);Nn([p()],zi.prototype,"caipNetwork",void 0);zi=Nn([f("w3m-wallet-send-preview-view")],zi);const T2=W`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function mc(i){const{connectors:e}=q.state,t=e.filter(o=>o.type==="ANNOUNCED").reduce((o,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(o[s.info.rdns]=!0),o},{});return i.map(o=>({...o,installed:!!o.rdns&&!!t[o.rdns??""]})).sort((o,s)=>Number(s.installed)-Number(o.installed))}var Dn=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const il="local-paginator";let Hi=class extends T{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!U.state.wallets.length,this.wallets=U.state.wallets,this.recommended=U.state.recommended,this.featured=U.state.featured,this.unsubscribe.push(U.subscribeKey("wallets",e=>this.wallets=e),U.subscribeKey("recommended",e=>this.recommended=e),U.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return u`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await U.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>u`
        <wui-card-select-loader type="wallet" id=${M(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return mc(e).map(n=>u`
        <wui-card-select
          imageSrc=${M(Q.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
          .installed=${n.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:r}=U.state,o=window.innerWidth<352?3:4,s=e.length+t.length;let d=Math.ceil(s/o)*o-s+o;return d-=e.length?n.length%o:0,r===0&&n.length>0?null:r===0||[...n,...e,...t].length<r?this.shimmerTemplate(d,il):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${il}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.initial){const{page:r,count:o,wallets:s}=U.state;s.length<o&&U.fetchWallets({page:r+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const t=q.getConnector(e.id,e.rdns);t?m.push("ConnectingExternal",{connector:t}):m.push("ConnectingWalletConnect",{wallet:e})}};Hi.styles=T2;Dn([p()],Hi.prototype,"initial",void 0);Dn([p()],Hi.prototype,"wallets",void 0);Dn([p()],Hi.prototype,"recommended",void 0);Dn([p()],Hi.prototype,"featured",void 0);Hi=Dn([f("w3m-all-wallets-list")],Hi);const S2=W`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var na=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let vn=class extends T{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?u`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await U.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=U.state,t=mc(e);return e.length?u`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>u`
            <wui-card-select
              imageSrc=${M(Q.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
              .installed=${n.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:u`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=q.getConnector(e.id,e.rdns);t?m.push("ConnectingExternal",{connector:t}):m.push("ConnectingWalletConnect",{wallet:e})}};vn.styles=S2;na([p()],vn.prototype,"loading",void 0);na([N()],vn.prototype,"query",void 0);vn=na([f("w3m-all-wallets-search")],vn);var zr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let bn=class extends T{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(B.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return u`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var n;const t=this.platformTabs[e];t&&((n=this.onSelectPlatfrom)==null||n.call(this,t))}};zr([N({type:Array})],bn.prototype,"platforms",void 0);zr([N()],bn.prototype,"onSelectPlatfrom",void 0);zr([p()],bn.prototype,"buffering",void 0);bn=zr([f("w3m-connecting-header")],bn);var k2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ol=class extends Ue{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=q.state,n=t.find(o=>{var s,a;return o.type==="ANNOUNCED"&&((s=o.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)}),r=t.find(o=>o.type==="INJECTED");n?await B.connectExternal(n):r&&await B.connectExternal(r),H.close(),O.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){O.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};ol=k2([f("w3m-connecting-wc-browser")],ol);var R2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let nl=class extends Ue{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:n}=this.wallet,{redirect:r,href:o}=$.formatNativeUrl(t,this.uri);B.setWcLinking({name:n,href:o}),B.setRecentWallet(this.wallet),$.openHref(r,"_blank")}catch{this.error=!0}}};nl=R2([f("w3m-connecting-wc-desktop")],nl);var I2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let rl=class extends Ue{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:n}=this.wallet,{redirect:r,href:o}=$.formatNativeUrl(t,this.uri);B.setWcLinking({name:n,href:o}),B.setRecentWallet(this.wallet),$.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const e=$.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(B.setBuffering(!0),setTimeout(()=>{B.setBuffering(!1)},5e3))}};rl=I2([f("w3m-connecting-wc-mobile")],rl);const P2=W`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var O2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let bs=class extends Ue{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),u`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return B.setWcLinking(void 0),B.setRecentWallet(this.wallet),u` <wui-qr-code
      size=${e}
      theme=${ue.state.themeMode}
      uri=${this.uri}
      imageSrc=${M(Q.getWalletImage(this.wallet))}
      alt=${M(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return u`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};bs.styles=P2;bs=O2([f("w3m-connecting-wc-qrcode")],bs);var N2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let sl=class extends T{constructor(){var e;if(super(),this.wallet=(e=m.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${M(Q.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};sl=N2([f("w3m-connecting-wc-unsupported")],sl);var D2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let al=class extends Ue{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",O.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:n}=this.wallet,{redirect:r,href:o}=$.formatUniversalUrl(t,this.uri);B.setWcLinking({name:n,href:o}),B.setRecentWallet(this.wallet),$.openHref(r,"_blank")}catch{this.error=!0}}};al=D2([f("w3m-connecting-wc-web")],al);const L2=W`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-gray-glass-002);
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var $t=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ke=class extends T{constructor(){super(...arguments),this.detailsOpen=!1,this.slippageRate=1}render(){return u`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100"
                  >1 ${this.sourceTokenSymbol} =
                  ${L.formatNumberToLocalString(this.toTokenConvertedAmount,3)}
                  ${this.toTokenSymbol}</wui-text
                >
                <wui-text variant="small-400" color="fg-200">
                  $${L.formatNumberToLocalString(this.sourceTokenPrice)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?u`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Network cost</wui-text>
                      <wui-text variant="small-400" color="fg-100">
                        $${L.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?u` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Price impact</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${L.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceTokenSymbol?u`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Max. slippage</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${L.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.sourceTokenSymbol} ${this.slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Provider fee</wui-text>
                      <wui-flex alignItems="center" justifyContent="center" class="free-badge">
                        <wui-text variant="micro-700" color="success-100">Free</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};Ke.styles=[L2];$t([N()],Ke.prototype,"detailsOpen",void 0);$t([N()],Ke.prototype,"sourceTokenSymbol",void 0);$t([N()],Ke.prototype,"sourceTokenPrice",void 0);$t([N()],Ke.prototype,"toTokenSymbol",void 0);$t([N()],Ke.prototype,"toTokenConvertedAmount",void 0);$t([N()],Ke.prototype,"gasPriceInUSD",void 0);$t([N()],Ke.prototype,"priceImpact",void 0);$t([N()],Ke.prototype,"slippageRate",void 0);$t([N()],Ke.prototype,"maxSlippage",void 0);Ke=$t([f("w3m-convert-details")],Ke);const M2=W`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-gray-glass-005);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-gray-glass-002);
  }

  :host wui-flex.focus .input_mask__border {
    fill: var(--wui-gray-glass-020);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .token-select-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-select-button:hover {
    background: var(--wui-gray-glass-005);
  }

  .token-select-button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var dt=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const U2=5e-5;let Ve=class extends T{constructor(){super(...arguments),this.focused=!1,this.price=0,this.marketValue="$1.0345,00",this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=xe.bigNumber(e).isGreaterThan(0);return u`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        ${this.target==="sourceToken"?Ml:Ll}
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${this.marketValue}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){const t=["Backspace","Meta","Ctrl","a","c","v","ArrowLeft","ArrowRight","Tab"],n=e.key===",",r=e.key===".",o=e.key>="0"&&e.key<="9",s=this.value;!o&&!t.includes(e.key)&&!r&&!n&&e.preventDefault(),(n||r)&&(s!=null&&s.includes(".")||s!=null&&s.includes(","))&&e.preventDefault()}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value;t===","||t==="."?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){if(!this.token)return u` <wui-button
        class="swap-token-button"
        size="md"
        variant="accentBg"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;const e=this.token.logoUri?u`<wui-image src=${this.token.logoUri}></wui-image>`:u`
          <wui-icon-box
            size="sm"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="networkPlaceholder"
          ></wui-icon-box>
        `;return u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <button
          size="sm"
          variant="shade"
          class="token-select-button"
          @click=${this.onSelectToken.bind(this)}
        >
          ${e}
          <wui-text variant="paragraph-600" color="fg-100">${this.token.symbol}</wui-text>
        </button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){const e=xe.multiply(this.balance,this.price),t=e?e==null?void 0:e.isGreaterThan(U2):!1;return u`
      ${t?u`<wui-text variant="small-400" color="fg-200">
            ${L.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?u` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:u` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){O.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),m.push("ConvertSelectToken",{target:this.target})}onBuyToken(){m.push("OnRampProviders")}};Ve.styles=[M2];dt([N()],Ve.prototype,"focused",void 0);dt([N()],Ve.prototype,"balance",void 0);dt([N()],Ve.prototype,"value",void 0);dt([N()],Ve.prototype,"price",void 0);dt([N()],Ve.prototype,"marketValue",void 0);dt([N()],Ve.prototype,"disabled",void 0);dt([N()],Ve.prototype,"target",void 0);dt([N()],Ve.prototype,"token",void 0);dt([N()],Ve.prototype,"onSetAmount",void 0);dt([N()],Ve.prototype,"onSetMaxValue",void 0);Ve=dt([f("w3m-convert-input")],Ve);const W2=W`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Hr=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};function ll(){var s,a,d,g,w,v,C;const i=(a=(s=m.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(g=(d=m.state.data)==null?void 0:d.wallet)==null?void 0:g.name,t=(v=(w=m.state.data)==null?void 0:w.network)==null?void 0:v.name,n=e??i,r=q.getConnectors();return{Connect:`Connect ${r.length===1&&((C=r[0])==null?void 0:C.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:t??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let ko=class extends T{constructor(){super(),this.unsubscribe=[],this.heading=ll()[m.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(m.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),B.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){O.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),m.push("WhatIsAWallet")}async onClose(){if(R.state.isSiweEnabled){const{SIWEController:e}=await ro(()=>Promise.resolve().then(()=>br),void 0);e.state.status!=="success"&&await B.disconnect()}H.close()}titleTemplate(){return u`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=m.state,t=e==="Connect",o=e==="ApproveTransaction"||e==="UpgradeToSmartAccount";return this.showBack&&!o?u`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:u`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?u`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-text");if(t){const r=ll()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var n;const{history:e}=m.state,t=(n=this.shadowRoot)==null?void 0:n.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){m.state.view==="ConnectingSiwe"?m.push("Connect"):m.goBack()}};ko.styles=[W2];Hr([p()],ko.prototype,"heading",void 0);Hr([p()],ko.prototype,"buffering",void 0);Hr([p()],ko.prototype,"showBack",void 0);ko=Hr([f("w3m-header")],ko);var vc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let ys=class extends T{constructor(){super(...arguments),this.data=[]}render(){return u`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>u`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>u`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};vc([N({type:Array})],ys.prototype,"data",void 0);ys=vc([f("w3m-help-widget")],ys);const j2=W`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Ji=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Dt=class extends T{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=fe.state.currencyImages,this.tokenImages=fe.state.tokenImages,this.unsubscribe.push(K.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),K.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),K.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),fe.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){K.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;const e=((n=this.selectedCurrency)==null?void 0:n.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return u`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?u` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>H.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${M(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:u`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Dt.styles=j2;Ji([N({type:String})],Dt.prototype,"type",void 0);Ji([N({type:Number})],Dt.prototype,"value",void 0);Ji([p()],Dt.prototype,"currencies",void 0);Ji([p()],Dt.prototype,"selectedCurrency",void 0);Ji([p()],Dt.prototype,"currencyImages",void 0);Ji([p()],Dt.prototype,"tokenImages",void 0);Dt=Ji([f("w3m-swap-input")],Dt);const B2=W`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var z2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let xs=class extends T{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=R.state;return!e&&!t?null:u`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=R.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=R.state;return e?u`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=R.state;return e?u`<a href=${e}>Privacy Policy</a>`:null}};xs.styles=[B2];xs=z2([f("w3m-legal-footer")],xs);const H2=W`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var bc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let pr=class extends T{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:r,homepage:o}=this.wallet,s=$.isMobile(),a=$.isIos(),d=$.isAndroid(),g=[t,n,o,r].filter(Boolean).length>1,w=L.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return g&&!s?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${()=>m.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!g&&o?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&d?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&$.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&$.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&$.openHref(this.wallet.homepage,"_blank")}};pr.styles=[H2];bc([N({type:Object})],pr.prototype,"wallet",void 0);pr=bc([f("w3m-mobile-download-links")],pr);const V2=W`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var F2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Cs=class extends T{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=R.state;return!e&&!t?null:u`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return u` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){m.push("WhatIsABuy")}};Cs.styles=[V2];Cs=F2([f("w3m-onramp-providers-footer")],Cs);const Z2=W`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var yc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const G2={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let hr=class extends T{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=F.state.open,this.unsubscribe.push(F.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=F.state,n=G2[t];return u`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>F.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};hr.styles=Z2;yc([p()],hr.prototype,"open",void 0);hr=yc([f("w3m-snackbar")],hr);const q2=W`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Ln=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Vi=class extends T{constructor(){super(),this.unsubscribe=[],this.formRef=lr(),this.connectors=q.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(q.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=this.connectors.length>1;return this.connectors.find(n=>n.type==="EMAIL")?u`
      <form ${cr(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?u`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?u`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?u`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=q.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:n}=await t.provider.connectEmail({email:this.email});O.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP"?(O.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),m.push("EmailVerifyOtp",{email:this.email})):n==="VERIFY_DEVICE"&&m.push("EmailVerifyDevice",{email:this.email})}catch(t){const n=$.parseError(t);n!=null&&n.includes("Invalid email")?this.error="Invalid email. Try again.":F.showError(t)}finally{this.loading=!1}}onFocusEvent(){O.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Vi.styles=q2;Ln([p()],Vi.prototype,"connectors",void 0);Ln([p()],Vi.prototype,"email",void 0);Ln([p()],Vi.prototype,"loading",void 0);Ln([p()],Vi.prototype,"error",void 0);Vi=Ln([f("w3m-email-login-widget")],Vi);const Y2=W`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var ci=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Ct=class extends T{constructor(){super(),this.unsubscribe=[],this.address=_.state.address,this.profileImage=_.state.profileImage,this.profileName=_.state.profileName,this.network=k.state.caipNetwork,this.disconnecting=!1,this.balance=_.state.balance,this.balanceSymbol=_.state.balanceSymbol,this.unsubscribe.push(_.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||F.showError("Account not found")}),k.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Q.getNetworkImage(this.network);return u`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${M(this.address)}
          address=${M(this.address)}
          imageSrc=${M(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?L.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):L.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${$.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${M(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((t=this.network)==null?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=R.state;return e?u`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=re.getConnectedConnector(),t=q.getEmailConnector(),{origin:n}=location;return!t||e!=="EMAIL"||n.includes(ae.SECURE_SITE)?null:u`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){m.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=_.state;return e?u`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=re.getConnectedConnector(),t=q.getEmailConnector();if(!t||e!=="EMAIL")return null;const n=t.provider.getEmail()??"";return u`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        data-testid="w3m-account-email-update"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=k.state,t=e?e.length>1:!1,n=e==null?void 0:e.find(({id:r})=>{var o;return r===((o=this.network)==null?void 0:o.id)});return t||!n}onCopyAddress(){try{this.address&&($.copyToClopboard(this.address),F.showSuccess("Address copied"))}catch{F.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(O.sendEvent({type:"track",event:"CLICK_NETWORKS"}),m.push("Networks"))}onTransactions(){O.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),m.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await B.disconnect(),O.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),H.close()}catch{O.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),F.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=_.state;e&&$.openHref(e,"_blank")}onGoToUpgradeView(){O.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),m.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){m.push("UpdateEmailWallet",{email:e})}};Ct.styles=Y2;ci([p()],Ct.prototype,"address",void 0);ci([p()],Ct.prototype,"profileImage",void 0);ci([p()],Ct.prototype,"profileName",void 0);ci([p()],Ct.prototype,"network",void 0);ci([p()],Ct.prototype,"disconnecting",void 0);ci([p()],Ct.prototype,"balance",void 0);ci([p()],Ct.prototype,"balanceSymbol",void 0);Ct=ci([f("w3m-account-default-widget")],Ct);const K2=W`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,X2={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}]};var At=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Xe=class extends T{constructor(){super(),this.unsubscribe=[],this.address=_.state.address,this.profileImage=_.state.profileImage,this.profileName=_.state.profileName,this.smartAccountDeployed=_.state.smartAccountDeployed,this.network=k.state.caipNetwork,this.currentTab=_.state.currentTab,this.tokenBalance=_.state.tokenBalance,this.preferredAccountType=_.state.preferredAccountType,this.unsubscribe.push(_.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):H.close()}),k.subscribe(e=>{this.network=e.caipNetwork})),this.watchConvertValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){_.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Q.getNetworkImage(this.network);return u`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${M(this.address)}
        networkSrc=${M(e)}
        icon="chevronBottom"
        avatarSrc=${M(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onConvertClick.bind(this)}
          text="Convert"
          icon="recycleHorizontal"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${X2.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}watchConvertValues(){this.watchTokenBalance=setInterval(()=>_.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?u`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?u`<w3m-account-activity-widget></w3m-account-activity-widget>`:u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const t=$.calculateBalance(this.tokenBalance),{dollars:n="0",pennies:r="00"}=$.formatTokenBalance(t);return u`<wui-balance dollars=${n} pennies=${r}></wui-balance>`}return u`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!k.checkIfSmartAccountEnabled()||this.preferredAccountType!==Re.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:u` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){_.setCurrentTab(e)}onProfileButtonClick(){m.push("AccountSettings")}onBuyClick(){m.push("OnRampProviders")}onConvertClick(){m.push("Convert")}onReceiveClick(){m.push("WalletReceive")}onSendClick(){m.push("WalletSend")}onUpdateToSmartAccount(){m.push("UpgradeToSmartAccount")}};Xe.styles=K2;At([p()],Xe.prototype,"watchTokenBalance",void 0);At([p()],Xe.prototype,"address",void 0);At([p()],Xe.prototype,"profileImage",void 0);At([p()],Xe.prototype,"profileName",void 0);At([p()],Xe.prototype,"smartAccountDeployed",void 0);At([p()],Xe.prototype,"network",void 0);At([p()],Xe.prototype,"currentTab",void 0);At([p()],Xe.prototype,"tokenBalance",void 0);At([p()],Xe.prototype,"preferredAccountType",void 0);Xe=At([f("w3m-account-wallet-features-widget")],Xe);const Q2=W`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var J2=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let _s=class extends T{render(){return u`<w3m-activity-list page="account"></w3m-activity-list>`}};_s.styles=Q2;_s=J2([f("w3m-account-activity-widget")],_s);const ef=W`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var tf=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Es=class extends T{render(){return u`${this.nftTemplate()}`}nftTemplate(){return u` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){m.push("WalletReceive")}};Es.styles=ef;Es=tf([f("w3m-account-nfts-widget")],Es);const of=W`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var xc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let fr=class extends T{constructor(){super(),this.unsubscribe=[],this.tokenBalance=_.state.tokenBalance,this.unsubscribe.push(_.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?u`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:u` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(t=>u`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){m.push("WalletReceive")}onBuyClick(){m.push("OnRampProviders")}};fr.styles=of;xc([p()],fr.prototype,"tokenBalance",void 0);fr=xc([f("w3m-account-tokens-widget")],fr);const nf=W`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var eo=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};const Bn="last-transaction",rf=7;let Lt=class extends T{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=_.state.address,this.transactionsByYear=Ce.state.transactionsByYear,this.loading=Ce.state.loading,this.empty=Ce.state.empty,this.next=Ce.state.next,Ce.clearCursor(),this.unsubscribe.push(_.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Ce.resetTransactions(),Ce.fetchTransactions(e.address))}),Ce.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){Ce.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,n)=>{const r=n===e.length-1,o=parseInt(t,10);return new Array(12).fill(null).map((a,d)=>d).reverse().map(a=>{var w;const d=Vt.getTransactionGroupTitle(o,a),g=(w=this.transactionsByYear[o])==null?void 0:w[a];return g?u`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${d}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(g,r)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:n,descriptions:r,direction:o,isAllNFT:s,images:a,status:d,transfers:g,type:w}=this.getTransactionListItemProps(e),v=(g==null?void 0:g.length)>1;return(g==null?void 0:g.length)===2&&!s?u`
        <wui-transaction-list-item
          date=${n}
          .direction=${o}
          id=${t&&this.next?Bn:""}
          status=${d}
          type=${w}
          .images=${a}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `:v?g.map((I,z)=>{const X=Vt.getTransferDescription(I),Z=t&&z===g.length-1;return u` <wui-transaction-list-item
          date=${n}
          direction=${I.direction}
          id=${Z&&this.next?Bn:""}
          status=${d}
          type=${w}
          .onlyDirectionIcon=${!0}
          .images=${[a[z]]}
          .descriptions=${[X]}
        ></wui-transaction-list-item>`}):u`
      <wui-transaction-list-item
        date=${n}
        .direction=${o}
        id=${t&&this.next?Bn:""}
        status=${d}
        type=${w}
        .images=${a}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((n,r)=>{const o=t&&r===e.length-1;return u`${this.templateRenderTransaction(n,o)}`})}emptyStateActivity(){return u`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return u`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?u`${this.emptyStateAccount()}`:u`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(rf).fill(u` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){m.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=R.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(Ce.fetchTransactions(this.address),O.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,n,r;(t=this.paginationObserver)==null||t.disconnect();const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Bn}`);e&&((r=this.paginationObserver)==null||r.observe(e))}getTransactionListItemProps(e){var d,g,w,v,C;const t=As.formatDate((d=e==null?void 0:e.metadata)==null?void 0:d.minedAt),n=Vt.getTransactionDescriptions(e),r=e==null?void 0:e.transfers,o=(g=e==null?void 0:e.transfers)==null?void 0:g[0],s=!!o&&((w=e==null?void 0:e.transfers)==null?void 0:w.every(I=>!!I.nft_info)),a=Vt.getTransactionImages(r);return{date:t,direction:o==null?void 0:o.direction,descriptions:n,isAllNFT:s,images:a,status:(v=e.metadata)==null?void 0:v.status,transfers:r,type:(C=e.metadata)==null?void 0:C.operationType}}};Lt.styles=nf;eo([N()],Lt.prototype,"page",void 0);eo([p()],Lt.prototype,"address",void 0);eo([p()],Lt.prototype,"transactionsByYear",void 0);eo([p()],Lt.prototype,"loading",void 0);eo([p()],Lt.prototype,"empty",void 0);eo([p()],Lt.prototype,"next",void 0);Lt=eo([f("w3m-activity-list")],Lt);const sf=W`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;var ra=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let yn=class extends T{render(){return u` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?u`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:u`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){m.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return u`<wui-text variant="small-400" color="fg-200">$${t.toFixed(2)}</wui-text>`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?u` <wui-text variant="small-400" color="error-100">
          ${L.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:u` <wui-text variant="small-400" color="fg-200">
        ${L.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?u`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:u`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){Se.setTokenAmount(e.detail)}onMaxClick(){var e;this.token&&Se.setTokenAmount(Number((e=this.token)==null?void 0:e.quantity.numeric))}onBuyClick(){m.push("OnRampProviders")}};yn.styles=sf;ra([N({type:Object})],yn.prototype,"token",void 0);ra([N({type:Number})],yn.prototype,"sendTokenAmount",void 0);yn=ra([f("w3m-input-token")],yn);const af=W`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var sa=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let xn=class extends T{constructor(){super(...arguments),this.inputElementRef=lr(),this.instructionElementRef=lr(),this.instructionHidden=!!this.receiverAddress}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return u` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${cr(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${cr(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.receiverAddress&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){const e=await navigator.clipboard.readText();Se.setReceiverAddress(e)}onInputChange(e){const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),Se.setReceiverAddress(t.value)}};xn.styles=af;sa([N()],xn.prototype,"receiverAddress",void 0);sa([p()],xn.prototype,"instructionHidden",void 0);xn=sa([f("w3m-input-address")],xn);const lf=W`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var aa=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let Cn=class extends T{render(){return u` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${L.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?u` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${M(Q.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&m.push("Networks",{network:e})}};Cn.styles=lf;aa([N()],Cn.prototype,"receiverAddress",void 0);aa([N({type:Object})],Cn.prototype,"caipNetwork",void 0);Cn=aa([f("w3m-wallet-send-details")],Cn);let cl=!1;class cf{constructor(e){this.initPromise=void 0,this.setIsConnected=t=>{_.setIsConnected(t)},this.getIsConnectedState=()=>_.state.isConnected,this.setCaipAddress=t=>{_.setCaipAddress(t)},this.setBalance=(t,n)=>{_.setBalance(t,n)},this.setProfileName=t=>{_.setProfileName(t)},this.setProfileImage=t=>{_.setProfileImage(t)},this.resetAccount=()=>{_.resetAccount()},this.setCaipNetwork=t=>{k.setCaipNetwork(t)},this.getCaipNetwork=()=>k.state.caipNetwork,this.setRequestedCaipNetworks=t=>{k.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>k.getApprovedCaipNetworksData(),this.resetNetwork=()=>{k.resetNetwork()},this.setConnectors=t=>{q.setConnectors(t)},this.addConnector=t=>{q.addConnector(t)},this.getConnectors=()=>q.getConnectors(),this.resetWcConnection=()=>{B.resetWcConnection()},this.fetchIdentity=t=>ke.fetchIdentity(t),this.setAddressExplorerUrl=t=>{_.setAddressExplorerUrl(t)},this.setSmartAccountDeployed=t=>{_.setSmartAccountDeployed(t)},this.setConnectedWalletInfo=t=>{_.setConnectedWalletInfo(t)},this.setSmartAccountEnabledNetworks=t=>{k.setSmartAccountEnabledNetworks(t)},this.setPreferredAccountType=t=>{_.setPreferredAccountType(t)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),H.open(e)}async close(){await this.initOrContinue(),H.close()}setLoading(e){H.setLoading(e)}getThemeMode(){return ue.state.themeMode}getThemeVariables(){return ue.state.themeVariables}setThemeMode(e){ue.setThemeMode(e),Is(ue.state.themeMode)}setThemeVariables(e){ue.setThemeVariables(e),Wl(ue.state.themeVariables)}subscribeTheme(e){return ue.subscribe(e)}getWalletInfo(){return _.state.connectedWalletInfo}subscribeWalletInfo(e){return _.subscribeKey("connectedWalletInfo",e)}getState(){return vi.state}subscribeState(e){return vi.subscribe(e)}showErrorMessage(e){F.showError(e)}showSuccessMessage(e){F.showSuccess(e)}getEvent(){return{...O.state}}subscribeEvents(e){return O.subscribe(e)}redirect(e){m.push(e)}popTransactionStack(e){m.popTransactionStack(e)}isOpen(){return H.state.open}isTransactionStackEmpty(){return m.state.transactionStack.length===0}async initControllers(e){if(k.setClient(e.networkControllerClient),k.setDefaultCaipNetwork(e.defaultChain),R.setProjectId(e.projectId),R.setAllWallets(e.allWallets),R.setIncludeWalletIds(e.includeWalletIds),R.setExcludeWalletIds(e.excludeWalletIds),R.setFeaturedWalletIds(e.featuredWalletIds),R.setTokens(e.tokens),R.setTermsConditionsUrl(e.termsConditionsUrl),R.setPrivacyPolicyUrl(e.privacyPolicyUrl),R.setCustomWallets(e.customWallets),R.setEnableAnalytics(e.enableAnalytics),R.setSdkVersion(e._sdkVersion),B.setClient(e.connectionControllerClient),e.siweControllerClient){const{SIWEController:t}=await ro(()=>Promise.resolve().then(()=>br),void 0);t.setSIWEClient(e.siweControllerClient)}e.metadata&&R.setMetadata(e.metadata),e.themeMode&&ue.setThemeMode(e.themeMode),e.themeVariables&&ue.setThemeVariables(e.themeVariables),e.enableOnramp&&R.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&R.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&k.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return!this.initPromise&&!cl&&$.isClient()&&(cl=!0,this.initPromise=new Promise(async e=>{await Promise.all([ro(()=>Promise.resolve().then(()=>Y1),void 0),ro(()=>Promise.resolve().then(()=>bp),void 0)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}function uf(i){if(i)return{id:`${j.EIP155}:${i.id}`,name:i.name,imageId:kt.EIP155NetworkImageIds[i.id]}}async function df(i){var o,s,a,d;if(!i)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const e=await(i==null?void 0:i.getProvider()),t=(s=(o=e==null?void 0:e.signer)==null?void 0:o.session)==null?void 0:s.namespaces,n=(a=t==null?void 0:t[j.EIP155])==null?void 0:a.methods,r=(d=t==null?void 0:t[j.EIP155])==null?void 0:d.chains;return{supportsAllNetworks:!!(n!=null&&n.includes(j.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:r}}function pf(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:kt.WalletConnectRpcChainIds.map(i=>`${j.EIP155}:${i}`)}}function hf({chainId:i,projectId:e}){const t=$.getBlockchainApiUrl();return kt.WalletConnectRpcChainIds.includes(i)?pa(`${t}/v1/?chainId=${j.EIP155}:${i}&projectId=${e}`):pa()}class ff extends cf{constructor(e){const{wagmiConfig:t,siweConfig:n,defaultChain:r,tokens:o,_sdkVersion:s,...a}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");const d={switchCaipNetwork:async w=>{const v=jt.caipNetworkIdToNumber(w==null?void 0:w.id);v&&await Dc(this.wagmiConfig,{chainId:v})},getApprovedCaipNetworksData:async()=>new Promise(w=>{var I,z;const C=new Map(t.state.connections).get(t.state.current||"");if(((I=C==null?void 0:C.connector)==null?void 0:I.id)===j.EMAIL_CONNECTOR_ID)w(pf());else if(((z=C==null?void 0:C.connector)==null?void 0:z.id)===j.WALLET_CONNECT_CONNECTOR_ID){const X=t.connectors.find(Z=>Z.id===j.WALLET_CONNECT_CONNECTOR_ID);w(df(X))}w({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},g={connectWalletConnect:async w=>{var z;const v=t.connectors.find(X=>X.id===j.WALLET_CONNECT_CONNECTOR_ID);if(!v)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await v.getProvider()).on("display_uri",X=>{w(X)});const I=jt.caipNetworkIdToNumber((z=this.getCaipNetwork())==null?void 0:z.id);await da(this.wagmiConfig,{connector:v,chainId:I})},connectExternal:async({id:w,provider:v,info:C})=>{var X,Z;const I=t.connectors.find(se=>se.id===w);if(!I)throw new Error("connectionControllerClient:connectExternal - connector is undefined");v&&C&&I.id===j.EIP6963_CONNECTOR_ID&&((X=I.setEip6963Wallet)==null||X.call(I,{provider:v,info:C}));const z=jt.caipNetworkIdToNumber((Z=this.getCaipNetwork())==null?void 0:Z.id);await da(this.wagmiConfig,{connector:I,chainId:z})},checkInstalled:w=>{const v=this.getConnectors().find(C=>C.type==="INJECTED");return w?v&&window!=null&&window.ethereum?w.some(C=>{var I;return!!((I=window.ethereum)!=null&&I[String(C)])}):!1:!!window.ethereum},disconnect:async()=>{await Lc(this.wagmiConfig)},signMessage:async w=>Mc(this.wagmiConfig,{message:w}),estimateGas:async w=>{try{return await Uc(this.wagmiConfig,{account:w.address,to:w.to,data:w.data,type:"legacy"})}catch{return 0n}},sendTransaction:async w=>{const{chainId:v}=Wc(this.wagmiConfig),C={account:w.address,to:w.to,value:w.value,gas:w.gas,gasPrice:w.gasPrice,data:w.data,chainId:v,type:"legacy"};await jc(this.wagmiConfig,C);const I=await Bc(this.wagmiConfig,C);return await zc(this.wagmiConfig,{hash:I,timeout:25e3}),I},parseUnits:Yc,formatUnits:Kc};super({networkControllerClient:d,connectionControllerClient:g,siweControllerClient:n,defaultChain:uf(r),tokens:Dh.getCaipTokens(o),_sdkVersion:s??`html-wagmi-${j.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),this.initEmailConnectorListeners([...t.connectors]),Rc(this.wagmiConfig,{onChange:w=>this.syncConnectors(w)}),Ic(this.wagmiConfig,{onChange:w=>this.syncAccount({...w})})}getState(){const e=super.getState();return{...e,selectedNetworkId:jt.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:jt.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){const t=e==null?void 0:e.map(n=>{var r,o;return{id:`${j.EIP155}:${n.id}`,name:n.name,imageId:kt.EIP155NetworkImageIds[n.id],imageUrl:(o=(r=this.options)==null?void 0:r.chainImages)==null?void 0:o[n.id]}});this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:n,connector:r}){if(this.resetAccount(),this.syncNetwork(e,n,t),t&&e&&n){const o=`${j.EIP155}:${n}:${e}`;this.setIsConnected(t),this.setCaipAddress(o),await Promise.all([this.syncProfile(e,n),this.syncBalance(e,n),this.syncConnectedWalletInfo(r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e,t,n){var o,s,a,d;const r=this.wagmiConfig.chains.find(g=>g.id===t);if(r||t){const g=(r==null?void 0:r.name)??(t==null?void 0:t.toString()),w=Number((r==null?void 0:r.id)??t),v=`${j.EIP155}:${w}`;if(this.setCaipNetwork({id:v,name:g,imageId:kt.EIP155NetworkImageIds[w],imageUrl:(s=(o=this.options)==null?void 0:o.chainImages)==null?void 0:s[w]}),n&&e&&t){const C=`${j.EIP155}:${w}:${e}`;if(this.setCaipAddress(C),(d=(a=r==null?void 0:r.blockExplorers)==null?void 0:a.default)!=null&&d.url){const I=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(I)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,t),await this.syncBalance(e,t))}}}async syncProfile(e,t){try{const{name:n,avatar:r}=await this.fetchIdentity({address:e});this.setProfileName(n),this.setProfileImage(r)}catch{if(t===qc.id){const n=await Pc(this.wagmiConfig,{address:e,chainId:t});if(n){this.setProfileName(n);const r=await Oc(this.wagmiConfig,{name:n,chainId:t});r&&this.setProfileImage(r)}}else this.setProfileName(null),this.setProfileImage(null)}}async syncBalance(e,t){var r,o,s;const n=this.wagmiConfig.chains.find(a=>a.id===t);if(n){const a=await Nc(this.wagmiConfig,{address:e,chainId:n.id,token:(s=(o=(r=this.options)==null?void 0:r.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(a.formatted,a.symbol);return}this.setBalance(void 0,void 0)}async syncConnectedWalletInfo(e){var t;if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===j.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){const n=await e.getProvider();n.session&&this.setConnectedWalletInfo({...n.session.peer.metadata,name:n.session.peer.metadata.name,icon:(t=n.session.peer.metadata.icons)==null?void 0:t[0]})}else this.setConnectedWalletInfo({name:e.name,icon:e.icon})}syncConnectors(e){const t=new Set,n=e.filter(a=>!t.has(a.id)&&t.add(a.id)),r=[],o=j.COINBASE_SDK_CONNECTOR_ID,s=n.find(a=>a.id===j.CONNECTOR_RDNS_MAP[j.COINBASE_CONNECTOR_ID]);n.forEach(({id:a,name:d,type:g,icon:w})=>{var I,z;s&&a===o||j.EMAIL_CONNECTOR_ID===a||r.push({id:a,explorerId:kt.ConnectorExplorerIds[a],imageUrl:((z=(I=this.options)==null?void 0:I.connectorImages)==null?void 0:z[a])??w,name:kt.ConnectorNamesMap[a]??d,imageId:kt.ConnectorImageIds[a],type:kt.ConnectorTypesMap[g]??"EXTERNAL",info:{rdns:a}})}),this.setConnectors(r),this.syncEmailConnector(n)}async syncEmailConnector(e){const t=e.find(({id:n})=>n===j.EMAIL_CONNECTOR_ID);if(t){const n=await t.getProvider();this.addConnector({id:j.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:n})}}async initEmailConnectorListeners(e){const t=e.find(({id:n})=>n===j.EMAIL_CONNECTOR_ID);t&&(await this.listenEmailConnector(t),await this.listenModal(t))}async listenEmailConnector(e){if(typeof window<"u"&&e){super.setLoading(!0);const t=await e.getProvider(),n=t.getLoginEmailUsed();super.setLoading(n),n&&this.setIsConnected(!1),t.onRpcRequest(r=>{if(pe.checkIfRequestExists(r))pe.checkIfRequestIsAllowed(r)||(super.isOpen()?super.isTransactionStackEmpty()||super.redirect("ApproveTransaction"):super.open({view:"ApproveTransaction"}));else{super.open();const o=pe.getRequestMethod(r);console.error(Re.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:o}),setTimeout(()=>{this.showErrorMessage(Re.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),t.rejectRpcRequest()}}),t.onRpcResponse(r=>{switch(pe.getResponseType(r)){case x.RPC_RESPONSE_TYPE_ERROR:{super.isOpen()&&(super.isTransactionStackEmpty()?super.close():super.popTransactionStack(!0));break}case x.RPC_RESPONSE_TYPE_TX:{super.isTransactionStackEmpty()?super.close():super.popTransactionStack();break}}}),t.onNotConnected(()=>{this.getIsConnectedState()||(this.setIsConnected(!1),super.setLoading(!1))}),t.onIsConnected(r=>{this.setIsConnected(!0),this.setSmartAccountDeployed(!!r.smartAccountDeployed),this.setPreferredAccountType(r.preferredAccountType),super.setLoading(!1)}),t.onGetSmartAccountEnabledNetworks(r=>{this.setSmartAccountEnabledNetworks(r)}),t.onSetPreferredAccount(({address:r,type:o})=>{var a;if(!r)return;const s=jt.caipNetworkIdToNumber((a=this.getCaipNetwork())==null?void 0:a.id);this.syncAccount({address:r,chainId:s,isConnected:!0,connector:e}).then(()=>this.setPreferredAccountType(o))})}}async listenModal(e){const t=await e.getProvider();this.subscribeState(n=>{n.open||t.rejectRpcRequest()})}}function wf(i){return Hc(e=>({id:j.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(t={}){const n=await this.getProvider(),{address:r,chainId:o}=await n.connect({chainId:t.chainId});return await n.getSmartAccountEnabledNetworks(),{accounts:[r],account:r,chainId:o,chain:{id:o,unsuported:!1}}},async disconnect(){await(await this.getProvider()).disconnect()},async getAccounts(){const t=await this.getProvider(),{address:n}=await t.connect();return e.emitter.emit("change",{accounts:[n]}),[n]},async getProvider(){return this.provider||(this.provider=new Ih(i.options.projectId)),Promise.resolve(this.provider)},async getChainId(){const t=await this.getProvider(),{chainId:n}=await t.getChainId();return n},async isAuthorized(){const t=await this.getProvider(),{isConnected:n}=await t.isConnected();return n},async switchChain({chainId:t}){try{const n=e.chains.find(o=>o.id===t);if(!n)throw new ha(new Error("chain not found on connector."));return await(await this.getProvider()).switchNetwork(t),e.emitter.emit("change",{chainId:Fr(t)}),n}catch(n){throw n instanceof Error?new ha(n):n}},onAccountsChanged(t){t.length===0?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(Xc)})},onChainChanged(t){const n=Fr(t);e.emitter.emit("change",{chainId:n})},async onConnect(t){const n=Fr(t.chainId),r=await this.getAccounts();e.emitter.emit("connect",{accounts:r,chainId:n})},async onDisconnect(t){await(await this.getProvider()).disconnect()}}))}function e5({projectId:i,chains:e,metadata:t,enableInjected:n,enableCoinbase:r,enableEmail:o,enableWalletConnect:s,enableEIP6963:a,...d}){const g=[],w=e.map(C=>[C.id,hf({chainId:C.id,projectId:i})]),v=Object.fromEntries(w);return s!==!1&&g.push(Vc({projectId:i,metadata:t,showQrModal:!1})),n!==!1&&g.push(Fc({shimDisconnect:!0})),r!==!1&&g.push(Zc({appName:(t==null?void 0:t.name)??"Unknown",appLogoUrl:(t==null?void 0:t.icons[0])??"Unknown",enableMobileWalletLink:!0})),o===!0&&g.push(wf({chains:[...e],options:{projectId:i}})),Gc({chains:e,multiInjectedProviderDiscovery:a!==!1,transports:v,...d,connectors:g})}function t5(i){return new ff({...i,_sdkVersion:`html-wagmi-${j.VERSION}`})}const ul={FIVE_MINUTES_IN_MS:3e5};class gf{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:n=ul.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:r=ul.FIVE_MINUTES_IN_MS,signOutOnAccountChange:o=!0,signOutOnDisconnect:s=!0,signOutOnNetworkChange:a=!0,...d}=e;this.options={enabled:t,nonceRefetchIntervalMs:n,sessionRefetchIntervalMs:r,signOutOnDisconnect:s,signOutOnAccountChange:o,signOutOnNetworkChange:a},this.methods=d}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){var d;const{address:e}=_.state,t=await this.methods.getNonce(e);if(!e)throw new Error("An address is required to create a SIWE message.");const n=jt.caipNetworkIdToNumber((d=k.state.caipNetwork)==null?void 0:d.id);if(!n)throw new Error("A chainId is required to create a SIWE message.");const r=this.methods.createMessage({address:e,nonce:t,chainId:n}),o=await B.signMessage(r);if(!await this.methods.verifyMessage({message:r,signature:o}))throw new Error("Error verifying SIWE signature");const a=await this.methods.getSession();if(!a)throw new Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(a),yr.navigateAfterNetworkSwitch(),a}async signOut(){return this.methods.signOut()}}const qe=ge({status:"uninitialized"}),Fo={state:qe,subscribeKey(i,e){return Me(qe,i,e)},subscribe(i){return We(qe,()=>i(qe))},_getClient(){if(!qe._client)throw new Error("SIWEController client not set");return qe._client},async getNonce(i){const t=await this._getClient().getNonce(i);return this.setNonce(t),t},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(i){const t=this._getClient().createMessage(i);return this.setMessage(t),t},async verifyMessage(i){return await this._getClient().verifyMessage(i)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const i=this._getClient();await i.signOut(),this.setStatus("ready"),(e=i.onSignOut)==null||e.call(i)},onSignIn(i){var t;const e=this._getClient();(t=e.onSignIn)==null||t.call(e,i)},onSignOut(){var e;const i=this._getClient();(e=i.onSignOut)==null||e.call(i)},setSIWEClient(i){qe._client=bi(i),qe.status="ready",R.setIsSiweEnabled(i.options.enabled)},setNonce(i){qe.nonce=i},setStatus(i){qe.status=i},setMessage(i){qe.message=i},setSession(i){qe.session=i}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=globalThis,la=Vn.ShadowRoot&&(Vn.ShadyCSS===void 0||Vn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ca=Symbol(),dl=new WeakMap;let Cc=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ca)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(la&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=dl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dl.set(t,e))}return e}toString(){return this.cssText}};const mf=i=>new Cc(typeof i=="string"?i:i+"",void 0,ca),vf=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Cc(t,i,ca)},bf=(i,e)=>{if(la)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=Vn.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},pl=la?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return mf(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yf,defineProperty:xf,getOwnPropertyDescriptor:Cf,getOwnPropertyNames:_f,getOwnPropertySymbols:Ef,getPrototypeOf:$f}=Object,Yt=globalThis,hl=Yt.trustedTypes,Af=hl?hl.emptyScript:"",as=Yt.reactiveElementPolyfillSupport,en=(i,e)=>i,wr={toAttribute(i,e){switch(e){case Boolean:i=i?Af:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ua=(i,e)=>!yf(i,e),fl={attribute:!0,type:String,converter:wr,reflect:!1,hasChanged:ua};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Yt.litPropertyMetadata??(Yt.litPropertyMetadata=new WeakMap);class no extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fl){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&xf(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:o}=Cf(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const a=r==null?void 0:r.call(this);o.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fl}static _$Ei(){if(this.hasOwnProperty(en("elementProperties")))return;const e=$f(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(en("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(en("properties"))){const t=this.properties,n=[..._f(t),...Ef(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(pl(r))}else e!==void 0&&t.push(pl(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bf(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var o;const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:wr).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var o;const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:wr;this._$Em=r,this[r]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??ua)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}no.elementStyles=[],no.shadowRootOptions={mode:"open"},no[en("elementProperties")]=new Map,no[en("finalized")]=new Map,as==null||as({ReactiveElement:no}),(Yt.reactiveElementVersions??(Yt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn=globalThis,gr=tn.trustedTypes,wl=gr?gr.createPolicy("lit-html",{createHTML:i=>i}):void 0,_c="$lit$",Ht=`lit$${Math.random().toFixed(9).slice(2)}$`,Ec="?"+Ht,Tf=`<${Ec}>`,Fi=document,_n=()=>Fi.createComment(""),En=i=>i===null||typeof i!="object"&&typeof i!="function",$c=Array.isArray,Sf=i=>$c(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ls=`[ 	
\f\r]`,zo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gl=/-->/g,ml=/>/g,fi=RegExp(`>|${ls}(?:([^\\s"'>=/]+)(${ls}*=${ls}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vl=/'/g,bl=/"/g,Ac=/^(?:script|style|textarea|title)$/i,kf=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),Tc=kf(1),Ro=Symbol.for("lit-noChange"),he=Symbol.for("lit-nothing"),yl=new WeakMap,mi=Fi.createTreeWalker(Fi,129);function Sc(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return wl!==void 0?wl.createHTML(e):e}const Rf=(i,e)=>{const t=i.length-1,n=[];let r,o=e===2?"<svg>":"",s=zo;for(let a=0;a<t;a++){const d=i[a];let g,w,v=-1,C=0;for(;C<d.length&&(s.lastIndex=C,w=s.exec(d),w!==null);)C=s.lastIndex,s===zo?w[1]==="!--"?s=gl:w[1]!==void 0?s=ml:w[2]!==void 0?(Ac.test(w[2])&&(r=RegExp("</"+w[2],"g")),s=fi):w[3]!==void 0&&(s=fi):s===fi?w[0]===">"?(s=r??zo,v=-1):w[1]===void 0?v=-2:(v=s.lastIndex-w[2].length,g=w[1],s=w[3]===void 0?fi:w[3]==='"'?bl:vl):s===bl||s===vl?s=fi:s===gl||s===ml?s=zo:(s=fi,r=void 0);const I=s===fi&&i[a+1].startsWith("/>")?" ":"";o+=s===zo?d+Tf:v>=0?(n.push(g),d.slice(0,v)+_c+d.slice(v)+Ht+I):d+Ht+(v===-2?a:I)}return[Sc(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class $n{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0;const a=e.length-1,d=this.parts,[g,w]=Rf(e,t);if(this.el=$n.createElement(g,n),mi.currentNode=this.el.content,t===2){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=mi.nextNode())!==null&&d.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(_c)){const C=w[s++],I=r.getAttribute(v).split(Ht),z=/([.?@])?(.*)/.exec(C);d.push({type:1,index:o,name:z[2],strings:I,ctor:z[1]==="."?Pf:z[1]==="?"?Of:z[1]==="@"?Nf:Vr}),r.removeAttribute(v)}else v.startsWith(Ht)&&(d.push({type:6,index:o}),r.removeAttribute(v));if(Ac.test(r.tagName)){const v=r.textContent.split(Ht),C=v.length-1;if(C>0){r.textContent=gr?gr.emptyScript:"";for(let I=0;I<C;I++)r.append(v[I],_n()),mi.nextNode(),d.push({type:2,index:++o});r.append(v[C],_n())}}}else if(r.nodeType===8)if(r.data===Ec)d.push({type:2,index:o});else{let v=-1;for(;(v=r.data.indexOf(Ht,v+1))!==-1;)d.push({type:7,index:o}),v+=Ht.length-1}o++}}static createElement(e,t){const n=Fi.createElement("template");return n.innerHTML=e,n}}function Io(i,e,t=i,n){var s,a;if(e===Ro)return e;let r=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl;const o=En(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=r:t._$Cl=r),r!==void 0&&(e=Io(i,r._$AS(i,e.values),r,n)),e}class If{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??Fi).importNode(t,!0);mi.currentNode=r;let o=mi.nextNode(),s=0,a=0,d=n[0];for(;d!==void 0;){if(s===d.index){let g;d.type===2?g=new Mn(o,o.nextSibling,this,e):d.type===1?g=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(g=new Df(o,this,e)),this._$AV.push(g),d=n[++a]}s!==(d==null?void 0:d.index)&&(o=mi.nextNode(),s++)}return mi.currentNode=Fi,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Mn{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=he,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Io(this,e,t),En(e)?e===he||e==null||e===""?(this._$AH!==he&&this._$AR(),this._$AH=he):e!==this._$AH&&e!==Ro&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Sf(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==he&&En(this._$AH)?this._$AA.nextSibling.data=e:this.T(Fi.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=$n.createElement(Sc(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const s=new If(r,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=yl.get(e.strings);return t===void 0&&yl.set(e.strings,t=new $n(e)),t}k(e){$c(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new Mn(this.S(_n()),this.S(_n()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Vr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=he,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=he}_$AI(e,t=this,n,r){const o=this.strings;let s=!1;if(o===void 0)e=Io(this,e,t,0),s=!En(e)||e!==this._$AH&&e!==Ro,s&&(this._$AH=e);else{const a=e;let d,g;for(e=o[0],d=0;d<o.length-1;d++)g=Io(this,a[n+d],t,d),g===Ro&&(g=this._$AH[d]),s||(s=!En(g)||g!==this._$AH[d]),g===he?e=he:e!==he&&(e+=(g??"")+o[d+1]),this._$AH[d]=g}s&&!r&&this.j(e)}j(e){e===he?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pf extends Vr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===he?void 0:e}}class Of extends Vr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==he)}}class Nf extends Vr{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=Io(this,e,t,0)??he)===Ro)return;const n=this._$AH,r=e===he&&n!==he||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==he&&(n===he||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Df{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Io(this,e)}}const cs=tn.litHtmlPolyfillSupport;cs==null||cs($n,Mn),(tn.litHtmlVersions??(tn.litHtmlVersions=[])).push("3.1.3");const Lf=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let r=n._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new Mn(e.insertBefore(_n(),o),o,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lo extends no{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ro}}var El;lo._$litElement$=!0,lo.finalized=!0,(El=globalThis.litElementHydrateSupport)==null||El.call(globalThis,{LitElement:lo});const us=globalThis.litElementPolyfillSupport;us==null||us({LitElement:lo});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const Mf=vf`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Uf=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let mr=class extends lo{constructor(){var e;super(...arguments),this.dappImageUrl=(e=R.state.metadata)==null?void 0:e.icons,this.walletImageUrl=re.getConnectedWalletImageUrl()}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return Tc`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};mr.styles=Mf;mr=Uf([f("w3m-connecting-siwe")],mr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wf={attribute:!0,type:String,converter:wr,reflect:!1,hasChanged:ua},jf=(i=Wf,e,t)=>{const{kind:n,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(t.name,i),n==="accessor"){const{name:s}=t;return{set(a){const d=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,d,i)},init(a){return a!==void 0&&this.P(s,void 0,i),a}}}if(n==="setter"){const{name:s}=t;return function(a){const d=this[s];e.call(this,a),this.requestUpdate(s,d,i)}}throw Error("Unsupported decorator location: "+n)};function Bf(i){return(e,t)=>typeof t=="object"?jf(i,e,t):((n,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(r,o):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zf(i){return Bf({...i,state:!0,attribute:!1})}var kc=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o};let vr=class extends lo{constructor(){var e;super(...arguments),this.dappName=(e=R.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return Tc`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,O.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{Fo.setStatus("loading");const e=await Fo.signIn();return Fo.setStatus("success"),O.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return F.showError("Signature declined"),Fo.setStatus("error"),O.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=_.state;e?(await B.disconnect(),H.close()):m.push("Connect"),O.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};kc([zf()],vr.prototype,"isSigning",void 0);vr=kc([f("w3m-connecting-siwe-view")],vr);function Hf(i){return new gf(i)}const br=Object.freeze(Object.defineProperty({__proto__:null,SIWEController:Fo,get W3mConnectingSiwe(){return mr},get W3mConnectingSiweView(){return vr},createSIWEConfig:Hf},Symbol.toStringTag,{value:"Module"}));export{t5 as c,e5 as d};
