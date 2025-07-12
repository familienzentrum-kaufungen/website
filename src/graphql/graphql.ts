/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** BigInt value */
  GraphQLBigInt: { input: any; output: any; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  __typename?: 'Query';
  board_members: Array<Board_Members>;
  board_members_aggregated: Array<Board_Members_Aggregated>;
  board_members_by_id?: Maybe<Board_Members>;
  board_members_by_version?: Maybe<Version_Board_Members>;
  config?: Maybe<Config>;
  config_by_version?: Maybe<Version_Config>;
  courses: Array<Courses>;
  courses_aggregated: Array<Courses_Aggregated>;
  courses_by_id?: Maybe<Courses>;
  courses_by_version?: Maybe<Version_Courses>;
  downloads: Array<Downloads>;
  downloads_aggregated: Array<Downloads_Aggregated>;
  downloads_by_id?: Maybe<Downloads>;
  downloads_by_version?: Maybe<Version_Downloads>;
  events: Array<Events>;
  events_aggregated: Array<Events_Aggregated>;
  events_by_id?: Maybe<Events>;
  events_by_version?: Maybe<Version_Events>;
};


export type QueryBoard_MembersArgs = {
  filter?: InputMaybe<Board_Members_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBoard_Members_AggregatedArgs = {
  filter?: InputMaybe<Board_Members_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBoard_Members_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBoard_Members_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryConfigArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryConfig_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryCoursesArgs = {
  filter?: InputMaybe<Courses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourses_AggregatedArgs = {
  filter?: InputMaybe<Courses_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourses_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCourses_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDownloadsArgs = {
  filter?: InputMaybe<Downloads_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDownloads_AggregatedArgs = {
  filter?: InputMaybe<Downloads_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDownloads_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDownloads_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvents_AggregatedArgs = {
  filter?: InputMaybe<Events_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvents_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEvents_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  board_members_mutated?: Maybe<Board_Members_Mutated>;
  config_mutated?: Maybe<Config_Mutated>;
  courses_mutated?: Maybe<Courses_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  downloads_mutated?: Maybe<Downloads_Mutated>;
  events_mutated?: Maybe<Events_Mutated>;
};


export type SubscriptionBoard_Members_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionConfig_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCourses_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDownloads_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionEvents_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Board_Members = {
  __typename?: 'board_members';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** $t:official */
  official: Scalars['Boolean']['output'];
  picture?: Maybe<Directus_Files>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};


export type Board_MembersPictureArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Board_Members_Aggregated = {
  __typename?: 'board_members_aggregated';
  count?: Maybe<Board_Members_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Board_Members_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Board_Members_Aggregated_Count = {
  __typename?: 'board_members_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  /** $t:official */
  official?: Maybe<Scalars['Int']['output']>;
  /** $t:picture */
  picture?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type Board_Members_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Board_Members_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Board_Members_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  official?: InputMaybe<Boolean_Filter_Operators>;
  picture?: InputMaybe<Directus_Files_Filter>;
  role?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
};

export type Board_Members_Mutated = {
  __typename?: 'board_members_mutated';
  data?: Maybe<Board_Members>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Config = {
  __typename?: 'config';
  address?: Maybe<Scalars['String']['output']>;
  club_email?: Maybe<Scalars['String']['output']>;
  club_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Config_Mutated = {
  __typename?: 'config_mutated';
  data?: Maybe<Config>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Courses = {
  __typename?: 'courses';
  description?: Maybe<Scalars['String']['output']>;
  end: Scalars['Date']['output'];
  end_func?: Maybe<Time_Functions>;
  id: Scalars['ID']['output'];
  paid?: Maybe<Scalars['Boolean']['output']>;
  start: Scalars['Date']['output'];
  start_func?: Maybe<Time_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  weekday?: Maybe<Scalars['String']['output']>;
};

export type Courses_Aggregated = {
  __typename?: 'courses_aggregated';
  count?: Maybe<Courses_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Courses_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Courses_Aggregated_Count = {
  __typename?: 'courses_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  paid?: Maybe<Scalars['Int']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
};

export type Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Courses_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  end?: InputMaybe<Date_Filter_Operators>;
  end_func?: InputMaybe<Time_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  paid?: InputMaybe<Boolean_Filter_Operators>;
  start?: InputMaybe<Date_Filter_Operators>;
  start_func?: InputMaybe<Time_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  weekday?: InputMaybe<String_Filter_Operators>;
};

export type Courses_Mutated = {
  __typename?: 'courses_mutated';
  data?: Maybe<Courses>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']['output']>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<Count_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['String']['output']>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Downloads = {
  __typename?: 'downloads';
  file?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type DownloadsFileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Downloads_Aggregated = {
  __typename?: 'downloads_aggregated';
  count?: Maybe<Downloads_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Downloads_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Downloads_Aggregated_Count = {
  __typename?: 'downloads_aggregated_count';
  file?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Downloads_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Downloads_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Downloads_Filter>>>;
  file?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Downloads_Mutated = {
  __typename?: 'downloads_mutated';
  data?: Maybe<Downloads>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Events = {
  __typename?: 'events';
  description?: Maybe<Scalars['String']['output']>;
  end: Scalars['Date']['output'];
  end_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  start: Scalars['Date']['output'];
  start_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Events_Aggregated = {
  __typename?: 'events_aggregated';
  count?: Maybe<Events_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Events_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Events_Aggregated_Count = {
  __typename?: 'events_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['Int']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Events_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  end?: InputMaybe<Date_Filter_Operators>;
  end_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  start?: InputMaybe<Date_Filter_Operators>;
  start_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Events_Mutated = {
  __typename?: 'events_mutated';
  data?: Maybe<Events>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Id_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['ID']['input']>;
  _eq?: InputMaybe<Scalars['ID']['input']>;
  _icontains?: InputMaybe<Scalars['ID']['input']>;
  _iends_with?: InputMaybe<Scalars['ID']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']['input']>;
  _ncontains?: InputMaybe<Scalars['ID']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['ID']['input']>;
  _neq?: InputMaybe<Scalars['ID']['input']>;
  _niends_with?: InputMaybe<Scalars['ID']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['ID']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Time_Function_Filter_Operators = {
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
};

export type Time_Functions = {
  __typename?: 'time_functions';
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
};

export type Version_Board_Members = {
  __typename?: 'version_board_members';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** $t:official */
  official: Scalars['Boolean']['output'];
  picture?: Maybe<Scalars['JSON']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Version_Config = {
  __typename?: 'version_config';
  address?: Maybe<Scalars['String']['output']>;
  club_email?: Maybe<Scalars['String']['output']>;
  club_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Version_Courses = {
  __typename?: 'version_courses';
  description?: Maybe<Scalars['String']['output']>;
  end: Scalars['Date']['output'];
  end_func?: Maybe<Time_Functions>;
  id: Scalars['ID']['output'];
  paid?: Maybe<Scalars['Boolean']['output']>;
  start: Scalars['Date']['output'];
  start_func?: Maybe<Time_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  weekday?: Maybe<Scalars['String']['output']>;
};

export type Version_Downloads = {
  __typename?: 'version_downloads';
  file?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Version_Events = {
  __typename?: 'version_events';
  description?: Maybe<Scalars['String']['output']>;
  end: Scalars['Date']['output'];
  end_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  start: Scalars['Date']['output'];
  start_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type GetBoardMemberNamesQueryVariables = Exact<{
  filter?: InputMaybe<Board_Members_Filter>;
}>;


export type GetBoardMemberNamesQuery = { __typename?: 'Query', board_members: Array<{ __typename?: 'board_members', id: string, name: string }> };

export type GetAllBoardMembersQueryVariables = Exact<{
  filter?: InputMaybe<Board_Members_Filter>;
}>;


export type GetAllBoardMembersQuery = { __typename?: 'Query', board_members: Array<{ __typename?: 'board_members', id: string, name: string, email?: string | null, role?: string | null, description?: string | null, picture?: { __typename?: 'directus_files', id: string } | null }> };

export type GetCoursesQueryVariables = Exact<{
  filter?: InputMaybe<Courses_Filter>;
}>;


export type GetCoursesQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'courses', id: string, weekday?: string | null, start: any, end: any, title: string, subtitle?: string | null, description?: string | null, paid?: boolean | null }> };

export type GetCourseQueryVariables = Exact<{
  filter?: InputMaybe<Courses_Filter>;
}>;


export type GetCourseQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'courses', id: string, weekday?: string | null, start: any, end: any, title: string, subtitle?: string | null, description?: string | null, paid?: boolean | null }> };

export type GetCoursesOnDayQueryVariables = Exact<{
  filter?: InputMaybe<Courses_Filter>;
}>;


export type GetCoursesOnDayQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'courses', id: string, start: any, end: any, title: string, paid?: boolean | null }> };

export type ListDownloadsQueryVariables = Exact<{
  filter?: InputMaybe<Downloads_Filter>;
}>;


export type ListDownloadsQuery = { __typename?: 'Query', downloads: Array<{ __typename?: 'downloads', id: string, title: string, file?: { __typename?: 'directus_files', id: string, type?: string | null } | null }> };

export type GetNextUpcomingEventQueryVariables = Exact<{
  filter?: InputMaybe<Events_Filter>;
}>;


export type GetNextUpcomingEventQuery = { __typename?: 'Query', events: Array<{ __typename?: 'events', id: string, title: string, description?: string | null, start: any, end: any }> };

export type GetEventForIcalQueryVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;


export type GetEventForIcalQuery = { __typename?: 'Query', events: Array<{ __typename?: 'events', id: string, title: string, start: any, end: any, location: string }>, config?: { __typename?: 'config', club_name?: string | null } | null };

export type GetGlobalConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalConfigQuery = { __typename?: 'Query', config?: { __typename?: 'config', id: string, club_name?: string | null, address?: string | null, club_email?: string | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetBoardMemberNamesDocument = new TypedDocumentString(`
    query GetBoardMemberNames($filter: board_members_filter) {
  board_members(filter: $filter) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<GetBoardMemberNamesQuery, GetBoardMemberNamesQueryVariables>;
export const GetAllBoardMembersDocument = new TypedDocumentString(`
    query GetAllBoardMembers($filter: board_members_filter) {
  board_members(filter: $filter) {
    id
    name
    email
    role
    description
    picture {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<GetAllBoardMembersQuery, GetAllBoardMembersQueryVariables>;
export const GetCoursesDocument = new TypedDocumentString(`
    query GetCourses($filter: courses_filter) {
  courses(filter: $filter) {
    id
    weekday
    start
    end
    title
    subtitle
    description
    paid
  }
}
    `) as unknown as TypedDocumentString<GetCoursesQuery, GetCoursesQueryVariables>;
export const GetCourseDocument = new TypedDocumentString(`
    query GetCourse($filter: courses_filter) {
  courses(filter: $filter, limit: 1) {
    id
    weekday
    start
    end
    title
    subtitle
    description
    paid
  }
}
    `) as unknown as TypedDocumentString<GetCourseQuery, GetCourseQueryVariables>;
export const GetCoursesOnDayDocument = new TypedDocumentString(`
    query GetCoursesOnDay($filter: courses_filter) {
  courses(filter: $filter) {
    id
    start
    end
    title
    paid
  }
}
    `) as unknown as TypedDocumentString<GetCoursesOnDayQuery, GetCoursesOnDayQueryVariables>;
export const ListDownloadsDocument = new TypedDocumentString(`
    query ListDownloads($filter: downloads_filter) {
  downloads(filter: $filter) {
    id
    title
    file {
      id
      type
    }
  }
}
    `) as unknown as TypedDocumentString<ListDownloadsQuery, ListDownloadsQueryVariables>;
export const GetNextUpcomingEventDocument = new TypedDocumentString(`
    query GetNextUpcomingEvent($filter: events_filter) {
  events(filter: $filter, limit: 1, sort: ["start"]) {
    id
    title
    description
    start
    end
  }
}
    `) as unknown as TypedDocumentString<GetNextUpcomingEventQuery, GetNextUpcomingEventQueryVariables>;
export const GetEventForIcalDocument = new TypedDocumentString(`
    query GetEventForIcal($eventId: ID!) {
  events(filter: {id: {_eq: $eventId}}) {
    id
    title
    start
    end
    location
  }
  config {
    club_name
  }
}
    `) as unknown as TypedDocumentString<GetEventForIcalQuery, GetEventForIcalQueryVariables>;
export const GetGlobalConfigDocument = new TypedDocumentString(`
    query GetGlobalConfig {
  config {
    id
    club_name
    address
    club_email
  }
}
    `) as unknown as TypedDocumentString<GetGlobalConfigQuery, GetGlobalConfigQueryVariables>;