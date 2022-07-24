import styled from "styled-components";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const StyledLayout = styled.section`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledBack = styled.div`
    margin: 3rem 0 0;
`

const name = 'Ignas';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <StyledLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StyledHeader>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </StyledHeader>
      <main>{children}</main>
      {!home && (
        <StyledBack>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </StyledBack>
      )}
    </StyledLayout>
  );
}