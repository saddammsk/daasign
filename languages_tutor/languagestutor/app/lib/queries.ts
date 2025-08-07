
export const allCoursesQuery = `
*[_type == "course" ]{
_id,
title,
featured,
topCourse,
description,
mainImage,
createdAt,
publishedAt,
purchasedCount,
review,
level,
  price,
languages,
duration,
"slug": slug.current,
courseCategory[]->{
  _id,
  title,
  "slug": slug.current
},
 curriculum[]{
      title,
      description,
      previewlink,
      lectures[]{
        title,
        videoUrl,
        previewUrl,
        duration
      }
      },
reviews[]->{
  user,
  rating,
  comment
}
}
`

export const getSingleCourseQuery = (slug: string) => ({
  query: `
    *[_type == "course" && slug.current == $slug][0]{
      _id,
      title,
      featured,
      description,
      body,
      mainImage,
      createdAt,
      publishedAt,
      certificate,
      purchasedCount,
      review,
      level,
      price,
      languages,
      duration,
      WhatYouLearn,
      "slug": slug.current,
      courseCategory[]->{
        _id,
        title,
        "slug": slug.current
      },
      instructor->{
        _id,
        name,
        "slug": slug.current,
        position,
        image,
        twitter,
        facebook,
        instagram,
        youtube,
        linkedIn,
        dribbble,
        bio
      },
      testimonialsReviews[]{
        quality,
        supportive,
        following,
        instructor,
        newKnowledge,
        recommendCourse
      },
      video {
        url,
        poster {
          alt,
          "image": asset->url
        }
      },
      curriculum[]{
        title,
        description,
        previewlink,
        lectures[]{
          title,
          videoUrl,
          previewUrl,
          duration
        }
      },
      packages[]{
        name,
        description,
        price,
        inclusion,
        access
      },
      userReviews[]->{
        user,
        "slug": slug.current,
        userAvatar,
        userCourse,
        location,
        rating,
        comment
      }
    }
  `,
  params: { slug }
});


export const getCourseReviewsQuery = (slug: string, page: number = 1, pageSize: number = 3) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    query: `
      *[_type == "course" && slug.current == $slug][0]{
        "reviews": userReviews[$start...$end]->{
          user,
          "slug": slug.current,
          userAvatar,
          userCourse,
          location,
          rating,
          comment
        },
        "totalReviews": count(userReviews)
      }
    `,
    params: { slug, start, end },
  };
};

export const featuredCoursesQuery = `
*[
_type == "course" &&
featured == true &&
topCourse == true

]{
_id,
title,
featured,
topCourse,
description,
mainImage,
createdAt,
publishedAt,
purchasedCount,
review,
level,
languages,
duration,
courseCategory[]->{
  _id,
  title,
  "slug": slug.current
},
"slug": slug.current,
curriculum,
reviews[]->{
  user,
  rating,
  comment
}
}
`;

export const languagesCoursesQuery = `
*[
_type == "course" &&
featured == true &&
defined(courseCategory[0])
]{
_id,
title,
featured,
description,
mainImage,
createdAt,
publishedAt,
purchasedCount,
review,
level,
languages,
duration,
courseCategory[]->{
  _id,
  title,
  "slug": slug.current
},
"slug": slug.current,
curriculum,
reviews[]->{
  user,
  rating,
  comment
}
}
`;

export const spotlightQuery = `
*[_type == "spotlight"]{
  _id,
  user,
  userCourse,
  userAvatar,
  location,
  poster,
  videoUrl,
}
`;


export const reviewsQuery = `
*[_type == "review"] | order(createdAt desc){
  _id,
  user,
  userCourse,
  userAvatar,
  location,
  rating,
  comment,
  createdAt,
  courseRefs[]->{
    _id,
    title,
    price,
    review,
    slug,
  }
}
`;


export const allBlogQuery = `
*[_type == "blog"] | order(publishedAt asc) {
  _id,
  title,
  featured,
  topBlog,
  description,
  mainImage,
  createdAt,
  publishedAt,
  duration,
  "slug": slug.current,
  blogCategory[]->{
    _id,
    title,
    "slug": slug.current
  },
  writer->{
    _id,
    name,
    "slug": slug.current,
    position,
    image,
    twitter,
    facebook,
    instagram,
    youtube,
    linkedIn,
    dribbble,
    bio,
  },
}
`

export const getSingleBlogQuery = (slug: string) => ({
  query: `
    *[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      featured,
      description,
      body,
      mainImage,
      createdAt,
      publishedAt,
      duration,
      writer->{ _id, name, "slug": slug.current, position, image, twitter, facebook, instagram, youtube, linkedIn, dribbble, bio },
      video { url, poster { alt, "image": asset->url } },
      blogCategory[]->{ _id, title, "slug": slug.current }
    }
  `,
  params: { slug },
});

