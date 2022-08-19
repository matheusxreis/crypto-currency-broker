export interface iSendItemToQueue {
execute(queue:string, item:string):Promise<boolean>
}
