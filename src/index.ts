import 'reflect-metadata';
import './shared/container/container.ts';
import { config as loadEnvVariables } from 'dotenv';
import { container } from 'tsyringe';
import { GetCryptoCurrencyValueUseCase } from './data/useCases/getCryptoCurrencyValueUseCase';
import { Interval } from './shared/enums/interval';
import { CreateQueueUseCase } from './data/useCases/createQueueUseCase';
import { SendItemToQueueUseCase } from './data/useCases/sendItemToQueueUseCase';
import { CreateChannelUseCase } from './data/useCases/createChannelUseCase';
loadEnvVariables();

const getCryptoCurrencyValue = container.resolve(GetCryptoCurrencyValueUseCase);
const createChannel = container.resolve(CreateChannelUseCase);
const createQueue = container.resolve(CreateQueueUseCase);
const sendItemToQueue = container.resolve(SendItemToQueueUseCase);

const requestBitcoinBRLValue = async () => {
  return await getCryptoCurrencyValue.execute({ currency: 'brl', cryptoCurrency: 'bitcoin' });
};

const creatingMessageBroker = async () => {
  await createChannel.execute();
  createQueue.execute('testing');
};

async function init () {
  await creatingMessageBroker();
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
