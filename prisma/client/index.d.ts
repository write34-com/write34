
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Prompts
 * 
 */
export type Prompts = $Result.DefaultSelection<Prisma.$PromptsPayload>
/**
 * Model WorldInfos
 * 
 */
export type WorldInfos = $Result.DefaultSelection<Prisma.$WorldInfosPayload>
/**
 * Model AetherPrompts
 * 
 */
export type AetherPrompts = $Result.DefaultSelection<Prisma.$AetherPromptsPayload>
/**
 * Model AetherWorldInfos
 * 
 */
export type AetherWorldInfos = $Result.DefaultSelection<Prisma.$AetherWorldInfosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prompts
 * const prompts = await prisma.prompts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Prompts
   * const prompts = await prisma.prompts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.prompts`: Exposes CRUD operations for the **Prompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompts.findMany()
    * ```
    */
  get prompts(): Prisma.PromptsDelegate<ExtArgs>;

  /**
   * `prisma.worldInfos`: Exposes CRUD operations for the **WorldInfos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldInfos
    * const worldInfos = await prisma.worldInfos.findMany()
    * ```
    */
  get worldInfos(): Prisma.WorldInfosDelegate<ExtArgs>;

  /**
   * `prisma.aetherPrompts`: Exposes CRUD operations for the **AetherPrompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AetherPrompts
    * const aetherPrompts = await prisma.aetherPrompts.findMany()
    * ```
    */
  get aetherPrompts(): Prisma.AetherPromptsDelegate<ExtArgs>;

  /**
   * `prisma.aetherWorldInfos`: Exposes CRUD operations for the **AetherWorldInfos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AetherWorldInfos
    * const aetherWorldInfos = await prisma.aetherWorldInfos.findMany()
    * ```
    */
  get aetherWorldInfos(): Prisma.AetherWorldInfosDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Prompts: 'Prompts',
    WorldInfos: 'WorldInfos',
    AetherPrompts: 'AetherPrompts',
    AetherWorldInfos: 'AetherWorldInfos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'prompts' | 'worldInfos' | 'aetherPrompts' | 'aetherWorldInfos'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Prompts: {
        payload: Prisma.$PromptsPayload<ExtArgs>
        fields: Prisma.PromptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          findFirst: {
            args: Prisma.PromptsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          findMany: {
            args: Prisma.PromptsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>[]
          }
          create: {
            args: Prisma.PromptsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          delete: {
            args: Prisma.PromptsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          update: {
            args: Prisma.PromptsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          deleteMany: {
            args: Prisma.PromptsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromptsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromptsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          aggregate: {
            args: Prisma.PromptsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrompts>
          }
          groupBy: {
            args: Prisma.PromptsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptsCountArgs<ExtArgs>,
            result: $Utils.Optional<PromptsCountAggregateOutputType> | number
          }
        }
      }
      WorldInfos: {
        payload: Prisma.$WorldInfosPayload<ExtArgs>
        fields: Prisma.WorldInfosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldInfosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldInfosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          findFirst: {
            args: Prisma.WorldInfosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldInfosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          findMany: {
            args: Prisma.WorldInfosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>[]
          }
          create: {
            args: Prisma.WorldInfosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          delete: {
            args: Prisma.WorldInfosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          update: {
            args: Prisma.WorldInfosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          deleteMany: {
            args: Prisma.WorldInfosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorldInfosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorldInfosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldInfosPayload>
          }
          aggregate: {
            args: Prisma.WorldInfosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorldInfos>
          }
          groupBy: {
            args: Prisma.WorldInfosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorldInfosGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldInfosCountArgs<ExtArgs>,
            result: $Utils.Optional<WorldInfosCountAggregateOutputType> | number
          }
        }
      }
      AetherPrompts: {
        payload: Prisma.$AetherPromptsPayload<ExtArgs>
        fields: Prisma.AetherPromptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AetherPromptsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AetherPromptsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          findFirst: {
            args: Prisma.AetherPromptsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AetherPromptsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          findMany: {
            args: Prisma.AetherPromptsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>[]
          }
          create: {
            args: Prisma.AetherPromptsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          delete: {
            args: Prisma.AetherPromptsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          update: {
            args: Prisma.AetherPromptsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          deleteMany: {
            args: Prisma.AetherPromptsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AetherPromptsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AetherPromptsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherPromptsPayload>
          }
          aggregate: {
            args: Prisma.AetherPromptsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAetherPrompts>
          }
          groupBy: {
            args: Prisma.AetherPromptsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AetherPromptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AetherPromptsCountArgs<ExtArgs>,
            result: $Utils.Optional<AetherPromptsCountAggregateOutputType> | number
          }
        }
      }
      AetherWorldInfos: {
        payload: Prisma.$AetherWorldInfosPayload<ExtArgs>
        fields: Prisma.AetherWorldInfosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AetherWorldInfosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          findFirst: {
            args: Prisma.AetherWorldInfosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AetherWorldInfosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          findMany: {
            args: Prisma.AetherWorldInfosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>[]
          }
          create: {
            args: Prisma.AetherWorldInfosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          delete: {
            args: Prisma.AetherWorldInfosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          update: {
            args: Prisma.AetherWorldInfosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          deleteMany: {
            args: Prisma.AetherWorldInfosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AetherWorldInfosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AetherWorldInfosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AetherWorldInfosPayload>
          }
          aggregate: {
            args: Prisma.AetherWorldInfosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAetherWorldInfos>
          }
          groupBy: {
            args: Prisma.AetherWorldInfosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AetherWorldInfosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AetherWorldInfosCountArgs<ExtArgs>,
            result: $Utils.Optional<AetherWorldInfosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PromptsCountOutputType
   */

  export type PromptsCountOutputType = {
    worldInfos: number
  }

  export type PromptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worldInfos?: boolean | PromptsCountOutputTypeCountWorldInfosArgs
  }

  // Custom InputTypes

  /**
   * PromptsCountOutputType without action
   */
  export type PromptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptsCountOutputType
     */
    select?: PromptsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PromptsCountOutputType without action
   */
  export type PromptsCountOutputTypeCountWorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldInfosWhereInput
  }



  /**
   * Count Type AetherPromptsCountOutputType
   */

  export type AetherPromptsCountOutputType = {
    worldInfos: number
  }

  export type AetherPromptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worldInfos?: boolean | AetherPromptsCountOutputTypeCountWorldInfosArgs
  }

  // Custom InputTypes

  /**
   * AetherPromptsCountOutputType without action
   */
  export type AetherPromptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPromptsCountOutputType
     */
    select?: AetherPromptsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AetherPromptsCountOutputType without action
   */
  export type AetherPromptsCountOutputTypeCountWorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AetherWorldInfosWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Prompts
   */

  export type AggregatePrompts = {
    _count: PromptsCountAggregateOutputType | null
    _avg: PromptsAvgAggregateOutputType | null
    _sum: PromptsSumAggregateOutputType | null
    _min: PromptsMinAggregateOutputType | null
    _max: PromptsMaxAggregateOutputType | null
  }

  export type PromptsAvgAggregateOutputType = {
    aetherId: number | null
    nsfw: number | null
  }

  export type PromptsSumAggregateOutputType = {
    aetherId: number | null
    nsfw: number | null
  }

  export type PromptsMinAggregateOutputType = {
    id: string | null
    aetherId: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type PromptsMaxAggregateOutputType = {
    id: string | null
    aetherId: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type PromptsCountAggregateOutputType = {
    id: number
    aetherId: number
    authorsNote: number
    description: number
    memory: number
    nsfw: number
    parentId: number
    promptContent: number
    publishDate: number
    quests: number
    tags: number
    title: number
    scriptZip: number
    novelAiScenario: number
    holoAiScenario: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    _all: number
  }


  export type PromptsAvgAggregateInputType = {
    aetherId?: true
    nsfw?: true
  }

  export type PromptsSumAggregateInputType = {
    aetherId?: true
    nsfw?: true
  }

  export type PromptsMinAggregateInputType = {
    id?: true
    aetherId?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type PromptsMaxAggregateInputType = {
    id?: true
    aetherId?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type PromptsCountAggregateInputType = {
    id?: true
    aetherId?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    _all?: true
  }

  export type PromptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to aggregate.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptsMaxAggregateInputType
  }

  export type GetPromptsAggregateType<T extends PromptsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompts[P]>
      : GetScalarType<T[P], AggregatePrompts[P]>
  }




  export type PromptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptsWhereInput
    orderBy?: PromptsOrderByWithAggregationInput | PromptsOrderByWithAggregationInput[]
    by: PromptsScalarFieldEnum[] | PromptsScalarFieldEnum
    having?: PromptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptsCountAggregateInputType | true
    _avg?: PromptsAvgAggregateInputType
    _sum?: PromptsSumAggregateInputType
    _min?: PromptsMinAggregateInputType
    _max?: PromptsMaxAggregateInputType
  }

  export type PromptsGroupByOutputType = {
    id: string
    aetherId: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number
    parentId: string | null
    promptContent: string
    publishDate: string | null
    quests: string | null
    tags: string
    title: string
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    _count: PromptsCountAggregateOutputType | null
    _avg: PromptsAvgAggregateOutputType | null
    _sum: PromptsSumAggregateOutputType | null
    _min: PromptsMinAggregateOutputType | null
    _max: PromptsMaxAggregateOutputType | null
  }

  type GetPromptsGroupByPayload<T extends PromptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptsGroupByOutputType[P]>
            : GetScalarType<T[P], PromptsGroupByOutputType[P]>
        }
      >
    >


  export type PromptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aetherId?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    worldInfos?: boolean | Prompts$worldInfosArgs<ExtArgs>
    _count?: boolean | PromptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompts"]>

  export type PromptsSelectScalar = {
    id?: boolean
    aetherId?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
  }

  export type PromptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worldInfos?: boolean | Prompts$worldInfosArgs<ExtArgs>
    _count?: boolean | PromptsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PromptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompts"
    objects: {
      worldInfos: Prisma.$WorldInfosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aetherId: number | null
      authorsNote: string | null
      description: string | null
      memory: string | null
      nsfw: number
      parentId: string | null
      promptContent: string
      publishDate: string | null
      quests: string | null
      tags: string
      title: string
      scriptZip: Buffer | null
      novelAiScenario: string | null
      holoAiScenario: string | null
      correlationId: string
      dateCreated: string
      dateEdited: string | null
    }, ExtArgs["result"]["prompts"]>
    composites: {}
  }


  type PromptsGetPayload<S extends boolean | null | undefined | PromptsDefaultArgs> = $Result.GetResult<Prisma.$PromptsPayload, S>

  type PromptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromptsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PromptsCountAggregateInputType | true
    }

  export interface PromptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompts'], meta: { name: 'Prompts' } }
    /**
     * Find zero or one Prompts that matches the filter.
     * @param {PromptsFindUniqueArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromptsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsFindUniqueArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Prompts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PromptsFindUniqueOrThrowArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromptsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindFirstArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromptsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindFirstArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Prompts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindFirstOrThrowArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromptsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompts.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptsWithIdOnly = await prisma.prompts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromptsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Prompts.
     * @param {PromptsCreateArgs} args - Arguments to create a Prompts.
     * @example
     * // Create one Prompts
     * const Prompts = await prisma.prompts.create({
     *   data: {
     *     // ... data to create a Prompts
     *   }
     * })
     * 
    **/
    create<T extends PromptsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsCreateArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Prompts.
     * @param {PromptsDeleteArgs} args - Arguments to delete one Prompts.
     * @example
     * // Delete one Prompts
     * const Prompts = await prisma.prompts.delete({
     *   where: {
     *     // ... filter to delete one Prompts
     *   }
     * })
     * 
    **/
    delete<T extends PromptsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsDeleteArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Prompts.
     * @param {PromptsUpdateArgs} args - Arguments to update one Prompts.
     * @example
     * // Update one Prompts
     * const prompts = await prisma.prompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromptsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsUpdateArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Prompts.
     * @param {PromptsDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromptsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompts = await prisma.prompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromptsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prompts.
     * @param {PromptsUpsertArgs} args - Arguments to update or create a Prompts.
     * @example
     * // Update or create a Prompts
     * const prompts = await prisma.prompts.upsert({
     *   create: {
     *     // ... data to create a Prompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompts we want to update
     *   }
     * })
    **/
    upsert<T extends PromptsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromptsUpsertArgs<ExtArgs>>
    ): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompts.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptsCountArgs>(
      args?: Subset<T, PromptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptsAggregateArgs>(args: Subset<T, PromptsAggregateArgs>): Prisma.PrismaPromise<GetPromptsAggregateType<T>>

    /**
     * Group by Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptsGroupByArgs['orderBy'] }
        : { orderBy?: PromptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompts model
   */
  readonly fields: PromptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    worldInfos<T extends Prompts$worldInfosArgs<ExtArgs> = {}>(args?: Subset<T, Prompts$worldInfosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Prompts model
   */ 
  interface PromptsFieldRefs {
    readonly id: FieldRef<"Prompts", 'String'>
    readonly aetherId: FieldRef<"Prompts", 'Int'>
    readonly authorsNote: FieldRef<"Prompts", 'String'>
    readonly description: FieldRef<"Prompts", 'String'>
    readonly memory: FieldRef<"Prompts", 'String'>
    readonly nsfw: FieldRef<"Prompts", 'Int'>
    readonly parentId: FieldRef<"Prompts", 'String'>
    readonly promptContent: FieldRef<"Prompts", 'String'>
    readonly publishDate: FieldRef<"Prompts", 'String'>
    readonly quests: FieldRef<"Prompts", 'String'>
    readonly tags: FieldRef<"Prompts", 'String'>
    readonly title: FieldRef<"Prompts", 'String'>
    readonly scriptZip: FieldRef<"Prompts", 'Bytes'>
    readonly novelAiScenario: FieldRef<"Prompts", 'String'>
    readonly holoAiScenario: FieldRef<"Prompts", 'String'>
    readonly correlationId: FieldRef<"Prompts", 'String'>
    readonly dateCreated: FieldRef<"Prompts", 'String'>
    readonly dateEdited: FieldRef<"Prompts", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Prompts findUnique
   */
  export type PromptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts findUniqueOrThrow
   */
  export type PromptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts findFirst
   */
  export type PromptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }


  /**
   * Prompts findFirstOrThrow
   */
  export type PromptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }


  /**
   * Prompts findMany
   */
  export type PromptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }


  /**
   * Prompts create
   */
  export type PromptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompts.
     */
    data: XOR<PromptsCreateInput, PromptsUncheckedCreateInput>
  }


  /**
   * Prompts update
   */
  export type PromptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompts.
     */
    data: XOR<PromptsUpdateInput, PromptsUncheckedUpdateInput>
    /**
     * Choose, which Prompts to update.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts updateMany
   */
  export type PromptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptsUpdateManyMutationInput, PromptsUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptsWhereInput
  }


  /**
   * Prompts upsert
   */
  export type PromptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompts to update in case it exists.
     */
    where: PromptsWhereUniqueInput
    /**
     * In case the Prompts found by the `where` argument doesn't exist, create a new Prompts with this data.
     */
    create: XOR<PromptsCreateInput, PromptsUncheckedCreateInput>
    /**
     * In case the Prompts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptsUpdateInput, PromptsUncheckedUpdateInput>
  }


  /**
   * Prompts delete
   */
  export type PromptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter which Prompts to delete.
     */
    where: PromptsWhereUniqueInput
  }


  /**
   * Prompts deleteMany
   */
  export type PromptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptsWhereInput
  }


  /**
   * Prompts.worldInfos
   */
  export type Prompts$worldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    where?: WorldInfosWhereInput
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    cursor?: WorldInfosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * Prompts without action
   */
  export type PromptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromptsInclude<ExtArgs> | null
  }



  /**
   * Model WorldInfos
   */

  export type AggregateWorldInfos = {
    _count: WorldInfosCountAggregateOutputType | null
    _avg: WorldInfosAvgAggregateOutputType | null
    _sum: WorldInfosSumAggregateOutputType | null
    _min: WorldInfosMinAggregateOutputType | null
    _max: WorldInfosMaxAggregateOutputType | null
  }

  export type WorldInfosAvgAggregateOutputType = {
    aetherId: number | null
  }

  export type WorldInfosSumAggregateOutputType = {
    aetherId: number | null
  }

  export type WorldInfosMinAggregateOutputType = {
    id: string | null
    aetherId: number | null
    entry: string | null
    keys: string | null
    promptId: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type WorldInfosMaxAggregateOutputType = {
    id: string | null
    aetherId: number | null
    entry: string | null
    keys: string | null
    promptId: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type WorldInfosCountAggregateOutputType = {
    id: number
    aetherId: number
    entry: number
    keys: number
    promptId: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    _all: number
  }


  export type WorldInfosAvgAggregateInputType = {
    aetherId?: true
  }

  export type WorldInfosSumAggregateInputType = {
    aetherId?: true
  }

  export type WorldInfosMinAggregateInputType = {
    id?: true
    aetherId?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type WorldInfosMaxAggregateInputType = {
    id?: true
    aetherId?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type WorldInfosCountAggregateInputType = {
    id?: true
    aetherId?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    _all?: true
  }

  export type WorldInfosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldInfos to aggregate.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldInfos
    **/
    _count?: true | WorldInfosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorldInfosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorldInfosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldInfosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldInfosMaxAggregateInputType
  }

  export type GetWorldInfosAggregateType<T extends WorldInfosAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldInfos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldInfos[P]>
      : GetScalarType<T[P], AggregateWorldInfos[P]>
  }




  export type WorldInfosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldInfosWhereInput
    orderBy?: WorldInfosOrderByWithAggregationInput | WorldInfosOrderByWithAggregationInput[]
    by: WorldInfosScalarFieldEnum[] | WorldInfosScalarFieldEnum
    having?: WorldInfosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldInfosCountAggregateInputType | true
    _avg?: WorldInfosAvgAggregateInputType
    _sum?: WorldInfosSumAggregateInputType
    _min?: WorldInfosMinAggregateInputType
    _max?: WorldInfosMaxAggregateInputType
  }

  export type WorldInfosGroupByOutputType = {
    id: string
    aetherId: number | null
    entry: string
    keys: string
    promptId: string
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    _count: WorldInfosCountAggregateOutputType | null
    _avg: WorldInfosAvgAggregateOutputType | null
    _sum: WorldInfosSumAggregateOutputType | null
    _min: WorldInfosMinAggregateOutputType | null
    _max: WorldInfosMaxAggregateOutputType | null
  }

  type GetWorldInfosGroupByPayload<T extends WorldInfosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldInfosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldInfosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldInfosGroupByOutputType[P]>
            : GetScalarType<T[P], WorldInfosGroupByOutputType[P]>
        }
      >
    >


  export type WorldInfosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aetherId?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    prompts?: boolean | PromptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldInfos"]>

  export type WorldInfosSelectScalar = {
    id?: boolean
    aetherId?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
  }

  export type WorldInfosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | PromptsDefaultArgs<ExtArgs>
  }


  export type $WorldInfosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldInfos"
    objects: {
      prompts: Prisma.$PromptsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aetherId: number | null
      entry: string
      keys: string
      promptId: string
      correlationId: string
      dateCreated: string
      dateEdited: string | null
    }, ExtArgs["result"]["worldInfos"]>
    composites: {}
  }


  type WorldInfosGetPayload<S extends boolean | null | undefined | WorldInfosDefaultArgs> = $Result.GetResult<Prisma.$WorldInfosPayload, S>

  type WorldInfosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorldInfosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WorldInfosCountAggregateInputType | true
    }

  export interface WorldInfosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldInfos'], meta: { name: 'WorldInfos' } }
    /**
     * Find zero or one WorldInfos that matches the filter.
     * @param {WorldInfosFindUniqueArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldInfosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosFindUniqueArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WorldInfos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldInfosFindUniqueOrThrowArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldInfosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosFindFirstArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldInfosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindFirstArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WorldInfos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosFindFirstOrThrowArgs} args - Arguments to find a WorldInfos
     * @example
     * // Get one WorldInfos
     * const worldInfos = await prisma.worldInfos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldInfosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldInfos
     * const worldInfos = await prisma.worldInfos.findMany()
     * 
     * // Get first 10 WorldInfos
     * const worldInfos = await prisma.worldInfos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldInfosWithIdOnly = await prisma.worldInfos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldInfosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WorldInfos.
     * @param {WorldInfosCreateArgs} args - Arguments to create a WorldInfos.
     * @example
     * // Create one WorldInfos
     * const WorldInfos = await prisma.worldInfos.create({
     *   data: {
     *     // ... data to create a WorldInfos
     *   }
     * })
     * 
    **/
    create<T extends WorldInfosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosCreateArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a WorldInfos.
     * @param {WorldInfosDeleteArgs} args - Arguments to delete one WorldInfos.
     * @example
     * // Delete one WorldInfos
     * const WorldInfos = await prisma.worldInfos.delete({
     *   where: {
     *     // ... filter to delete one WorldInfos
     *   }
     * })
     * 
    **/
    delete<T extends WorldInfosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosDeleteArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WorldInfos.
     * @param {WorldInfosUpdateArgs} args - Arguments to update one WorldInfos.
     * @example
     * // Update one WorldInfos
     * const worldInfos = await prisma.worldInfos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldInfosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosUpdateArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WorldInfos.
     * @param {WorldInfosDeleteManyArgs} args - Arguments to filter WorldInfos to delete.
     * @example
     * // Delete a few WorldInfos
     * const { count } = await prisma.worldInfos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldInfosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldInfosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldInfos
     * const worldInfos = await prisma.worldInfos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldInfosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldInfos.
     * @param {WorldInfosUpsertArgs} args - Arguments to update or create a WorldInfos.
     * @example
     * // Update or create a WorldInfos
     * const worldInfos = await prisma.worldInfos.upsert({
     *   create: {
     *     // ... data to create a WorldInfos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldInfos we want to update
     *   }
     * })
    **/
    upsert<T extends WorldInfosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorldInfosUpsertArgs<ExtArgs>>
    ): Prisma__WorldInfosClient<$Result.GetResult<Prisma.$WorldInfosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosCountArgs} args - Arguments to filter WorldInfos to count.
     * @example
     * // Count the number of WorldInfos
     * const count = await prisma.worldInfos.count({
     *   where: {
     *     // ... the filter for the WorldInfos we want to count
     *   }
     * })
    **/
    count<T extends WorldInfosCountArgs>(
      args?: Subset<T, WorldInfosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldInfosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldInfosAggregateArgs>(args: Subset<T, WorldInfosAggregateArgs>): Prisma.PrismaPromise<GetWorldInfosAggregateType<T>>

    /**
     * Group by WorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldInfosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldInfosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldInfosGroupByArgs['orderBy'] }
        : { orderBy?: WorldInfosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldInfosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldInfosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldInfos model
   */
  readonly fields: WorldInfosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldInfos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldInfosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    prompts<T extends PromptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptsDefaultArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WorldInfos model
   */ 
  interface WorldInfosFieldRefs {
    readonly id: FieldRef<"WorldInfos", 'String'>
    readonly aetherId: FieldRef<"WorldInfos", 'Int'>
    readonly entry: FieldRef<"WorldInfos", 'String'>
    readonly keys: FieldRef<"WorldInfos", 'String'>
    readonly promptId: FieldRef<"WorldInfos", 'String'>
    readonly correlationId: FieldRef<"WorldInfos", 'String'>
    readonly dateCreated: FieldRef<"WorldInfos", 'String'>
    readonly dateEdited: FieldRef<"WorldInfos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WorldInfos findUnique
   */
  export type WorldInfosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos findUniqueOrThrow
   */
  export type WorldInfosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos findFirst
   */
  export type WorldInfosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldInfos.
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldInfos.
     */
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * WorldInfos findFirstOrThrow
   */
  export type WorldInfosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldInfos.
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldInfos.
     */
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * WorldInfos findMany
   */
  export type WorldInfosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which WorldInfos to fetch.
     */
    where?: WorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldInfos to fetch.
     */
    orderBy?: WorldInfosOrderByWithRelationInput | WorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldInfos.
     */
    cursor?: WorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldInfos.
     */
    skip?: number
    distinct?: WorldInfosScalarFieldEnum | WorldInfosScalarFieldEnum[]
  }


  /**
   * WorldInfos create
   */
  export type WorldInfosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to create a WorldInfos.
     */
    data: XOR<WorldInfosCreateInput, WorldInfosUncheckedCreateInput>
  }


  /**
   * WorldInfos update
   */
  export type WorldInfosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to update a WorldInfos.
     */
    data: XOR<WorldInfosUpdateInput, WorldInfosUncheckedUpdateInput>
    /**
     * Choose, which WorldInfos to update.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos updateMany
   */
  export type WorldInfosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldInfos.
     */
    data: XOR<WorldInfosUpdateManyMutationInput, WorldInfosUncheckedUpdateManyInput>
    /**
     * Filter which WorldInfos to update
     */
    where?: WorldInfosWhereInput
  }


  /**
   * WorldInfos upsert
   */
  export type WorldInfosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * The filter to search for the WorldInfos to update in case it exists.
     */
    where: WorldInfosWhereUniqueInput
    /**
     * In case the WorldInfos found by the `where` argument doesn't exist, create a new WorldInfos with this data.
     */
    create: XOR<WorldInfosCreateInput, WorldInfosUncheckedCreateInput>
    /**
     * In case the WorldInfos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldInfosUpdateInput, WorldInfosUncheckedUpdateInput>
  }


  /**
   * WorldInfos delete
   */
  export type WorldInfosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
    /**
     * Filter which WorldInfos to delete.
     */
    where: WorldInfosWhereUniqueInput
  }


  /**
   * WorldInfos deleteMany
   */
  export type WorldInfosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldInfos to delete
     */
    where?: WorldInfosWhereInput
  }


  /**
   * WorldInfos without action
   */
  export type WorldInfosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldInfos
     */
    select?: WorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInfosInclude<ExtArgs> | null
  }



  /**
   * Model AetherPrompts
   */

  export type AggregateAetherPrompts = {
    _count: AetherPromptsCountAggregateOutputType | null
    _avg: AetherPromptsAvgAggregateOutputType | null
    _sum: AetherPromptsSumAggregateOutputType | null
    _min: AetherPromptsMinAggregateOutputType | null
    _max: AetherPromptsMaxAggregateOutputType | null
  }

  export type AetherPromptsAvgAggregateOutputType = {
    id: number | null
    nsfw: number | null
  }

  export type AetherPromptsSumAggregateOutputType = {
    id: number | null
    nsfw: number | null
  }

  export type AetherPromptsMinAggregateOutputType = {
    id: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherPromptsMaxAggregateOutputType = {
    id: number | null
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number | null
    parentId: string | null
    promptContent: string | null
    publishDate: string | null
    quests: string | null
    tags: string | null
    title: string | null
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherPromptsCountAggregateOutputType = {
    id: number
    authorsNote: number
    description: number
    memory: number
    nsfw: number
    parentId: number
    promptContent: number
    publishDate: number
    quests: number
    tags: number
    title: number
    scriptZip: number
    novelAiScenario: number
    holoAiScenario: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    _all: number
  }


  export type AetherPromptsAvgAggregateInputType = {
    id?: true
    nsfw?: true
  }

  export type AetherPromptsSumAggregateInputType = {
    id?: true
    nsfw?: true
  }

  export type AetherPromptsMinAggregateInputType = {
    id?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherPromptsMaxAggregateInputType = {
    id?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherPromptsCountAggregateInputType = {
    id?: true
    authorsNote?: true
    description?: true
    memory?: true
    nsfw?: true
    parentId?: true
    promptContent?: true
    publishDate?: true
    quests?: true
    tags?: true
    title?: true
    scriptZip?: true
    novelAiScenario?: true
    holoAiScenario?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    _all?: true
  }

  export type AetherPromptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherPrompts to aggregate.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AetherPrompts
    **/
    _count?: true | AetherPromptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AetherPromptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AetherPromptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AetherPromptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AetherPromptsMaxAggregateInputType
  }

  export type GetAetherPromptsAggregateType<T extends AetherPromptsAggregateArgs> = {
        [P in keyof T & keyof AggregateAetherPrompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAetherPrompts[P]>
      : GetScalarType<T[P], AggregateAetherPrompts[P]>
  }




  export type AetherPromptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AetherPromptsWhereInput
    orderBy?: AetherPromptsOrderByWithAggregationInput | AetherPromptsOrderByWithAggregationInput[]
    by: AetherPromptsScalarFieldEnum[] | AetherPromptsScalarFieldEnum
    having?: AetherPromptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AetherPromptsCountAggregateInputType | true
    _avg?: AetherPromptsAvgAggregateInputType
    _sum?: AetherPromptsSumAggregateInputType
    _min?: AetherPromptsMinAggregateInputType
    _max?: AetherPromptsMaxAggregateInputType
  }

  export type AetherPromptsGroupByOutputType = {
    id: number
    authorsNote: string | null
    description: string | null
    memory: string | null
    nsfw: number
    parentId: string | null
    promptContent: string
    publishDate: string | null
    quests: string | null
    tags: string
    title: string
    scriptZip: Buffer | null
    novelAiScenario: string | null
    holoAiScenario: string | null
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    _count: AetherPromptsCountAggregateOutputType | null
    _avg: AetherPromptsAvgAggregateOutputType | null
    _sum: AetherPromptsSumAggregateOutputType | null
    _min: AetherPromptsMinAggregateOutputType | null
    _max: AetherPromptsMaxAggregateOutputType | null
  }

  type GetAetherPromptsGroupByPayload<T extends AetherPromptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AetherPromptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AetherPromptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AetherPromptsGroupByOutputType[P]>
            : GetScalarType<T[P], AetherPromptsGroupByOutputType[P]>
        }
      >
    >


  export type AetherPromptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    worldInfos?: boolean | AetherPrompts$worldInfosArgs<ExtArgs>
    _count?: boolean | AetherPromptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aetherPrompts"]>

  export type AetherPromptsSelectScalar = {
    id?: boolean
    authorsNote?: boolean
    description?: boolean
    memory?: boolean
    nsfw?: boolean
    parentId?: boolean
    promptContent?: boolean
    publishDate?: boolean
    quests?: boolean
    tags?: boolean
    title?: boolean
    scriptZip?: boolean
    novelAiScenario?: boolean
    holoAiScenario?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
  }

  export type AetherPromptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worldInfos?: boolean | AetherPrompts$worldInfosArgs<ExtArgs>
    _count?: boolean | AetherPromptsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AetherPromptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AetherPrompts"
    objects: {
      worldInfos: Prisma.$AetherWorldInfosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      authorsNote: string | null
      description: string | null
      memory: string | null
      nsfw: number
      parentId: string | null
      promptContent: string
      publishDate: string | null
      quests: string | null
      tags: string
      title: string
      scriptZip: Buffer | null
      novelAiScenario: string | null
      holoAiScenario: string | null
      correlationId: string
      dateCreated: string
      dateEdited: string | null
    }, ExtArgs["result"]["aetherPrompts"]>
    composites: {}
  }


  type AetherPromptsGetPayload<S extends boolean | null | undefined | AetherPromptsDefaultArgs> = $Result.GetResult<Prisma.$AetherPromptsPayload, S>

  type AetherPromptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AetherPromptsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AetherPromptsCountAggregateInputType | true
    }

  export interface AetherPromptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AetherPrompts'], meta: { name: 'AetherPrompts' } }
    /**
     * Find zero or one AetherPrompts that matches the filter.
     * @param {AetherPromptsFindUniqueArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AetherPromptsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsFindUniqueArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AetherPrompts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AetherPromptsFindUniqueOrThrowArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AetherPromptsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AetherPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsFindFirstArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AetherPromptsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindFirstArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AetherPrompts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsFindFirstOrThrowArgs} args - Arguments to find a AetherPrompts
     * @example
     * // Get one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AetherPromptsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AetherPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findMany()
     * 
     * // Get first 10 AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aetherPromptsWithIdOnly = await prisma.aetherPrompts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AetherPromptsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AetherPrompts.
     * @param {AetherPromptsCreateArgs} args - Arguments to create a AetherPrompts.
     * @example
     * // Create one AetherPrompts
     * const AetherPrompts = await prisma.aetherPrompts.create({
     *   data: {
     *     // ... data to create a AetherPrompts
     *   }
     * })
     * 
    **/
    create<T extends AetherPromptsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsCreateArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a AetherPrompts.
     * @param {AetherPromptsDeleteArgs} args - Arguments to delete one AetherPrompts.
     * @example
     * // Delete one AetherPrompts
     * const AetherPrompts = await prisma.aetherPrompts.delete({
     *   where: {
     *     // ... filter to delete one AetherPrompts
     *   }
     * })
     * 
    **/
    delete<T extends AetherPromptsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsDeleteArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AetherPrompts.
     * @param {AetherPromptsUpdateArgs} args - Arguments to update one AetherPrompts.
     * @example
     * // Update one AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AetherPromptsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsUpdateArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AetherPrompts.
     * @param {AetherPromptsDeleteManyArgs} args - Arguments to filter AetherPrompts to delete.
     * @example
     * // Delete a few AetherPrompts
     * const { count } = await prisma.aetherPrompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AetherPromptsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherPromptsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AetherPromptsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AetherPrompts.
     * @param {AetherPromptsUpsertArgs} args - Arguments to update or create a AetherPrompts.
     * @example
     * // Update or create a AetherPrompts
     * const aetherPrompts = await prisma.aetherPrompts.upsert({
     *   create: {
     *     // ... data to create a AetherPrompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AetherPrompts we want to update
     *   }
     * })
    **/
    upsert<T extends AetherPromptsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AetherPromptsUpsertArgs<ExtArgs>>
    ): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsCountArgs} args - Arguments to filter AetherPrompts to count.
     * @example
     * // Count the number of AetherPrompts
     * const count = await prisma.aetherPrompts.count({
     *   where: {
     *     // ... the filter for the AetherPrompts we want to count
     *   }
     * })
    **/
    count<T extends AetherPromptsCountArgs>(
      args?: Subset<T, AetherPromptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AetherPromptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AetherPromptsAggregateArgs>(args: Subset<T, AetherPromptsAggregateArgs>): Prisma.PrismaPromise<GetAetherPromptsAggregateType<T>>

    /**
     * Group by AetherPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherPromptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AetherPromptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AetherPromptsGroupByArgs['orderBy'] }
        : { orderBy?: AetherPromptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AetherPromptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAetherPromptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AetherPrompts model
   */
  readonly fields: AetherPromptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AetherPrompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AetherPromptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    worldInfos<T extends AetherPrompts$worldInfosArgs<ExtArgs> = {}>(args?: Subset<T, AetherPrompts$worldInfosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AetherPrompts model
   */ 
  interface AetherPromptsFieldRefs {
    readonly id: FieldRef<"AetherPrompts", 'Int'>
    readonly authorsNote: FieldRef<"AetherPrompts", 'String'>
    readonly description: FieldRef<"AetherPrompts", 'String'>
    readonly memory: FieldRef<"AetherPrompts", 'String'>
    readonly nsfw: FieldRef<"AetherPrompts", 'Int'>
    readonly parentId: FieldRef<"AetherPrompts", 'String'>
    readonly promptContent: FieldRef<"AetherPrompts", 'String'>
    readonly publishDate: FieldRef<"AetherPrompts", 'String'>
    readonly quests: FieldRef<"AetherPrompts", 'String'>
    readonly tags: FieldRef<"AetherPrompts", 'String'>
    readonly title: FieldRef<"AetherPrompts", 'String'>
    readonly scriptZip: FieldRef<"AetherPrompts", 'Bytes'>
    readonly novelAiScenario: FieldRef<"AetherPrompts", 'String'>
    readonly holoAiScenario: FieldRef<"AetherPrompts", 'String'>
    readonly correlationId: FieldRef<"AetherPrompts", 'String'>
    readonly dateCreated: FieldRef<"AetherPrompts", 'String'>
    readonly dateEdited: FieldRef<"AetherPrompts", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AetherPrompts findUnique
   */
  export type AetherPromptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts findUniqueOrThrow
   */
  export type AetherPromptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts findFirst
   */
  export type AetherPromptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherPrompts.
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherPrompts.
     */
    distinct?: AetherPromptsScalarFieldEnum | AetherPromptsScalarFieldEnum[]
  }


  /**
   * AetherPrompts findFirstOrThrow
   */
  export type AetherPromptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherPrompts.
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherPrompts.
     */
    distinct?: AetherPromptsScalarFieldEnum | AetherPromptsScalarFieldEnum[]
  }


  /**
   * AetherPrompts findMany
   */
  export type AetherPromptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter, which AetherPrompts to fetch.
     */
    where?: AetherPromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherPrompts to fetch.
     */
    orderBy?: AetherPromptsOrderByWithRelationInput | AetherPromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AetherPrompts.
     */
    cursor?: AetherPromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherPrompts.
     */
    skip?: number
    distinct?: AetherPromptsScalarFieldEnum | AetherPromptsScalarFieldEnum[]
  }


  /**
   * AetherPrompts create
   */
  export type AetherPromptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * The data needed to create a AetherPrompts.
     */
    data: XOR<AetherPromptsCreateInput, AetherPromptsUncheckedCreateInput>
  }


  /**
   * AetherPrompts update
   */
  export type AetherPromptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * The data needed to update a AetherPrompts.
     */
    data: XOR<AetherPromptsUpdateInput, AetherPromptsUncheckedUpdateInput>
    /**
     * Choose, which AetherPrompts to update.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts updateMany
   */
  export type AetherPromptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AetherPrompts.
     */
    data: XOR<AetherPromptsUpdateManyMutationInput, AetherPromptsUncheckedUpdateManyInput>
    /**
     * Filter which AetherPrompts to update
     */
    where?: AetherPromptsWhereInput
  }


  /**
   * AetherPrompts upsert
   */
  export type AetherPromptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * The filter to search for the AetherPrompts to update in case it exists.
     */
    where: AetherPromptsWhereUniqueInput
    /**
     * In case the AetherPrompts found by the `where` argument doesn't exist, create a new AetherPrompts with this data.
     */
    create: XOR<AetherPromptsCreateInput, AetherPromptsUncheckedCreateInput>
    /**
     * In case the AetherPrompts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AetherPromptsUpdateInput, AetherPromptsUncheckedUpdateInput>
  }


  /**
   * AetherPrompts delete
   */
  export type AetherPromptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
    /**
     * Filter which AetherPrompts to delete.
     */
    where: AetherPromptsWhereUniqueInput
  }


  /**
   * AetherPrompts deleteMany
   */
  export type AetherPromptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherPrompts to delete
     */
    where?: AetherPromptsWhereInput
  }


  /**
   * AetherPrompts.worldInfos
   */
  export type AetherPrompts$worldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    where?: AetherWorldInfosWhereInput
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    cursor?: AetherWorldInfosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherPrompts without action
   */
  export type AetherPromptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherPrompts
     */
    select?: AetherPromptsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherPromptsInclude<ExtArgs> | null
  }



  /**
   * Model AetherWorldInfos
   */

  export type AggregateAetherWorldInfos = {
    _count: AetherWorldInfosCountAggregateOutputType | null
    _avg: AetherWorldInfosAvgAggregateOutputType | null
    _sum: AetherWorldInfosSumAggregateOutputType | null
    _min: AetherWorldInfosMinAggregateOutputType | null
    _max: AetherWorldInfosMaxAggregateOutputType | null
  }

  export type AetherWorldInfosAvgAggregateOutputType = {
    id: number | null
    promptId: number | null
  }

  export type AetherWorldInfosSumAggregateOutputType = {
    id: number | null
    promptId: number | null
  }

  export type AetherWorldInfosMinAggregateOutputType = {
    id: number | null
    entry: string | null
    keys: string | null
    promptId: number | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherWorldInfosMaxAggregateOutputType = {
    id: number | null
    entry: string | null
    keys: string | null
    promptId: number | null
    correlationId: string | null
    dateCreated: string | null
    dateEdited: string | null
  }

  export type AetherWorldInfosCountAggregateOutputType = {
    id: number
    entry: number
    keys: number
    promptId: number
    correlationId: number
    dateCreated: number
    dateEdited: number
    _all: number
  }


  export type AetherWorldInfosAvgAggregateInputType = {
    id?: true
    promptId?: true
  }

  export type AetherWorldInfosSumAggregateInputType = {
    id?: true
    promptId?: true
  }

  export type AetherWorldInfosMinAggregateInputType = {
    id?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherWorldInfosMaxAggregateInputType = {
    id?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
  }

  export type AetherWorldInfosCountAggregateInputType = {
    id?: true
    entry?: true
    keys?: true
    promptId?: true
    correlationId?: true
    dateCreated?: true
    dateEdited?: true
    _all?: true
  }

  export type AetherWorldInfosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherWorldInfos to aggregate.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AetherWorldInfos
    **/
    _count?: true | AetherWorldInfosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AetherWorldInfosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AetherWorldInfosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AetherWorldInfosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AetherWorldInfosMaxAggregateInputType
  }

  export type GetAetherWorldInfosAggregateType<T extends AetherWorldInfosAggregateArgs> = {
        [P in keyof T & keyof AggregateAetherWorldInfos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAetherWorldInfos[P]>
      : GetScalarType<T[P], AggregateAetherWorldInfos[P]>
  }




  export type AetherWorldInfosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AetherWorldInfosWhereInput
    orderBy?: AetherWorldInfosOrderByWithAggregationInput | AetherWorldInfosOrderByWithAggregationInput[]
    by: AetherWorldInfosScalarFieldEnum[] | AetherWorldInfosScalarFieldEnum
    having?: AetherWorldInfosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AetherWorldInfosCountAggregateInputType | true
    _avg?: AetherWorldInfosAvgAggregateInputType
    _sum?: AetherWorldInfosSumAggregateInputType
    _min?: AetherWorldInfosMinAggregateInputType
    _max?: AetherWorldInfosMaxAggregateInputType
  }

  export type AetherWorldInfosGroupByOutputType = {
    id: number
    entry: string
    keys: string
    promptId: number
    correlationId: string
    dateCreated: string
    dateEdited: string | null
    _count: AetherWorldInfosCountAggregateOutputType | null
    _avg: AetherWorldInfosAvgAggregateOutputType | null
    _sum: AetherWorldInfosSumAggregateOutputType | null
    _min: AetherWorldInfosMinAggregateOutputType | null
    _max: AetherWorldInfosMaxAggregateOutputType | null
  }

  type GetAetherWorldInfosGroupByPayload<T extends AetherWorldInfosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AetherWorldInfosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AetherWorldInfosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AetherWorldInfosGroupByOutputType[P]>
            : GetScalarType<T[P], AetherWorldInfosGroupByOutputType[P]>
        }
      >
    >


  export type AetherWorldInfosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
    prompts?: boolean | AetherPromptsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aetherWorldInfos"]>

  export type AetherWorldInfosSelectScalar = {
    id?: boolean
    entry?: boolean
    keys?: boolean
    promptId?: boolean
    correlationId?: boolean
    dateCreated?: boolean
    dateEdited?: boolean
  }

  export type AetherWorldInfosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | AetherPromptsDefaultArgs<ExtArgs>
  }


  export type $AetherWorldInfosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AetherWorldInfos"
    objects: {
      prompts: Prisma.$AetherPromptsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entry: string
      keys: string
      promptId: number
      correlationId: string
      dateCreated: string
      dateEdited: string | null
    }, ExtArgs["result"]["aetherWorldInfos"]>
    composites: {}
  }


  type AetherWorldInfosGetPayload<S extends boolean | null | undefined | AetherWorldInfosDefaultArgs> = $Result.GetResult<Prisma.$AetherWorldInfosPayload, S>

  type AetherWorldInfosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AetherWorldInfosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AetherWorldInfosCountAggregateInputType | true
    }

  export interface AetherWorldInfosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AetherWorldInfos'], meta: { name: 'AetherWorldInfos' } }
    /**
     * Find zero or one AetherWorldInfos that matches the filter.
     * @param {AetherWorldInfosFindUniqueArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AetherWorldInfosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosFindUniqueArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AetherWorldInfos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AetherWorldInfosFindUniqueOrThrowArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AetherWorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosFindFirstArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AetherWorldInfosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindFirstArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AetherWorldInfos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosFindFirstOrThrowArgs} args - Arguments to find a AetherWorldInfos
     * @example
     * // Get one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AetherWorldInfosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AetherWorldInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findMany()
     * 
     * // Get first 10 AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aetherWorldInfosWithIdOnly = await prisma.aetherWorldInfos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AetherWorldInfosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AetherWorldInfos.
     * @param {AetherWorldInfosCreateArgs} args - Arguments to create a AetherWorldInfos.
     * @example
     * // Create one AetherWorldInfos
     * const AetherWorldInfos = await prisma.aetherWorldInfos.create({
     *   data: {
     *     // ... data to create a AetherWorldInfos
     *   }
     * })
     * 
    **/
    create<T extends AetherWorldInfosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosCreateArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a AetherWorldInfos.
     * @param {AetherWorldInfosDeleteArgs} args - Arguments to delete one AetherWorldInfos.
     * @example
     * // Delete one AetherWorldInfos
     * const AetherWorldInfos = await prisma.aetherWorldInfos.delete({
     *   where: {
     *     // ... filter to delete one AetherWorldInfos
     *   }
     * })
     * 
    **/
    delete<T extends AetherWorldInfosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosDeleteArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AetherWorldInfos.
     * @param {AetherWorldInfosUpdateArgs} args - Arguments to update one AetherWorldInfos.
     * @example
     * // Update one AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AetherWorldInfosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosUpdateArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AetherWorldInfos.
     * @param {AetherWorldInfosDeleteManyArgs} args - Arguments to filter AetherWorldInfos to delete.
     * @example
     * // Delete a few AetherWorldInfos
     * const { count } = await prisma.aetherWorldInfos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AetherWorldInfosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AetherWorldInfosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AetherWorldInfosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AetherWorldInfos.
     * @param {AetherWorldInfosUpsertArgs} args - Arguments to update or create a AetherWorldInfos.
     * @example
     * // Update or create a AetherWorldInfos
     * const aetherWorldInfos = await prisma.aetherWorldInfos.upsert({
     *   create: {
     *     // ... data to create a AetherWorldInfos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AetherWorldInfos we want to update
     *   }
     * })
    **/
    upsert<T extends AetherWorldInfosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AetherWorldInfosUpsertArgs<ExtArgs>>
    ): Prisma__AetherWorldInfosClient<$Result.GetResult<Prisma.$AetherWorldInfosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosCountArgs} args - Arguments to filter AetherWorldInfos to count.
     * @example
     * // Count the number of AetherWorldInfos
     * const count = await prisma.aetherWorldInfos.count({
     *   where: {
     *     // ... the filter for the AetherWorldInfos we want to count
     *   }
     * })
    **/
    count<T extends AetherWorldInfosCountArgs>(
      args?: Subset<T, AetherWorldInfosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AetherWorldInfosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AetherWorldInfosAggregateArgs>(args: Subset<T, AetherWorldInfosAggregateArgs>): Prisma.PrismaPromise<GetAetherWorldInfosAggregateType<T>>

    /**
     * Group by AetherWorldInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AetherWorldInfosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AetherWorldInfosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AetherWorldInfosGroupByArgs['orderBy'] }
        : { orderBy?: AetherWorldInfosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AetherWorldInfosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAetherWorldInfosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AetherWorldInfos model
   */
  readonly fields: AetherWorldInfosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AetherWorldInfos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AetherWorldInfosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    prompts<T extends AetherPromptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AetherPromptsDefaultArgs<ExtArgs>>): Prisma__AetherPromptsClient<$Result.GetResult<Prisma.$AetherPromptsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AetherWorldInfos model
   */ 
  interface AetherWorldInfosFieldRefs {
    readonly id: FieldRef<"AetherWorldInfos", 'Int'>
    readonly entry: FieldRef<"AetherWorldInfos", 'String'>
    readonly keys: FieldRef<"AetherWorldInfos", 'String'>
    readonly promptId: FieldRef<"AetherWorldInfos", 'Int'>
    readonly correlationId: FieldRef<"AetherWorldInfos", 'String'>
    readonly dateCreated: FieldRef<"AetherWorldInfos", 'String'>
    readonly dateEdited: FieldRef<"AetherWorldInfos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AetherWorldInfos findUnique
   */
  export type AetherWorldInfosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos findUniqueOrThrow
   */
  export type AetherWorldInfosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos findFirst
   */
  export type AetherWorldInfosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherWorldInfos.
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherWorldInfos.
     */
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherWorldInfos findFirstOrThrow
   */
  export type AetherWorldInfosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AetherWorldInfos.
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AetherWorldInfos.
     */
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherWorldInfos findMany
   */
  export type AetherWorldInfosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter, which AetherWorldInfos to fetch.
     */
    where?: AetherWorldInfosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AetherWorldInfos to fetch.
     */
    orderBy?: AetherWorldInfosOrderByWithRelationInput | AetherWorldInfosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AetherWorldInfos.
     */
    cursor?: AetherWorldInfosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AetherWorldInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AetherWorldInfos.
     */
    skip?: number
    distinct?: AetherWorldInfosScalarFieldEnum | AetherWorldInfosScalarFieldEnum[]
  }


  /**
   * AetherWorldInfos create
   */
  export type AetherWorldInfosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to create a AetherWorldInfos.
     */
    data: XOR<AetherWorldInfosCreateInput, AetherWorldInfosUncheckedCreateInput>
  }


  /**
   * AetherWorldInfos update
   */
  export type AetherWorldInfosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * The data needed to update a AetherWorldInfos.
     */
    data: XOR<AetherWorldInfosUpdateInput, AetherWorldInfosUncheckedUpdateInput>
    /**
     * Choose, which AetherWorldInfos to update.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos updateMany
   */
  export type AetherWorldInfosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AetherWorldInfos.
     */
    data: XOR<AetherWorldInfosUpdateManyMutationInput, AetherWorldInfosUncheckedUpdateManyInput>
    /**
     * Filter which AetherWorldInfos to update
     */
    where?: AetherWorldInfosWhereInput
  }


  /**
   * AetherWorldInfos upsert
   */
  export type AetherWorldInfosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * The filter to search for the AetherWorldInfos to update in case it exists.
     */
    where: AetherWorldInfosWhereUniqueInput
    /**
     * In case the AetherWorldInfos found by the `where` argument doesn't exist, create a new AetherWorldInfos with this data.
     */
    create: XOR<AetherWorldInfosCreateInput, AetherWorldInfosUncheckedCreateInput>
    /**
     * In case the AetherWorldInfos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AetherWorldInfosUpdateInput, AetherWorldInfosUncheckedUpdateInput>
  }


  /**
   * AetherWorldInfos delete
   */
  export type AetherWorldInfosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
    /**
     * Filter which AetherWorldInfos to delete.
     */
    where: AetherWorldInfosWhereUniqueInput
  }


  /**
   * AetherWorldInfos deleteMany
   */
  export type AetherWorldInfosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AetherWorldInfos to delete
     */
    where?: AetherWorldInfosWhereInput
  }


  /**
   * AetherWorldInfos without action
   */
  export type AetherWorldInfosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AetherWorldInfos
     */
    select?: AetherWorldInfosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AetherWorldInfosInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PromptsScalarFieldEnum: {
    id: 'id',
    aetherId: 'aetherId',
    authorsNote: 'authorsNote',
    description: 'description',
    memory: 'memory',
    nsfw: 'nsfw',
    parentId: 'parentId',
    promptContent: 'promptContent',
    publishDate: 'publishDate',
    quests: 'quests',
    tags: 'tags',
    title: 'title',
    scriptZip: 'scriptZip',
    novelAiScenario: 'novelAiScenario',
    holoAiScenario: 'holoAiScenario',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited'
  };

  export type PromptsScalarFieldEnum = (typeof PromptsScalarFieldEnum)[keyof typeof PromptsScalarFieldEnum]


  export const WorldInfosScalarFieldEnum: {
    id: 'id',
    aetherId: 'aetherId',
    entry: 'entry',
    keys: 'keys',
    promptId: 'promptId',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited'
  };

  export type WorldInfosScalarFieldEnum = (typeof WorldInfosScalarFieldEnum)[keyof typeof WorldInfosScalarFieldEnum]


  export const AetherPromptsScalarFieldEnum: {
    id: 'id',
    authorsNote: 'authorsNote',
    description: 'description',
    memory: 'memory',
    nsfw: 'nsfw',
    parentId: 'parentId',
    promptContent: 'promptContent',
    publishDate: 'publishDate',
    quests: 'quests',
    tags: 'tags',
    title: 'title',
    scriptZip: 'scriptZip',
    novelAiScenario: 'novelAiScenario',
    holoAiScenario: 'holoAiScenario',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited'
  };

  export type AetherPromptsScalarFieldEnum = (typeof AetherPromptsScalarFieldEnum)[keyof typeof AetherPromptsScalarFieldEnum]


  export const AetherWorldInfosScalarFieldEnum: {
    id: 'id',
    entry: 'entry',
    keys: 'keys',
    promptId: 'promptId',
    correlationId: 'correlationId',
    dateCreated: 'dateCreated',
    dateEdited: 'dateEdited'
  };

  export type AetherWorldInfosScalarFieldEnum = (typeof AetherWorldInfosScalarFieldEnum)[keyof typeof AetherWorldInfosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PromptsWhereInput = {
    AND?: PromptsWhereInput | PromptsWhereInput[]
    OR?: PromptsWhereInput[]
    NOT?: PromptsWhereInput | PromptsWhereInput[]
    id?: StringFilter<"Prompts"> | string
    aetherId?: IntNullableFilter<"Prompts"> | number | null
    authorsNote?: StringNullableFilter<"Prompts"> | string | null
    description?: StringNullableFilter<"Prompts"> | string | null
    memory?: StringNullableFilter<"Prompts"> | string | null
    nsfw?: IntFilter<"Prompts"> | number
    parentId?: StringNullableFilter<"Prompts"> | string | null
    promptContent?: StringFilter<"Prompts"> | string
    publishDate?: StringNullableFilter<"Prompts"> | string | null
    quests?: StringNullableFilter<"Prompts"> | string | null
    tags?: StringFilter<"Prompts"> | string
    title?: StringFilter<"Prompts"> | string
    scriptZip?: BytesNullableFilter<"Prompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"Prompts"> | string | null
    holoAiScenario?: StringNullableFilter<"Prompts"> | string | null
    correlationId?: StringFilter<"Prompts"> | string
    dateCreated?: StringFilter<"Prompts"> | string
    dateEdited?: StringNullableFilter<"Prompts"> | string | null
    worldInfos?: WorldInfosListRelationFilter
  }

  export type PromptsOrderByWithRelationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    worldInfos?: WorldInfosOrderByRelationAggregateInput
  }

  export type PromptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptsWhereInput | PromptsWhereInput[]
    OR?: PromptsWhereInput[]
    NOT?: PromptsWhereInput | PromptsWhereInput[]
    aetherId?: IntNullableFilter<"Prompts"> | number | null
    authorsNote?: StringNullableFilter<"Prompts"> | string | null
    description?: StringNullableFilter<"Prompts"> | string | null
    memory?: StringNullableFilter<"Prompts"> | string | null
    nsfw?: IntFilter<"Prompts"> | number
    parentId?: StringNullableFilter<"Prompts"> | string | null
    promptContent?: StringFilter<"Prompts"> | string
    publishDate?: StringNullableFilter<"Prompts"> | string | null
    quests?: StringNullableFilter<"Prompts"> | string | null
    tags?: StringFilter<"Prompts"> | string
    title?: StringFilter<"Prompts"> | string
    scriptZip?: BytesNullableFilter<"Prompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"Prompts"> | string | null
    holoAiScenario?: StringNullableFilter<"Prompts"> | string | null
    correlationId?: StringFilter<"Prompts"> | string
    dateCreated?: StringFilter<"Prompts"> | string
    dateEdited?: StringNullableFilter<"Prompts"> | string | null
    worldInfos?: WorldInfosListRelationFilter
  }, "id">

  export type PromptsOrderByWithAggregationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    _count?: PromptsCountOrderByAggregateInput
    _avg?: PromptsAvgOrderByAggregateInput
    _max?: PromptsMaxOrderByAggregateInput
    _min?: PromptsMinOrderByAggregateInput
    _sum?: PromptsSumOrderByAggregateInput
  }

  export type PromptsScalarWhereWithAggregatesInput = {
    AND?: PromptsScalarWhereWithAggregatesInput | PromptsScalarWhereWithAggregatesInput[]
    OR?: PromptsScalarWhereWithAggregatesInput[]
    NOT?: PromptsScalarWhereWithAggregatesInput | PromptsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompts"> | string
    aetherId?: IntNullableWithAggregatesFilter<"Prompts"> | number | null
    authorsNote?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    description?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    memory?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    nsfw?: IntWithAggregatesFilter<"Prompts"> | number
    parentId?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    promptContent?: StringWithAggregatesFilter<"Prompts"> | string
    publishDate?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    quests?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    tags?: StringWithAggregatesFilter<"Prompts"> | string
    title?: StringWithAggregatesFilter<"Prompts"> | string
    scriptZip?: BytesNullableWithAggregatesFilter<"Prompts"> | Buffer | null
    novelAiScenario?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    holoAiScenario?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
    correlationId?: StringWithAggregatesFilter<"Prompts"> | string
    dateCreated?: StringWithAggregatesFilter<"Prompts"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"Prompts"> | string | null
  }

  export type WorldInfosWhereInput = {
    AND?: WorldInfosWhereInput | WorldInfosWhereInput[]
    OR?: WorldInfosWhereInput[]
    NOT?: WorldInfosWhereInput | WorldInfosWhereInput[]
    id?: StringFilter<"WorldInfos"> | string
    aetherId?: IntNullableFilter<"WorldInfos"> | number | null
    entry?: StringFilter<"WorldInfos"> | string
    keys?: StringFilter<"WorldInfos"> | string
    promptId?: StringFilter<"WorldInfos"> | string
    correlationId?: StringFilter<"WorldInfos"> | string
    dateCreated?: StringFilter<"WorldInfos"> | string
    dateEdited?: StringNullableFilter<"WorldInfos"> | string | null
    prompts?: XOR<PromptsRelationFilter, PromptsWhereInput>
  }

  export type WorldInfosOrderByWithRelationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    prompts?: PromptsOrderByWithRelationInput
  }

  export type WorldInfosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorldInfosWhereInput | WorldInfosWhereInput[]
    OR?: WorldInfosWhereInput[]
    NOT?: WorldInfosWhereInput | WorldInfosWhereInput[]
    aetherId?: IntNullableFilter<"WorldInfos"> | number | null
    entry?: StringFilter<"WorldInfos"> | string
    keys?: StringFilter<"WorldInfos"> | string
    promptId?: StringFilter<"WorldInfos"> | string
    correlationId?: StringFilter<"WorldInfos"> | string
    dateCreated?: StringFilter<"WorldInfos"> | string
    dateEdited?: StringNullableFilter<"WorldInfos"> | string | null
    prompts?: XOR<PromptsRelationFilter, PromptsWhereInput>
  }, "id">

  export type WorldInfosOrderByWithAggregationInput = {
    id?: SortOrder
    aetherId?: SortOrderInput | SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    _count?: WorldInfosCountOrderByAggregateInput
    _avg?: WorldInfosAvgOrderByAggregateInput
    _max?: WorldInfosMaxOrderByAggregateInput
    _min?: WorldInfosMinOrderByAggregateInput
    _sum?: WorldInfosSumOrderByAggregateInput
  }

  export type WorldInfosScalarWhereWithAggregatesInput = {
    AND?: WorldInfosScalarWhereWithAggregatesInput | WorldInfosScalarWhereWithAggregatesInput[]
    OR?: WorldInfosScalarWhereWithAggregatesInput[]
    NOT?: WorldInfosScalarWhereWithAggregatesInput | WorldInfosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorldInfos"> | string
    aetherId?: IntNullableWithAggregatesFilter<"WorldInfos"> | number | null
    entry?: StringWithAggregatesFilter<"WorldInfos"> | string
    keys?: StringWithAggregatesFilter<"WorldInfos"> | string
    promptId?: StringWithAggregatesFilter<"WorldInfos"> | string
    correlationId?: StringWithAggregatesFilter<"WorldInfos"> | string
    dateCreated?: StringWithAggregatesFilter<"WorldInfos"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"WorldInfos"> | string | null
  }

  export type AetherPromptsWhereInput = {
    AND?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    OR?: AetherPromptsWhereInput[]
    NOT?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    id?: IntFilter<"AetherPrompts"> | number
    authorsNote?: StringNullableFilter<"AetherPrompts"> | string | null
    description?: StringNullableFilter<"AetherPrompts"> | string | null
    memory?: StringNullableFilter<"AetherPrompts"> | string | null
    nsfw?: IntFilter<"AetherPrompts"> | number
    parentId?: StringNullableFilter<"AetherPrompts"> | string | null
    promptContent?: StringFilter<"AetherPrompts"> | string
    publishDate?: StringNullableFilter<"AetherPrompts"> | string | null
    quests?: StringNullableFilter<"AetherPrompts"> | string | null
    tags?: StringFilter<"AetherPrompts"> | string
    title?: StringFilter<"AetherPrompts"> | string
    scriptZip?: BytesNullableFilter<"AetherPrompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    holoAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    correlationId?: StringFilter<"AetherPrompts"> | string
    dateCreated?: StringFilter<"AetherPrompts"> | string
    dateEdited?: StringNullableFilter<"AetherPrompts"> | string | null
    worldInfos?: AetherWorldInfosListRelationFilter
  }

  export type AetherPromptsOrderByWithRelationInput = {
    id?: SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    worldInfos?: AetherWorldInfosOrderByRelationAggregateInput
  }

  export type AetherPromptsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    OR?: AetherPromptsWhereInput[]
    NOT?: AetherPromptsWhereInput | AetherPromptsWhereInput[]
    authorsNote?: StringNullableFilter<"AetherPrompts"> | string | null
    description?: StringNullableFilter<"AetherPrompts"> | string | null
    memory?: StringNullableFilter<"AetherPrompts"> | string | null
    nsfw?: IntFilter<"AetherPrompts"> | number
    parentId?: StringNullableFilter<"AetherPrompts"> | string | null
    promptContent?: StringFilter<"AetherPrompts"> | string
    publishDate?: StringNullableFilter<"AetherPrompts"> | string | null
    quests?: StringNullableFilter<"AetherPrompts"> | string | null
    tags?: StringFilter<"AetherPrompts"> | string
    title?: StringFilter<"AetherPrompts"> | string
    scriptZip?: BytesNullableFilter<"AetherPrompts"> | Buffer | null
    novelAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    holoAiScenario?: StringNullableFilter<"AetherPrompts"> | string | null
    correlationId?: StringFilter<"AetherPrompts"> | string
    dateCreated?: StringFilter<"AetherPrompts"> | string
    dateEdited?: StringNullableFilter<"AetherPrompts"> | string | null
    worldInfos?: AetherWorldInfosListRelationFilter
  }, "id">

  export type AetherPromptsOrderByWithAggregationInput = {
    id?: SortOrder
    authorsNote?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    nsfw?: SortOrder
    parentId?: SortOrderInput | SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    quests?: SortOrderInput | SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrderInput | SortOrder
    novelAiScenario?: SortOrderInput | SortOrder
    holoAiScenario?: SortOrderInput | SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    _count?: AetherPromptsCountOrderByAggregateInput
    _avg?: AetherPromptsAvgOrderByAggregateInput
    _max?: AetherPromptsMaxOrderByAggregateInput
    _min?: AetherPromptsMinOrderByAggregateInput
    _sum?: AetherPromptsSumOrderByAggregateInput
  }

  export type AetherPromptsScalarWhereWithAggregatesInput = {
    AND?: AetherPromptsScalarWhereWithAggregatesInput | AetherPromptsScalarWhereWithAggregatesInput[]
    OR?: AetherPromptsScalarWhereWithAggregatesInput[]
    NOT?: AetherPromptsScalarWhereWithAggregatesInput | AetherPromptsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AetherPrompts"> | number
    authorsNote?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    description?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    memory?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    nsfw?: IntWithAggregatesFilter<"AetherPrompts"> | number
    parentId?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    promptContent?: StringWithAggregatesFilter<"AetherPrompts"> | string
    publishDate?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    quests?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    tags?: StringWithAggregatesFilter<"AetherPrompts"> | string
    title?: StringWithAggregatesFilter<"AetherPrompts"> | string
    scriptZip?: BytesNullableWithAggregatesFilter<"AetherPrompts"> | Buffer | null
    novelAiScenario?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    holoAiScenario?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
    correlationId?: StringWithAggregatesFilter<"AetherPrompts"> | string
    dateCreated?: StringWithAggregatesFilter<"AetherPrompts"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"AetherPrompts"> | string | null
  }

  export type AetherWorldInfosWhereInput = {
    AND?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    OR?: AetherWorldInfosWhereInput[]
    NOT?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    id?: IntFilter<"AetherWorldInfos"> | number
    entry?: StringFilter<"AetherWorldInfos"> | string
    keys?: StringFilter<"AetherWorldInfos"> | string
    promptId?: IntFilter<"AetherWorldInfos"> | number
    correlationId?: StringFilter<"AetherWorldInfos"> | string
    dateCreated?: StringFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableFilter<"AetherWorldInfos"> | string | null
    prompts?: XOR<AetherPromptsRelationFilter, AetherPromptsWhereInput>
  }

  export type AetherWorldInfosOrderByWithRelationInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    prompts?: AetherPromptsOrderByWithRelationInput
  }

  export type AetherWorldInfosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    OR?: AetherWorldInfosWhereInput[]
    NOT?: AetherWorldInfosWhereInput | AetherWorldInfosWhereInput[]
    entry?: StringFilter<"AetherWorldInfos"> | string
    keys?: StringFilter<"AetherWorldInfos"> | string
    promptId?: IntFilter<"AetherWorldInfos"> | number
    correlationId?: StringFilter<"AetherWorldInfos"> | string
    dateCreated?: StringFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableFilter<"AetherWorldInfos"> | string | null
    prompts?: XOR<AetherPromptsRelationFilter, AetherPromptsWhereInput>
  }, "id">

  export type AetherWorldInfosOrderByWithAggregationInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrderInput | SortOrder
    _count?: AetherWorldInfosCountOrderByAggregateInput
    _avg?: AetherWorldInfosAvgOrderByAggregateInput
    _max?: AetherWorldInfosMaxOrderByAggregateInput
    _min?: AetherWorldInfosMinOrderByAggregateInput
    _sum?: AetherWorldInfosSumOrderByAggregateInput
  }

  export type AetherWorldInfosScalarWhereWithAggregatesInput = {
    AND?: AetherWorldInfosScalarWhereWithAggregatesInput | AetherWorldInfosScalarWhereWithAggregatesInput[]
    OR?: AetherWorldInfosScalarWhereWithAggregatesInput[]
    NOT?: AetherWorldInfosScalarWhereWithAggregatesInput | AetherWorldInfosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AetherWorldInfos"> | number
    entry?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    keys?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    promptId?: IntWithAggregatesFilter<"AetherWorldInfos"> | number
    correlationId?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    dateCreated?: StringWithAggregatesFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableWithAggregatesFilter<"AetherWorldInfos"> | string | null
  }

  export type PromptsCreateInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    worldInfos?: WorldInfosCreateNestedManyWithoutPromptsInput
  }

  export type PromptsUncheckedCreateInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    worldInfos?: WorldInfosUncheckedCreateNestedManyWithoutPromptsInput
  }

  export type PromptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    worldInfos?: WorldInfosUpdateManyWithoutPromptsNestedInput
  }

  export type PromptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    worldInfos?: WorldInfosUncheckedUpdateManyWithoutPromptsNestedInput
  }

  export type PromptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosCreateInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    prompts: PromptsCreateNestedOneWithoutWorldInfosInput
  }

  export type WorldInfosUncheckedCreateInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    promptId: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type WorldInfosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    prompts?: PromptsUpdateOneRequiredWithoutWorldInfosNestedInput
  }

  export type WorldInfosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherPromptsCreateInput = {
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    worldInfos?: AetherWorldInfosCreateNestedManyWithoutPromptsInput
  }

  export type AetherPromptsUncheckedCreateInput = {
    id?: number
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    worldInfos?: AetherWorldInfosUncheckedCreateNestedManyWithoutPromptsInput
  }

  export type AetherPromptsUpdateInput = {
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    worldInfos?: AetherWorldInfosUpdateManyWithoutPromptsNestedInput
  }

  export type AetherPromptsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    worldInfos?: AetherWorldInfosUncheckedUpdateManyWithoutPromptsNestedInput
  }

  export type AetherPromptsUpdateManyMutationInput = {
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherPromptsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosCreateInput = {
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
    prompts: AetherPromptsCreateNestedOneWithoutWorldInfosInput
  }

  export type AetherWorldInfosUncheckedCreateInput = {
    id?: number
    entry: string
    keys: string
    promptId: number
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherWorldInfosUpdateInput = {
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
    prompts?: AetherPromptsUpdateOneRequiredWithoutWorldInfosNestedInput
  }

  export type AetherWorldInfosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUpdateManyMutationInput = {
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    promptId?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type WorldInfosListRelationFilter = {
    every?: WorldInfosWhereInput
    some?: WorldInfosWhereInput
    none?: WorldInfosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorldInfosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptsCountOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type PromptsAvgOrderByAggregateInput = {
    aetherId?: SortOrder
    nsfw?: SortOrder
  }

  export type PromptsMaxOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type PromptsMinOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type PromptsSumOrderByAggregateInput = {
    aetherId?: SortOrder
    nsfw?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type PromptsRelationFilter = {
    is?: PromptsWhereInput
    isNot?: PromptsWhereInput
  }

  export type WorldInfosCountOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type WorldInfosAvgOrderByAggregateInput = {
    aetherId?: SortOrder
  }

  export type WorldInfosMaxOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type WorldInfosMinOrderByAggregateInput = {
    id?: SortOrder
    aetherId?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type WorldInfosSumOrderByAggregateInput = {
    aetherId?: SortOrder
  }

  export type AetherWorldInfosListRelationFilter = {
    every?: AetherWorldInfosWhereInput
    some?: AetherWorldInfosWhereInput
    none?: AetherWorldInfosWhereInput
  }

  export type AetherWorldInfosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AetherPromptsCountOrderByAggregateInput = {
    id?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherPromptsAvgOrderByAggregateInput = {
    id?: SortOrder
    nsfw?: SortOrder
  }

  export type AetherPromptsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherPromptsMinOrderByAggregateInput = {
    id?: SortOrder
    authorsNote?: SortOrder
    description?: SortOrder
    memory?: SortOrder
    nsfw?: SortOrder
    parentId?: SortOrder
    promptContent?: SortOrder
    publishDate?: SortOrder
    quests?: SortOrder
    tags?: SortOrder
    title?: SortOrder
    scriptZip?: SortOrder
    novelAiScenario?: SortOrder
    holoAiScenario?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherPromptsSumOrderByAggregateInput = {
    id?: SortOrder
    nsfw?: SortOrder
  }

  export type AetherPromptsRelationFilter = {
    is?: AetherPromptsWhereInput
    isNot?: AetherPromptsWhereInput
  }

  export type AetherWorldInfosCountOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherWorldInfosAvgOrderByAggregateInput = {
    id?: SortOrder
    promptId?: SortOrder
  }

  export type AetherWorldInfosMaxOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherWorldInfosMinOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    keys?: SortOrder
    promptId?: SortOrder
    correlationId?: SortOrder
    dateCreated?: SortOrder
    dateEdited?: SortOrder
  }

  export type AetherWorldInfosSumOrderByAggregateInput = {
    id?: SortOrder
    promptId?: SortOrder
  }

  export type WorldInfosCreateNestedManyWithoutPromptsInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
  }

  export type WorldInfosUncheckedCreateNestedManyWithoutPromptsInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type WorldInfosUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: WorldInfosUpsertWithWhereUniqueWithoutPromptsInput | WorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    disconnect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    delete?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    update?: WorldInfosUpdateWithWhereUniqueWithoutPromptsInput | WorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: WorldInfosUpdateManyWithWhereWithoutPromptsInput | WorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
  }

  export type WorldInfosUncheckedUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput> | WorldInfosCreateWithoutPromptsInput[] | WorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: WorldInfosCreateOrConnectWithoutPromptsInput | WorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: WorldInfosUpsertWithWhereUniqueWithoutPromptsInput | WorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    disconnect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    delete?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    connect?: WorldInfosWhereUniqueInput | WorldInfosWhereUniqueInput[]
    update?: WorldInfosUpdateWithWhereUniqueWithoutPromptsInput | WorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: WorldInfosUpdateManyWithWhereWithoutPromptsInput | WorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
  }

  export type PromptsCreateNestedOneWithoutWorldInfosInput = {
    create?: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: PromptsCreateOrConnectWithoutWorldInfosInput
    connect?: PromptsWhereUniqueInput
  }

  export type PromptsUpdateOneRequiredWithoutWorldInfosNestedInput = {
    create?: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: PromptsCreateOrConnectWithoutWorldInfosInput
    upsert?: PromptsUpsertWithoutWorldInfosInput
    connect?: PromptsWhereUniqueInput
    update?: XOR<XOR<PromptsUpdateToOneWithWhereWithoutWorldInfosInput, PromptsUpdateWithoutWorldInfosInput>, PromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type AetherWorldInfosCreateNestedManyWithoutPromptsInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
  }

  export type AetherWorldInfosUncheckedCreateNestedManyWithoutPromptsInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
  }

  export type AetherWorldInfosUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    disconnect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    delete?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    update?: AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput | AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
  }

  export type AetherWorldInfosUncheckedUpdateManyWithoutPromptsNestedInput = {
    create?: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput> | AetherWorldInfosCreateWithoutPromptsInput[] | AetherWorldInfosUncheckedCreateWithoutPromptsInput[]
    connectOrCreate?: AetherWorldInfosCreateOrConnectWithoutPromptsInput | AetherWorldInfosCreateOrConnectWithoutPromptsInput[]
    upsert?: AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput[]
    set?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    disconnect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    delete?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    connect?: AetherWorldInfosWhereUniqueInput | AetherWorldInfosWhereUniqueInput[]
    update?: AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput | AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput[]
    updateMany?: AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput | AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput[]
    deleteMany?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
  }

  export type AetherPromptsCreateNestedOneWithoutWorldInfosInput = {
    create?: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: AetherPromptsCreateOrConnectWithoutWorldInfosInput
    connect?: AetherPromptsWhereUniqueInput
  }

  export type AetherPromptsUpdateOneRequiredWithoutWorldInfosNestedInput = {
    create?: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
    connectOrCreate?: AetherPromptsCreateOrConnectWithoutWorldInfosInput
    upsert?: AetherPromptsUpsertWithoutWorldInfosInput
    connect?: AetherPromptsWhereUniqueInput
    update?: XOR<XOR<AetherPromptsUpdateToOneWithWhereWithoutWorldInfosInput, AetherPromptsUpdateWithoutWorldInfosInput>, AetherPromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type WorldInfosCreateWithoutPromptsInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type WorldInfosUncheckedCreateWithoutPromptsInput = {
    id?: string
    aetherId?: number | null
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type WorldInfosCreateOrConnectWithoutPromptsInput = {
    where: WorldInfosWhereUniqueInput
    create: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type WorldInfosUpsertWithWhereUniqueWithoutPromptsInput = {
    where: WorldInfosWhereUniqueInput
    update: XOR<WorldInfosUpdateWithoutPromptsInput, WorldInfosUncheckedUpdateWithoutPromptsInput>
    create: XOR<WorldInfosCreateWithoutPromptsInput, WorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type WorldInfosUpdateWithWhereUniqueWithoutPromptsInput = {
    where: WorldInfosWhereUniqueInput
    data: XOR<WorldInfosUpdateWithoutPromptsInput, WorldInfosUncheckedUpdateWithoutPromptsInput>
  }

  export type WorldInfosUpdateManyWithWhereWithoutPromptsInput = {
    where: WorldInfosScalarWhereInput
    data: XOR<WorldInfosUpdateManyMutationInput, WorldInfosUncheckedUpdateManyWithoutPromptsInput>
  }

  export type WorldInfosScalarWhereInput = {
    AND?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
    OR?: WorldInfosScalarWhereInput[]
    NOT?: WorldInfosScalarWhereInput | WorldInfosScalarWhereInput[]
    id?: StringFilter<"WorldInfos"> | string
    aetherId?: IntNullableFilter<"WorldInfos"> | number | null
    entry?: StringFilter<"WorldInfos"> | string
    keys?: StringFilter<"WorldInfos"> | string
    promptId?: StringFilter<"WorldInfos"> | string
    correlationId?: StringFilter<"WorldInfos"> | string
    dateCreated?: StringFilter<"WorldInfos"> | string
    dateEdited?: StringNullableFilter<"WorldInfos"> | string | null
  }

  export type PromptsCreateWithoutWorldInfosInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type PromptsUncheckedCreateWithoutWorldInfosInput = {
    id?: string
    aetherId?: number | null
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type PromptsCreateOrConnectWithoutWorldInfosInput = {
    where: PromptsWhereUniqueInput
    create: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
  }

  export type PromptsUpsertWithoutWorldInfosInput = {
    update: XOR<PromptsUpdateWithoutWorldInfosInput, PromptsUncheckedUpdateWithoutWorldInfosInput>
    create: XOR<PromptsCreateWithoutWorldInfosInput, PromptsUncheckedCreateWithoutWorldInfosInput>
    where?: PromptsWhereInput
  }

  export type PromptsUpdateToOneWithWhereWithoutWorldInfosInput = {
    where?: PromptsWhereInput
    data: XOR<PromptsUpdateWithoutWorldInfosInput, PromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type PromptsUpdateWithoutWorldInfosInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptsUncheckedUpdateWithoutWorldInfosInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosCreateWithoutPromptsInput = {
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherWorldInfosUncheckedCreateWithoutPromptsInput = {
    id?: number
    entry: string
    keys: string
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherWorldInfosCreateOrConnectWithoutPromptsInput = {
    where: AetherWorldInfosWhereUniqueInput
    create: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type AetherWorldInfosUpsertWithWhereUniqueWithoutPromptsInput = {
    where: AetherWorldInfosWhereUniqueInput
    update: XOR<AetherWorldInfosUpdateWithoutPromptsInput, AetherWorldInfosUncheckedUpdateWithoutPromptsInput>
    create: XOR<AetherWorldInfosCreateWithoutPromptsInput, AetherWorldInfosUncheckedCreateWithoutPromptsInput>
  }

  export type AetherWorldInfosUpdateWithWhereUniqueWithoutPromptsInput = {
    where: AetherWorldInfosWhereUniqueInput
    data: XOR<AetherWorldInfosUpdateWithoutPromptsInput, AetherWorldInfosUncheckedUpdateWithoutPromptsInput>
  }

  export type AetherWorldInfosUpdateManyWithWhereWithoutPromptsInput = {
    where: AetherWorldInfosScalarWhereInput
    data: XOR<AetherWorldInfosUpdateManyMutationInput, AetherWorldInfosUncheckedUpdateManyWithoutPromptsInput>
  }

  export type AetherWorldInfosScalarWhereInput = {
    AND?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
    OR?: AetherWorldInfosScalarWhereInput[]
    NOT?: AetherWorldInfosScalarWhereInput | AetherWorldInfosScalarWhereInput[]
    id?: IntFilter<"AetherWorldInfos"> | number
    entry?: StringFilter<"AetherWorldInfos"> | string
    keys?: StringFilter<"AetherWorldInfos"> | string
    promptId?: IntFilter<"AetherWorldInfos"> | number
    correlationId?: StringFilter<"AetherWorldInfos"> | string
    dateCreated?: StringFilter<"AetherWorldInfos"> | string
    dateEdited?: StringNullableFilter<"AetherWorldInfos"> | string | null
  }

  export type AetherPromptsCreateWithoutWorldInfosInput = {
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherPromptsUncheckedCreateWithoutWorldInfosInput = {
    id?: number
    authorsNote?: string | null
    description?: string | null
    memory?: string | null
    nsfw: number
    parentId?: string | null
    promptContent: string
    publishDate?: string | null
    quests?: string | null
    tags: string
    title: string
    scriptZip?: Buffer | null
    novelAiScenario?: string | null
    holoAiScenario?: string | null
    correlationId: string
    dateCreated: string
    dateEdited?: string | null
  }

  export type AetherPromptsCreateOrConnectWithoutWorldInfosInput = {
    where: AetherPromptsWhereUniqueInput
    create: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
  }

  export type AetherPromptsUpsertWithoutWorldInfosInput = {
    update: XOR<AetherPromptsUpdateWithoutWorldInfosInput, AetherPromptsUncheckedUpdateWithoutWorldInfosInput>
    create: XOR<AetherPromptsCreateWithoutWorldInfosInput, AetherPromptsUncheckedCreateWithoutWorldInfosInput>
    where?: AetherPromptsWhereInput
  }

  export type AetherPromptsUpdateToOneWithWhereWithoutWorldInfosInput = {
    where?: AetherPromptsWhereInput
    data: XOR<AetherPromptsUpdateWithoutWorldInfosInput, AetherPromptsUncheckedUpdateWithoutWorldInfosInput>
  }

  export type AetherPromptsUpdateWithoutWorldInfosInput = {
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherPromptsUncheckedUpdateWithoutWorldInfosInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorsNote?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    nsfw?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    promptContent?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableStringFieldUpdateOperationsInput | string | null
    quests?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    scriptZip?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    novelAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    holoAiScenario?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldInfosUncheckedUpdateManyWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    aetherId?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUpdateWithoutPromptsInput = {
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUncheckedUpdateWithoutPromptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AetherWorldInfosUncheckedUpdateManyWithoutPromptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    correlationId?: StringFieldUpdateOperationsInput | string
    dateCreated?: StringFieldUpdateOperationsInput | string
    dateEdited?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PromptsCountOutputTypeDefaultArgs instead
     */
    export type PromptsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AetherPromptsCountOutputTypeDefaultArgs instead
     */
    export type AetherPromptsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AetherPromptsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptsDefaultArgs instead
     */
    export type PromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldInfosDefaultArgs instead
     */
    export type WorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldInfosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AetherPromptsDefaultArgs instead
     */
    export type AetherPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AetherPromptsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AetherWorldInfosDefaultArgs instead
     */
    export type AetherWorldInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AetherWorldInfosDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}