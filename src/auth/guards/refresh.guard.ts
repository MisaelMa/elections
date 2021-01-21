import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RefreshGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        // Add your custom authentication logic here
        // for example, call super.logIn(request) to establish a session
        // throw new UnauthorizedException();
        return super.canActivate(context);
    }

    handleRequest(err: any, user: any, info: any, context: ExecutionContext, status?: any) {
        // You can throw an exception based on either "info" or "err" arguments
        console.log('refresh guards');
        if (err || !user) {
            throw err || new UnauthorizedException();
        }

        if (!context.switchToHttp().getRequest().headers.authorization) {
            throw err || new UnauthorizedException();
        }
        const token = context.switchToHttp().getRequest().headers.authorization.replace('Bearer ', '');
        user.token = token;
        return user;
    }
}
