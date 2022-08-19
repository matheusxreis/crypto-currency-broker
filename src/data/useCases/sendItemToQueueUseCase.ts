import { iSendItemToQueue } from 'src/domain/useCases/isendItemToQueue';
import { inject, injectable } from 'tsyringe';
import { iSendItemToQueueRepository } from '../irepositories/isendItemToQueueRepository';

@injectable()
export class SendItemToQueueUseCase implements iSendItemToQueue {
  constructor (@inject('MessageBrokerRepository')
               private repository: iSendItemToQueueRepository) {}

  async execute (queueName: string, item:string): Promise<boolean> {
    try {
      this.repository.sendItemToQueue(queueName, item);
      return true;
    } catch (err) {
      console.log('err', err);
      return false;
    }
  }
}
