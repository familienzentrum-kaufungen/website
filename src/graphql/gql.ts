/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n\t\tquery GetBoardMemberNames($filter: board_members_filter) {\n\t\t\tboard_members(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t": typeof types.GetBoardMemberNamesDocument,
    "\n\t\tquery GetAllBoardMembers($filter: board_members_filter) {\n\t\t\tboard_members(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t\tdescription\n\t\t\t\tpicture {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": typeof types.GetAllBoardMembersDocument,
    "\n\t\tquery GetCourses($filter: courses_filter) {\n\t\t\tcourses(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tweekday\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\tdescription\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t": typeof types.GetCoursesDocument,
    "\n\t\tquery GetCourse($filter: courses_filter) {\n\t\t\tcourses(filter: $filter, limit: 1) {\n\t\t\t\tid\n\t\t\t\tweekday\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\tdescription\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t": typeof types.GetCourseDocument,
    "\n\t\tquery GetCoursesOnDay($filter: courses_filter) {\n\t\t\tcourses(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t": typeof types.GetCoursesOnDayDocument,
    "\n\t\tquery ListDownloads($filter: downloads_filter) {\n\t\t\tdownloads(filter: $filter) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tfile {\n\t\t\t\t\tid\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": typeof types.ListDownloadsDocument,
    "\n\t\tquery GetNextUpcomingEvent($filter: events_filter) {\n\t\t\tevents(filter: $filter, limit: 1, sort: [\"start\"]) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t}\n\t\t}\n\t": typeof types.GetNextUpcomingEventDocument,
    "\n\t\tquery GetEventForIcal($eventId: ID!) {\n\t\t\tevents(filter: { id: { _eq: $eventId } }) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\tlocation\n\t\t\t}\n\t\t\tconfig {\n\t\t\t\tclub_name\n\t\t\t}\n\t\t}\n\t": typeof types.GetEventForIcalDocument,
    "\n\t\tquery GetGlobalConfig {\n\t\t\tconfig {\n\t\t\t\tid\n\t\t\t\tclub_name\n\t\t\t\taddress\n\t\t\t\tclub_email\n\t\t\t}\n\t\t}\n\t": typeof types.GetGlobalConfigDocument,
};
const documents: Documents = {
    "\n\t\tquery GetBoardMemberNames($filter: board_members_filter) {\n\t\t\tboard_members(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t": types.GetBoardMemberNamesDocument,
    "\n\t\tquery GetAllBoardMembers($filter: board_members_filter) {\n\t\t\tboard_members(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t\tdescription\n\t\t\t\tpicture {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.GetAllBoardMembersDocument,
    "\n\t\tquery GetCourses($filter: courses_filter) {\n\t\t\tcourses(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tweekday\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\tdescription\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t": types.GetCoursesDocument,
    "\n\t\tquery GetCourse($filter: courses_filter) {\n\t\t\tcourses(filter: $filter, limit: 1) {\n\t\t\t\tid\n\t\t\t\tweekday\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\tdescription\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t": types.GetCourseDocument,
    "\n\t\tquery GetCoursesOnDay($filter: courses_filter) {\n\t\t\tcourses(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t": types.GetCoursesOnDayDocument,
    "\n\t\tquery ListDownloads($filter: downloads_filter) {\n\t\t\tdownloads(filter: $filter) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tfile {\n\t\t\t\t\tid\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.ListDownloadsDocument,
    "\n\t\tquery GetNextUpcomingEvent($filter: events_filter) {\n\t\t\tevents(filter: $filter, limit: 1, sort: [\"start\"]) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t}\n\t\t}\n\t": types.GetNextUpcomingEventDocument,
    "\n\t\tquery GetEventForIcal($eventId: ID!) {\n\t\t\tevents(filter: { id: { _eq: $eventId } }) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\tlocation\n\t\t\t}\n\t\t\tconfig {\n\t\t\t\tclub_name\n\t\t\t}\n\t\t}\n\t": types.GetEventForIcalDocument,
    "\n\t\tquery GetGlobalConfig {\n\t\t\tconfig {\n\t\t\t\tid\n\t\t\t\tclub_name\n\t\t\t\taddress\n\t\t\t\tclub_email\n\t\t\t}\n\t\t}\n\t": types.GetGlobalConfigDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetBoardMemberNames($filter: board_members_filter) {\n\t\t\tboard_members(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetBoardMemberNamesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetAllBoardMembers($filter: board_members_filter) {\n\t\t\tboard_members(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\trole\n\t\t\t\tdescription\n\t\t\t\tpicture {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetAllBoardMembersDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetCourses($filter: courses_filter) {\n\t\t\tcourses(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tweekday\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\tdescription\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetCoursesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetCourse($filter: courses_filter) {\n\t\t\tcourses(filter: $filter, limit: 1) {\n\t\t\t\tid\n\t\t\t\tweekday\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\tdescription\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetCourseDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetCoursesOnDay($filter: courses_filter) {\n\t\t\tcourses(filter: $filter) {\n\t\t\t\tid\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\ttitle\n\t\t\t\tpaid\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetCoursesOnDayDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery ListDownloads($filter: downloads_filter) {\n\t\t\tdownloads(filter: $filter) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tfile {\n\t\t\t\t\tid\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').ListDownloadsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetNextUpcomingEvent($filter: events_filter) {\n\t\t\tevents(filter: $filter, limit: 1, sort: [\"start\"]) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetNextUpcomingEventDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetEventForIcal($eventId: ID!) {\n\t\t\tevents(filter: { id: { _eq: $eventId } }) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tstart\n\t\t\t\tend\n\t\t\t\tlocation\n\t\t\t}\n\t\t\tconfig {\n\t\t\t\tclub_name\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetEventForIcalDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery GetGlobalConfig {\n\t\t\tconfig {\n\t\t\t\tid\n\t\t\t\tclub_name\n\t\t\t\taddress\n\t\t\t\tclub_email\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').GetGlobalConfigDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
