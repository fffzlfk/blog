import { HOME_NAME, SLOGAN } from "../lib/constant";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-left md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-gray-900 dark:text-white text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {HOME_NAME}
      </h1>
      <h4 className="text-gray-600 dark:text-gray-300 text-3xl md:text-left text-lg mt-5 md:pl-8">
        {SLOGAN}
      </h4>
    </section>
  )
}
