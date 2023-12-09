import Image from 'next/image'
import Link from 'next/link'
import  Button from '@/app/(components)/button/Button'
import Card from './(components)/card/Card'


export default function Home() {
  return (
    <main className="px-16 mx-auto">
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Welcome to the Programing world;
        <span className=' whitespaces-nowrap'>
        I'm <span className='font-bold'> Faizi </span>
        and this is a blog site for assignement.
        </span>
      </p>
      
      <main className="px-6 mx-auto">
 {/* Add other content like headers, paragraphs, etc. */}

 <h2 className="text-4xl font-bold text-white grid place-content-left mb-4 md-2:mb-0"> Blogs </h2>

 <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div className="border-2 border-gray-200 rounded-md p-4 dark:border-gray-500">
      <h3 className="text-xl font-semibold mb-2 dark:text-white">
        How to learn Typescript in 2023?
      </h3>
      <p className="text-gray-500 mb-2 md:mb-4 dark:text-gray-400">
      TypeScript has become the most popular way to write JavaScript. These days, if you want to get a job writing JavaScript, you'll need to know TypeScript.
But TypeScript is big. It's easy to end up in tutorial hell.
This step-by-step guide will help. I've built a set of dozens of questions that are designed to focus your learning on the most important parts of TypeScript.
With each question, I've provided a short explanation and a link to further resources.
By the end, you'll have learned enough TypeScript to feel productive, and get paid.
      </p>
      {/* <Link href="/blog/1">
        <a className="text-white bg-blue-600 px-4 py-2 rounded-md">
          Read More
        </a>
      </Link> */}
    </div>

    {/* Add more blog post cards here */}
    <div className="border-2 border-gray-200 rounded-md p- dark:border-gray-50
    0">
      <h3 className="text-xl font-semibold mb-2 dark:text-white">
        What are React hooks?
      </h3>
      <p className="text-gray-500 mb-2 md:mb-4 dark:text-gray-400">
        React Hooks are functions that let you use state and other React features without writing a class. They’re primarily used for functional components but can
        React Hooks are functions that let you “hook into” React state and lifecycle features from functional components. They’re not just synt
        Hooks allow us to reuse stateful logic across different components. They’re not just about reusing state — they’re about sharing it
        React Hooks is an addition to React that allows us to use state and other features without writing classes.
      </p>
      {/* <Button/> */}
      {/* {/* <Link href="/blog/1"></Link> */}
    </div>
    
 </div>
</main>
<Card courseTitle="Web and Mobile" tag="A.I" descripation="I'm Faizi and i'm learning web and mobile development from Sir Naveed Sarwar"/>
<Button title = "Apply" />
<Card courseTitle="Blockchain Development" tag="Blockchain" descripation="Learning Blockchaning with Naveed sarwar" />
<Button title = "Read More" />

    </main>
  )
}
