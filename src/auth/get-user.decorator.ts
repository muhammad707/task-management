import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export { GetUser };
