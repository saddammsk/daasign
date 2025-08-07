import { getSingleCourseQuery } from './queries';
import { sanityClient } from './sanity';

export async function getCourse(slug: string) {
  const { query, params } = getSingleCourseQuery(slug);
  const course = await sanityClient.fetch(query, params);
  return course;
}
