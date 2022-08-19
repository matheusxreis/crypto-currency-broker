import { iCreateChannel } from 'src/domain/useCases/icreateChannel';
import { inject, injectable } from 'tsyringe';
import { iCreateChannelRepository } from '../irepositories/icreateChannelRepository';

@injectable()
export class CreateChannelUseCase implements iCreateChannel {
  constructor (@inject('MessageBrokerRepository')
               private repository: iCreateChannelRepository) {}

  async execute (channelName: string): Promise<boolean> {
    try {
      this.repository.createChannel(channelName);
      return true;
    } catch (err) {
      console.log('err', err);
      return false;
    }
  }
}
