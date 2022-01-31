import React from "react";
import Github from "../assets/githubw.svg"
import Linkedlin from "../assets/linkedin.svg"
import Gmail from "../assets/gmail.svg"
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-20 py-10 md:flex-row flex-col items-center mt-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white">
            Gilberto Medeiros
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
            Fullstack Developer
          </h2>
          <p className="mb-8 leading-relaxed">
            Estudante de programação, esforçado, curioso e
            apaixonado pela área de tecnologia. Gosto de desafios
            me adapto facilmente as mudanças tendo como
            objetivo crescer tanto pessoalmente quanto
            profissionalmente.
          </p>
          <div className="flex justify-center mt-5">
            <a href="https://github.com/gilbertomoj">
              <img alt="Github" src={Github} className="mr-5"></img>
            </a>
            <a href="https://www.linkedin.com/in/gilbertomoj/">
              <img alt="Linkedlin" src={Linkedlin} className="mr-5"></img>
            </a>
            <a href="mailto:gibamedeirosgc@gmail.com">
              <img alt="Gmail" src={Gmail}></img>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover rounded"
            alt="hero"
            src="https://i.pinimg.com/originals/e0/b2/fa/e0b2fa5e758d0ea0a8f748fa4f100edb.jpg"
            // https://avatars.githubusercontent.com/u/62359000?v=4
          />
        </div>
      </div>
    </section>
  );
}