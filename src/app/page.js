'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  Features,
  FeaturesV2,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { primaryColor } from '@/data';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  return (
    <main
      style={{
        backgroundColor: '#768FABFF',
      }}
    >
      {dataSite.iconImage && <Navbar />}
      <div className='relative'>
        {dataSite.image_hero && (
          <Hero
            variant='background-img'
            src={dataSite.image_hero}
            colorText='#FCFCFCFF'
            title={dataSite.subtitle}
            description={dataSite.description}
            srcSecondary={dataSite.image_hero2}
            withSubView
            images={[dataSite.image_hero, dataSite.image_hero2]}
            styleTextSecondSection={{
              color: 'black',
            }}
            withShadowText
          />
        )}
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col' id='our-services'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Our Services
          </Typography.Title>
          <FeaturesV2
            gridColumns={2}
            variant='card'
            features={dataSite.services}
          />
        </div>
        <div style={{ zIndex: 2 }} className='flex flex-col px-48' id='know-us'>
          <Typography.Title
            level={3}
            className='font-medium mb-10 text-center text-white'
          >
            Know Us
          </Typography.Title>
          <Missions
            textColor='#fff'
            data={dataSite.info}
            gridColumns={1}
            variant='text'
          />
        </div>
        <div id='courses'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={false}
              title='All Courses'
              gridColumns={3}
              variant='grid'
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='1'
              carouselOptions={{
                arrowColor: 'black',
                fade: true,
                autoPlay: false,
                direction: 'horizontal',
              }}
              backgroundItemColor='#FBFBFB'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='card'
            variant='grid'
            backgroundColor='#84B8EFFF'
            references={dataSite.references}
            gridColumns={1}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
