import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class PostAuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        return request.isAuthenticated();
    }
}