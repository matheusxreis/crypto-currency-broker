export interface iCreateQueueRepository {
   createQueue(queueName:string):Promise<void>
}
