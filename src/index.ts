import { SDKConfig } from "./client";
import { UsersResource } from "./resources/users";

export class MySDK {
  public users: UsersResource;

  constructor(config: SDKConfig) {
    this.users = new UsersResource(config);
  }
}

export default MySDK;
