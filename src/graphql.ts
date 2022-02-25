
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTrialInput {
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Trial {
    id: number;
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract trials(orderBy?: Nullable<OrderByParams>): Nullable<Trial>[] | Promise<Nullable<Trial>[]>;

    abstract trial(id: number): Nullable<Trial> | Promise<Nullable<Trial>>;

    abstract totalTrial(): number | Promise<number>;
}

export abstract class IMutation {
    abstract createTrial(createTrialInput: CreateTrialInput): Trial | Promise<Trial>;
}

export class Result {
    total: number;
}

export abstract class ISubscription {
    abstract totalUpdated(): Nullable<Result> | Promise<Nullable<Result>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
