interface skillCardProps {
  name: string;
  image: string
}

function SkillCard(props: skillCardProps) {
  const {name, image} = props

  return (
    <div className='skill'>
      <p className="skill-name">{name}</p>
      <div className="skill-card">
        <img src={image} alt={`Icone do ${name}`} />
      </div>
    </div>
  )
}

export default SkillCard