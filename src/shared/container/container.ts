import { CryptoCurrencyRepository } from '../../infra/repositories/CryptoCurrencyRepository';
import { container } from 'tsyringe';

container.registerSingleton('CryptoCurrencyRepository', CryptoCurrencyRepository);
