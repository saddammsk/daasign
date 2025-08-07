import { getSingleBlogQuery } from './queries';
import { sanityClient } from './sanity';

export async function getBlogDetails(slug: string) {
  const { query, params } = getSingleBlogQuery(slug);
  const blog = await sanityClient.fetch(query, params);
  return blog;
}
