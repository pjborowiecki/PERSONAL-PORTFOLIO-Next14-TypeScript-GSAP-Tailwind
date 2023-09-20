interface ProjectPageProps {
  params: {
    slug: string[]
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <div>project page: {params.slug}</div>
}
