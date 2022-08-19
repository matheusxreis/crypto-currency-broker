export interface iSendItemToQueueRepository {
sendItemToQueue(queueName:string, item:string):Promise<void>
}
