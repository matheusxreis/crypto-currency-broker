import { Candle } from 'src/domain/entities/candle';
import { iGetCryptoCurrencyValue } from 'src/domain/useCases/igetCryptoCurrencyValue';
import { iGetCryptoCurrencyValueRepository } from '../irepositories/igetCryptoCurrencyValueRepository';

export class GetCryptoCurrencyValueUseCase implements iGetCryptoCurrencyValue {
  constructor (private repository: iGetCryptoCurrencyValueRepository) {}
  async execute (params: { cryptoCurrency: string; currency: string; }): Promise<Candle> {
    const { cryptoCurrency, currency } = params;
    const response = await this.repository.getCryptoCurrencyValue({ cryptoCurrency, currency });
    const value: number = response[cryptoCurrency][currency];
    const candle = new Candle(value, currency, cryptoCurrency, value, value);
    return candle;
  }
}
