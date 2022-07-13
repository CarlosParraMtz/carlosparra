export default function SkillCard({file, titulo}) {
    return(
        <div className="skill-card" data-aos="zoom-out-down" data-aos-delay="200" >
            <img src={`/images/icons/${file}`} alt={titulo} />
            <h3>{titulo}</h3>
        </div>
    )
}