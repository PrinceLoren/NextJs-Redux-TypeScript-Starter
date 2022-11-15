import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

interface IMeta {
  title: string;
  description: string;
  canonical?: string;
}

export const Meta = (props: IMeta) => (
    <>
        <Head>
            <meta charSet='UTF-8' key='charset' />
            <meta
                name='viewport'
                content='width=device-width,initial-scale=1'
                key='viewport'
            />
            {/* ICONS */}
            {/*<link*/}
            {/*  rel='apple-touch-icon'*/}
            {/*  href={`${router.basePath}/apple-touch-icon.png`}*/}
            {/*  key='apple'*/}
            {/*/>*/}
        </Head>
        <NextSeo
            title={props.title}
            description={props.description}
            canonical={props.canonical}
            openGraph={{
                title: props.title,
                description: props.description,
                url: props.canonical,
                locale: AppConfig.locale,
                site_name: AppConfig.site_name,
            }}
        />
    </>
)
