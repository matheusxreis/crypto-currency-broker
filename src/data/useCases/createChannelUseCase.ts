import { iCreateChannel } from 'src/domain/useCases/icreateChannel';
import { inject, injectable } from 'tsyringe';
import { iCreateChannelRepository } from '../irepositories/icreateChannelRepository';

@injectable()
export class CreateChannelUseCase implements iCreateChannel {
  constructor (@inject('MessageBrokerRepository')
               private repository: iCreateChannelRepository) {}

  async execute (): Promise<boolean> {
    try {
      await this.repository.createChannel();
      return true;
    } catch (err) {
      console.log('err', err);
      return false;
    }
  }
}
