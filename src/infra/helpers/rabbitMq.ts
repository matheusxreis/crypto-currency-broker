import { Channel, connect, Connection } from 'amqplib';

export class RabbitMq {
  readonly conn:Connection;
  static INSTANCE: Connection;

  constructor (connection: Connection) {
    this.conn = connection;
  }

  static async connection (): Promise<Connection> {
    if (!this.INSTANCE) {
      const conn = await connect(`${process.env.AMQP_SERVER}`);
      this.INSTANCE = new RabbitMq(conn).conn;
    }
    return this.INSTANCE;
  }

  static async channel (): Promise<Channel> {
    return await this.INSTANCE.createChannel();
  }
}
