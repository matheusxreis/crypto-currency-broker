import 'reflect-metadata';
import './shared/container/container.ts';
import { config as loadEnvVariables } from 'dotenv';
import { container } from 'tsyringe';
import { GetCryptoCurrencyValueUseCase } from './data/useCases/getCryptoCurrencyValueUseCase';
import { Interval } from './shared/enums/interval';
loadEnvVariables();

const getCryptoCurrencyValue = container.resolve(GetCryptoCurrencyValueUseCase);

const requestBitcoinBRLValue = async () => {
  return await getCryptoCurrencyValue.execute({ currency: 'brl', cryptoCurrency: 'bitcoin' });
};

async function init () {
  while (true) {
    const loopTimes = Interval.ONE_MINUTE / Interval.TEN_SECONDS;
    console.log('STARTING.....');
    for (let i = 0; i < loopTimes; i++) {
      const candle = await requestBitcoinBRLValue();
      console.log(`Consulting....${i + 1} time from ${loopTimes}`);

      console.log(candle);
      await new Promise(resolve => setTimeout(resolve, Interval.TEN_SECONDS));
    }
    console.log('ENDING.....');
  }
}

init();
