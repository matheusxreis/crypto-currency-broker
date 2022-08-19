import { iGetCryptoCurrencyValueRepository } from 'src/data/irepositories/igetCryptoCurrencyValueRepository';
import { api } from '../helpers/api';

export class CryptoCurrencyRepository implements iGetCryptoCurrencyValueRepository {
  async getCryptoCurrencyValue<T = any> (params: { cryptoCurrency: string; currency: string; }): Promise<T> {
    const { data } = await api.get(`?ids=${params.cryptoCurrency}&vs_currencies=${params.currency}`);
    return data;
  }
}
