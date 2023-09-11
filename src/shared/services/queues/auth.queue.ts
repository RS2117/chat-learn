import { IAuthJob } from '@auth/interfaces/auth.interface';
import { BaseQueue } from '@service/queues/base.queue';
import { authWorker } from '@workers/auth.worker';

class AuthQueue extends BaseQueue {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addUserJob(arg0: string, arg1: { value: import('../../../features/user/interfaces/user.interface').IUserDocument; }) {
    throw new Error('Method not implemented.');
  }
  constructor(){
    super('auth');
    this.processJob('addAuthUserToDB', 5, authWorker.addAuthUserToDB);
  }

  public addAuthUserJob(name: string, data: IAuthJob): void{
    this.addJob(name, data);
  }
}

export const authQueue: AuthQueue = new AuthQueue();

