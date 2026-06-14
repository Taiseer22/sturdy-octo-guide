import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import clsx from 'clsx';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <Head>
        <meta name="robots" content="noindex" />
        <title>Create React App is deprecated.</title>
        <meta
          name="description"
          content="Create React App is deprecated. Please see react.dev for modern options."
        />
        <meta property="og:title" content="Create React App is deprecated." />
        <meta
          property="og:description"
          content="Create React App is deprecated. Please see react.dev for modern options."
        />
      </Head>
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            alt="Logo"
            align="right"
            src="https://create-react-app.dev/img/logo.svg"
            width="20%"
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
