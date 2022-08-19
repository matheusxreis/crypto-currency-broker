
type GetCryptoCurrencyValueRepositoryParams = {
cryptoCurrency: string,
currency: string
}

export interface iGetCryptoCurrencyValueRepository {
getCryptoCurrencyValue<T=any>(params:GetCryptoCurrencyValueRepositoryParams): Promise<T>
}
