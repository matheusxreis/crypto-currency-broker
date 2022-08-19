import { CryptoCurrencyRepository } from 'src/infra/repositories/CryptoCurrencyRepository';
import { MessageBrokerRepository } from 'src/infra/repositories/messageBrokerRepository';
import { container } from 'tsyringe';

container.registerSingleton('CryptoCurrencyRepository', CryptoCurrencyRepository);
container.registerSingleton('MessageBrokerRepository', MessageBrokerRepository);
