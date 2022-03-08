import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/BERRY.png';
import tShareLogo from '../../assets/img/BSHARE.png';
// import tombLogoPNG from '../../assets/img/BERRY.png';
// import tShareLogoPNG from '../../assets/img/t_BSHARE-01.png';
import tBondLogo from '../../assets/img/BBOND.png';

import tombAvaxLpLogo from '../../assets/img/BERRY-WAVAX.png';
import tshareAvaxLpLogo from '../../assets/img/BSHARE-WAVAX.png';

import WAVAXLogo from '../../assets/img/avax_logo.svg';
import wethLogo from '../../assets/img/weth.png';
import shibaLogo from '../../assets/img/mimlogo.png';

import tombtshares from '../../assets/img/BERRY-BSHARE.png';

import usdc from '../../assets/img/USDC.svg';
import joeLogo from '../../assets/img/JOE.svg';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  // TOMBPNG: tombLogoPNG,
  // TSHAREPNG: tShareLogoPNG,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  WAVAX: WAVAXLogo,
  WETH: wethLogo,
  MIM: shibaLogo,
  // RTOMB: rtombLogo,
  'BERRY-AVAX-LP': tombAvaxLpLogo,
  'BSHARE-AVAX-LP': tshareAvaxLpLogo,
  'BERRY-BSHARE-LP': tombtshares,
  'USDC': usdc,
  JOE: joeLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    return <img src={logosBySymbol["TOMB"]} alt={`Tomb Logo`} width={size} height={size} />;
    // throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
