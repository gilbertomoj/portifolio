import { degrees } from "../degree";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function Degree(){
    return(
        <section id="degree">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <BookOpenIcon className="w-10 inline-block mb-4 mt-3"/>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Formações
            </h1>
          </div>
          <div className="flex flex-wrap sm:w-3/6 sm:mx-auto">
            {degrees.map((degree) => (
              <div key={degree.title} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium text-white">
                    {degree.title}
                    <hr/>
                    {degree.subtitle}
                    <hr/>
                    {degree.data}
                  </span>
                    <p className="text-sm">
                        
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) 
}