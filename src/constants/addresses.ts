import { Networks } from "./blockchain";

const AVAX_MAINNET = {
  PRESALE_ADDRESS: "",
  AUXL_ADDRESS: "0xC1e77Bb87BAa3A6918dEb560Cd0874C7662b344e",
  
};

const AVAX_TESTNET = {
  AUXL_ADDRESS: "0xC7FA9a29dD6F0AAb0E582B94F572B0CfdE134249",
  PRESALE_ADDRESS: ""
  
};

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.AVAX) return AVAX_MAINNET;
  else if (networkID === Networks.TESTNET) return AVAX_TESTNET;

  throw Error("Network don't support");
};
