import { Module } from '@nestjs/common';
import { TrialsService } from './trials.service';
import { TrialsResolver } from './trials.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PrismaService, TrialsResolver, TrialsService],
})
export class TrialsModule {}
