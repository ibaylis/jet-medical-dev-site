import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CatProject from '../../../src/components/projects/catProject';


const EventsCatPage = ({data, pageName}) => <CatProject data={data} pageName={pageName} />

export default EventsCatPage

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      }
    }
  });
  console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { allEvents } = await import('/data/data.json');
  const id = context?.params.cat;

  const data = allEvents.filter(ev => ev.city === id);
  console.log(data);

  return { props: {data, pageName: id} }
}