import {ProjectCardListItem, ProjectCardImage, ProjectCardName} from './styled'

const ProjectCard = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <ProjectCardListItem>
      <ProjectCardImage src={imageUrl} alt={name} />
      <ProjectCardName>{name}</ProjectCardName>
    </ProjectCardListItem>
  )
}

export default ProjectCard
