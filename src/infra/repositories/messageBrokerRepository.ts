import { Channel } from 'amqplib';
import { iCreateQueueRepository } from 'src/data/irepositories/icreateQueueRepository';
import { iSendItemToQueueRepository } from 'src/data/irepositories/isendItemToQueueRepository';
import { RabbitMq } from '../helpers/rabbitMq';

export class MessageBrokerRepository implements iCreateQueueRepository, iSendItemToQueueRepository {
  private channel?: Channel;

  async createChannel () {
    console.log('Created the connection');
    const conn = await RabbitMq.connection();
    this.channel = await conn.createChannel();
  }

  async createQueue (queueName: string): Promise<void> {
    if (!this.channel) {
      throw new Error('No channel created');
    }
    await this.channel.assertQueue(queueName);
    console.log('Created the queue');
  }

  sendItemToQueue (queueName: string, item: string): Promise<void> {
    if (!this.channel) {
      throw new Error('No channel created');
    }
    throw new Error('Method not implemented.');
  }
}
