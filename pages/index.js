import Head from 'next/head';
import Image from 'next/image';
import Page from '../components/Layout/Page';
import Blog from '../components/UI/Blog';
import Contact from '../components/UI/Contact';
import Navigation from '../components/UI/Navigation';
import Portfolio from '../components/UI/Portfolio';
import RevealGallery from '../components/UI/RevealGallery';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Page>
      <RevealGallery />
      <Portfolio />
      <Blog />
    </Page>
  );
}
