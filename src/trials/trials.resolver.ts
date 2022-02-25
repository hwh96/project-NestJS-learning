import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { TrialsService } from './trials.service';
// import { Prisma } from '@prisma/client';
import { OrderByParams } from '../graphql';
import { TrialCreateInput } from '../@generated/prisma-nestjs-graphql/trial/trial-create.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Trial')
export class TrialsResolver {
  constructor(private readonly trialsService: TrialsService) {}

  @Mutation('createTrial')
  async create(
    @Args('createTrialInput') createTrialInput: TrialCreateInput, //Prisma.TrialCreateInput
  ) {
    const created = await this.trialsService.create(createTrialInput);

    const total = await this.trialsService.getTotal();

    pubSub.publish('totalUpdated', { totalUpdated: { total } });

    return created;
  }

  @Subscription()
  totalUpdated() {
    return pubSub.asyncIterator('totalUpdated');
  }

  @Query('trials')
  findAll(
    @Args('orderBy')
    orderBy?: OrderByParams,
  ) {
    return this.trialsService.findAll(orderBy);
  }

  @Query('trial')
  findOne(@Args('id') id: number) {
    return this.trialsService.findOne({ id });
  }

  @Query('totalTrial')
  totalTrial() {
    return this.trialsService.getTotal();
  }
}
