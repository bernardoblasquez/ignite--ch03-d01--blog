import { GetStaticProps } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
   uid?: string;
   first_publication_date: string | null;
   data: {
      title: string;
      subtitle: string;
      author: string;
   };
}

interface PostPagination {
   next_page: string;
   results: Post[];
}

interface HomeProps {
   postsPagination: PostPagination;
}

export default function Home() {
   return (
      <>
         <Head>
            <title>Space Traveling</title>
         </Head>
         <header className={styles.headerContainer}>
            <Image
               src="/images/logo.svg"
               alt="Blog Space Traveling"
               width={239}
               height={26}
               priority
            />
         </header>
         <main className={styles.container}>
            <article className={styles.post}>
               <h2>Como Utilizar Hooks</h2>
               <p>Pensando em sincronização em vez de ciclos de vida</p>
               <div className={styles.details}>
                  <div className={styles.dataAuthor}>
                     <img
                        src="/images/icon-calendar.svg"
                        alt="icone calendário"
                     />
                     <span>15 Mar 2021</span>
                  </div>
                  <div className={styles.dataAuthor}>
                     <img src="/images/icon-user.svg" alt="icone usuário" />
                     <span className={styles.dataAuthor}>Joseph Oliveira</span>
                  </div>
               </div>
            </article>
            <article className={styles.post}>
               <h2>Criando um app CRA do zero</h2>
               <p>
                  Tudo sobre como criar a sua primeira aplicação utilizando
                  Create React App
               </p>
               <div className={styles.details}>
                  <div className={styles.dataAuthor}>
                     <img
                        src="/images/icon-calendar.svg"
                        alt="icone calendário"
                     />
                     <span className={styles.dataAuthor}>19 Abr 2021</span>
                  </div>
                  <div className={styles.dataAuthor}>
                     <img src="/images/icon-user.svg" alt="icone usuário" />
                     <span className={styles.dataAuthor}>Danilo Vieira</span>
                  </div>
               </div>
            </article>
         </main>
      </>
   );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
