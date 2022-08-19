import { iCreateQueue } from 'src/domain/useCases/icreateQueue';
import { inject, injectable } from 'tsyringe';
import { iCreateQueueRepository } from '../irepositories/icreateQueueRepository';

@injectable()
export class CreateQueueUseCase implements iCreateQueue {
  constructor (@inject('MessageBrokerRepository')
               private repository: iCreateQueueRepository) {}

  async execute (queueName: string): Promise<boolean> {
    try {
      await this.repository.createQueue(queueName);
      return true;
    } catch (err) {
      console.log('err', err);
      return false;
    }
  }
}
