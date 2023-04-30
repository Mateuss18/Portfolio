interface experienceCardProps {
  title: string;
  time: string;
  company: string;
  description: string;
}

function ExperienceCard(props: experienceCardProps) {
  const { title, time, company, description } = props;

  return (
    <div className="card">
      <div className="head">
        <h3 className="card-title">{title}</h3>
        <span className="card-time">
          {time}
        </span>
      </div>
      <div className="info">
        <div className="company">{company}</div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard