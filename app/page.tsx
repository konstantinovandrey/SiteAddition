// export default function Home() {
//     return (
//       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         Hello World!
//         </main>
//       </div>
//     );
//   }

// ...
import { useTina } from 'tinacms/dist/react';

export default function Home(props) {
  // Pass our data through the "useTina" hook to make it editable
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  // Note how our page title uses "data", and not the original "props.data".
  // This ensures that the content will be updated in edit-mode as the user types
  return <h1>{data.page.title}</h1>;
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.page({ relativePath: 'home.mdx' });

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  };
};