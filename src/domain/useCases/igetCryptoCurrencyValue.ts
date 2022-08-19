import { Candle } from '../entities/candle';

type GetCryptoCurrencyValueParams = {
cryptoCurrency: string,
currency: string
}

export interface iGetCryptoCurrencyValue {
execute(params: GetCryptoCurrencyValueParams):Promise<Candle>
}
