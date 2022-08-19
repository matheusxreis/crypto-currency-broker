export interface iSendItemToQueue {
execute(queue:string, item:string):Promise<void>
}
