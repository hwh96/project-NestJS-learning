import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderByParams } from '../graphql';

@Injectable()
export class TrialsService {
  constructor(private prisma: PrismaService) {}
  create(createTrialInput: Prisma.TrialCreateInput) {
    return this.prisma.trial.create({
      data: createTrialInput,
    });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.trial.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(trialWhereUniqueInput: Prisma.TrialWhereUniqueInput) {
    return this.prisma.trial.findUnique({
      where: trialWhereUniqueInput,
    });
  }

  async getTotal() {
    const response = await this.prisma.trial.aggregate({
      _sum: {
        count: true,
      },
    });

    return response._sum.count;
  }
}
