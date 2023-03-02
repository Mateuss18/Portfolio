interface skillCardProps {
  name: string;
  image: string
}

function SkillCard(props: skillCardProps) {
  const {name, image} = props

  return (
    <div className='skill'>
      <h5 className="skill-name">{name}</h5>
      <div className="skill-card">
        <img src={image} alt={`Icone do ${name}`} />
      </div>
    </div>
  )
}

export default SkillCard