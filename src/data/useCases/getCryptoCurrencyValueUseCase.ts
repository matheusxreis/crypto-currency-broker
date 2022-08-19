import { Candle } from '../../domain/entities/candle';
import { iGetCryptoCurrencyValue } from 'src/domain/useCases/igetCryptoCurrencyValue';
import { injectable, inject } from 'tsyringe';
import { iGetCryptoCurrencyValueRepository } from '../irepositories/igetCryptoCurrencyValueRepository';

@injectable()
export class GetCryptoCurrencyValueUseCase implements iGetCryptoCurrencyValue {
  constructor (@inject('CryptoCurrencyRepository') private repository: iGetCryptoCurrencyValueRepository) {}

  async execute (params: { cryptoCurrency: string; currency: string; }): Promise<Candle> {
    const { cryptoCurrency, currency } = params;
    try {
      const response = await this.repository.getCryptoCurrencyValue({ cryptoCurrency, currency });
      const value: number = response[cryptoCurrency][currency];
      const candle = new Candle(value, currency, cryptoCurrency, value, value);
      return candle;
    } catch (err) {
      console.log(err);
      return new Candle(1, '1', '1', 1, 2);
    }
  }
}
