import { Controller, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
@UseGuards(JwtGuard)
@Controller('election')
export class ElectionController {}
