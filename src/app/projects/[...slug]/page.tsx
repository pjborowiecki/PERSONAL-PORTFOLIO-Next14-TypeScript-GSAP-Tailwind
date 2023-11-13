import Balancer from "react-wrap-balancer"

interface ProjectPageProps {
  params: {
    slug: string[]
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <section className="w-full py-16 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
          {params.slug}
        </h1>
        <p className="text-center text-xl">
          <Balancer>
            This page is currently under construction. <br /> Please check back
            soon
          </Balancer>
        </p>
      </div>
    </section>
  )
}
