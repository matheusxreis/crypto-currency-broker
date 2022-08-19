import 'reflect-metadata';
import './shared/container/container.ts';
import { config as loadEnvVariables } from 'dotenv';
import { container } from 'tsyringe';
import { GetCryptoCurrencyValueUseCase } from './data/useCases/getCryptoCurrencyValueUseCase';
loadEnvVariables();

const getCryptoCurrencyValue = container.resolve(GetCryptoCurrencyValueUseCase);

const start = async () => {
  const x = await getCryptoCurrencyValue.execute({ currency: 'brl', cryptoCurrency: 'bitcoin' });
  console.log(x);
};

start();
