'use client';

import { useEffect, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { PrimaryLinkGradient } from './common/PrimaryLinkGradient';
import { CourseCard } from './CourseCard';
import { sanityClient } from "../lib/sanity";
import { featuredCoursesQuery, languagesCoursesQuery } from "../lib/queries";
import { urlFor } from '../lib/sanityImage';
import { useTranslation } from 'react-i18next';
import Translate from './common/Translate';

const CoursesProductsSection = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [languagesCourses, setLanguagesCourses] = useState<any[]>([]);
  const { i18n, t } = useTranslation('common');

  const getTotalLectures = (curriculum: any[] = []): number => {
    return curriculum.reduce((total: number, module: any) => {
      return total + (module.lectures?.length || 0);
    }, 0);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await sanityClient.fetch(featuredCoursesQuery);
        const fetchedLanguagesCourses = await sanityClient.fetch(languagesCoursesQuery);
        
        setCourses(fetchedCourses);
        setLanguagesCourses(fetchedLanguagesCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } 
    };

    fetchCourses();
  }, []);



  return (
    <section className="lg:py-[100px] py-10">
      <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
        <div className="w-full">
          <TabGroup>
            <TabList className="inline-flex border p-1 border-neutral1 rounded-xl bg-neutral5">
              <Tab className="rounded-xl py-1.5 px-6 text-base font-medium text-gray5 focus:outline-none data-[selected]:text-black3 data-[selected]:shadow">
                <Translate tKey="courses-products-tab-courses" Tag="span" />
              </Tab>
              <Tab className="rounded-xl py-1.5 px-6 text-base font-medium text-gray5 focus:outline-none data-[selected]:text-black3 data-[selected]:shadow">
                <Translate tKey="courses-products-tab-languages" Tag="span" />
              </Tab>
            </TabList>
            <TabPanels className="mt-3">
              <TabPanel className="md:p-3">
                <div className="w-full">
                  <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between gap-6">
                    <div className="max-w-[600px]">
                      <h3 className="lg:text-5xl text-28 font-semibold mb-4 text-neutral2">
                        <Translate tKey="courses-products-heading" Tag="span" />
                      </h3>
                      <p className="md:text-lg text-base text-gray3">
                        <Translate tKey="courses-products-desc" Tag="span" />
                      </p>
                    </div>
                    <PrimaryLinkGradient href="/courses" className="text-base py-3">
                      {t('courses-products-link')}
                    </PrimaryLinkGradient>
                  </div>
                  <div className="w-full mt-8 overflow-auto">
                    <div className="w-full px-2 pt-2 pb-4 grid grid-cols-3 gap-4 min-w-[900px]">
                      {courses
                        .filter((course: any) => course.featured)
                        .slice(0, 3)
                        .map((course: any) => (
                          <CourseCard
                            key={course.title?.[i18n.language] || course.title?.en}
                            href={`/courses/${course.slug}`}
                            img={urlFor(course?.mainImage).width(400).url()}
                            title={course?.title}
                            users={course?.purchasedCount}
                            rating={course?.review}
                            level={course?.level}
                            description={course?.description}
                            lessons={getTotalLectures(course?.curriculum)}
                            duration={course?.duration}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="md:p-3">
                <div className="w-full">
                  <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between gap-6">
                    <div className="max-w-[600px]">
                      <h3 className="lg:text-5xl text-28 font-semibold mb-4 text-neutral2">
                        <Translate tKey="courses-products-heading" Tag="span" />
                      </h3>
                      <p className="md:text-lg text-base text-gray3">
                        <Translate tKey="courses-products-desc" Tag="span" />
                      </p>
                    </div>
                    <PrimaryLinkGradient href="/courses" className="text-base py-3">
                      {t('courses-products-link')}
                    </PrimaryLinkGradient>
                  </div>
                  <div className="w-full mt-8 overflow-auto">
                    <div className="w-full px-2 pt-2 pb-4 grid grid-cols-3 gap-4 min-w-[900px]">
                      {languagesCourses
                        .slice(0, 3)
                        .map((course: any) => (
                          <CourseCard
                            key={course.title?.[i18n.language] || course.title?.en}
                            href={`/courses/${course.slug}`}
                            img={urlFor(course?.mainImage).width(400).url()}
                            title={course?.title}
                            users={course?.purchasedCount}
                            rating={course?.review}
                            level={course?.level}
                            description={course?.description}
                            lessons={getTotalLectures(course?.curriculum)}
                            duration={course?.duration}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
};

export default CoursesProductsSection;
